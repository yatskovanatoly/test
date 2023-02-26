const blocks = document.querySelectorAll(".over");
const blocks2 = document.querySelectorAll(".text");

blocks.forEach(block => {
  block.addEventListener("mouseover", function (){
    blocks2.forEach (blockx => {
      blockx.style.color = "rgba(0,0,0,0)";
    });
  });
    block.addEventListener("mouseleave", function () {blocks2.forEach (blocky => {
      blocky.style.color = "black";});
});
});
  
  
  