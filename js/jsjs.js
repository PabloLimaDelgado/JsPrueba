const medioPagoCerrarSesion = document.querySelector('.medioPago-cerrarSesion')
const btnMedioPago = document.getElementById('btnMedioPago')
const btnCerrarSesion = document.getElementById('btnCerrarSesion')

const medioPago = document.getElementById('medio-pago')

btnMedioPago.addEventListener('click', () => {
    medioPagoCerrarSesion.classList.remove('medioPago-cerrarSesion')
    medioPagoCerrarSesion.classList.add('disable-MPCS')
    medioPago.classList.remove('disable-MPCS')
    medioPago.classList.add('medioPago')
});

btnCerrarSesion.addEventListener('click', () => {
    medioPagoCerrarSesion.classList.remove('medioPago-cerrarSesion')
    medioPagoCerrarSesion.classList.add('disable-MPCS')
})