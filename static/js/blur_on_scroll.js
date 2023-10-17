window.addEventListener("scroll", function() {
  const elementToBlur = document.getElementById("greeting");
  const scrollTop = window.scrollY;
  const blurAmount = Math.min(10, scrollTop / 12.5);

  elementToBlur.style.filter = `blur(${blurAmount}px`;
});