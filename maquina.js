
// 1. VARIABLES DE INVENTARIO Y CAPACIDAD (INSUMOS)
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

// Nivel mínimo de alerta para mantenimiento
const MINIMO_AGUA = 100;       
const MINIMO_CAFE = 15;        

// 2. RECETAS DE LOS PRODUCTOS (Proporciones por taza)
const recetaAmericano = { agua: 150, cafe: 10, leche: 0, chocolate: 0, vasos: 1 };
const recetaCafeConLeche = { agua: 100, cafe: 10, leche: 15, chocolate: 0, vasos: 1 };
const recetaCapuchino = { agua: 80, cafe: 10, leche: 20, chocolate: 5, vasos: 1 };
const recetaChocolate = { agua: 150, cafe: 0, leche: 0, chocolate: 30, vasos: 1 };
const recetaMocachino = { agua: 80, cafe: 10, leche: 15, chocolate: 15, vasos: 1 };

// 3. PRECIOS Y VALORES MONETARIOS
const PRECIO_AMERICANO = 2.00;        
const PRECIO_CAFE_CON_LECHE = 2.50;   
const PRECIO_CAPUCHINO = 3.00;        
const PRECIO_CHOCOLATE = 2.50;       
const PRECIO_MOCACHINO = 3.50;       

// 4. VARIABLES TRANSACCIONALES Y ESTADO DEL SISTEMA
let estadoMaquina = "DISPONIBLE"; 
let dineroIngresado = 0.0;    
let cambioDevuelto = 0.0;        
let cajaRegistradora = 50.0;     
let contadorVentasTotales = 0;    

// 5. REGLAS DE NEGOCIO (LÓGICA DEL SISTEMA)

/*
 * REGLA 1: Disponibilidad General del Sistema
 * La máquina solo acepta transacciones si está en estado "DISPONIBLE".
 */
function estaDisponible() {
    return estadoMaquina === "DISPONIBLE";
}

/*
 * REGLA 2: Validación de Existencia de Insumos (Stock)
 * No se puede iniciar la preparación si falta AL MENOS UNO de los 
 * ingredientes de la receta o si no hay vasos disponibles.
 */
function verificarStockSuficiente(receta) {
    if (stockVasos < receta.vasos) return false;
    if (stockAgua < receta.agua) return false;
    if (stockCafe < receta.cafe) return false;
    if (stockLeche < receta.leche) return false;
    if (stockChocolate < receta.chocolate) return false;
    return true;
}

/*
 * REGLA 3: Cobro y Verificación de Pago Insuficiente / Cambio
 * - El dinero ingresado debe ser mayor o igual al precio del producto.
 * - Si es mayor, se calcula y devuelve el cambio exacto.
 * - El costo del producto se suma a la caja registradora.
 */
function procesarCobro(precioProducto) {
    if (dineroIngresado < precioProducto) {
        let faltante = precioProducto - dineroIngresado;
        console.log(`Pago insuficiente. Falta ingresar: $${faltante.toFixed(2)}`);
        return false;
    }
    
    cambioDevuelto = dineroIngresado - precioProducto;
    cajaRegistradora += precioProducto;
    dineroIngresado = 0.0; 
    contadorVentasTotales++;
    return true;
}

/*
 * REGLA 4: Consumo y Descuento de Insumos
 * Una vez aprobado el pago, se restan exactamente las cantidades 
 * especificadas en la receta de los contenedores principales.
 */
function descontarStock(receta) {
    stockAgua -= receta.agua;
    stockCafe -= receta.cafe;
    stockLeche -= receta.leche;
    stockChocolate -= receta.chocolate;
    stockVasos -= receta.vasos;
}

/*
 * REGLA 5: Alerta Automática de Nivel Crítico / Mantenimiento
 * Si el agua o el café bajan del umbral mínimo, la máquina
 * cambia automáticamente a estado "MANTENIMIENTO" para evitar daños.
 */
function evaluarEstadoInsumos() {
    if (stockAgua < MINIMO_AGUA || stockCafe < MINIMO_CAFE || stockVasos === 0) {
        estadoMaquina = "MANTENIMIENTO";
        console.log("ALERTA: Insumos críticos agotados. Máquina bloqueada en MANTENIMIENTO.");
    }
}

/*
 * REGLA 6: Recarga de Insumos (Solo Mantenimiento)
 * Permite rellenar los depósitos sin exceder la capacidad máxima permitida.
 */
function recargarInsumos(agua, cafe, leche, chocolate, vasos) {
    stockAgua = Math.min(stockAgua + agua, CAPACIDAD_MAX_AGUA);
    stockCafe = Math.min(stockCafe + cafe, CAPACIDAD_MAX_CAFE);
    stockLeche = Math.min(stockLeche + leche, CAPACIDAD_MAX_LECHE);
    stockChocolate = Math.min(stockChocolate + chocolate, CAPACIDAD_MAX_CHOCOLATE);
    stockVasos = Math.min(stockVasos + vasos, CAPACIDAD_MAX_VASOS);
    
    if (stockAgua >= MINIMO_AGUA && stockCafe >= MINIMO_CAFE && stockVasos > 0) {
        estadoMaquina = "DISPONIBLE";
    }
}

console.log("=== MÁQUINA DISPENSADORA DE CAFÉ INICIALIZADA ===");
console.log("Estado:", estadoMaquina);
console.log(`Stock: Agua: ${stockAgua}ml | Café: ${stockCafe}g | Leche: ${stockLeche}g | Chocolate: ${stockChocolate}g | Vasos: ${stockVasos}`);
