
function countAndDisplayH1Elements() {

    let h1Elements = document.getElementsByTagName("h1");
    
    
    let count = h1Elements.length;
    
  
    let displayArea = document.getElementById("countDisplay");
    displayArea.textContent = "Total H1 elements: " + count;
  }
  
  