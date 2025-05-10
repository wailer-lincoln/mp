const videoData = [
    { src: "media/cmplt-2.mp4", caption: "Establishing a culvert to improve water drainage along the roads." },
    { src: "media/cmplt-3.mp4", caption: "Constructing roads for easen movement of people and goods." },
    { src: "media/cmplt-4.mp4", caption: "Constructing a river to supply clean water to the neighbouring community." },
    { src: "media/cmplt-5.mp4", caption: "Establishing a bridge to enable safe crossing of a flooded river." }
    ];

    const container = document.getElementById('newsContainer');

    const containe = document.getElementById('newContainer');

    videoData.forEach((item) => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news-item');

    newsDiv.innerHTML = `
    <video controls preload="metadata">
        <source src="${item.src}" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div class="caption">${item.caption}</div>
    `;

    container.appendChild(newsDiv);
    });


    videoData.forEach((item) => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('new-item');

    newsDiv.innerHTML = `
    <video controls preload="metadata">
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




  function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
  }
