const fruitForm = document.querySelector("#inputSection form");
const fruitList = document.querySelector("#fruitSection ul")

const deleteFruit = e => {
  e.target.remove();
}

const addFruit = (fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  li.addEventListener("click",deleteFruit, {once:true})
  fruitList.appendChild(li);
}

fruitForm.addEventListener("submit", e => {
  e.preventDefault();
  addFruit(e.target.fruitInput.value);
  e.target.fruitInput.value = "";
});
