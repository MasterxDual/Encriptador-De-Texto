function botonEncriptado() {
    const encriptar = document.getElementById("input-texto").value
    const encriptando = encriptar.replace(/[^a-zA-Z]/g, "");
    const encriptado = encriptando.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("input-texto2").value = encriptado;
}
function botonDesencriptado() {
    const desencriptar = document.getElementById("input-texto").value;
    const desencriptando = desencriptar.replace(/[^a-zA-Z]/g, "");
    const desencriptado = desencriptando.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
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

//Elimina los acentos: 

//const encriptando2 = encriptando1.normalize("NFD").replace(/\p{Diacritic}/gu, ""); 
// const desencriptando = desencriptar.normalize("NFD").replace(/\p{Diacritic}/gu, ""); //Elimina los acentos
