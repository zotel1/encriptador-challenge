function encriptar() {
    var texto = document.getElementById("inputTexto").ariaValueMax.toLowerCase();
    // i es para que le aferte tanto a mayusculas como a minusculas
    // g es para que afecte toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/i, "enter");
    var txtCifrado = txtCifrado.replace(/o/i, "ober");
    var txtCifrado = txtCifrado.replace(/i/i, "imes");
    var txtCifrado = txtCifrado.replace(/a/i, "ai");
    var txtCifrado = txtCifrado.replace(/u/i, "ufat");

    document.getElementById("imgDerecha").style.display = none;
    document.getElementById("texto").style.display = none;
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}