//Encuentra al elemento HTML (el boton) mediante su ID
const miBoton = document.getElementById('miBoton');
//Define la función que se ejecutará cuando se haga clic en el botón
function handleClick(){
    alert('Hola! Has hecho clic en el botón.');
}
//Agrega un oyente de eventos para escuchar el cloc del botón
miBoton.addEventListener('click', handleClick);

