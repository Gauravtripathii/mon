var sansBtn = document.querySelector(".sans-btn");
var sans = document.querySelector(".sans");

var hindiBtn = document.querySelector(".hindi-btn");
var hindi = document.querySelector(".hindi");

var engBtn = document.querySelector(".eng-btn");
var eng = document.querySelector(".eng");

engBtn.addEventListener("click", () => {
  eng.style.display = "block";
  hindi.style.display = "none";
  sans.style.display = "none";
});

hindiBtn.addEventListener("click", () => {
  hindi.style.display = "block";
  eng.style.display = "none";
  sans.style.display = "none";
});

sansBtn.addEventListener("click", () => {
  sans.style.display = "block";
  hindi.style.display = "none";
  eng.style.display = "none";
});
