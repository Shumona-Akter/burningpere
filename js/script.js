var menuItems = document.querySelectorAll("#menu li a");

function setActiveMenuItem() {
  menuItems.forEach(function (item) {
    item.classList.remove("active");
  });
  this.classList.add("active");
}

menuItems.forEach(function (item) {
  item.addEventListener("click", setActiveMenuItem);
});
