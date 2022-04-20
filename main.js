const btn = document.querySelector(".btnEyeColor");
const eyeballArr = document.getElementsByClassName("eyeball");

document.addEventListener("mousemove", (mouseEvent) => {
  // clientX - The X coordinate of the mouse pointer in local (DOM content) coordinates.
  console.log(mouseEvent.clientX, window.innerWidth);

  // Get a percentage 0 - 100 based on mouse location
  const x = (mouseEvent.clientX * 100) / window.innerWidth + "%";
  const y = (mouseEvent.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < eyeballArr.length; i++) {
    eyeballArr[i].style.left = x;
    eyeballArr[i].style.top = y;
    eyeballArr[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
});

btn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  console.log(r, g, b);
  for (let i = 0; i < eyeballArr.length; i++) {
    eyeballArr[i].style.background = `rgb(${r}, ${g}, ${b})`;
  }
});
