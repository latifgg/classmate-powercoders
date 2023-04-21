import { personList } from "./personList.js";

document.addEventListener("DOMContentLoaded", () => {
  const personInfo = document.querySelector(".card-container");

  document.querySelectorAll(".card").forEach((card) => {
    let btn = card.querySelector(".btn-info");
    btn.addEventListener("click", () => {
        card.querySelector(".card-front").classList.toggle("is-flipped");
    });
});


  const createCard = () => {
    let template = "";

    personList.forEach((person) => {
      let card = `
        <div class="card">
          <div class="card-front">
            <img src="${person.img}" width="200px" alt="" />
            <p class="class-name">PowerCoders 2023 bootcamp</p>
            <h2 class="student-name">${person.name}</h2>
            <button class="btn-info">More info</button>
            <h5>⭐⭐⭐⭐⭐</h5>
          </div>
          <div class="card-back" style="display:none;">
            <img src="${person.img}" width="200px" alt="" />
            <p class="eye-color">Eye color: ${person.eyecolor}</p>
            <p class="age">Age: ${person.age}</p>
            <p class="hobbies">Hobbies: ${person.hobbies.join(", ")}</p>
            <p></p>
          </div>
        </div>
      `;
      template += card;
    });
    personInfo.innerHTML = template;
  };
  createCard();
});




  

