/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

anime({
  targets: "nav",
  translateY: [-25, 0],
  duration: 3000
});

anime({
  targets: ".container h1",
  translateX: [250, 0],
  duration: 3000
});

anime({
  targets: ".container button",
  translateX: [-250, 0],
});
anime({
  targets: ".indicator span",
  translateY: [27, 0],
  delay: anime.stagger(300, { easing: "easeOutQuad" }),
});
