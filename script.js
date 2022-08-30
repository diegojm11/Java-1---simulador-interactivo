function solicitarNombre() {
    alert("Bienvenido")
    let nombre = prompt("ingrese su nombre");
    while(nombre === ""){
        nombre = prompt("ingrese su nombre");
    }
};



function mostrarProductos(){
let producto;
    do{
        producto = parseInt(prompt("Que vehiculo tiene? :\n1)Auto\n2)Camioneta\n3)Camion"))
    }while(producto !=1 && producto !=2 && producto !=3)
    switch(producto){
        case 1:
            return "Auto"
        case 2:
            return "Camioneta"
        case 3:
            return "Camion"
    }
 
}

function validarPrecio(producto){
    if(producto==="Auto"){
        return 1000;
    }
    else if(producto==="Camioneta"){
        return 1500;
    }
    else if(producto==="Camion"){
        return 2000;
    }        
    }

function cobrar(nombre,precio){
alert("Usted trae a lavar: "+nombre+"\nPrecio: $"+precio);
let pago = parseInt(prompt("con cuanto abonas?"))
if (pago>precio){
    alert("Gracias! su vuelto es " + (pago - precio))
}else{("no es suficiente")
}
}

solicitarNombre();
let productoNombre = mostrarProductos();
let precioProducto = validarPrecio(productoNombre); 
cobrar(productoNombre,precioProducto)
  