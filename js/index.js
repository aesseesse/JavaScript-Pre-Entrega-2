//ingresar una cantidad de productos y en base a la cantidad de productos definir por cada producto precio, cantidad, iva, descuentos. Luego calcular el subtotal de cada producto y el total de la compra.

//ingresar cantidad de articulos a comprar
const cantidadArticulos = parseInt(prompt("ingrese la cantidad de articulos a comprar"))


//verificar si la cantidad es un numero valido o no.
if (!isNaN(cantidadArticulos) && cantidadArticulos > 0){ //comprobar si es mayor a 0 y si es un numero


    let articulos=[]; //Crear un array articulos


    for (let i=1; i<=cantidadArticulos; i++){ //iterar cantidadArticulos 

        let articuloNombre = prompt("ingrese el nombre del articulo " + i + ": "); //solicitar el nombre del articulo i

        let articuloPrecio = parseFloat(prompt("Ingrese el precio del articulo " + i + ": ")); //solicitar el precio del articulo i

        let articuloCantidad = parseInt(prompt("Ingrese el Cantidad del articulo " + i + ": ")); //solicitar la Cantidad del articulo i

        
        let articuloImpuesto = parseInt(prompt("Ingrese el IVA del artículo " + i + ":")) //solicitar el % de IVA del articulo i
        let articuloIVA = articuloImpuesto * articuloPrecio / 100; // Calcular IVA 


        let articuloDesc = parseInt(prompt("Ingrese el descuento del artículo " + i + ":")) //solicitar el % del descuento del articulo i
        let articuloDescuento = articuloDesc * articuloPrecio / 100;// Calcular descuento

        let articuloSubTotal = (articuloPrecio + articuloIVA - articuloDescuento) * articuloCantidad;// Calcular el subtotal del artículo


        // Crear objeto para el artículo i
        let articulo = {
            nombre: articuloNombre,
            precio: articuloPrecio,
            cantidad: articuloCantidad,
            iva: articuloIVA,
            descuento: articuloDescuento,
            total: articuloSubTotal
        };

        // Agregar el objeto al array de artículos
        articulos.push(articulo);
    }

    //Calcular el total de compra
    let compraTotal =0; //Defino la variable CompraTotal y la seteo en 0

    //Por cada subtotal de cada articulo, hago la suma (estan ubicados en el array articulos)

    articulos.forEach(function(articulo){
            compraTotal += articulo.total
        }
    );

    console.log("Detalles de la compra:", articulos); //Muestra detalled de la compra
    console.log("Total de la compra: $" + compraTotal.toFixed(2));
    //Muestra el total de la compra con 2 decimales .toFixed(2)
} 

//en caso de no ingresar una cantidad invalida de articulos, da un alert.
else {
    alert("Por favor, ingrese una cantidad válida de artículos.");
}



