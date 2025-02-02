function upperCase(){
    let input = document.getElementById("str");
    let string = input.value;
    let ans = "";

    for(let i=0;i<string.length;i++){
        if(i === 0 || string[i - 1] === " "){
            ans = ans + string[i].toUpperCase();
        }
        else{
            ans = ans + string[i];
        }
    }

    document.getElementById("result").innerText = ans;
    console.log(ans);
}