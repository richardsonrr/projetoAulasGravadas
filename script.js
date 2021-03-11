let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("show-menu");
  hamburguer.classList.toggle("show-menu");
});
function listaon() {
  if (document.getElementById("hDL").style.display === "block") {
    document.getElementById("hDL").style.display = "none";
  } else {
    document.getElementById("hDL").style.display = "block";
  }
}
function listaon_2() {
  if (document.getElementById("iEL").style.display === "block") {
    document.getElementById("iEL").style.display = "none";
  } else {
    document.getElementById("iEL").style.display = "block";
  }
}
// aulaIH1 ate a 4 ==> otimizar depois pra usar apenas uma funcao

function aulaIH2() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/MpYwx3bEbRA";
}
function aulaIH3() {
  alert("Aula disponivel em breve");
}
function aulaIH4() {
  alert("Aula indisponivel");
}
//aulaIE1 a 4 ==> otimizar depois para usar apenas uma funcao

function aulaIE3() {
  alert("Aula indisponivel");
}
function aulaIE4() {
  alert("Aula indisponivel");
}
