function botonEncriptado() {
    const encriptar = document.getElementById("input-texto").value
    const encriptado = encriptar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("input-texto2").value = encriptado;
}
function botonDesencriptado() {
    const desencriptar = document.getElementById("input-texto").value;
    const desencriptado = desencriptar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("input-texto2").value = desencriptado;
}
function botonCopiar() {
    const copiarTexto = document.getElementById("input-texto2");
    copiarTexto.select();
    document.execCommand("Copy");
}
function botonPegar() {
    document.getElementById("input-texto").value = document.getElementById("input-texto2").value;
}
