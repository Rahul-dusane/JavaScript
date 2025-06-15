function updateWindowSize() {
 
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
   
    document.getElementById("sizeDisplay").innerHTML = "Window Width: " + windowWidth + "px<br>Window Height: " + windowHeight + "px";
  }
  
  
  window.onload = updateWindowSize;
  
  
  window.addEventListener("resize", updateWindowSize);