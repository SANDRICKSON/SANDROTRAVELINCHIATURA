document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.alt = 'Uploaded Image';
            imgElement.classList.add('gallery-img');

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.appendChild(imgElement);

            document.getElementById('galleryContainer').appendChild(galleryItem);

            console.log('Image uploaded successfully'); // კონსოლის ლოგი
        };

        reader.readAsDataURL(file);
    } else {
        const url = prompt('გთხოვთ, შეიყვანოთ სურათის URL:');
        if (url) {
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.alt = 'Uploaded Image from URL';
            imgElement.classList.add('gallery-img');

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.appendChild(imgElement);

            document.getElementById('galleryContainer').appendChild(galleryItem);

            console.log('Image from URL added'); // კონსოლის ლოგი
        } else {
            alert('გთხოვთ, შეყოთ სურათის URL!');
        }
    }
});


    // შემოწმება თუ ცალკე URL-ზე გადავდივართ
    window.onload = function() {
        const validPages = ['index.html', 'history.html', 'culture.html', 'tourism.html', 'gallery.html', 'timetables.html', 'news.html', 'aboutproject.html', 'blogs.html', 'contact.html'];
        const currentUrl = window.location.pathname.split('/').pop();

        // თუ მიმდინარე გვერდი არ არის უფლება, გადავაგზავნოთ 404-ზე
        if (!validPages.includes(currentUrl)) {
            window.location.href = '404.html';
        }
    };


