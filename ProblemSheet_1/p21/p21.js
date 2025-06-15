function addRow() {

    let table = document.getElementById("myTable");
  
    
    let newRow = table.insertRow();
  
    
    let cell1 = newRow.insertCell();
    cell1.appendChild(document.createTextNode("New Cell 1"));
    
    let cell2 = newRow.insertCell();
    cell2.appendChild(document.createTextNode("New Cell 2"));
    
    let cell3 = newRow.insertCell();
    cell3.appendChild(document.createTextNode("New Cell 3"));
  }