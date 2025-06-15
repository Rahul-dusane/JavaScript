let str = prompt("Enter The String : ")
console.log("The String Is :" + str);


function getFileExtension(s) {
    let extension = s.split('.').pop();
    console.log('File extension:', extension);
}

getFileExtension(str);