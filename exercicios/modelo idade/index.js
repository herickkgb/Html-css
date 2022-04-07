function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var ress = document.getElementById("ress");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Erro, Dados incorretos");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[1].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança img
        img.setAttribute("src", "criançahomen.jpg");
      } else if (idade <= 21) {
        //JOVEN
        img.setAttribute("src", "jobemhomen.jpg");
      } else if (idade < 50) {
        //idoso
        img.setAttribute("src", "foto-adultohomen.jpg");
      } else if (idade > 50) {
        //idoso
        img.setAttribute("src", "velhohomen.jpg");
      }
    } else if (fsex[0].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "criançamulher.jpg");
      } else if (idade <= 21) {
        //JOVEN
        img.setAttribute("src", "jovemmulher.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "adultomulher.jpg");
        //adultto
      } else {
        //idoso
        img.setAttribute("src", "velhomulher.jpg");
      }
    }
    ress.style.textAlign = "center";
    ress.innerHTML = "Detectamos " + genero + " com " + idade + " Anos";
    ress.appendChild(img);
  }
}
