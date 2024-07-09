function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i es para que le aferte tanto a mayusculas como a minusculas
    // g es para que afecte toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i es para que le aferte tanto a mayusculas como a minusculas
    // g es para que afecte toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    navigator.clipboard.writeText(contenido.value)
        .then(() => {
            alert("¡Se copió!");
        })
        .catch(err => {
            console.error('Error al copiar: ', err);
        });}