function displayImage(img) {
  const grosseImage = document.getElementById("grosseImage");
  const texteImage = document.getElementById("texteImage");
  grosseImage.src = img.src;
  texteImage.innerHTML = img.alt;
  grosseImage.parentElement.style.display = "block";
}
