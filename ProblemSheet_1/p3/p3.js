let num = parseInt(prompt("Enter The Number: "));
if(num < 0){
    alert("Number Is Not Valid...!");
}else{
    let i , count = 0;
    for( i = 1; i <= num; i++ ){
        if(num % i == 0){
            count++;
        }
    }
    if(count == 2){
        console.log("The  Number Is prime :");
    }else{
        console.log("The Number Is Not Prime :");
    }
}