function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
  }
  
  setInterval(updateTime, 1000); 
  updateTime();

  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");

    let currentIndex = 0;
    let autoSlideInterval;


    function updateCarousel() {
        const translateValue = -currentIndex * 100 + "%";
        carousel.style.transform = `translateX(${translateValue})`;
    }

    function resetAutoSlideInterval() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(function () {
            if (currentIndex < carousel.children.length - 1) {
                currentIndex++;
                updateCarousel();
            } else {
                currentIndex = 0;
                updateCarousel();
            }
        }, 3000); 
    }

    
    resetAutoSlideInterval();
});
