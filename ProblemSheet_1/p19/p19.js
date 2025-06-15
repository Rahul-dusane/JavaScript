
function decomposeurl(){
    var url=document.getElementById("i1").value;

    var protocol=url.protocol.replace(":","");
    var domain=url.hostname.replace("/","");
    var page=url.page;
    var extension=url.pathname.split(".").pop();

    document.getElementById("result").innerHTML= "protocol:" +protocol + "domain:" + domain + "page: " +page + "extension:" + extension;

}