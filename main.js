let centro = "     Centro     \n";
let izq = "Texto al lado izquierdo     \n";
let derecho = "     Texto al lado derecho\n"

console.log(izq,centro,derecho);
// Texto al lado izquierdo         Centro          Texto al lado derecho

console.log(izq.length,centro.length,derecho.length);
// 28 16 26

let ejm_centro = centro.trim();
let ejm_izq = izq.trimEnd();
let ejm_derecho = derecho.trimStart();

console.log(ejm_izq,ejm_centro,ejm_derecho);
//Texto al lado derecho Centro Texto al lado izquierdo

console.log(ejm_izq.length,ejm_centro.length,ejm_derecho.length);
// 23 6 21


console.log(centro.trimStart(),centro.trim(),centro.trimEnd());
// Centro         Centro          Centro