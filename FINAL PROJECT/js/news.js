const translations = {
    en: {
        "news-title": "News - Chiatura",
        main: "Home",
        history: "History",
        culture: "Culture",
        tourism: "Tourism",
        gallery: "Gallery",
        timetable: "Timetable",
        news: "News",
        "news-header": "News",
        "news-text": "Chiatura's cable car 'Sashevardno-Zeda Rgani' has reopened.",
        "cable": "🚠 In Chiatura, the rehabilitation process of the passenger cable car on the Zeda Rgani (also known as 'Peace') route has been completed. 🔹 The restored cable car was visited today by Levan Kiknavelidze, the Deputy Governor of Imereti, Paata Kvizinadze, the MP of the Sachkhere-Chiatura-Kharagauli constituency, Givi Modebadze, the Mayor of Chiatura, Aleksandre Tsitskishvili, the Chairman of the City Council, and local government representatives. ✅ The unique public-passenger cableway, constructed under the leadership of engineer-constructor Giorgi Fantsulai in 1966, has been granted the status of a cultural heritage monument and thus retains its authenticity. Only the technical part has been renewed — the gondolas, machinery, and cables. 🔹 The project was funded by the central budget, with a total cost of 4,600,000 GEL. Additionally, the rehabilitation of the Chiatura-Perivisi (the so-called '25') cableway will soon be completed. 🚠 Locals and visitors to Chiatura will benefit from the new passenger cable car transport. ✅ Notably, the opening ceremony of the rehabilitated cable car was attended by Shota Nioradze, a member of Giorgi Fantsulai's team, the former chief energy engineer, and the first passenger."
    },
    ka: {
        "news-title": "სიახლეები - ჭიათურა",
        main: "მთავარი",
        history: "ისტორია",
        culture: "კულტურა",
        tourism: "ტურიზმი",
        gallery: "გალერეა",
        timetable: "განრიგი",
        news: "სიახლეები",
        "news-header": "სიახლეები",
        "news-text": "ჭიათურის საბაგირო 'საშევარდნო-ზედა რგანი' გაიხსნა.",
        "cable": "🚠  ჭიათურაში, ზედა რგანის (ე.წ. „მშვიდობის“) მიმართულებით სამგზავრო საბაგიროს რეაბილიტაციის პროცესი დასრულდა. 🔹 აღდგენილი საბაგირო დღეს იმერეთში სახელმწიფო რწმუნებულის მოადგილემ ლევან კიკნაველიძემ, საჩხერე-ჭიათურა-ხარაგაულის მაჟორიტარმა დეპუტატმა პაატა კვიჟინაძემ, ჭიათურის მუნიციპალიტეტის მერმა გივი მოდებაძემ, საკრებულოს თავმჯდომარემ ალექსანდრე ციცქიშვილმა და ადგილობრივი ხელისუფლების წარმომადგენლებმა დაათვალიერეს. ✅ 1966 წელს ინჟინერ-კონსტრუქტორის გიორგი ფანცულაიას თაოსნობით აშენებულ უნიკალურ სახალხო-სამგზავრო ბაგირგზას კულტურულ მემკვიდრეობის ძეგლის სტატუსი აქვს მინიჭებული და შესაბამისად ავთენტურობა შეინარჩუნა. განახლდა მხოლოდ ტექნიკური ნაწილი - გონდოლები, მანქანა-დანადგარები და ბაგირები. 🔹 პროექტი ცენტრალური ბიუჯეტის დაფინანსებით განხორციელდა და მისმა ღირებულებამ 4 600 000 ლარი შეადგინა. ასევე მალე დასრულდება ჭიათურა-პერევისის (ე.წ. 25-ის) საბაგირო გზის რეაბილიტაცია. 🚠 ახალი სამგზავრო-საბაგირო ტრანსპორტით ადგილობრივები და ჭიათურის სტუმრები ისარგებლებენ. ✅ აღსანიშნავია, რომ რეაბილიტირებული საბაგიროს გახსნის ცერემონიას გიორგი ფანცულაიას გუნდის წევრი, მაშინდელი მთავარი ენერგეტიკოსი და პირველი მგზავრი შოთა ნიორაძე ესწრებოდა."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
