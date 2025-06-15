

function isLeap_year(){
    let n = document.getElementById("num").value;
    if(isNaN(n) || n <= 0){
        document.getElementById("result").innerText = "Enter Valid Year..!";
    }else{
        if(n % 4 == 0){
            document.getElementById("result").innerText = "Year Is Leap Year :";
        }
        else{
            document.getElementById("result").inrerText = "Year Is Not Leap Year :";
        }
    }
}