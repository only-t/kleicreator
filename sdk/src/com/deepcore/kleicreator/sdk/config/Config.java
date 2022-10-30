package com.deepcore.kleicreator.sdk.config;

import com.deepcore.kleicreator.config.GlobalConfig;
import com.deepcore.kleicreator.logging.Logger;

public class Config {
    public static void SaveValue(String name, Object value){
        com.deepcore.kleicreator.config.Config c = new com.deepcore.kleicreator.config.Config();
        Logger.Debug("Saving %s as %s", name, value.toString());
        c.Load();
        c.Save(name, value);
        c.Save();
    }

    public static Object LoadValue(String name){
        com.deepcore.kleicreator.config.Config c = new com.deepcore.kleicreator.config.Config();
        c.Load();
        return c.Load(name);
    }

    public static void AssertValue(String name, Object value){
        com.deepcore.kleicreator.config.Config c = new com.deepcore.kleicreator.config.Config();
        c.Load();
        Logger.Debug(GlobalConfig.values.toString());
        if(!GlobalConfig.values.containsKey(name)){
            c.Save(name, value);
        }
        c.Save();
    }
}
