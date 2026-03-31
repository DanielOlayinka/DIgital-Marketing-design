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
      const content = document.querySelectorAll('.ticker-content');
      
    content.forEach((con) =>{
       con.innerHTML = '';
        [0, 1].forEach(() => {
        const seg = document.createElement('div');
        seg.className = 'ticker-segment';

        items.forEach(text => {
          // Text item
          const span = document.createElement('span');
          span.className = 'ticker-item';
          span.textContent = text;
          // span.imagecontent = image;
          seg.appendChild(span);

          // Separator
          const dot = document.createElement('i');
          dot.className = 'ticker-dot fa-solid fa-star-of-life';          
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


  const members = [
  {
    Header: "Discover & Strategize",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odit quibusdam dolor asperiores fugiat rem tenetur ",
    step: "STEP",
    level: "01"
  },
  {
    Header: "Execute & Optimize",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,odit quibusdam dolor asperiores fugiat rem tenetur ",
    step: "STEP",
    level: "02"
  },
  {
    Header: "Analyse & Grow",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odit quibusdam dolor asperiores fugiat rem tenetur ",
    step: "STEP",
    level: "03"
  },
];

const container = document.getElementById("teamContainer");

function renderMembers(list){
  container.innerHTML = "";

  list.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${member.Header}</h3>
      <p>${member.content} </p>
      <div classname = "bottom">
      <b>${member.step}</b>
      <b>${member.level}</b>
      </div>
    `;

    container.appendChild(card);
  });
}

renderMembers(members);

const works = [
  {
    Header: "A Social campaign for Real Estate Agency",
    images: "./assets/images (2).jpg",
    title: "Social media marketing",
    
  },
  {
    Header: "Search To Schedule: SEO & PPC for a Dental Clinic",
    images: "./assets/images.jpg",
    title: "SEO, PPC",
    
  },
  {
    Header: "Healthy Clicks: Google Ads for a Yoga Studio",
    images: "./assets/images (1).jpg",
    title: "Social media marketing",
    
  },
   {
    Header: "Runway To Revenue: Instagram Ad Campaign for a Fashion Brand",
    images: "./assets/images (3).jpg",
    title: "Paid Advertising",
  },
];


const contain = document.getElementById("workContainer");

function renderWorks(lists){
  contain.innerHTML = "";

  lists.forEach(work => {
    const cards = document.createElement("div");
    cards.classList.add("cards");

    cards.innerHTML = `
      <img src="${work.images}" alt="${work.title}">
      <p>${work.title} </p>
      <hr>
      <div classname = "under">
      <h2>${work.Header}</h2>
      <button class="button">
    <span>&#x2197;</span></button>
      </div>
    `;

    contain.appendChild(cards);
  });
}

renderWorks(works);

// ── Fade-up on scroll / page load ──────────────────────────────────────────
function initFadeUp() {
  const allCards = document.querySelectorAll('.card, .cards');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const card = entry.target;
      const siblings = Array.from(card.parentElement.children);
      const index = siblings.indexOf(card);

      // Stagger each card 100 ms apart in its grid
      card.style.animationDelay = `${index * 100}ms`;
      card.classList.add('is-visible');

      observer.unobserve(card);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  allCards.forEach((card) => observer.observe(card));
}

initFadeUp();