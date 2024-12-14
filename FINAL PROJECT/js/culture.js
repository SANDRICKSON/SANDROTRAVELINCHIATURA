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
        "culture-text": "The city has cultural institutions: the Akaki Tsereteli Chiatura Drama Theater, a cinema theater, a palace of rituals, an artist's house, a Chiatura Museum of Local Lore, and a palace of culture. The cultural education of students in Chiatura is provided by the  School located at the cultural center, the state dance and song ensemble Changi, folk dance ensembles: Mertskhali, Pesvebi and Ensemble-XXI, the Georgian folk song ensemble Imereti, a pop singing school Natvristvali, and ballroom dance studios: Dance-Forum, Gracia and Elegant.Every year on September 29, the population celebrates the traditional folk holiday Chiatura, which is dedicated to the day of the city of Chiatura."
    
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
        "culture-text": "ქალაქში არის კულტურის დაწესებულებები: აკაკი წერეთლის სახელობის ჭიათურის დრამატული თეატრი, კინო-თეატრი, რიტუალების სასახლე, მხატვრის სახლი, ჭიათურის მხარეთმცოდნეობის მუზეუმი და კულტურის სასახლე. ჭიათურაში მოსწავლეთა კულტურულ აღზრდას ემსახურება კულტურის ცენტრთან არსებული „მსახიობთა სკოლა“, ცეკვისა და სიმღერის სახელმწიფო ანსამბლი „ჩანგი“, ხალხური ცეკვის ანსამბლები: „მერცხალი“, „ფესვები“ და „ანსამბლი-XXI“, ქართული ხალხური სიმღერის ანსამბლი „იმერეთი“, საესტრადო სიმღერის შემსწავლელი სკოლა „ნატვრისთვალი“, სამეჯლისო-სპოტრული ცეკვების სტუდიები: „დანს-ფორუმი“, „გრაცია“ და „ელეგანტი“.ყოველწლიურად 29 სექტემბერს მოსახლეობა აღნიშნავს ტრადიციულ ხალხურ დღესასწაულს „ჭიათურობას“, რომელიც ეძღვნება ქალაქ ჭიათურის დღეს."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
