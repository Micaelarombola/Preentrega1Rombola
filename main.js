let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let materia = prompt("Ingrese su materia");
alert(`Bienvenida ${nombre} ${apellido} Su materia es: ${materia}`);

let notaPreEntrega;

// Utilizar un bucle while para solicitar la nota hasta que se ingrese una entrada válida mayor o igual a 7
while (true) {
    // Solicitar al usuario ingresar la nota de la pre-entrega
    let input = prompt("Ingresa la nota de la pre-entrega:");
    notaPreEntrega = parseFloat(input);

    // Verificar si la entrada es válida
    if (!isNaN(notaPreEntrega)) {
        if (notaPreEntrega >= 7) {
            // Mostrar el mensaje de resultado
            alert("Aprobado");
        } else {
            // Mostrar el mensaje de resultado
            alert("Desaprobado");
        }

        break; // Salir del bucle si la entrada es válida
    } else {
        alert("Por favor, ingrese una nota válida.");
    }
}
