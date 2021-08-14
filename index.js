/**
 * @author Francisco Zapata

 */
const button = document.querySelector('#button-action');
const container1 = document.getElementById('first-image');
const container2 = document.getElementById('second-image');

// Listeners
button.onclick = handlerClick;

// Funciones
function handlerClick() {
	// e.preventDefault();

	container1.classList.toggle('hidden');
	container2.classList.toggle('hidden');
}
