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
window.onbeforeunload = () => window.scrollTo(0, 0);
const ITEMS = [
  "Content Marketing",
  "Social Media Marketing",
  "Search Engine Optimisation",
  "Content Marketing",
  "Social Media Marketing",
  "Search Engine Optimisation",
];

function buildTicker(items) {
  const content = document.querySelectorAll(".ticker-content");

  content.forEach((con) => {
    con.innerHTML = "";
    [0, 1].forEach(() => {
      const seg = document.createElement("div");
      seg.className = "ticker-segment";

      items.forEach((text) => {
        // Text item
        const span = document.createElement("span");
        span.className = "ticker-item";
        span.textContent = text;
        // span.imagecontent = image;
        seg.appendChild(span);

        // Separator
        const dot = document.createElement("i");
        dot.className = "ticker-dot fa-solid fa-star-of-life";
        seg.appendChild(dot);
      });

      con.appendChild(seg);
    });
  });

  // Two identical segments so the loop is seamless
}

//Public helper: add an item at runtime
// Call addTickerItem("Your new text") from the browser console to test.
function addTickerItem(text) {
  if (!text || !text.trim()) return;
  ITEMS.push(text.trim());
  buildTicker(ITEMS);
}

// Initialise
buildTicker(ITEMS);
