
function calAge(event){

    event.preventDefault();
   let birthDate = new Date(document.getElementById("dat1").value);
   let today = new Date();

   //console.log(birthDate);
   //console.log(day);

    let year = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDay() - birthDate.getDate(); 

    if(month < 0 && (month === 0 && day < 0)){
        year--;
    }
    
    document.getElementById("result").innerText = "Your Age Is " +year +" .";
}
