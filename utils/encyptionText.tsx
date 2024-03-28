
import { useContext, useState } from "react";
import { EncryptionContext } from "@/context/encryptContext";

const  encryptionText =(text: string)=>{
    function encrypt(text: String){
        var _ = ""
       for(var i in text){https://gragon.es/wp-content/uploads/2024/01/Sobre-mi-gragon-gr.png
    
        if( text[i] ==" "){
            _ +=" "
        }else{
            _ +="_"
        }
       }
        return _
    }
    const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);

    return isEncryption ?encrypt(text):text
}

export default encryptionText;