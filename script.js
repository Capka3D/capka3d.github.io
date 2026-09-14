const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const quoteForm = document.querySelector(".quote-form");
const quoteDetails = document.querySelector("[name='detalles']");

const WHATSAPP_NUMBER = "59892467494";

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a, .header-cta").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-quote-detail]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (quoteDetails) {
      quoteDetails.value = event.currentTarget.dataset.quoteDetail;
      quoteDetails.focus({ preventScroll: true });
    }

    document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" });
  });
});

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const message = [
    "Hola, quiero cotizar una impresión 3D con CAPKA3D.",
    `Nombre: ${data.get("nombre")}`,
    `Material: ${data.get("material")}`,
    `Cantidad: ${data.get("cantidad")}`,
    `Detalles: ${data.get("detalles")}`,
    "Tengo el archivo listo para adjuntar.",
  ].join("\n");

  const phone = WHATSAPP_NUMBER.trim();
  const url = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});
