function displayFormElements() {
 
    let form = document.getElementById("myForm");
    
    
    let formElements = form.elements;
    
    
    let formData = "";
    
    
    for (let i = 0; i < formElements.length; i++) {
     
      if (formElements[i].tagName === "INPUT" || formElements[i].tagName === "TEXTAREA" || formElements[i].tagName === "SELECT") {
        
        formData += formElements[i].name + ": " + formElements[i].value + "<br>";
      }
    }
    
    
    document.getElementById("displayArea").innerHTML = formData;
  }