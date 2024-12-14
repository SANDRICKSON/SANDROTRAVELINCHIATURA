const translations = {
    en: {
        "culture-title": "Culture - Chiatura",
        main: "Home",
        history: "History",
        culture: "Culture",
        tourism: "Tourism",
        gallery: "Gallery",
        timetable: "Timetable",
        news: "News",
        "culture-header": "Culture",
        "culture-text": "The city's culture is rich with traditions, folk art, and unique works of art."
    },
    ka: {
        "culture-title": "კულტურა - ჭიათურა",
        main: "მთავარი",
        history: "ისტორია",
        culture: "კულტურა",
        tourism: "ტურიზმი",
        gallery: "გალერეა",
        timetable: "განრიგი",
        news: "სიახლეები",
        "culture-header": "კულტურა",
        "culture-text": "ქალაქის კულტურა სავსეა ტრადიციებით, ხალხური შემოქმედებით და ხელოვნების უნიკალური ნიმუშებით."
    },
    ru: {
        "culture-title": "Культура - Чиатура",
        main: "Главная",
        history: "История",
        culture: "Культура",
        tourism: "Туризм",
        gallery: "Галерея",
        timetable: "Расписание",
        news: "Новости",
        "culture-header": "Культура",
        "culture-text": "Культура города богата традициями, народным искусством и уникальными произведениями искусства."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
