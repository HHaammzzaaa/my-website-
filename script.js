// ================= MOBILE MENU =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.style.display =
        navMenu.style.display === "block" ? "none" : "block";
});

// ================= CART FUNCTIONALITY =================
let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
    });
});

// ================= GLITTER ANIMATION =================
const glitterContainer = document.querySelector(".glitter-container");

function createGlitter() {
    const glitter = document.createElement("div");
    glitter.classList.add("glitter");

    glitter.style.left = Math.random() * 100 + "vw";
    glitter.style.animationDuration = (Math.random() * 3 + 3) + "s";

    glitterContainer.appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, 6000);
}

setInterval(createGlitter, 300);
