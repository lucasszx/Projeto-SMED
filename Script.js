function clicou(event) {
  let show = document.getElementById("cil");
  let show2 = document.getElementById("gil");
  if (show.style.display === "block" && show2.style.display === "block") {
    show.style.display = "none";
    show2.style.display = "none";
  } else {
    show.style.display = "block";
    show2.style.display = "block";
  }
  event.stopPropagation();
}

function clicou2(event) {
  let info = event.currentTarget.querySelector("p");
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
  event.stopPropagation();
}
