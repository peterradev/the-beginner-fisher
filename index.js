class UI {
  
  constructor(){
    this.lure = document.querySelector('div.lures');
  }




  showLures(lures){
    let output = '';

    lures.forEach((lure) => {
      output += `
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">${lure.name}</h4>
            <p class="card-text">${lure.description}</p>
          </div>
        </div>
      `
    });
    this.lure.innerHTML = output;
  }
}

const ui = new UI();

const getLures = () => {
  fetch('https://the-beginner-fisher.herokuapp.com/lures')
    .then(res => res.json())
    .then(data => ui.showLures(data));
}


document.addEventListener('DOMContentLoaded', getLures);