function toggleNav() {
    const sidenav = document.getElementById("mySidenav")
    const menuButton = document.getElementById("menuButton")

    if (sidenav.style.width >="100px") {
        closeNav();
    } else {
        openNav();
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    menuButton.classList.add("hidden");
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(() => {
        const menuButton = document.getElementById("menuButton")
        menuButton.classList.remove("hidden");
    }, 300);
  }
