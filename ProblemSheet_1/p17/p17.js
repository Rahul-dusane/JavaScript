
function join(){
  let string = document.getElementById("str").value;
  // console.log(string);

  let remove = string.split(",");
  // console.log(remove);
  let combain = remove.join("+");
  // console.log(combain);
  document.getElementById("result").innerHTML = "The String: " +combain;
}
