const registrase = document.getElementById('btnRegistro');
const entrar = document.getElementById('btnInicioSesion')
const formularioInscripcion = document.querySelector('.inicio');
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

btnRegistro.addEventListener('click', () => {
    const rellenarCampos = document.getElementById('texto-fallido')
    if(usuarioRegistroNombre.value == null || usuarioRegistroContraseña.value == null || usuarioTarjetaNum.value == null || usuarioTarjetaNombre.value == null || usuarioTarjetaVencimiento.value == null || usuarioTrjetaCodigo.value == null){
        rellenarCampos.innerText = `Por favor complete todos los campos`
    }
    seccionInicioPag.classList.add('disable')
})
btnRegistro.addEventListener('click', programaPrincipal)

function programaPrincipal(e){
    e.preventDefault()
    const user = usuarioRegistroNombre.value;
    const password = usuarioRegistroContraseña.value;
    const cardNum = usuarioTarjetaNum.value;
    const cardName = usuarioTarjetaNombre.value;
    const cardVencimiento = usuarioTarjetaVencimiento.value;
    const cardCode = usuarioTrjetaCodigo.value;

    let tarjeta = crearTarjeta(cardNum, cardName, cardVencimiento, cardCode);
    let usuario = crearUsuario(user, password, tarjeta);

}

registrase.addEventListener('click', (event) => {
    event.preventDefault();
    formularioInscripcion.classList.add('inicio-disable')
    formularioRegistro.classList.remove('inicio-disable')
    formularioRegistro.classList.add('registro')
});


entrar.addEventListener('click', (event) => {
    event.preventDefault()
    seccionInicioPag.classList.add('disable')
})
