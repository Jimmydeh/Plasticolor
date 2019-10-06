let x 
let y
let z
let resultOutput = ""


window.onload = function(){ 
    
    document.getElementById("submit").addEventListener("click", displayOutput);
    
    function displayOutput(){
        
        if (resultOutput === "") {
        x = parseFloat(document.getElementById("firstVar").value);
        y = parseFloat(document.getElementById("secondVar").value);
        z = y*(1/(x*3/5));
        rounded = Math.round(z*10)/10;
        resultOutput = document.createTextNode(rounded);
        document.getElementById("test").appendChild(resultOutput);
        }else {
        document.getElementById("test").removeChild(resultOutput);
        resultOutput = ""
        x = parseFloat(document.getElementById("firstVar").value);
        y = parseFloat(document.getElementById("secondVar").value);
        z = y*(1/(x*3/5));
        rounded = Math.round(z*10)/10;
        resultOutput = document.createTextNode(rounded);
        document.getElementById("test").appendChild(resultOutput);}




    


}};
