function changeImageDimensions() {
  
    let heightValue = document.getElementById("heightInput").value;
    let widthValue = document.getElementById("widthInput").value;
    
  
    let image = document.getElementById("resizeImage");
    
    
    image.style.height = heightValue + "px";
    image.style.width = widthValue + "px";
}