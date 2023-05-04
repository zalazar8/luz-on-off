function cambiarImg() {

    var image = document.getElementById("miImg");
    var tecla = document.getElementById("tec");
    var color = document.getElementById("color");
    var titulo = document.getElementById("titulo");
    
    if (image.src.match("./img/lamp_on.png")) {
    image.src = "./img/lamp_off.png";
    tecla.src = "./img/tecla_off.jpg";
    color.style.backgroundColor = "#363636";
    titulo.style.color = "#fff";
    titulo.innerHTML = "Click en la tecla para prender la luz.";
    } else {
    image.src = "./img/lamp_on.png";
    tecla.src = "./img/tecla_on.jpg";
    color.style.backgroundColor = "#fff";
    titulo.style.color = "#000";
    titulo.innerHTML = "Click en la tecla para apagar la luz."
    }

}
