document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      toggle.textContent = open ? "×" : "☰";
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const filterButtons = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll("[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      projects.forEach((project) => {
        project.classList.toggle("is-hidden", filter !== "all" && project.dataset.category !== filter);
      });
    });
  });

  const form = document.querySelector("#contact-form");
  const success = document.querySelector(".form-success");
  if (form && success) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.hidden = true;
      success.hidden = false;
    });
    success.querySelector("[data-reset-form]")?.addEventListener("click", () => {
      form.reset();
      form.hidden = false;
      success.hidden = true;
    });
  }
});
