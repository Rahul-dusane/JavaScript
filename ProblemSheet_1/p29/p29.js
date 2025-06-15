function validateForm() {
           
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');

    
    var nameError = document.getElementById("nameError");
    var ageError = document.getElementById("ageError");
    var genderError = document.getElementById("genderError");
    var resultMessage = document.getElementById("result");

    nameError.innerHTML = "";
    ageError.innerHTML = "";
    genderError.innerHTML = "";
    resultMessage.innerHTML = "";

    var isValid = true;

    if (name === "") {
        nameError.innerHTML = "Name is required.";
        isValid = false;
    }

    if (age === "" || isNaN(age) || age < 15 || age > 20) {
        ageError.innerHTML = "Age must be between 15 and 20.";
        isValid = false;
    }

    if (!gender) {
        genderError.innerHTML = "Please select a gender.";
        isValid = false;
    }

    if (isValid) {
        resultMessage.innerHTML = "Form submitted successfully!";
        resultMessage.className = "success";
    } else {
        resultMessage.className = "";
    }

    return false; 
}