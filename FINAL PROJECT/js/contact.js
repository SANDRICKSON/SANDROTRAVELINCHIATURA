const translations = {
    ka: {
        main: "მთავარი",
        history: "ისტორია",
        culture: "კულტურა",
        tourism: "ტურიზმი",
        gallery: "გალერეა",
        timetable: "განრიგი",
        news: "სიახლეები",
        project: "პროექტის შესახებ",
        videos: "ვიდეოები",
        contact: "კონტაქტი",
        books: "წიგნები",
        "log-in": "Log In",
        register: "Register",
        "contact-heading":"დაგვიკავშირდით",
        name: "სახელი",
        mail: "ელფოსტა",
        "submit":"გაგზავნა",
        message: "მესიჯი",
        send: "გაგზავნა",
        "copyright":"© 2024 ყველა უფლება დაცულია",
    },
    en: {
        "submit":"Submit",
        "contact-heading":"Contact Us",
        "copyright":"© 2024 All Rigths Reserved",
        main: "Home",
        history: "History",
        culture: "Culture",
        tourism: "Tourism",
        gallery: "Gallery",
        timetable: "Timetable",
        news: "News",
        project: "About Project",
        videos: "Videos",
        contact: "Contact",
        books: "Books",
        "log-in": "Log In",
        register: "Register",
        name: "Name",
        mail: "Email",
        message: "Message",
        send: "Send"
    }
};



function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        // Only change text content for elements that have the class "menu-text"
        const textElement = element.querySelector('.menu-text');
        if (textElement) {
            textElement.textContent = translations[lang][key];
        } else {
            element.textContent = translations[lang][key];
        }
    });
}
