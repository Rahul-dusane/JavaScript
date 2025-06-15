
function find_sum(){
    const numbers = [];

    for(var i = 1; i <= 5; i++){
        numbers.push(parseInt(document.getElementById('num' + i).value));
    }
    
    let sum = 0;
    for(var i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    console.log(sum);
    document.getElementById("result").innerText = "The Sum Of The Array Element Is " +sum +"."; 
    
}