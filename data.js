
let state = JSON.parse(localStorage.getItem("goatV5")) || {
  user:{weight:80,height:180,age:30,activity:1.6},
  calories:{maintenance:2800,target:2240,deficit:0.8,dayType:'training'},
  nutrition:{consumed:0},
  weightHistory:[],
  coach:{lastCheck:null,history:[]}
};
function save(){localStorage.setItem("goatV5",JSON.stringify(state));}
