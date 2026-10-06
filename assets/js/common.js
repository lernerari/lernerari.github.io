function updateMode() {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
}
function toggleMode() {
    updateMode();
}
window.onload = updateMode();
function toggleMenu() {
    let navbar = document.getElementById("navbar-default");
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
    }
    else {
        navbar.classList.add("hidden");
    }
}
