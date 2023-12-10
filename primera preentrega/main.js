

let nombre= prompt("Ingrese su nombre");
let apellido=prompt("Ingrese su apellido");
let materia=prompt("ingrese su materia");
alert(`Bienvenida ${nombre} ${apellido} Su materia es: ${materia}`);

// Función para determinar si una entrega fue aprobada o desaprobada
function resultadoPreEntrega(nota) {
    return nota >= 7 ? "Aprobaste la pre-entrega" : "Desaprobaste la pre-entrega";
}

// Solicitar al usuario ingresar la nota de la pre-entrega
let notaPreEntrega = parseFloat(prompt("Ingresa la nota de la pre-entrega:"));

// Verificar si la entrada es válida
if (!isNaN(notaPreEntrega)) {
    // Obtener el resultado de la pre-entrega usando la función
    let mensajeResultado = resultadoPreEntrega(notaPreEntrega);

    // Mostrar el mensaje de resultado
    alert(mensajeResultado);
} else {
    alert("Desaprobaste");
}