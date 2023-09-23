//let data=document.getElementById("a").innerText;
//let data=document.getElementById("a").innerHTML;
//data=document.getElementById("aa").innerHTML;
//let data=document.getElementById("a").getAttribute("style");
data=document.getElementById("a").getAttributeNode("style");   //this gives all style structure
data=document.getElementById("a").attributes[0];


console.log(data)
