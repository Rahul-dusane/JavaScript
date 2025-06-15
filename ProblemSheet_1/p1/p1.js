function reversNumber(){
    let n = document.getElementById("num").value;
    n = parseInt(n);
    console.log(n);

    if(n <= 0){
        alert("Enter Valid Number :");
    }else{
        let revers = 0;
        parseInt(n.value);

        while(n > 0){
            let digit = n % 10;
            revers = revers * 10 + digit;
            n = Math.floor(n / 10);
        }
        document.getElementById("result").innerText = "The Revers : " +revers;
    }
}
