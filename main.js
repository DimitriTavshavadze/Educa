/*
window.onload = function techEduca() {
  let menubtn = document.querySelector("nav .navigation ul .active");
  let menuclose = document.querySelector("nav .navigation ul");

  menubtn.addEventListener("click", function () {
    menuclose.classList.menubtn("nav .navigation ul .active");
  });
};
*/

$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});
