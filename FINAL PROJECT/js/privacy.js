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
        "info":"We can obtain the following types of information:",
        "id":"Personal information (name, email, phone number) Date of birth Only data necessary to use the service",
        "using":"2. Using Datas",
        "weuse":"We use your datas for following reasons:",
        "experience":"Improving the user experience Providing information about ensuring the functionality of the service",
        "datasecurity":"3. Data protection",
        "website":"Our website will use modern security technologies and practices to protect your data.However, we cannot promise that it will be completely protected, as the security of communications over the Internet is not completely guaranteed.",
        "share":"4. Sharing Datas",
        "security":"We do not disclose your personal information to third parties unless required by law or without our permission.",
        "rights":"5. Your Rights",
        "yourrights":"You have the right to request access, modification or deletion of your personal data at any time.You can do this by contacting us via the contact details on our website.",
        "changings":"6. Changes in Policy",
        "changes":"We reserve the right to update the terms of this policy. All changes will be posted here.",
        "contact2":"7. Contact",
        "pretensions":"If you have any questions regarding this privacy policy, please contact us via the contact page.",


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
        "info":"ჩვენ შეგვიძლია მოვიპოვოთ შემდეგი ტიპის ინფორმაცია:",
        "id":"პირადი ინფორმაცია (სახელი, ელ. ფოსტა, ტელეფონის ნომერი) დაბადების თარიღი მხოლოდ საჭირო მონაცემები სერვისის გამოყენებისთვის",
        "using":"2. მონაცემების გამოყენება",
        "weuse":"ჩვენ ვიყენებთ თქვენს მონაცემებს შემდეგი მიზნებისთვის:",
        "experience":"მომხმარებლის გამოცდილების გაუმჯობესება სერვისის ფუნქციონირების უზრუნველყოფა შესახებ ინფორმაციის მიწოდება",
        "datasecurity":"3. მონაცემების დაცვა",
        "website":"ჩვენი ვებგვერდი გამოიყენებს თანამედროვე უსაფრთხოების ტექნოლოგიებს და პრაქტიკებს თქვენი მონაცემების დასაცავად.თუმცა, ჩვენ ვერ ვგპირდებით, რომ მათი სრული დაცვა იქნება, რადგან ინტერნეტში მიმოქცევითი უსაფრთხოება სრულყოფილად დაცული არ არის.",
        "share":"4. მონაცემების გაზიარება",
        "security":" ჩვენ არ ვასახავთ თქვენს პირად ინფორმაციას მესამე მხარეებზე, თუ ეს არ არის კანონით მოთხოვნილი ან ჩვენგან ნებართვის გარეშე.",
        "rights":"5. თქვენი უფლებები",
        "yourrights":"თქვენ გაქვთ უფლება მოითხოვოთ თქვენი პირადი მონაცემების წვდომა, შეცვლა ან წაშლა ნებისმიერ დროს.ამისათვის შეგიძლიათ დაგვიკავშირდეთ ჩვენი ვებგვერდის კონტაქტების მეშვეობით.",
        "changings":"6. ცვლილებები პოლიტიკაში",
        "changes":"ჩვენ უფლებას ვიტოვებთ განვაახლოთ ამ პოლიტიკის პირობები. ყველა ცვლილება იქნება აქ განთავსებული.",
        "contact2":"7. კონტაქტი",
        "pretensions":"თუ თქვენ გაქვთ კითხვები ამ პირადი მონაცემების პოლიტიკასთან დაკავშირებით, გთხოვთ, დაგვიკავშირდეთ  კონტაქტის გვერდზე"
    }
}




function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
