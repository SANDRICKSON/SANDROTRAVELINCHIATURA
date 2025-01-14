const translations = {
    en: {
        "culture-title": "Culture - Chiatura",
        explore:"Sandro Travel is a travel company that helps tourists discover the city of Chiatura.",
        myprojects:"Sandro Qatamadze's Projects",
        shesaxeb:"About Project",
        contact:"Contact",
        videos:"Videos",
        about:"About Author",
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
        "culture-header": "Culture",
        "culture-text": "The city's culture is rich with traditions, folk art, and unique works of art.",
        "holiday": "Chiatura celebrates its cultural holiday annually with a grand festival.",
        details:"Project Details",
        creating:"Project was prepared for TBC TechSchool X Geolab",
        author:"Project Author:Sandro Qatamadze",
        name:"Sandro Qatamadze",
        school:"City Chiatura:5th public school",
        skillwill:"Student of SKILLWILL NEO UNIVERSITY ON COURSE:PYTHON-BACKEND DEVELOPMENT",
        front:"Student of TBC Techschool on course:Front End Development(HTML, CSS)",
        mobile:"Student of TBC Techschool on course:Mobile App Development",
        explorium:"Student of Explorium on course: Python Chatbot and Narrative Design",
    },
    ka: {
        "culture-title": "კულტურა - ჭიათურა",
        myprojects:"სანდრო ქათამაძის პროექტები",
        explore:"Sandro Travel არის ტურისტული კომპანია, რომელიც ეხმარება ტურისტებს აღმოაჩინონ ქალაქი ჭიათურა",
        about:"ავტორის შესახებ",
        aboutauthor:"ავტორის შესახებ",
        contact:"კონტაქტი",
        videos:"ვიდეოები",
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
        "log-in": "Log In",
        "register": "Register",
        details:"პროექტის დეტალები",
        creating:"პროექტი მომზადდა თიბისი ტექსკოლის X ჯეოლაბის ფარგლებში",
        author:"პროექტის ავტორი:სანდრო ქათამაძე",
        name:"სანდრო ქათამაძე",
        school:"ქალაქი ჭიათურა - მეხუთე საჯარო სკოლა",
        skillwill:"SKILLWILL NEO UNIVERSITY-ს სტუდენტი Backend Development-ის განხრით",
        front:"TBC Techschool-ის კურსდამთავრებული Front End Development-ის განხრით",
        mobile:"TBC Techschool-ის კურსდამთავრებული მობაილ დეველოპმენტის განხრით",
        explorium:"Explorium-ს კურსდამთავრებული პითონ ჩეთბოტის და ნარატივ დიზაინის განხრით",
        "culture-header": "კულტურა",
        "culture-text": "ქალაქის კულტურა სავსეა ტრადიციებით, ხალხური შემოქმედებით და ხელოვნების უნიკალური ნიმუშებით.",
        "holiday": "1921 წლიდან ჭიათურაში აღინიშნება ქალაქის დღესასწაული „ჭიათურობა“, რომელსაც ცნობილი ქართველები და ჭიათურასთან დამეგობრებული ქალაქების წარმომადგენლები ესწრებიან."
    },
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
