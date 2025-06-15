
function find_largest(){
    const numbers = [];

    for(var i = 1; i <= 5; i++){
        numbers.push(parseInt(document.getElementById('num' + i).value));
    }
    
    // console.log(numbers);

    var max = numbers[0];
    for(var i = 0; i < 5; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }

    document.getElementById("result").innerHTML = "The Largest Number In Array Is " +max  +".";
    // console.log(max);
    
}