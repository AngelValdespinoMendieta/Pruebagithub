// Espera que el DOM esté completamente cargado
//uso de botones
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón y el título
    const btn = document.getElementById("myButton");
    const title = document.getElementById("mainTitle");

    // Cambiar el color del título cuando se hace clic en el botón
    btn.addEventListener("click", function () {
        title.style.color = "blue";
        title.textContent = "¡Haz hecho clic en el botón!";
		// Cambiar el color de fondo de la página
    changeBgButton.addEventListener("click", function () {
        document.body.style.backgroundColor = "#ffcccb"; // Cambiar el fondo a un color suave
    });
});
