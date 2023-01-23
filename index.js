// // document.getElementById("count").innerText=5
// let count = 0
// console.log(count)
// // to print a value or to send it to console , 
// // it must be initialised first 
// let myAge=21
let b 

let countEl=document.getElementById("count")
let count = 0
function increment() {
    count=count+1
    countEl.innerText=count
}

function save(){
  let  saveCount = counter
  console.log(saveCount)
  b=saveCount
}

function reset() {
    count=0
    countEl.innerText=count
}


function prev() {
    let updateEnt = "Previous entries" 
    let updateX = updateEnt + "   " +b
    document.getElementById("prev").innerText = updateX
}
