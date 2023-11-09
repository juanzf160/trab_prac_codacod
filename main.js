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
        case "estudiante":
            total = total - (total * descuentoEstudiante);
            break;
        case "trainee":
            total = total - (total * descuentoTraine);
            break;
        case "junior":
            total = total - (total * descuentoJunior);
            break;
    }

    totalAPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();
});
