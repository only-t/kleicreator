package modloader.resources;

import modloader.classes.ResourceTexture;
import speech.SpeechFile;

public class Resource {
    public <T> boolean Is(Class<T> t){
        try {
            t.cast(this);
            return true;
        }catch(ClassCastException e){
            return false;
        }
    }

    public <T extends Resource> T Get(){
        return (T) this;
    }
}
