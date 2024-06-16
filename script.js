function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const jobTitles = ["Software Developer", "Data Analyst","Security Analyst"];
  const textElement = document.querySelector('.section__text__p2');
  let currentIndex = 0;

  setInterval(function() {
      currentIndex = (currentIndex + 1) % jobTitles.length;
      textElement.classList.add('blink')
      setTimeout(function(){
        textElement.textContent = jobTitles[currentIndex];
        textElement.classList.add('smooth-transition');
        textElement.classList.remove('blink');
      },800);

      setTimeout(function(){
        textElement.classList.remove('smooth-transition');
      },1200)
  }, 3000);
});
