function getAttributes() {
  
    let hyperlink = document.getElementById("hyperlink");
    
    
    let image = document.getElementById("image");
    
   
    console.log("Hyperlink Attributes:");
    console.log("href:", hyperlink.getAttribute("href"));
    console.log("hreflang:", hyperlink.getAttribute("hreflang"));
    console.log("rel:", hyperlink.getAttribute("rel"));
    console.log("target:", hyperlink.getAttribute("target"));
    console.log("type:", hyperlink.getAttribute("type"));
    
    
    console.log("\nImage Attributes:");
    console.log("src:", image.getAttribute("src"));
    console.log("alt:", image.getAttribute("alt"));
    console.log("hreflang:", image.getAttribute("hreflang"));
    console.log("rel:", image.getAttribute("rel"));
    console.log("target:", image.getAttribute("target"));
    console.log("type:", image.getAttribute("type"));
  }
  
  
  window.onload = getAttributes;