
function showTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function addWeight(){
  state.weightHistory.push({date:new Date(),weight:Number(weightInput.value)});
  save(); renderWeights(); runCoach();
}
function renderWeights(){
  weightList.innerHTML="";
  state.weightHistory.forEach(w=>{
    let li=document.createElement("li");
    li.textContent = w.weight+" kg";
    weightList.appendChild(li);
  });
}
updateNutritionUI(); renderWeights(); renderCoachHistory();
