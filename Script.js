function clicou(){
    let clic = document.getElementById("daf")
    let show = document.getElementById("cil")
    let show2 = document.getElementById("gil")
    
    if (show.style.display === "block" && show2.style.display === "block") {
    show.style.display = "none";
    show2.style.display = "none";
  } else {
    show.style.display = "block";
    show2.style.display = "block";
  
  }
  }
  
  
  