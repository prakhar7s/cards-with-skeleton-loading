const cardsContainer = document.querySelector(".cards-container");

var data = [];

import("./data.js")
  .then((res) => res.getData())
  .then((data_) => {
    data = data_;
    displayCards(data_);
  });

function displayCards(data) {
  // Alaways empty the container otherwise deuplicate cards will be inserted
  cardsContainer.innerHTML = "";

  data.map(({ type, about, image }) => {
    cardsContainer.innerHTML += createCards(type, about, image);
  });
}

function createCards(type, about, src) {
  return `
  <div class="card">
    <div class="image">
      <img src=${src}/>
    </div>
    <div class="content">
      <h4>${type}</h4>
      <div class="description">${about}</div>
    </div>
  </div>  
  `.trim();
}

function createSkeltonLoading() {
  for (let i = 0; i < 20; i++) {
    cardsContainer.innerHTML += `
    <div class="card loading">
      <div class="image"></div>
      <div class="content">
        <h4></h4>
        <div class="description"></div>
      </div>
    </div>
    `.trim();
  }
}

createSkeltonLoading();
