import { webAPI } from "./webapi.js";

// FFHS Web API Initialization
const rootURL = "https://web-modules.dev/api/v1";
const api = new webAPI(rootURL);

// query DOM elements
const productContainer = document.querySelector(".product-container");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const spinner = document.querySelector(".spinner");

// On No Server Access use the following object
const productsSample = {
  amount: 20,
  products: [
    {
      id: 9,
      sku: 9257135,
      price: 26080,
      name: "Motorrad",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/8DIultaZ8K8a5zJlEgLZ.jpg",
      description:
        "Elegante schwarz-grün Mischung in geschwungenem Design und jede Menger Tempo.",
      category: { id: 1, name: "Transport" },
      likes_count: 9,
    },
    {
      id: 12,
      sku: 8001909,
      price: 2900.2,
      name: "Türkiser Desktoptraum",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/kHoaPlWTy7bCSIYCu9op.jpg",
      description:
        "Schreibtisch, Regal und Pflanze, die ideale Arbeitsumgebung für kreative Köpfe.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
    {
      id: 4,
      sku: 4446322,
      price: 101000.1,
      name: "Schwarzer Porsche",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/N4mE8jboVawLj0XvpDZm.jpg",
      description:
        "Elegantes Design trifft teutonisches Tempo! Foto ist zutreffend, wird ohne Scheiben geliefert.",
      category: { id: 1, name: "Transport" },
      likes_count: 23,
    },
    {
      id: 3,
      sku: 9084717,
      price: 89005.5,
      name: "Glänzender Bolide",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/TmZ90iRhpQITnOYDOYxA.jpg",
      description:
        "Tiefergelegt und dank Felgenspikes auch für Mad Max Cosplay geeignet.",
      category: { id: 1, name: "Transport" },
      likes_count: 4,
    },
    {
      id: 5,
      sku: 3438894,
      price: 98520.35,
      name: "Oranger Porsche",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/D05K1ykJLOH5wtH1XZDk.jpg",
      description:
        "Sportedition mit schwarzer Motorhaube. Auf schweizer Strassen zugelassen.",
      category: { id: 1, name: "Transport" },
      likes_count: 0,
    },
    {
      id: 30,
      sku: 7095094,
      price: 333.3,
      name: "NES Gesamtpaket",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/YZ7DWrP6cNKdCVSaVywc.jpg",
      description:
        "Das originale Nintendo Entertainment System, nur für kurze Zeit im Retro-Angebot.",
      category: { id: 3, name: "Gaming" },
      likes_count: 3,
    },
    {
      id: 6,
      sku: 5738977,
      price: 44512,
      name: "Klassische Harley",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/L66RVxobeBv2W6msgT1q.jpg",
      description:
        "There is a song of a broken Harley, aber dieses Model ist absolut intakt.",
      category: { id: 1, name: "Transport" },
      likes_count: 2,
    },
    {
      id: 11,
      sku: 7419777,
      price: 125200,
      name: "Volleinrichtung",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/w6oVfQ59aoiOz5i5ID7G.jpg",
      description:
        "Kochecke, Esstisch und Lounge, picco bello aufeinander abgestimmt. Modern, fancy!",
      category: { id: 2, name: "Möbel" },
      likes_count: 2,
    },
    {
      id: 17,
      sku: 8294019,
      price: 77.7,
      name: "Beistelltisch",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/QvLoHsx94nanK4s0eQMs.jpg",
      description:
        "Abstelltisch und Büchergestell in einem. Idealer Zusatz in Schlaf- oder Wohnzimmer.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
    {
      id: 29,
      sku: 1348013,
      price: 80.7,
      name: "NES Controller",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/BF6v9psbVdbhUFNYbUA0.jpg",
      description:
        "Nostalgie im traditionellen Rechteck! Perfekt für eine Konami-Code-Combo.",
      category: { id: 3, name: "Gaming" },
      likes_count: 12,
    },
    {
      id: 19,
      sku: 4595434,
      price: 150,
      name: "Wandregale",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/NpBd879wiWPXw1MrDxWz.jpg",
      description:
        "Wie schwerelos hängen diese Regale an Ihrer Wand und sorgen garantiert für einen Hingucker.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
    {
      id: 24,
      sku: 1709091,
      price: 120.35,
      name: "Arcade Controller",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/VRIW5sQCF72OdEc0mhQw.jpg",
      description:
        "Sammlerstück! Toller Nintendo Arcade Controller, extra gross für maximalen Spass.",
      category: { id: 3, name: "Gaming" },
      likes_count: 3,
    },
    {
      id: 2,
      sku: 7714142,
      price: 120500.95,
      name: "Weisser Mercedes",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/U47ekXxbUrIYUmMzPCAH.jpg",
      description:
        "Die Pracht deutscher Ingenieurskunst auf vier Reifen in elegantem Weiss mit roten Akzenten.",
      category: { id: 1, name: "Transport" },
      likes_count: 0,
    },
    {
      id: 14,
      sku: 2651310,
      price: 230,
      name: "Sessel mit Hocker",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/ue1814gHaUHdt6EPW2ya.jpg",
      description:
        "Oranger Ohrensessel mit passender Fussstütze. Beistelltisch nicht inklusive.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
    {
      id: 26,
      sku: 5351068,
      price: 115.95,
      name: "Playstation 1 mini",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/6nBVhVwA6ER4BL6QYsmB.jpg",
      description: "Erlebe den ersten Sony Klassiker im Mini Format neu.",
      category: { id: 3, name: "Gaming" },
      likes_count: 0,
    },
    {
      id: 22,
      sku: 7063031,
      price: 995.95,
      name: "Kingsize Bett",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/mIj9MSJkFsanRe1456yn.jpg",
      description:
        "Wunderschönes weisses Kingsize Bett mit passendem langem Beistelltisch.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
    {
      id: 13,
      sku: 3546569,
      price: 570.95,
      name: "Klassische Komode",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/2FDAghlQNmLn86APjehT.jpg",
      description:
        "Naturholz und stilsichere Messinggriffe. Reinste Handarbeit und zeitloses Design.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
    {
      id: 25,
      sku: 9984739,
      price: 60.5,
      name: "PS3 Controller",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/fmhvGe4QfYnK88POG1Wu.jpg",
      description: "Gamepad für die Playstation III in mattem Schwarz.",
      category: { id: 3, name: "Gaming" },
      likes_count: 8,
    },
    {
      id: 18,
      sku: 2384276,
      price: 420.2,
      name: "Küchenbar",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/sNv9Oc3fOtNPqjaSQaJG.jpg",
      description:
        "Bewirten sie Ihre Gäste mit stil an dieser weissen Bar-Insel. Vier Hocker inklusive.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
    {
      id: 15,
      sku: 1195602,
      price: 199.2,
      name: "Nasszellenkombination",
      image:
        "https://web-modules.dev/storage/apicontents/productImages/EvaNF82u085VcMyWL8rS.jpg",
      description:
        "Elegante Lösung für mehr Stauraum im Badezimmer. Granitstein-Lavabo im Paket enthalten.",
      category: { id: 2, name: "Möbel" },
      likes_count: 0,
    },
  ],
};

const template = (product) => `
    <article class="card">
      <img
      src="${product.image}"
      alt="${product.name}"
      />           
      <div class="container">
        <p class="center">${product.name}</p>
        <p>Kategorie: ${product.category.name}</p>
        <p>Artikel-Nr. ${product.sku}</p>
        <p>CHF ${product.price.toFixed(2)}</p>
        <p>
          <span id="id${product.id}" class="fas fa-thumbs-up like">&nbsp</span
          ><span class="like-counter">${product.likes_count}</span>
        </p>
        <p><u>Beschreibung</u></p>
        <p>${product.description}</p>              
      </div>            
    </article>
    `;

// fetch data from FFHS Web API and store it into a Promise variable
let data = api
  .get("/proxucts/20")
  .then((data) => {
    let productHTML = ``;
    data.products.forEach((product) => {
      productHTML += template(product);
    });

    spinner.style = "display: none"; // on received data, remove spinner
    productContainer.innerHTML += productHTML; // then, inject HTML into productContainer element
  })
  .catch((error) => {
    let productHTML = ``;
    productsSample.products.forEach((product) => {
      productHTML += template(product);
    });

    spinner.style = "display: none"; // on received data, remove spinner
    productContainer.innerHTML += productHTML; // then, inject HTML into productContainer element

    console.log(new Error("No Server Access"));
    errorMessage();
  });

// use the already fetched data (Promise variable) to query likes
data.then(() => {
  const likes = document.querySelectorAll(".like");
  const likeCounters = document.querySelectorAll(".like-counter");

  // common like event handler
  likes.forEach((like, index) => {
    like.addEventListener("click", () => {
      let likeCounter = parseInt(likeCounters[index].innerText); // get the actual value as Int

      likeCounter++;
      likeCounters[index].innerText = likeCounter; // on increase write it back

      let prod = {
        type: "product",
        id: parseInt(like.id.substring(2)),
      };

      // POST the new like value
      api
        .post("/like", prod)
        .then((res) => {})
        .catch((error) => {
          errorMessage(error);
        });
    });
  });
});

// api error message
function errorMessage() {
  let main = document.querySelector("footer");

  main.innerHTML = `
    <div class="alert">
      <strong>Error!</strong> No Server Access.
    </div>
  `;

  // remove error popup after 2 secs
  setTimeout(() => {
    document.querySelector(".alert").style = "display: none";
  }, 3000);
}

// left arrow (scroll to left) event handler
leftArrow.addEventListener("click", () => {
  const slideWidth = productContainer.clientWidth;

  productContainer.scrollLeft -= slideWidth;
});

// right arrow (scroll to right) event handler
rightArrow.addEventListener("click", () => {
  const slideWidth = productContainer.clientWidth;

  productContainer.scrollLeft += slideWidth;
});
