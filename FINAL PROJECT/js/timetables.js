// JavaScript Code (timetables.js)

const translations = {
    ka: {
        'timetable-title': 'ავტობუსის განრიგი - ჭილოვანი-დიდი კაცხი',
        'main': 'მთავარი',
        'history': 'ისტორია',
        'culture': 'კულტურა',
        'tourism': 'ტურიზმი',
        'gallery': 'გალერეა',
        'timetable': 'განრიგი',
        'news': 'სიახლეები',
        'bus-timetable':'ავტობუსის განრიგი: მემორიალი-ჭავჭავაძის ქუჩა',
        'chavchavadze': 'ჭავჭავაძის ქუჩა',
        'memoriali':'მემორიალი',
        'bus-schedule': 'ავტობუსის განრიგი: ჭილოვანი - დიდი კაცხი',
        'chilovani': 'ჭილოვანი',
        'katskhi': 'დიდი კაცხი',
        'price': '1 ლარი',
        'price1': '50 თეთრი'
    },
    en: {
        'bus-timetable': 'Bus Timetable - Memoriali-Chachavadze STR',
        'timetable-title': 'Bus Timetable - Chilovani-Big Katskhi',
        'main': 'Main',
        'history': 'History',
        'culture': 'Culture',
        'tourism': 'Tourism',
        'gallery': 'Gallery',
        'timetable': 'Timetable',
        'news': 'News',
        'bus-schedule': 'Bus Schedule: Chilovani - Big Katskhi',
        'chilovani': 'Chilovani',
        'katskhi': 'Big Katskhi',
        'price': 'Price: 1 Lari',
        'price1': 'Price: 50 Tetri',
        'chavchavadze': 'Chavchavadze str',
        'memoriali':'Memoriali',
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}
