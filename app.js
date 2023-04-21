import { personList } from "./personList.js";

document.addEventListener("DOMContentLoaded", () => {
  const personInfo = document.querySelector(".card-container");

  const createCard = () => {
    let template = "";

    personList.forEach((person) => {
      let card = `
        <div class="card">
          <div class="card-front">
            <img src="${person.img}" width="150px" alt="" />
            <p class="class-name">PowerCoders 2023 bootcamp</p>
            <h2 class="student-name">${person.name}</h2>
            <button class="btn-info">More info</button>
            <h5>⭐⭐⭐⭐⭐</h5>
          </div>
          <div class="card-back">
          <img src="${person.img}" width="100px" alt="" />
          <h2 class="student-name">${person.name}</h2>
          <h5>⭐⭐⭐⭐⭐</h5>
          <p class="eye-color">Eye color: ${person.eyecolor}</p>
          <p class="age">Age: ${person.age}</p>
          <p class="hobbies">Hobbies: ${person.hobbies.join(", ")}</p>
          <button class="btn2-info">More info</button>
            <p></p>
          </div>
        </div>
      `;
      template += card;
    });
    personInfo.innerHTML = template;

    document.querySelectorAll(".btn-info").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const card = event.target.closest(".card");
        card.classList.toggle("is-flipped");
      });
    });
    
    document.querySelectorAll(".card-back").forEach((cardBack) => {
      cardBack.addEventListener("click", (event) => {
        event.stopPropagation();
        const card = event.target.closest(".card");
        card.classList.toggle("is-flipped");
      });
    });

    document.querySelectorAll(".btn-filter").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        let hobby = event.target.dataset.hobby;
        document.querySelectorAll(".card").forEach((card) => {
          let hobbies = card.querySelector(".hobbies").textContent;
          if (hobbies.includes(hobby)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
    
    
  };

  createCard();
});
