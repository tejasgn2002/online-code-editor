function run(){
    let htmlcode = document.getElementById('html-text').value;
    let csscode = document.getElementById('css-text').value;
    let jscode = document.getElementById('js-text').value;
    let outputcode = document.getElementById('output-display');
    document.getElementById("output-display").style.background = "white";
    outputcode.contentDocument.body.innerHTML = 
    htmlcode + "<style>" + csscode + "<style>" ;
    outputcode.contentWindow.eval(jscode);
}