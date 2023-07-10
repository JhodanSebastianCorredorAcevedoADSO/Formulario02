const formulario = document.getElementById('formulario');
const btnEnviar = document.getElementById('btn-enviar');

const ficha = document.getElementById('ficha');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const ciudad = document.getElementById('ciudad');

const generos = document.getElementsByName('generos');
const habilidades = document.getElementsByName('habilidades');

const validarCorreo = correo => {
    return /^[^ \s@]+@[^\s@]+\[^\s@]+$/.test(correo);
}

const soloLetras = (e) => {
    const key = e.keyCode || e.which;
    const tecla = String.fromCharCode(key).toLowerCase();
    const letras = "áéíÓÚabcdefghijklmnñopqrstuvwxyz";
    const especiales = ['8', '32', '37', '39', '46'];
    let tecla_especiales = false;

    for (const i in especiales) {
        if (key == especiales[i]) {
            tecla_especiales = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especiales) {
        e.preventDefault()
    }
}

const soloNumeros = (e) => {
    if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode) {
        e.preventDefault()
    }
}

const enviarFormulario = formulario => {
    formulario.submit()
}

const validacion = (e) => {
    e.preventDefault()

    let seleccionHabilidad = 0
    for (const habilidad of habilidades){
        if (habilidad.checked){
            seleccionHabilidad++
        }
    }
    let seleccionGenero = ''
    for(const genero of generos){
        if (genero.checked){
            seleccionGenero = genero.value
            break;
        }
    }

    if(ficha.value === ""){
        alert('Por favor, escribe el numero de la ficha')
        ficha.focus()
        return false;
    }

    if(nombre.value === ""){
        alert('Por favor, escribe tus apellidos')
        apellido.focus()
        return false
    }

    if(apellido.value ===""){
        alert('Por favor, escribe tu nombre')
        nombre.focus
        return false
    }
    
    if(!validarCorreo.value ===""){
        alert('Por favor, escribe un correo electronico valido')
        correoorreo.focus
        return false
    }
    if(telefono.value ===""){
        alert('Por favor, escribe tu telefono')
        telefono.focus
        return false
    }
    if(seleccionGenero.value ===""){
        alert('Por favor, seleciona un genero')
        return false
    }

    if(ciudad.selectedIndex == null || ciudad.selectedIndex == 0){
        alert('Por favor, seleciona una ciudad')
        return false
    }

    if(seleccionHabilidad <3){
        alert('Por favor, seleciona como minimo 3 habilidades')
        return false
    }

    enviarFormulario(formulario)
}

nombre.addEventListener('keypress', soloLetras);
apellido.addEventListener('keypress', soloLetras);

telefono.addEventListener('keypress', soloNumeros);

btnEnviar.addEventListener('click', validacion)