const menu = querySelector(".menu")
const menuNav = querySelector(".manu-nav");
const menuBranding = querySelector(".menu-branding");
const menuBtn = querySelector(".menu-btn")
const navItems = querySelector(".nav-bar")

//menu operations
let showMenu = false;

menuBtn = addEventListener("click", explode)

function explodeMenu() {
    if (!showMenu){
        menuBtn.classList.add("close")
        menuNav.classList.add("show")
        menuBranding.classList.add("show")
        menu.classList.add("show")

        navItem.foreach (items => items.classList.add("show"));

        showMenu = true;
    }
    else {
        menuBtn.classList.remove("close")
        menuNav.classList.remove("show")
        menuBranding.classList.remove("show")
        menu.classList.remove("show")

        navItem.foreach (items => items.classList.remove("show"));

        showMenu = false;
    }
}
