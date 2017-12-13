addListener();
mostraNomeAluno();
var cont = 0;
let mensagens;

function addListener() {
    matricula = document.getElementsById("verificacao");
    for (var i = 0; matricula.length; i++) {
        x = matricula.item(i);
        x.addEventListener("keydown", click);
        console.log("Aluno " + x);
    }

}


function click(event) {

}

function mostraNomeAluno() {
    var foo = document.querySelector("verificacao");

    mensagens.forEach(function (t) {
        var spa = document.createElement("span");
        spa.style.width = "50px";
        spa.style.height = "50px";
        spa.textContent = t;
        foo.appendChild(spa);
    })

}



