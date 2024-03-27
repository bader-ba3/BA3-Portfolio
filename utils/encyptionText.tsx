
import { useContext, useState } from "react";
import { EncryptionContext } from "@/context/encryptContext";

const  encryptionText =(text: string)=>{
    function encrypt(text: String){
        var _ = ""
       for(var i in text){
        console.log(i)
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