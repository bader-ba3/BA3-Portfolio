
import { useContext, useState } from "react";
import { EncryptionContext } from "@/context/encryptContext";
import { LanguageContext } from "@/context/languageContext";

const  encryptionText =(text: string,options?: { withTranslate?: boolean })=>{
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
        "Think better with Ba3":"ooo",
        "Making apps with modern technologies":"Making apps with modern technologies",
        "Never miss a task, deadline or idea":"Never miss a task, deadline or idea",
        "DIVING IN OUR SPACE!":"DIVING IN OUR SPACE!",
        "Performance":"Performance",
        "&":"&",
        "Security":"Security",
        "Hardened security":"Hardened security",
        "encrypt_des":"The contents of your applications are end-to-end encrypted. No one else can read them,",
        "(not even us).":"(not even us).",
        "Rights_Reserved":"© Copyright 2024, All Rights Reserved.",
        "💜":"💜",
        "Made with":"Made with",
        "by BA3.co":"by BA3.co",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
    }
    const ar:Record<string, string> = {
        "Easiest way to Build Applications":"اسهل طريق لبناء مشروعك",
        "Providing":"نقدم",
        "the best":"الافضل",
        "in security, development and innovation.":"في الحماية و التطوير و الابتكار.",
        "addad":"تمكين مشروعك بحلول إبداعية,مختصون ببناء تطبيقات الجوال و الويب, ضمان تجارب مستخدم سلسة. خدماتنا الأمنية تحمي أصولك الرقمية,بينما تعمل مقاطع الفيديو الجذابة لدينا على تثقيف المستخدمين حول الممارسات الآمنة.",
        "Diving in our Space!":"غُص في فضائنا",
        "BA3":"BA3",
        "About us":"من نحن",
        "Our Space":"فضائنا",
        "Our Projects":"مشاريعنا",
        "ooo":"ooo",
        "Think better with Ba3":"فكر جيدا مع ba3",
        "Making apps with modern technologies":"نصنع تطبيقاتنا ب احدث التقنيات",
        "Never miss a task, deadline or idea":"٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫",
        "DIVING IN OUR SPACE!":"غص في فضائنا",
        "Performance":"الاداء",
        "&":"&",
        "Security":"الحماية",
        "Hardened security":"اقوىىىىىىىى حماية",
        "encrypt_des":"بيانات تطبيق محمية بتشفير الطرف للطرف لايمكن لأحد ان يقرأها",
        "(not even us).":"(ولا حتى نحن)",
        "Rights_Reserved":"© حقوق الطبع والنشر 2024، جميع الحقوق محفوظة.",
        "💜":"💜",
        "Made with":"صنع",
        "by BA3.co":"بواسطة BA3.co",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        
    }





    function encrypt(text: String){
        var _ = ""
       for(var i in text){
    
        if( text[i] ==" "){
            _ +=" "
        }else{
            _ +="a"
        }
       }
        return _
    }
    const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);
    const {languageType,LanguageChangeHandler} = useContext(LanguageContext);
        
    return options?.withTranslate!=null &&options?.withTranslate==false
        ?text
        :languageType =="en"
            ?en[text]
            :isEncryption
            ?encrypt(ar[text])
            :ar[text]
}

export default encryptionText;