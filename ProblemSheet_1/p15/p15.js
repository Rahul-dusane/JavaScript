
function binarySearch(arr , element){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(element == arr[mid]){
            return mid;
        }
        if(element < arr[mid]){
            end = mid - 1;
        }else{
           start = mid + 1; 
        }
    } 
    return -1;
}


function search(){
const numbers = [];

    for(let i = 1; i <= 5; i++){
        numbers.push(parseInt(document.getElementById('num' + i).value));
    }

    let x = parseInt(document.getElementById("sear").value);  

    let result = binarySearch(numbers , x);

    document.getElementById("result").innerText = "The Element is on " +result +" Index.";

}