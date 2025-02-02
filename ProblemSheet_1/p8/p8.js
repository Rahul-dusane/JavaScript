
function checkFormat(getDate){

    let checkExpretion = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/;
    let check = getDate.match(checkExpretion);

    if(!check){
        document.getElementById("result").innerText = "Invalid Date Format..! Use YYYY-MM-DD HH:MM";
        return ;
    }
    
    const[, year, month, day, hours, minutes] = check;

    const date = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);

    if(isNaN(date.getTime())){
        const error = document.getElementById("result").innerText = "Invalid Date...!";
        return null;
    }
    return date;
}

function addMinutes(){ 
    let getDate = document.getElementById("date").value;
    
    let valid = checkFormat(getDate);
    if(valid){
        let min = parseInt(document.getElementById("minut").value);
        if(isNaN(min)|| min>59 || min<=0){
            document.getElementById("result").innerText = "Enter Valid Minutes...!";
            return ;
        }
        let newDate = new Date(valid.getTime() + min * 60000); 
        
        document.getElementById("result").innerText = "The Updated Date And Time (mm/dd/yyyy, hh:mm): "+newDate.toLocaleString();;
    }
}