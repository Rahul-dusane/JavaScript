
function join(){
    let string = document.getElementById("str").value;
    // console.log(string);
  
    let remove = string.split(" ");
    // console.log(remove);
   
    document.getElementById("result").innerHTML = "The String: " +remove;
  }