const blurDivs = document.querySelectorAll("#small")
console.log("helo?")
blurDivs.forEach(div =>
div.querySelectorAll("img")
  function loaded() {
    div.classList.add("loaded")
    console.log("well")
  }
if(img.complete){
loaded()
console.log("hello")
}
 else {
img.addEventListener("load", loaded)
}
)
// Load cards on page load
