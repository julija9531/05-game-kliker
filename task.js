const clickCount = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("clicker__speed");

let t1 = new Date();

addEventListener("click", function() {
  clickCount.textContent++;
  clickSpeed.textContent = 1000/(new Date() - t1);
  t1 = new Date();
});