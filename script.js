// ================= PRODUCT SYSTEM =================

let products = JSON.parse(localStorage.getItem("products")) || [
  {
    title: "Rose Gold Name Frame",
    price: "₹1799",
    image: "https://images.unsplash.com/photo-1616627984998-8e09e2b8c59f"
  }
];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function displayProducts() {
  const container = document.getElementById("productContainer");
  if (!container) return;

  container.innerHTML = "";
  products.forEach(p => {
    container.innerHTML += `
      <div class="card fade-in">
        <img src="${p.image}">
        <h3>${p.title}</h3>
        <p class="price">${p.price}</p>
      </div>
    `;
  });
}

displayProducts();

// ================= ADMIN ADD PRODUCT =================

const form = document.getElementById("productForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const price = "₹" + document.getElementById("price").value;
    const image = document.getElementById("image").value;

    products.push({ title, price, image });
    saveProducts();
    alert("Product Added!");
    form.reset();
  });
}

// ================= GLITTER PARTICLES =================

const canvas = document.getElementById("glitterCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedY = Math.random() * 0.6 + 0.2;
    }
    update() {
      this.y += this.speedY;
      if (this.y > canvas.height) this.y = 0;
    }
    draw() {
      ctx.fillStyle = "rgba(183,110,121,0.8)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  init();
  animate();
}
