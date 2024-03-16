var container =document.getElementById("container");

for (let index=0; index<9; index++){
    var remainder= index % 2;
    container.innerHTML += `<div class="box" onclick=(change(this))></div>`;
}

var check = true;

function change(box){
   if (box.innerHTML === "") {
    
       if (check === true) {
           box.innerHTML += `<img src="assets/tick.png">`;
           check = false;
        }else{
            box.innerHTML += `<img src="assets/cross.png">`;
            check = true;
        }
        
    }
}