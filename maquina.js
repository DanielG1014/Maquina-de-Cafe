
// VARIABLES DE INVENTARIO Y CAPACIDAD 
let stockAgua = 2000;          
let stockCafe = 500;           
let stockLeche = 400;         
let stockChocolate = 400;      
let stockVasos = 50;          

// Capacidad máxima soportada por los depósitos
const CAPACIDAD_MAX_AGUA = 2000;      
const CAPACIDAD_MAX_CAFE = 500;      
const CAPACIDAD_MAX_LECHE = 400;     
const CAPACIDAD_MAX_CHOCOLATE = 400;  
const CAPACIDAD_MAX_VASOS = 50;              

// RECETAS DE LOS PRODUCTOS (Proporciones por taza)
const recetaAmericano = { agua: 150, cafe: 10, leche: 0, chocolate: 0, vasos: 1 };
const recetaCafeConLeche = { agua: 100, cafe: 10, leche: 15, chocolate: 0, vasos: 1 };
const recetaCapuchino = { agua: 80, cafe: 10, leche: 20, chocolate: 5, vasos: 1 };
const recetaChocolate = { agua: 150, cafe: 0, leche: 0, chocolate: 30, vasos: 1 };
const recetaMocachino = { agua: 80, cafe: 10, leche: 15, chocolate: 15, vasos: 1 };

// PRECIOS 
const PRECIO_AMERICANO = 2.00;        
const PRECIO_CAFE_CON_LECHE = 2.50;   
const PRECIO_CAPUCHINO = 3.00;        
const PRECIO_CHOCOLATE = 2.50;       
const PRECIO_MOCACHINO = 3.50;     

// ARRAY
const productos = ["Americano", "Café con Leche", "Capuchino", "Chocolate", "Mocachino"];
const precios = [2.00, 2.50, 3.00, 2.50, 3.50];
// VARIABLES TRANSACCIONALES Y ESTADO DEL SISTEMA
let estadoMaquina = "DISPONIBLE"; 
let dineroIngresado = 0.0;    
let cambioDevuelto = 0.0;        
let cajaRegistradora = 50.0;     
let contadorVentasTotales = 0;    

function estadodisponible() {
    return estadoMaquina = "DISPONIBLE";
}
function restarvasos() {
    return stockVasos = stockVasos - 1;
}
function ingresarDinero() {
    return dineroIngresado = dineroIngresado + 1.00;
}
function devolverCambio() {
    return cambioDevuelto = dineroIngresado - precio;
}
function pedirAzucar(azucar) {
    let mesage;
    if(saldo<precio) {
        mesage = "Error: Saldo insuficiente. Por favor, ingrese más dinero.";
    } 

if (stockAgua <=0) {
    console.error("Error: No hay agua disponible en la máquina. La máquina no puede operar sin agua.");
} else if (stockAgua >=1) {
    console.log("Agua disponible en la máquina. La máquina puede operar con agua.");
}
if (stockCafe <=0) {
    console.error("Error: No hay café disponible en la máquina. La máquina no puede operar sin café.");
} else if (stockCafe >=1) {
    console.log("Café disponible en la máquina. La máquina puede operar con café.");
} 
if (stockVasos <=0) {
    console.error("Error: No hay vasos disponibles en la máquina. La máquina no puede operar sin vasos.");
} else if (stockVasos >=1) {
    console.log("Vasos disponibles en la máquina. La máquina puede operar con vasos.");
} 
if (stockLeche <=0) {
    console.error("Error: No hay leche disponible en la máquina. La máquina no puede operar sin leche.");
}else if (stockLeche >=1) {
    console.log("Leche disponible en la máquina. La máquina puede operar con leche.");
}
if (stockChocolate <=0) {
    console.error("Error: No hay chocolate disponible en la máquina. La máquina no puede operar sin chocolate.");
} else if (stockChocolate >=1) {
    console.log("Chocolate disponible en la máquina. La máquina puede operar con chocolate.");
}
switch (menu) {
    case 1:
        alert("Americano");
        break;
    case 2:
        alert("Café");
        break;
    case 3:
        alert("Capuchino");
        break;
    case 4:
        alert("Chocolate");
        break;
    case 5:
        alert("Mocachino");
        break;
    default:
        alert("Error: Opción de menú inválida. Debe seleccionar un número del 1 al 5.")
}
switch (precio) {
    case 1:
        alert("Precio: $2.00");
        break;
    case 2:
        alert("Precio: $2.50");
        break;
    case 3:
        alert("Precio: $3.00");
        break;
    case 4:
        alert("Precio: $2.50");
        break;     
    case 5:
        alert("Precio: $3.50");
        break;
    default:
        alert("Error: Opción de precio inválida. Debe seleccionar un número del 1 al 5.")
}