// ============================================================================
// Ejercicios 1.2.1: Sintaxis básica de Node.js 
// Alumno: Luis Bernardo Garcia Caamal
// ============================================================================


// ============================================================================
// EJERCICIO B - Declaración de variables con diferentes tipos de datos
// ============================================================================

let string = 'Hola soy una cadena';
let numero = 49;
let decimal = 24.78;
let booleano = true;
let nulo = null;

console.log(string);
console.log(numero);
console.log(decimal);
console.log(booleano);
console.log(nulo);


// ============================================================================
// EJERCICIO C - Arreglo con diferentes tipos de datos
// ============================================================================

const arregloDatos = ['Hola soy una cadena', 49, 24.78, true, null];
console.table(arregloDatos);


// ============================================================================
// EJERCICIO D - Función para calcular un polinomio de segundo grado
// ============================================================================

function polinomioSegundoGrado(x, a, b, c) {
    let resultado = (a * x * x) + (b * x) + c;
    console.log(`f(${x}) = ${a}x² + ${b}x + ${c} = ${resultado}`);
    return resultado;
}

polinomioSegundoGrado(3, 2, 5, 1);


// ============================================================================
// EJERCICIO E - Función flecha para invertir texto
// ============================================================================

const invertirTexto = (texto) => {
    let resultado = texto.split('').reverse().join('');
    console.log(`Original: "${texto}"`);
    console.log(`Invertido: "${resultado}"`);
    return resultado;
};

invertirTexto('Hola como estan?');


// ============================================================================
// EJERCICIO F - Bucle FOR descendente (10 al 1)
// ============================================================================

function imprimirDescendenteFor() {
    console.log("=== Bucle FOR (10 al 1) ===");
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

imprimirDescendenteFor();


// ============================================================================
// EJERCICIO G - Objeto con información del instituto
// ============================================================================

const objetoInsti = {
    nombre: 'Instituto Tecnológico Superior Felipe Carrillo Puerto',
    carrera: 'Ingeniería en Sistemas Computacionales',
    semestres: '8',
    jefedivision: 'Xochilt Bahena Loria'
};


// ============================================================================
// EJERCICIO H - Método en el objeto para generar descripción corta
// ============================================================================

objetoInsti.descripcionCorta = function() {
    return `${this.nombre} ofrece la carrera de ${this.carrera} con una duración de ${this.semestres} semestres.`;
}

console.log("\n--- MÉTODO 2: descripcionCorta() ---");
let descripcion = objetoInsti.descripcionCorta();
console.log(descripcion);


// ============================================================================
// EJERCICIO I - Módulo con funciones matemáticas aritméticas
// ============================================================================

// Función de suma
function suma(a, b) {
    return a + b;
}

// Función de resta
function resta(a, b) {
    return a - b;
}

// Función de multiplicación
function multiplicacion(a, b) {
    return a * b;
}

// Función de división
function division(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero";
    }
    return a / b;
}

// Función de potencia
function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

// Función de raíz cuadrada
function raizCuadrada(numero) {
    if (numero < 0) {
        return "Error: No se puede calcular la raíz de un número negativo";
    }
    return Math.sqrt(numero);
}

// Función de módulo (residuo)
function modulo(a, b) {
    return a % b;
}

// Función para calcular el promedio
function promedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Función para valor absoluto
function valorAbsoluto(numero) {
    return Math.abs(numero);
}

// Exportar las funciones para usarlas en otros archivos
module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    potencia,
    raizCuadrada,
    modulo,
    promedio,
    valorAbsoluto
};


// ============================================================================
// EJERCICIO J - Función asincrónica con callback
// ============================================================================

function operacionAsincrona(numero, callback) {
    console.log("⏳ Iniciando operación asincrónica...");
    console.log(`Procesando el número: ${numero}`);
    
    // Simular operación que tarda 2 segundos
    setTimeout(function() {
        let resultado = numero * 2;
        console.log("✅ Operación completada");
        
        // Llamar al callback con el resultado
        callback(resultado);
    }, 2000); // 2000 milisegundos = 2 segundos
}

// Función callback que maneja el resultado
function manejarResultado(resultado) {
    console.log(`📊 El resultado es: ${resultado}`);
    console.log("=".repeat(50));
}

// Ejecutar la función asincrónica
console.log("🚀 Programa iniciado\n");
operacionAsincrona(5, manejarResultado);
console.log("⚡ Esta línea se ejecuta inmediatamente (no espera)\n");


// ============================================================================
// EJERCICIO K - Manejo de errores con try-catch
// ============================================================================

function convertirCadenaANumero(cadena) {
    try {
        console.log(`\n🔄 Intentando convertir: "${cadena}"`);
        
        // Validar que se recibió un parámetro
        if (cadena === undefined || cadena === null) {
            throw new Error("No se proporcionó ningún valor");
        }
        
        // Convertir a número
        let numero = Number(cadena);
        
        // Verificar si la conversión fue exitosa
        if (isNaN(numero)) {
            throw new Error(`"${cadena}" no es un número válido`);
        }
        
        console.log(`✅ Conversión exitosa: ${numero}`);
        console.log(`   Tipo de dato: ${typeof numero}`);
        return numero;
        
    } catch (error) {
        console.log(`❌ Error: ${error.message}`);
        return null;
    }
}

// Probar la función con diferentes valores
console.log("========== PRUEBAS DE CONVERSIÓN ==========");

convertirCadenaANumero("123");        // ✅ Válido
convertirCadenaANumero("45.67");      // ✅ Válido
convertirCadenaANumero("hola");       // ❌ Error
convertirCadenaANumero("");           // ❌ Error
convertirCadenaANumero(null);         // ❌ Error
convertirCadenaANumero("0");          // ✅ Válido
convertirCadenaANumero("-25");        // ✅ Válido


// ============================================================================
// FIN DE LOS EJERCICIOS
// ============================================================================