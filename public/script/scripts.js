let currentSlide = 0;
const audioElement = document.getElementById('audio');
const slideImage = document.getElementById('slide-image');
const nextButton = document.getElementById('next-button');
const otherDongeng = document.getElementById('other-dongeng');

// Fungsi untuk menampilkan slide
function showSlide(slides) {
    if (currentSlide < slides.length) {
        slideImage.src = slides[currentSlide].image;
        audioElement.src = slides[currentSlide].audio;
        audioElement.play();
    } else {
        otherDongeng.style.display = 'block';
    }
}

// Event listener untuk tombol "Selanjutnya"
nextButton.addEventListener('click', () => {
    currentSlide++;
    showSlide(slides);
});

// Autoplay slide berikutnya setelah audio selesai
audioElement.addEventListener('ended', () => {
    setTimeout(() => {
        currentSlide++;
        showSlide(slides);
    }, 3000); // 3 detik delay
});

// Initial load
showSlide(slides);
