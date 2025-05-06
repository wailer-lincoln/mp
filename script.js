const videoData = [
    { src: "video1.mp4", caption: "Establishing training hubs to equip youth with practical job-ready skills in Kemera." },
    { src: "video2.mp4", caption: "Launching mobile clinics and awareness campaigns for rural health services access in Tombe." },
    { src: "video3.mp4", caption: "Installing boreholes, tanks, and toilets to ensure safe water and hygiene in Manga." },
    { src: "video4.mp4", caption: "Building classrooms, libraries, and labs to improve learning environments across Kegati." }
    ];

    const container = document.getElementById('newsContainer');

    const containe = document.getElementById('newContainer');

    videoData.forEach((item) => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news-item');

    newsDiv.innerHTML = `
    <video controls>
        <source src="${item.src}" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div class="caption">${item.caption}</div>
    `;

    container.appendChild(newsDiv);
    });


    videoData.forEach((item) => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news-item');

    newsDiv.innerHTML = `
    <video controls>
        <source src="${item.src}" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div class="caption">${item.caption}</div>
    `;

    containe.appendChild(newsDiv);
    });

    // Reveal animation when in view (horizontal)
    const revealOnScroll = () => {
    const items = document.querySelectorAll('.news-item');
    const windowLeft = 0;
    const windowRight = window.innerWidth;

    items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.left < windowRight - 50 && rect.right > windowLeft + 50) {
        item.classList.add('visible');
    }
    });
    };

    document.querySelector('.scroll-wrapper').addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);