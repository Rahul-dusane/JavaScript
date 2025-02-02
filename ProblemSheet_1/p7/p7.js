
function longestWord(){

    let input = document.getElementById("str");
    let string = input.value;
    console.log(string);
    let ans = "";
    let temp = "";
    for(let i = 0 ;i < string.length ;i++){
        if(string[i] != " "){
            temp += string[i];
        }
        if(string[i] == " "){
            if(temp.length > ans.length){
                ans= temp;
            }
            temp = "";

        }
    }
    if(temp.length > ans.length){
        ans = temp;
    }

    console.log("The Longest Word In String Is : " +ans);
    document.getElementById("result").innerText = "The Longest Word In String Is : "+ans;
}