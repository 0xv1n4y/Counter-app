
let counting= document.getElementById("count-el")
let saved= document.getElementById("save-el")




let count=0

function increment(){
    count+=1;
    counting.textContent=count
}

function save(){
    let drop = count+","
    saved.textContent+=drop
    counting.textContent=0;
    count=0;

}