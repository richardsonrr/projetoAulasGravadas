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
function listaon_3() {
  if (document.getElementById("eCL").style.display === "block") {
    document.getElementById("eCL").style.display = "none";
  } else {
    document.getElementById("eCL").style.display = "block";
  }
}
// aulaIH1 ate a 4 ==> otimizar depois pra usar apenas uma funcao

function aulaIH2() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/MpYwx3bEbRA";
}
function aulaIH3() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/byN7ikJ1X3M";
}
function aulaIH4() {
  alert("Aula indisponivel");
}
function aulaIH5() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/63fBu_jsMls";
}

//aulaIE1 a 4 ==> otimizar depois para usar apenas uma funcao

function aulaIE3() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/WAjYwEhcixk";
}
function aulaIE4() {
  alert("Aula indisponivel");
}
function aulaIE5() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/PDI8uHwccvQ";
}

//aulas concreto

function aulaEC1() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/NjDU59iuxUc";
}
function aulaEC2() {
  document.querySelector("iframe").src =
    "https://www.youtube.com/embed/r4J4Jm75pek";
}
