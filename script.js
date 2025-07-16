let textElement = document.querySelector(".blank-text");
let button1 = document.querySelector("#textButton");

let textID = 1;

    button1.addEventListener("click", alterarTexto);
    function alterarTexto() {
        
        if (textID === 1) {
            textElement.innerHTML = "Seja bem-vindo ao meu site!";
            textID = 2;
        } 
        else {
            textElement.innerHTML = "&nbsp";
            textID = 1;
        }
    }
