function toggleMenu() {
    const navEl = document.querySelector("nav");
    navEl.classList.toggle("active");
}

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);