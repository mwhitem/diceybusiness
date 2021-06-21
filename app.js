let diceContainer = document.getElementById("dice-container");
let getButton = document.getElementById("get-button");
let rollButton = document.getElementById("refresh-dice");
let sumButton = document.getElementById("sum-dice");
let dieArr = [];
counter = 0;

class Die {
  constructor() {
    this.div = document.createElement("div");
    this.value = counter;
    this.div.className = "dice-box";
    this.roll();
    this.createArr();
    this.removeDie();
    diceContainer.appendChild(this.div);
    
};

  roll() {
    counter = Math.floor(Math.random() * 6);
    counter++;
    this.value = counter;
    this.div.id = counter;
    this.div.innerText = this.value;
  }

  createArr() {
    dieArr.push(this);
  }
  removeDie() {
    this.div.addEventListener("dblclick", function () {
      this.remove();
    })
  }
};

getButton.addEventListener("click", () => {
  let die = new Die();
  die.roll();
});

rollButton.addEventListener("click", () => {
  for (let index = 0; index < dieArr.length; index++) {
    dieArr[index].roll();
  }
});



sumButton.addEventListener("click", () => {
  
  function getSum() {
    let sum = 0;
    for (let i = 0; i < dieArr.length; i++)
    { 
      sum += dieArr[i]
      // sum += counter;
    }
    alert(sum);   
  }
  getSum();
})