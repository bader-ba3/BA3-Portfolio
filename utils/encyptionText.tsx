
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
        "oooooo":"oooooo",
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
        "Encryption":"Encryption",
        "lang":"عربي",
        "Contact us":"Contact us",
        "BA3 Store": "Our mobile e-commerce app offers a seamless shopping experience with a wide range of products, secure payments, convenient delivery options, and exclusive deals and discounts.",
        "BA3 Business Solution": "Streamline your store management with our solution. Track inventory, manage sales, and analyze performance. Improve customer service with efficient operations and data-driven insights.",
        "BA3 Restaurant": "Discover, explore, and order from a variety of cuisines with our restaurant app. Enjoy features like reviews, ratings, and easy online ordering for a delightful dining experience.",
        "BA3 Chat": "Stay connected with our chat app offering easy communication through voice and video calls. Manage contacts and enjoy privacy with encrypted messages.",
        "BA3 TikTok": "BA3 TikTok is a creative platform for short videos, where users can showcase their talent. Join the global community and unleash your creativity!",
        "BA3 Taxi": "Get convenient, on-demand rides with our taxi app. Pay seamlessly and reach your destination safely and comfortably.",
        "BA3 Delivery": "Enjoy a variety of cuisines delivered to your doorstep with our food delivery app. Place orders and track deliveries for a convenient dining experience.",
        "BA3 Car": "Find your perfect car with ease on our platform. Compare prices and connect with sellers to negotiate and purchase your next vehicle hassle-free.",
        "BA3 Clinc": "Book appointments with ease using our app. Find doctors and receive reminders to manage your health appointments conveniently.",
        "BA3 Trading": "Trade cryptocurrencies securely on our platform. Execute trades with ease and start managing your crypto portfolio today.",
        "BA3 School": "Simplify administrative tasks with our school management system. Communicate with parents and staff efficiently for smoother school operations.",
        "BA3 Airline": "Book flights effortlessly with our airline booking app. Search for flights, compare prices, and reserve seats quickly, all in one place.",
    
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
        "oooooo":"oooooo",
        "Think better with Ba3":"فكر جيدا مع ba3",
        "Making apps with modern technologies":"نصنع تطبيقاتنا ب احدث التقنيات",
        "Never miss a task, deadline or idea":"٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫",
        "DIVING IN OUR SPACE!":"غص في فضائنا",
        "Performance":"الاداء",
        "&":"و",
        "Security":"الحماية",
        "Hardened security":"اقوى طرق الحماية ",
        "encrypt_des":"بيانات تطبيق محمية بتشفير الطرف للطرف لايمكن لأحد ان يقرأها",
        "(not even us).":"(ولا حتى نحن)",
        "Rights_Reserved":"© حقوق الطبع والنشر 2024، جميع الحقوق محفوظة.",
        "💜":"💜",
        "Made with":"صنع",
        "by BA3.co":"بواسطة BA3.co",
        "Encryption":"الحماية",
        "lang":"English",
        "Contact us":"تواصل معنا",

        "BA3 Store": "تطبيقنا للتجارة الإلكترونية عبر الهاتف المحمول يقدم تجربة تسوق سلسة مع مجموعة واسعة من المنتجات والمدفوعات الآمنة وخيارات التوصيل المريحة وصفقات حصرية وخصومات.",
        "BA3 Business Solution": "قم بتبسيط إدارة متجرك مع حلولنا. تتبع المخزون وإدارة المبيعات وتحليل الأداء. تحسين خدمة العملاء مع العمليات الفعالة والرؤى التي تعتمد على البيانات.",
        "BA3 Restaurant": "اكتشف واستكشف واطلب من مجموعة متنوعة من المأكولات مع تطبيقنا للمطعم. استمتع بميزات مثل التقييمات والتقييمات والطلب عبر الإنترنت السهل لتجربة تناول طعام ممتعة.",
        "BA3 Chat": "ابق على اتصال مع تطبيق الدردشة الخاص بنا الذي يوفر اتصالًا سهلًا من خلال المكالمات الصوتية والفيديو. إدارة الاتصالات والتمتع بالخصوصية مع الرسائل المشفرة.",
        "BA3 TikTok": "تطبيق BA3 TikTok هو منصة إبداعية لمقاطع الفيديو القصيرة، حيث يمكن للمستخدمين عرض مواهبهم. انضم إلى المجتمع العالمي وأطلق العنان لإبداعك!",
        "BA3 Taxi": "احصل على رحلات مريحة وفورية مع تطبيقنا للتاكسي. الدفع بسهولة والوصول إلى وجهتك بأمان وراحة.",
        "BA3 Delivery": "استمتع بمجموعة متنوعة من المأكولات التي يتم توصيلها إلى باب منزلك مع تطبيقنا لتوصيل الطعام. قم بتقديم الطلبات وتتبع التسليم لتجربة تناول طعام مريحة.",
        "BA3 Car": "ابحث عن سيارتك المثالية بسهولة على منصتنا. قارن الأسعار وتواصل مع البائعين للتفاوض وشراء مركبتك القادمة بدون عناء.",
        "BA3 Clinc": "احجز مواعيد بسهولة باستخدام تطبيقنا. العثور على الأطباء وتلقي تذكيرات وإدارة مواعيدك الصحية بشكل ملائم.",
        "BA3 Trading": "تداول العملات الرقمية بأمان على منصتنا. تنفيذ الصفقات بسهولة وابدأ في إدارة محفظتك الاستثمارية في العملات الرقمية اليوم.",
        "BA3 School": "بسهولة المهام الإدارية مع نظام إدارة المدرسة لدينا. التواصل مع الآباء والموظفين بكفاءة لعملية مدرسية أكثر سلاسة.",
        "BA3 Airline": "احجز رحلات الطيران بسهولة مع تطبيق حجز الطيران الخاص بنا. البحث عن الرحلات ومقارنة الأسعار وحجز المقاعد بسرعة، كل ذلك في مكان واحد.",

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