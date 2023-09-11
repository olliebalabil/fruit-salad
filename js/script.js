const fruitForm = document.querySelector("#inputSection form");
const fruitList = document.querySelector("#fruitSection ul");

const fruitNutrition = document.querySelector("#nutritionSection p");

const fetchFruitData = fruit => {
  fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
  .then(resp => resp.json())
  .then(data => addFruit(data))
  .catch(e => console.error(e))
}

const deleteFruit = e => {
  e.target.remove();

};

let totalCarb = 0;
let totalPro = 0;
let totalFat = 0;
let totalCal = 0;
let totalSug = 0;

const addFruit = (fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit.name;
  li.addEventListener("click",deleteFruit, {once:true})
  fruitList.appendChild(li);
  totalCarb += fruit.nutritions.carbohydrates;
  totalPro += fruit.nutritions.protein;
  totalFat += fruit.nutritions.fat;
  totalCal += fruit.nutritions.calories;
  totalSug += fruit.nutritions.sugar
  fruitNutrition.textContent = `Carbs: ${totalCarb.toFixed(2)}, Protein: ${totalPro.toFixed(2)}, Fat: ${totalFat.toFixed(2)}, Calories: ${totalCal.toFixed(2)}, Sugar:${totalSug.toFixed(2)}`;
};

fruitForm.addEventListener("submit", e => {
  e.preventDefault();
  fetchFruitData(e.target.fruitInput.value);
  e.target.fruitInput.value = "";
});
