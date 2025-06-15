function countAndDisplayItems() {
  
    let dropdown = document.getElementById("dropdown");
    
    
    let itemCount = dropdown.options.length;
    
    
    let itemDisplay = "Number of items: " + itemCount + "\n\n";
    
    
    for (let i = 0; i < itemCount; i++) {
      itemDisplay += "Item " + (i + 1) + ": " + dropdown.options[i].text + "\n";
    }
    
    
    alert(itemDisplay);
  }