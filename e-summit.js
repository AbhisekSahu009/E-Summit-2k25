
document.getElementById('showSidebarButton').addEventListener('click', showSidebar);
document.getElementById('hideSidebarButton').addEventListener('click', hideSidebar);

function showSidebar(event) {
    event.preventDefault(); // Prevent default action
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent default action
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}














document.addEventListener("DOMContentLoaded", function () {
    const eventGallery = document.createElement("div");
    eventGallery.classList.add("event-gallery");

    const eventGalleryHeading = document.createElement("div");
    eventGalleryHeading.classList.add("event-gallery-heading");
    eventGalleryHeading.textContent = "EVENTS GALLERY";

    const mainScrollDiv = document.createElement("div");
    mainScrollDiv.classList.add("main-scroll-div");

    const cover = document.createElement("div");
    cover.classList.add("cover");

    const scrollImages = document.createElement("div");
    scrollImages.classList.add("scroll-images");

    const images = [
        "img.jpg", "img.jpg", "img.jpg", "img.jpg",
        "img.jpg", "img.jpg", "img.jpg", "img.jpg"
    ];

    images.forEach((src) => {
        const child = document.createElement("div");
        child.classList.add("child");

        const img = document.createElement("img");
        img.classList.add("child-img");
        img.setAttribute("src", src);
        img.setAttribute("alt", "Event image");

        child.appendChild(img);
        scrollImages.appendChild(child);
    });

    cover.appendChild(scrollImages);
    mainScrollDiv.appendChild(cover);
    eventGallery.appendChild(eventGalleryHeading);
    eventGallery.appendChild(mainScrollDiv);

    document.getElementById("eventGallery").appendChild(eventGallery);
});