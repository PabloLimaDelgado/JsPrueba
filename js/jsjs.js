const registrase = document.getElementById('btnRegistro')
const entrar = document.getElementById('btnInicioSesion')
const formularioInscripcion = document.querySelector('.inicio')
const btnDos = document.querySelector('.botones');
const seccionInicioPag = document.getElementById('seccion-inicio-pagina')
const formularioRegistro = document.getElementById('form-registro')
const usuarioRegistroNombre = document.getElementById('inputUsuarioR')
const usuarioRegistroContraseña = document.getElementById('inputContraseñaR')
const usuarioTarjetaNum = document.getElementById('numTarjetaR')
const usuarioTarjetaNombre = document.getElementById('nombreTarjetaR')
const usuarioTarjetaVencimiento = document.getElementById('vencimientoTarjetaR')
const usuarioTrjetaCodigo = document.getElementById('codigoTarjetaR')

let arregloUsuario = JSON.parse(localStorage.getItem('usuarios')) || [];

class Usuario{
    constructor(nombre, contraseña, tarjeta){
        this.nombre = nombre
        this.contraseña = contraseña
        this.tarjetas = [tarjeta]
    }
}

class Tarjeta{
    constructor(numTarjeta, propTarjeta, vencimientoTarjeta, codigoSeguridadTarjeta){
        this.numTarjeta = numTarjeta
        this.propTarjeta = propTarjeta
        this.vencimientoTarjeta = vencimientoTarjeta
        this.codigoSeguridadTarjeta = codigoSeguridadTarjeta
    }
}


function crearTarjeta(cardNum, cardName, cardVencimiento, cardCode){
    let tarjeta1 = new Tarjeta(cardNum, cardName, cardVencimiento, cardCode)
    return tarjeta1
}

function crearUsuario(user, password, tarjeta) {
    let usuario = new Usuario(user, password, tarjeta);
    arregloUsuario.push(usuario); // Agregar usuario al array
    localStorage.setItem('usuarios', JSON.stringify(arregloUsuario))
    return usuario;
}

const btnRegistro = document.getElementById('enviar-reg')

btnRegistro.addEventListener('click', programaPrincipal)

function programaPrincipal(e){
    e.preventDefault()
    const user = usuarioRegistroNombre.value;
    const password = usuarioRegistroContraseña.value;
    const cardNum = usuarioTarjetaNum.value;
    const cardName = usuarioTarjetaNombre.value;
    const cardVencimiento = usuarioTarjetaVencimiento.value;
    const cardCode = usuarioTrjetaCodigo.value;

    const rellenarCampos = document.getElementById('texto-fallido')
    if(usuarioRegistroNombre.value == "" || usuarioRegistroContraseña.value == "" || usuarioTarjetaNum.value == "" || usuarioTarjetaNombre.value == "" || usuarioTarjetaVencimiento.value == "" || usuarioTrjetaCodigo.value == ""){
        rellenarCampos.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Complete todos los campos`
    }
    else{
        let tarjeta = crearTarjeta(cardNum, cardName, cardVencimiento, cardCode);
        let usuario = crearUsuario(user, password, tarjeta);
        seccionInicioPag.classList.add('disable')
    }
}

registrase.addEventListener('click', (event) => {
    event.preventDefault();
    formularioInscripcion.classList.add('inicio-disable')
    formularioRegistro.classList.remove('inicio-disable')
    formularioRegistro.classList.add('registro')
    btnDos.classList.add('disable')
});


entrar.addEventListener('click', (event) => {
    event.preventDefault()
    let userFound = false
    const userA = document.getElementById('usuarioEntrada')
    const passwordA = document.getElementById('contraseñaEntrada')
    const rellenarCampos = document.getElementById('texto-fallido-ingreso')

    arregloUsuario.forEach( (user) =>{
        if(userA.value == user.nombre && passwordA.value == user.contraseña){
            userFound = true
        }
    })

    if(userFound == false){
        rellenarCampos.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Usuario o contraseña incorrectos`
    }
    else{
        seccionInicioPag.classList.add('disable')
    }
})


