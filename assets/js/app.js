
document.addEventListener('DOMContentLoaded',function(){
    const txtAreaEncriptador = document.getElementById('txtAreaEncriptador');
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const txtAreaResultado = document.getElementById('txtAreaResultado');
    const btnCopiar = document.getElementById('btnCopiar');
    const mensajeDiv = document.getElementById('mensaje');

    function encriptar (texto){
        return texto.replace(/e/g,"enter")
                    .replace(/i/g,"imes")
                    .replace(/a/g,"ai")
                    .replace(/o/g,"ober")
                    .replace(/u/g,"ufat");
    }

    function desencriptar (texto){
        return texto.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
    }

    function validarTexto (texto){
        return /^[a-z\s]+$/.test(texto);
    }

    function ocultarDiv(){
        if(txtAreaResultado.value.trim()===""){
            mensajeDiv.classList.remove('hidden');
            txtAreaResultado.classList.remove('visible');
            btnCopiar.classList.remove('visible');
        }else{
            mensajeDiv.classList.add('hidden');
            txtAreaResultado.classList.add('visible');
            btnCopiar.classList.add('visible');
        }
    }

    function limpiar(){
        txtAreaEncriptador.value = "";
        txtAreaResultado.value = "";
        ocultarDiv();
    }

    btn__reinicio.addEventListener('click',function(event){
        event.preventDefault();
        limpiar();
    });

    btnEncriptar.addEventListener('click',function(event){
        event.preventDefault();
        const texto = txtAreaEncriptador.value;
        if(validarTexto(texto)){
            txtAreaResultado.value = encriptar(texto);
            ocultarDiv();
            txtAreaEncriptador.setCustomValidity("");
        }else{
            txtAreaEncriptador.setCustomValidity("Ingrese un texto válido.");
            txtAreaEncriptador.reportValidity();
        }
    });

    btnDesencriptar.addEventListener('click',function(event){
        event.preventDefault();
        const texto = txtAreaEncriptador.value;
        if(validarTexto(texto)){
            txtAreaResultado.value = desencriptar (texto);
            ocultarDiv();
            txtAreaEncriptador.setCustomValidity("");
        }else{
            txtAreaEncriptador.setCustomValidity("Ingrese un texto válido.");
            txtAreaEncriptador.reportValidity();
        }
    });

    btnCopiar.addEventListener('click',function(event){
        event.preventDefault();
        txtAreaResultado.select();
        document.execCommand('copy');
        txtAreaEncriptador.setCustomValidity("Texto copiado");
        txtAreaEncriptador.reportValidity();
        txtAreaEncriptador.value = txtAreaResultado.value;
        txtAreaResultado.value="";
        ocultarDiv();
    });

    txtAreaResultado.addEventListener('input',ocultarDiv);
    ocultarDiv();
});







