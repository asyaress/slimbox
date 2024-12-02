const slider = document.getElementById('slider');
const navButtons = document.querySelectorAll('#slider-nav button');

// Set index slide awal
let currentIndex = 0;

// Fungsi untuk berpindah slide
function goToSlide(index) {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;

    // Perbarui tombol navigasi
    navButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

// Tambahkan event listener ke tombol navigasi
navButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Set slide pertama sebagai aktif
goToSlide(0);
