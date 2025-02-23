const translations = {
    en: {
        "virto": "",
        "gallery1": "Gallery of videos",
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
        "copyright": "© 2024 All Rights Reserved",
        "books": "Books",
        "log-in": "Log In",
        "register": "Register",
        "culture-header": "Culture",
        "alsolike": "You may also like",
        "upload-video": "Upload Video",
        "culture-text": "The city has cultural institutions such as the Akaki Tsereteli Drama Theatre, a cinema-theatre, the Palace of Rituals, the House of the Artist, the Chiatura Regional Museum, and the Cultural Palace. The cultural education of students in Chiatura is supported by the 'Actors' School' at the Culture Center, the State Ensemble of Dance and Song 'Changi,' folk dance ensembles: 'Merchkhali,' 'Pesevi,' and 'Ensemble-XXI,' the Georgian Folk Song Ensemble 'Imereti,' the School of Pop Music 'Natvrishvalli,' and the Ballroom Dance Studios 'Dance Forum,' 'Gracia,' and 'Elegance.' Every year on September 29, the population celebrates the traditional folk festival 'Chiaturoba,' dedicated to the city of Chiatura.",
        "film_title": "Chiatura",
        "image1": "Film Poster",
        "image2": "Chiatura Scenes",
        "watch_button": "Watch the Film",
        "virtualuri":"Virtual Tour",
        "select-video":"Choose a Video:",
        "upload-button":"Upload",
        "wiatura":"Chiatura",
        "mravali":"A film presented at many international festivals"

    },
    ka: {
        "mravali":"მრავალ საერთაშორისო ფესტივალზე წარდგენილი ფილმი",
        "select-video":"აირჩიეთ ვიდეო:",
        "wiatura":"ჭიათურა",
        "upload-button":"ატვირთვა",
        "virtualuri":"ვირტუალური ტური",
        "copyright": "© 2024 ყველა უფლება დაცულია",
        "upload-video": "ვიდეოს ატვირთვა",
        "virto": "",
        "gallery1": "ვიდეოების გალერეა",
        "main": "მთავარი",
        "history": "ისტორია",
        "culture": "კულტურა",
        "tourism": "ტურიზმი",
        "alsolike": "ასევე შეიძლება მოგეწონოთ",
        "gallery": "გალერეა",
        "timetable": "განრიგი",
        "news": "სიახლეები",
        "project": "პროექტის შესახებ",
        "videos": "ვიდეოები",
        "contact": "კონტაქტი",
        "books": "წიგნები",
        "log-in": "Log In",
        "register": "Register",
        "culture-header": "კულტურა",
        "culture-text": "ქალაქში არის კულტურის დაწესებულებები: აკაკი წერეთლის სახელობის ჭიათურის დრამატული თეატრი, კინო-თეატრი, რიტუალების სასახლე, მხატვრის სახლი, ჭიათურის მხარეთმცოდნეობის მუზეუმი და კულტურის სასახლე. ჭიათურაში მოსწავლეთა კულტურულ აღზრდას ემსახურება კულტურის ცენტრთან არსებული „მსახიობთა სკოლა“, ცეკვისა და სიმღერის სახელმწიფო ანსამბლი „ჩანგი“, folk ცეკვის ანსამბლები: „მერცხალი“, „ფესვები“ და „ანსამბლი-XXI“, ქართული folk სიმღერის ანსამბლი „იმერეთი“, საესტრადო სიმღერის შემსწავლელი სკოლა „ნატვრისთვალი“, სამეჯლისო-სპოტრული ცეკვების სტუდიები: „დანს-ფორუმი“, „გრაცია“ და „ელეგანტი“. ყოველწლიურად 29 სექტემბერს მოსახლეობა აღნიშნავს ტრადიციულ folk დღესასწაულს „ჭიათურობას“, რომელიც ეძღვნება ქალაქ ჭიათურის დღეს.",
        "film_title": "ჭიათურა",
        "image1": "ფილმის აფიშა",
        "image2": "ჭიათურას კადრები",
        "watch_button": "ფილმის ყურება"
    }
};




document.getElementById('video-upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const videoFile = document.getElementById('video-upload').files[0];

    if (videoFile) {
        const videoGallery = document.getElementById('video-gallery');
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.width = 600;

        
        videoElement.src = URL.createObjectURL(videoFile);
        videoGallery.appendChild(videoElement);
    }
});




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
