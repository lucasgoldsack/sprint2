let miListado = [];

function agregarGastos(nombre, gasto) {

    nombre = document.getElementById("nombre").value;
    gasto = document.getElementById("gasto").value;

    const objGastos = { nombre, gasto }
    miListado.push(objGastos);
    console.log(miListado);

    let suma = 0;
    let division = 0;
    document.getElementById("listado").innerHTML = "";
    for (let value of miListado) {
        document.getElementById("listado").innerHTML += '<li class="list-group-item">' + value.nombre + " " + value.gasto + '</li>';

        suma += parseInt(value.gasto);
        console.log(suma);
        document.getElementById("suma-total").innerHTML = '<li class="list-group-item">Total: ' + suma + '</li>';
        division = (suma / miListado.length);
        document.getElementById("division-suma-total").innerHTML = '<li class="list-group-item">Cada uno debe poner: ' + division + '</li>'
    }
};