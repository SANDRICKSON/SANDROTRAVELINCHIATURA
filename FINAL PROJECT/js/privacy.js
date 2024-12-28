const translations = {
    en:{
        "main": "Home",
        "history": "History",
        "culture": "Culture",
        "tourism": "Tourism",
        "gallery": "Gallery",
        "timetable": "Timetable",
        "news": "News",
        "project": "About the Project",
        "videos": "Videos",
        "contact": "Contact",
        "books": "Books",
        "log-in": "Log In",
        "register": "Register",
        "privacy":"Privacy policy",
        "care":"We care about your personal data and act to protect your information.This privacy policy sets out the principles under which we control, investigate and act on the data you provide.",
        "datas":"1. Collected datas",
        "info":"We can obtain the following types of information:"
    },

    ka:{
        "main": "მთავარი",
        "history": "ისტორია",
        "culture": "კულტურა",
        "tourism": "ტურიზმი",
        "gallery": "გალერეა",
        "timetable": "განრიგი",
        "news": "სიახლეები",
        "project": "პროექტის შესახებ",
        "videos": "ვიდეოები",
        "contact": "კონტაქტი",
        "books": "წიგნები",
        "log-in": "შესვლა",
        "register": "რეგისტრაცია",
        "privacy":"პირადი მონაცემების პოლიტიკა",
        "care":"ჩვენ ვუფრთხილდებით თქვენს პირად მონაცემებს და ვმოქმედებთ თქვენი ინფორმაციის დაცვით. ეს პირადი მონაცემების პოლიტიკა ადგენს იმ პრინციპებს, რომელთა მიხედვითაც ჩვენ ვაკონტროლებთ, ვიძიებთ და ვმოქმედებთ თქვენს მიერ მოწოდებულ მონაცემებზე.",
        "datas":"1. შეგროვებული მონაცემები",
        "info":"ჩვენ შეგვიძლია მოვიპოვოთ შემდეგი ტიპის ინფორმაცია:"
    }
}




function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
