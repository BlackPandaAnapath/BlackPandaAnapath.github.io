
function runCoach(){
  if(state.weightHistory.length<7) return;
  let w = state.weightHistory;
  let diff = w[w.length-7].weight - w[w.length-1].weight;
  let rate = diff / w[w.length-7].weight * 100;
  let msg = "Progression correcte, continue.";
  let before = state.calories.target;
  let after = before;

  if(rate < 0.25){ after -= 100; msg="Plateau détecté, -100 kcal."; }
  if(rate > 1){ after += 100; msg="Perte trop rapide, +100 kcal."; }

  if(after!==before){
    state.calories.target = after;
    state.coach.history.push({
      date:new Date().toLocaleDateString(),
      action:"Ajustement",
      reason:msg,
      caloriesBefore:before,
      caloriesAfter:after
    });
  }
  coachMessage.innerText = msg;
  renderCoachHistory();
  save();
}
function renderCoachHistory(){
  coachHistory.innerHTML="";
  state.coach.history.forEach(h=>{
    let li=document.createElement("li");
    li.textContent=`${h.date} : ${h.reason}`;
    coachHistory.appendChild(li);
  });
}
