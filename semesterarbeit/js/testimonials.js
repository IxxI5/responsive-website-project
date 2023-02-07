import { webAPI } from "./webapi.js";

// FFHS Web API Initialization
const rootURL = "https://web-modules.dev/api/v1";
const api = new webAPI(rootURL);

// query DOM elements
const spinner = document.querySelector(".spinner");
const testimonialContainer = document.querySelector(".testimonial-container");

const template = (testimonial) => `
      <article class="card">
      <div class="card-container">
        <img
            src="${testimonial.avatar}"
            alt="${testimonial.firstname} ${testimonial.lastname}"
        />
        <p><b>${testimonial.firstname} ${testimonial.lastname}.</b><span> ${testimonial.company}</span></p>
      </div>
      <blockquote>
        <em>
            "${testimonial.quote}."
        </em>
        <span id="id${testimonial.id}" class="fas fa-thumbs-up like">&nbsp</span
          ><span class="like-counter">${testimonial.likes_count}</span>
      </blockquote>
      </article>
      `;

// On No Server Access use the following object
const testimonialsSample = {
  amount: 12,
  testimonials: [
    {
      id: 3,
      firstname: "Annemarie",
      lastname: "Addo",
      company: "Miss Computer",
      quote:
        "Meine Ideen wurden wahrgenommen und mit der Erfahrung des Teams angereichert - so macht Zusammenarbeit Freude!",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/JUtCceHJz7nedtRaSDpL.jpg",
      likes_count: 1,
    },
    {
      id: 2,
      firstname: "Dietmar",
      lastname: "Diez",
      company: "tPuter",
      quote:
        "Super Beratung, geniale Umsetzung und aussergewöhnlich sympathisches Team! Wunschlos Glücklich",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/RNJbd8MB2dcA6bp4bDV9.jpg",
      likes_count: 1,
    },
    {
      id: 4,
      firstname: "Carina",
      lastname: "Christensen",
      company: "Neotech AG",
      quote:
        "Kurze und pregnante Meetings, stehts zur Stelle wenn Not am Mann oder an der Frau war und Expertise, die man spürt.",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/GYBmA2FPGFG0t53Nz0Jv.jpg",
      likes_count: 5,
    },
    {
      id: 12,
      firstname: "Eliane",
      lastname: "Easteregg",
      company: "ACME",
      quote:
        "Mir wurden 500 Instagram Follows versproche, wenn ich hier etwas nettes sage, also: Tolles Team, super Menschen, Qualität und auch andere Buzzwords, yay!",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/DbaSBL9LTRvbG5dhUJ5l.jpg",
      likes_count: 4,
    },
    {
      id: 10,
      firstname: "Melissa",
      lastname: "Meinert",
      company: "G-Tronix",
      quote:
        "Auf Google habe ich schon die Bestwertung hinterlassen, gerne stehe ich auch hier mit meinem Namen für eine Empfehlung!",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/R7UKGHw8y9vx0m2LbZ0t.jpg",
      likes_count: 2,
    },
    {
      id: 9,
      firstname: "Alex",
      lastname: "Alberti",
      company: "Desktor GmbH",
      quote:
        "Zuverlässig und kompetent - das alles in einem sehr angenehnehmen Klima.",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/y44qK1NDTSlkcaYFuDfZ.jpg",
      likes_count: 2,
    },
    {
      id: 7,
      firstname: "Florentin",
      lastname: "Filus",
      company: "Computia",
      quote:
        "Nach vielen wechselnden Partnern und eher bescheidenen Ergebnissen habe ich hier endlich die Leute für mein Tag-Team gefunden!",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/PCvLvPwHdCLE20WeVIYg.jpg",
      likes_count: 5,
    },
    {
      id: 11,
      firstname: "Jennifer",
      lastname: "Josephs",
      company: "telecode inc.",
      quote: "",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/I7yOEUAXv20ociF85YVJ.jpg",
      likes_count: 1,
    },
    {
      id: 1,
      firstname: "Martin",
      lastname: "Mack",
      company: "Cyberle AG",
      quote: "Grossartige Zusammenarbeit, gerne wieder!",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/NqncmG5u9Dl2vxEtsx7v.jpg",
      likes_count: 4,
    },
    {
      id: 6,
      firstname: "Adolf",
      lastname: "Aumüller",
      company: "Cyberint GmbH",
      quote:
        "Mehrere Jahre Erfahrung in der Branche lassen mich klar das Fazit ziehen: Mit diesen Leuten werde die Projekte erfolgreich umgesetzt und fristgerecht realisiert.",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/JqmpNuvKPfOUeE8txaDb.jpg",
      likes_count: 6,
    },
    {
      id: 5,
      firstname: "Manfred",
      lastname: "Metzger",
      company: "TECHIP Inc.",
      quote: "Spitzen Service zu guten Preise.",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/2suzN2WWiErzu7o6Nf3T.jpg",
      likes_count: 1,
    },
    {
      id: 8,
      firstname: "Björn",
      lastname: "Bürkle",
      company: "Keylogiq",
      quote:
        "Stets die Resultate, die man sich erhofft und allzeit offene Ohren für Änderungswünsche zu fairen Konditionen.",
      avatar:
        "https://web-modules.dev/storage/apicontents/testimonials/orqNJrSecxOy8Rees3JP.jpg",
      likes_count: 14,
    },
  ],
};

// fetch data from FFHS Web API and store it into a Promise variable
let data = api
  .get("/testimonials/20")
  .then((data) => {
    let testimonialHTML = ``;
    data.testimonials.forEach((testimonial) => {
      testimonialHTML += template(testimonial);
    });

    spinner.style = "display: none"; // on received data, remove spinner
    testimonialContainer.innerHTML += testimonialHTML; // then, inject HTML into testimonialContainer element
  })
  .catch((error) => {
    let testimonialHTML = ``;

    testimonialsSample.testimonials.forEach((testimonial) => {
      testimonialHTML += template(testimonial);
    });

    spinner.style = "display: none"; // on received data, remove spinner
    testimonialContainer.innerHTML += testimonialHTML; // then, inject HTML into testimonialContainer element

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
        type: "testimonial",
        id: parseInt(like.id.substring(2)),
      };

      // POST the new like value
      api
        .post("/like", prod)
        .then((res) => {})
        .catch((error) => {
          console.log(new Error("No Server Access"));
          errorMessage();
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
