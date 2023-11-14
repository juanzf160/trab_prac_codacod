const ticket = 200;
const descuentoEstudiante = 0.80;
const descuentoTraine = 0.50;
const descuentoJunior = 0.20;

const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const totalAPagar = document.getElementById("totalAPagar");
const btnResumen = document.getElementById('resumen');

function calcularPago() {

    let total = cantidad.value * ticket;

    switch (categoria.value) {
        case "Estudiante":
            total = total - (total * descuentoEstudiante);
            break;
        case "Trainee":
            total = total - (total * descuentoTraine);
            break;
        case "Junior":
            total = total - (total * descuentoJunior);
            break;
    }

    totalAPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();
});
