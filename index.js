const links = document.querySelectorAll(".nav-link");
let current = window.location.pathname;

if (current.endsWith("/")) {
  current += "index.html";
}

links.forEach((link) => {
  if (link.getAttribute("href") === `./${current.split("/").pop()}`) {
    link.classList.add("active");
  }
});
