
function updateNutritionUI(){
  calTarget.innerText = "Calories cible : "+state.calories.target;
  calConsumed.innerText = "Calories consommées : "+state.nutrition.consumed;
}
function addCalories(){
  state.nutrition.consumed += Number(foodCal.value||0);
  save(); updateNutritionUI();
}
