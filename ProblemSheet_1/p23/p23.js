
function changeParagraphColor() {

  let colorValue = document.getElementById("colorInput").value;
 
  let paragraphs = document.getElementsByTagName("p");
  
  
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorValue;
  }
}
