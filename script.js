let editor=CodeMirror.fromTextArea(document.getElementById("editor"),{
    lineNumbers:true,
    mode:"text/x-c++src",
    theme:"dracula",
    autoCloseBrackets:true,
});

var width = window.innerWidth;
editor.setSize(width*0.7, "500");

let option = document.getElementById("autoSizingSelect");

option.addEventListener("change",()=>{
    if(option.value=="Java"){
        editor.setOption("mode","text/x-java");
    }
    else if(option.value=="Python"){
        editor.setOption("mode","text/x-python");
    }
    else{
        editor.setOption("mode","text/x-c++src");
    }
});