const nav = document.getElementById("nav");
const progress = document.getElementById("scrollProgress");
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

document.getElementById("year").textContent = new Date().getFullYear();

const updateScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 30);
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = available > 0 ? `${(window.scrollY / available) * 100}%` : "0%";
};

const closeMenu = () => {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
};

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", isOpen);
});

links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "");
  const email = String(data.get("email") || "");
  const message = String(data.get("message") || "");
  const subject = encodeURIComponent(`Auralis inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:edouard@ferragu.net?subject=${subject}&body=${body}`;
});
