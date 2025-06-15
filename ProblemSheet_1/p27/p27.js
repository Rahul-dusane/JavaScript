let arrayElements = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  
 
let dropdown = document.getElementById("dropdown");


dropdown.innerHTML = "";


for (let i = 0; i < arrayElements.length; i++) {
  let option = document.createElement("option");
  option.text = arrayElements[i];
  dropdown.add(option);
}