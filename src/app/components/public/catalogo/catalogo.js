document.addEventListener("mousemove", function (event) {
  var mouseX = event.clientX;

  if (mouseX < 180) {
      document.querySelector(".container-filtro").style.left = "0";
  } else {
      document.querySelector(".container-filtro").style.left = "-300px";
  }
});
