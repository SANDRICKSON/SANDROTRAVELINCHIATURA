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
        project:"About project",
        "culture-header": "Culture",
        "culture-text": "The city's culture is rich with traditions, folk art, and unique works of art.",
        "holiday": "Chiatura celebrates its cultural holiday annually with a grand festival."
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
        "culture-text": "ქალაქის კულტურა სავსეა ტრადიციებით, ხალხური შემოქმედებით და ხელოვნების უნიკალური ნიმუშებით.",
        "holiday": "1921 წლიდან ჭიათურაში აღინიშნება ქალაქის დღესასწაული „ჭიათურობა“, რომელსაც ცნობილი ქართველები და ჭიათურასთან დამეგობრებული ქალაქების წარმომადგენლები ესწრებიან."
    },
};



function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
