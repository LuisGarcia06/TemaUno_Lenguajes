
/* REFLEXIÓN EJERCICIO 1.3
1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?
Pues que como se indica el modulo 'fs' esta integrado dentro de node.js, mientras que con
'silyname' es externo por lo tanto tiene que instalarlo para que se pueda usar


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.
En require se carga en tiempo de ejecución y se puede colocar en cualquier parte del
codigo como en una codicion o funcion, en cambio el import se ejecuta en un inicio antes 
de cualquier linea


3. Sobre el archivo 'package.json':
a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?
Porque el node_modules solo genera un desperdicio de de espacio ademas de que package.json 
ya tiene toda la información necesaria para recrearla

b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?
npm lee el `package.json` y descarga todas las dependencias listadas, recreando la carpeta `node_modules` automáticamente. 
Es decir, **reconstruye el proyecto completo** desde solo ese archivo.

*/












