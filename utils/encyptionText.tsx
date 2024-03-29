
import { useContext, useState } from "react";
import { EncryptionContext } from "@/context/encryptContext";
import { LanguageContext } from "@/context/languageContext";

const  encryptionText =(text: string)=>{
    const  en:Record<string, string> = {
        "Easiest way to Build Applications":"Easiest way to Build Applications",
        "Providing":"Providing",
        "the best":"the best",
        "in security, development and innovation.":"in security, development and innovation.",
        "addad":"Empowering businesses with innovative solutions, we specialize in mobile app and web development, ensuring seamless user experiences. Our cybersecurity services protect your digital assets, while our engaging videos educate users on secure practices.",
        "Diving in our Space!":"Diving in our Space!",
        "BA3":"BA3",
        "About us": "About us",
        "Our Space": "Our Space",
        "Our Projects":"Our Projects",
        "ooo":"ooo",
       
    }
    const ar:Record<string, string> = {
        "Easiest way to Build Applications":"اسهل طريق لبناء مشروعك",
        "Providing":"نقدم",
        "the best":"الافضل",
        "in security, development and innovation.":"في الحماية و التطوير و الابتكار.",
        "addad":"تمكين مشروعك بحلول إبداعية,مختصون ببناء تطبيقات الجوال و الويب, ضمان تجارب مستخدم سلسة. خدماتنا الأمنية تحمي أصولك الرقمية,بينما تعمل مقاطع الفيديو الجذابة لدينا على تثقيف المستخدمين حول الممارسات الآمنة.",
        "Diving in our Space!":"غُص في فضائنا",
        "BA3":"باع و لم يشتري",
        "About us":"من نحن",
        "Our Space":"فضائنا",
        "Our Projects":"مشاريعنا",
        "ooo":"ooo",
     
    }





    function encrypt(text: String){
        var _ = ""
       for(var i in text){
    
        if( text[i] ==" "){
            _ +=" "
        }else{
            _ +="_"
        }
       }
        return _
    }
    const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);
    const {languageType,LanguageChangeHandler} = useContext(LanguageContext);

    return isEncryption ?encrypt(text):languageType =="en"?en[text]:ar[text]
}

export default encryptionText;