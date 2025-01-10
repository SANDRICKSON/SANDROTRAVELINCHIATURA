const translations = {
    en: {
        "culture-title": "Tourism - Chiatura",
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
        "copyright":"© 2024 All Rigths Reserved",
        "books": "Books",
        "log-in": "Log In",
        "register": "Register",
        "culture-header": "Tourism",
        "culture-text": "The city's culture is rich with traditions, folk art, and unique works of art.",
        "holliday": "Since 1921, Chiatura has been celebrating its city holiday 'Chiaturoba', which is attended by famous Georgians and representatives of cities friendly with Chiatura.",
    },
    ka: {
        "copyright":"© 2024 ყველა უფლება დაცულია",
        "culture-title": "ტურიზმი - ჭიათურა",
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
        "culture-header": "ტურიზმი",
        "culture-text": "ქალაქის კულტურა სავსეა ტრადიციებით, ხალხური შემოქმედებით და ხელოვნების უნიკალური ნიმუშებით.",
        "holliday": "1921 წლიდან ჭიათურაში აღინიშნება ქალაქის დღესასწაული „ჭიათურობა“, რომელსაც ცნობილი ქართველები და ჭიათურასთან დამეგობრებული ქალაქების წარმომადგენლები ესწრებიან.",
    },
    ru: {
        "culture-title": "Культура - Чиатура",
        "main": "Главная",
        "history": "История",
        "culture": "Культура",
        "tourism": "Туризм",
        "gallery": "Галерея",
        "timetable": "Расписание",
        "news": "Новости",
        "culture-header": "Культура",
        "culture-text": "Культура города богата традициями, народным искусством и уникальными произведениями искусства.",
        "holiday": "Чиатура ежегодно отмечает свой культурный праздник с большим фестивалем."
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
