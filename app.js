let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
  let iteam = document.createElement("li");
  iteam.innerText = inp.value;
});