package kleicreator.modloader;


import kleicreator.items.AllItems;
import kleicreator.sdk.item.Item;
import kleicreator.recipes.Recipe;

import java.util.ArrayList;
import java.util.List;

public class Mod {
    public enum Game {
        DontStarveTogether,
        DontStarve
    }
    public static String modName;
    public static String modAuthor;
    public static String modDescription;
    public static Version modVersion;
    public static class Version {
        public int major;
        public int minor;
        public int patch;

        @Override
        public String toString() {
            return String.format("%s.%s.%s", major, minor, patch);
        }

        public Version(){

        }

        public Version(int major, int minor, int patch) {
            this.major = major;
            this.minor = minor;
            this.patch = patch;
        }
    }
    public static int modIcon;
    public static Game game;
    public static String path;
    public static List<Item> items = new ArrayList<Item>();
    public static List<Recipe> recipes = new ArrayList<Recipe>();
    public static Item questionItem = new Item("???", "id");

    public static String escapedModName() {
        return modName.replaceAll("[$&+,:;=?@#|'<>.^*()%! -]", "").toLowerCase();
    }

    public static List<Item> GetAllItems(){
        List<Item> allItems = new ArrayList<>();
        allItems.addAll(items);
        allItems.addAll(AllItems.allItems);
        return allItems;
    }

    public static Item GetItemById(String id){
        List<Item> allItems = GetAllItems();
        for(Item i : allItems){
            if(i.itemId.equals(id)){
                return i;
            }
        }
        return questionItem;
    }

    public static Item GetItemByName(String name){
        List<Item> allItems = GetAllItems();
        for(Item i : allItems){
            if(i.itemName.equals(name)){
                return i;
            }
        }
        return questionItem;
    }
}
