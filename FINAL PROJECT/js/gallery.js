const translations = {
    en: {
        main: "Home",
        history: "History",
        culture: "Culture",
        tourism: "Tourism",
        gallery: "Gallery",
        timetable: "Timetable",
        news: "News",
        "gallery-title": "Gallery",
        "gallery-text": "Explore the beautiful views and important places of the city.",
        "upload-btn": "Upload",
        "upload-alert": "Please select an image!",
        "urlsoon":"Sure uploading using an URL will be avaliable"
    },
    ka: {
        main: "მთავარი",
        history: "ისტორია",
        culture: "კულტურა",
        tourism: "ტურიზმი",
        gallery: "გალერეა",
        timetable: "განრიგი",
        news: "სიახლეები",
        "gallery-title": "გალერეა",
        "gallery-text": "იხილეთ ქალაქის ულამაზესი ხედები და მნიშვნელოვანი ადგილები.",
        "upload-btn": "ატვირთვა",
        "upload-alert": "გთხოვთ, აირჩიოთ სურათი!",
        "urlsoon":"მალე ბმულით ატვირთვაც დაემატება"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
    // ატვირთვის პროცესისთვის შეტყობინების ტექსტის განახლება
    document.getElementById("uploadButton").textContent = translations[lang]["upload-btn"];
    document.getElementById("uploadButton").setAttribute("data-alert", translations[lang]["upload-alert"]);
}

// სურათის ატვირთვის ფუნქცია
document.getElementById("uploadButton").addEventListener("click", function () {
    const fileInput = document.getElementById("imageUpload");
    const galleryContainer = document.getElementById("galleryContainer");

    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = "Uploaded Image";
            img.classList.add("gallery-img");

            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");
            galleryItem.appendChild(img);

            galleryContainer.appendChild(galleryItem);
        };

        reader.readAsDataURL(file);
    } else {
        alert(document.getElementById("uploadButton").getAttribute("data-alert"));
    }
});
