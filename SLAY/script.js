document.querySelector("#over").addEventListener("mouseover", function () {
  document.querySelector("#text").style.color = "rgba(0,0,0,0)";
});

document.querySelector("#over").addEventListener("mouseleave", function () {
  document.querySelector("#text").style.color = "black";
});
