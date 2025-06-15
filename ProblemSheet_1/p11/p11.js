
function dateDiff(){

    event.preventDefault();
    // Event.preventDefault();
    let d1 = document.getElementById("dat1").value;
    let d2 = document.getElementById("dat2").value;

    // console.log(d1);
    // console.log(d2);

    if(!d1 || !d2){
        alert("Please Semect Both The Date...");
        return false;   
    }

    let date1 = new Date(d1);
    let date2 = new Date(d2);

    let diff = Math.abs(date2 - date1);

    // console.log(diff);

    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // console.log(days);

    document.getElementById("result").innerText = "The Difference Between " +d1 +"And " +d2 +" = " +days;

    return false;
   
}