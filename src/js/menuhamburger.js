var hamburgerMenuOpenBtn = document.querySelector(".hamburger-menu");
var hamburgerMenuCloseBtn = document.querySelector(".close-hamburger-menu");
var menu = document.querySelector("#top-nav ul");
var overlay = document.querySelector(".mobile-overlay");

hamburgerMenuOpenBtn.addEventListener("click", function() {
  console.log("nnnn");
  menu.className += " open-menu";
  overlay.className += " open-overlay";
});

hamburgerMenuCloseBtn.addEventListener("click", function() {
  menu.className = "";
  overlay.className = "mobile-overlay";
});

window.addEventListener("click", function(e) {
  if (e.target === overlay) {
    menu.className = "";
    overlay.className = "mobile-overlay";
  }
});
