package kleicreator.master;

import com.formdev.flatlaf.FlatDarkLaf;
import com.formdev.flatlaf.FlatLightLaf;
import kleicreator.sdk.ArgumentParser;
import kleicreator.sdk.config.Config;
import kleicreator.sdk.constants.Constants;
import kleicreator.export.Exporter;
import kleicreator.frames.CreateModDialog;
import kleicreator.frames.ProjectSelectDialog;
import kleicreator.frames.Startup;
import kleicreator.plugin.PluginHandler;
import kleicreator.sdk.gui.JHelper;
import kleicreator.sdk.logging.Logger;
import kleicreator.updater.Updater;
import kleicreator.modloader.Mod;
import kleicreator.modloader.ModLoader;
import org.apache.commons.lang3.exception.ExceptionUtils;
import kleicreator.savesystem.SaveObject;
import kleicreator.savesystem.SaveSystem;

import javax.swing.*;
import javax.swing.plaf.nimbus.NimbusLookAndFeel;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import static kleicreator.master.Master.GlobalTheme.*;

public class Master {
    public static ProjectSelectDialog projectSelectDialog;
    public static JFrame projectSelectFrame;
    public static JFrame startupForm;
    public static String version = "v0.0.8";
    public static int currentlySelectedRow = -1;
    public static boolean exit = false;

    public enum GlobalTheme {
        Light,
        Dark,
        Default
    }

    public static void Main(String[] args) {
        ArgumentParser.ParseArguments(args);
        Constants.CreateConstants();
        Logger.Start();
        Logger.Log("KleiCreator %s. Credits to DeepCore", version);
        Logger.Log("Started with args: " + String.join(" ", args));

        PluginHandler.LoadPlugins();
        Logger.Debug("Loaded plugins");
        PluginHandler.TriggerEvent("OnLoad");

        //Create working directories
        new File(Constants.FILE_LOCATION + "/").mkdir();
        new File(Constants.FILE_LOCATION + "/mods").mkdir();
        new File(Constants.FILE_LOCATION + "/kleicreator/speech").mkdir();
        new File(Constants.FILE_LOCATION + "/plugins").mkdir();
        new File(Constants.FILE_LOCATION + "/config").mkdir();
        Config.AssertDataset("kleicreator");
        Config.SaveData("kleicreator.theme", Light, false);
        Config.SaveData("kleicreator.asksaveonleave", true, false);

        try {
            Object o = Config.GetData("kleicreator.theme");
            if (Light.equals(o)) {
                UIManager.setLookAndFeel(new FlatLightLaf());
            } else if (Dark.equals(o)) {
                UIManager.setLookAndFeel(new FlatDarkLaf());
            } else if (Default.equals(o)) {
                UIManager.setLookAndFeel(new NimbusLookAndFeel());
            }

            Logger.Debug("Successfully changed look and feel.");
        } catch (UnsupportedLookAndFeelException e) {
            Logger.Error(ExceptionUtils.getStackTrace(e));
        }

        if(ArgumentParser.doubleArguments.containsKey("--project")){
            ModLoader.LoadMod(ArgumentParser.doubleArguments.get("--project"));
            if(ArgumentParser.singleArguments.contains("--export")){
                Exporter.Export();
            }
        }else{
            //Create loading form
            startupForm = new JFrame();
            startupForm.setContentPane(new Startup().getStartupPanel());
            startupForm.setUndecorated(true);
            startupForm.setType(Window.Type.UTILITY);
            startupForm.pack();
            startupForm.setLocationRelativeTo(null);
            startupForm.setVisible(true);

            Logger.Debug("Instantiating ProjectSelect and setting up frame...");
            projectSelectDialog = new ProjectSelectDialog();
            projectSelectFrame = new JFrame("Select Project");

            if(Config.GetData("kleicreator.theme") == GlobalTheme.Dark){
                projectSelectDialog.getConfigButton().setForeground(new Color(33, 33, 33));
            }

            ImageIcon img = new ImageIcon(ClassLoader.getSystemClassLoader().getResource("dstguimodcreatorlogo.png"));
            projectSelectFrame.setIconImage(img.getImage());
            projectSelectFrame.setContentPane(projectSelectDialog.getProjectSelectPanel());
            projectSelectFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

            DefaultTableModel model = new DefaultTableModel() {
                @Override
                public boolean isCellEditable(int row, int column) {
                    //all cells false
                    return false;
                }
            };
            projectSelectDialog.getProjectsListTable().setModel(model);
            model.addColumn("Project Name:");
            model.addColumn("Project Author:");
            model.addColumn("Project Path:");
            readMods();

            projectSelectDialog.getNewMod().addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    CreateNewMod();
                }
            });

            projectSelectDialog.getLoadMod().addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    LoadCurrentMod();
                }
            });

            projectSelectDialog.getProjectsListTable().addMouseListener(new java.awt.event.MouseAdapter() {
                @Override
                public void mouseClicked(java.awt.event.MouseEvent evt) {
                    int row = projectSelectDialog.getProjectsListTable().rowAtPoint(evt.getPoint());
                    if (row >= 0) {
                        currentlySelectedRow = row;
                    }
                }
            });

            projectSelectDialog.getConfigButton().addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    JFrame configDialogFrame = new JFrame();
                    configDialogFrame.setIconImage(img.getImage());
                    JPanel panel = new JPanel();
                    configDialogFrame.setContentPane(panel);

                    panel.setBorder(BorderFactory.createEmptyBorder(15, 15, 15, 15));

                    panel.add(JHelper.CreateTitleJLabel("KleiCreator"));

                    JComboBox theme = new JComboBox();
                    panel.add(theme);
                    for (GlobalTheme t : GlobalTheme.values()) {
                        theme.addItem(t.toString());
                    }
                    theme.setSelectedIndex(((GlobalTheme)Config.GetData("kleicreator.theme")).ordinal());

                    JCheckBox askSaveOnLeave = new JCheckBox("Ask Save On Leave");
                    panel.add(askSaveOnLeave);
                    askSaveOnLeave.setSelected((Boolean) Config.GetData("kleicreator.asksaveonleave"));

                    JButton saveButton = new JButton("Save and Restart");
                    saveButton.setAlignmentX(JButton.CENTER_ALIGNMENT);
                    saveButton.addActionListener(new ActionListener() {
                        @Override
                        public void actionPerformed(ActionEvent e) {
                            Config.SaveData("kleicreator.theme", GlobalTheme.valueOf(theme.getSelectedItem().toString()));
                            Config.SaveData("kleicreator.asksaveonleave",  askSaveOnLeave.isSelected());
                            PluginHandler.TriggerEvent("OnConfigSave", configDialogFrame);
                            Starter.startCounter++;
                            exit = true;
                            configDialogFrame.dispose();
                        }
                    });

                    PluginHandler.TriggerEvent("OnConfigSetup", configDialogFrame);

                    panel.add(saveButton);

                    panel.setLayout(new GridLayout(panel.getComponentCount(),1, 7, 7));

                    configDialogFrame.pack();

                    configDialogFrame.setLocationRelativeTo(null);
                    configDialogFrame.setVisible(true);
                }
            });

            Logger.Debug("Successfully setup project select.");

            Logger.Debug("Checking for update...");
            if (Updater.CheckForUpdate(version)) {
                Logger.Log("Found update.");
                Updater.GetLastestRelease(projectSelectFrame);
            }

            // This is here so we look important
            long time = Calendar.getInstance().getTime().getTime() - Logger.startTime.getTime();
            if(time < 2000){
                try {
                    Thread.sleep(2000-time);
                } catch (InterruptedException e) {

                }
            }

            PluginHandler.TriggerEvent("OnStartup");

            projectSelectFrame.pack();
            startupForm.setVisible(false);
            projectSelectFrame.setLocationRelativeTo(null);
            projectSelectFrame.setVisible(true);

        }


        while (!exit) {
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {

            }
        }
        exit = false;
        projectSelectFrame.dispose();
        Logger.Debug("Stopping...");
        return;
    }

    public static void CreateNewMod() {
        final JFrame newModConfigFrame = new JFrame("Create New Project");
        final CreateModDialog createModDialog = new CreateModDialog();
        newModConfigFrame.setContentPane(createModDialog.getNewModConfigPanel());
        newModConfigFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        ImageIcon img = new ImageIcon(ClassLoader.getSystemClassLoader().getResource("dstguimodcreatorlogo.png"));
        newModConfigFrame.setIconImage(img.getImage());

        createModDialog.getCreateMod().addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name = createModDialog.getModNameTextField().getText();
                String author = createModDialog.getModAuthorTextField().getText();
                projectSelectFrame.setVisible(false);
                newModConfigFrame.setVisible(false);
                Mod _temp = new Mod();
                Mod.modName = name;
                ModLoader.CreateMod(Constants.FILE_LOCATION + "/mods/" + Mod.escapedModName() + ".proj", author, name);
            }
        });

        createModDialog.getCancel().addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                newModConfigFrame.dispose();
            }
        });

        newModConfigFrame.pack();
        newModConfigFrame.setLocationRelativeTo(null);
        newModConfigFrame.setVisible(true);
    }

    public static void LoadCurrentMod() {
        startupForm.setVisible(true);
        if (currentlySelectedRow == -1) {
            JOptionPane.showMessageDialog(projectSelectFrame,
                    "No project is selected",
                    "Cannot Load Project",
                    JOptionPane.WARNING_MESSAGE);
        } else {
            projectSelectFrame.setVisible(false);
            ModLoader.LoadMod(Constants.FILE_LOCATION + "/mods/" + projectSelectDialog.getProjectsListTable().getModel().getValueAt(currentlySelectedRow, 2));
        }
        startupForm.setVisible(false);
    }

    public static void readMods() {
        try {
            DefaultTableModel model = (DefaultTableModel) projectSelectDialog.getProjectsListTable().getModel();
            String[] mods = getAllDirectories(Constants.FILE_LOCATION + "/mods/");
            for (int i = 0; i < mods.length; i++) {
                SaveObject saveObject = SaveSystem.TempLoad(Constants.FILE_LOCATION + "/mods/" + mods[i]);
                if(saveObject == null){
                    model.addRow(new Object[]{mods[i], "Modded - Cannot load", "Modded - Cannot load"});
                }else{
                    model.addRow(new Object[]{saveObject.modName, saveObject.modAuthor, mods[i]});
                }

            }
        } catch (Exception e) {
            Logger.Error(ExceptionUtils.getStackTrace(e));
        }
    }

    public static String[] getAllDirectories(String path) {
        File dir = new File(path);
        File[] files = dir.listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                return name.endsWith(".proj");
            }
        });
        List<String> _directories = new ArrayList<String>();

        for (int i = 0; i < files.length; i++) {
            _directories.add(files[i].getName());
        }

        return _directories.toArray(new String[0]);
    }

    public static void setUIFont(Font f) {
        java.util.Enumeration keys = UIManager.getDefaults().keys();
        while (keys.hasMoreElements()) {
            Object key = keys.nextElement();
            Object value = UIManager.get(key);
            if (value instanceof javax.swing.plaf.FontUIResource)
                UIManager.put(key, f);
        }
    }
}
