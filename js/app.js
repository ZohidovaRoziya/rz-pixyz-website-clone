
//// SERVICES SECTION BTN JS 
document.querySelectorAll(".services-btn").forEach((item) => {
  item.addEventListener("click", function open() {
    this.parentElement
      .querySelector(".services-cards-wrap")
      .classList.toggle("hidden");
  });
});

let barsEl = document.getElementById("bars");
let overlayEl = document.getElementById("overlay");
let barsNavEl = document.getElementById("bars-nav");


barsEl.addEventListener("click", ()=>{
  overlayEl.classList.toggle("hidden");
  barsNavEl.classList.toggle("hidden");
})

// DOCUMENT AND OVERLAY  LISTENING 
document.addEventListener("click", (e)=>{
  if(e.target.classList[0] == "overlay"){
      overlayEl.classList.add("hidden")
   barsNavEl.classList.add("hidden")
  }
})


// DOCUMENT AND KEYBOARD  LISTENING 
document.addEventListener("keydown", (e)=>{
  e.preventDefault()
  if(e.keyCode == 27 || e.keyCode == 46 || e.keyCode == 13){
      overlayEl.classList.add("hidden")
      barsNavEl.classList.add("hidden")
  }
})

