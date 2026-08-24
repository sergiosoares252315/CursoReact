import React from 'react'


// HOOK GERADO PARA APOSTA MEGA SENA!
export const gerarNumerosRandomicos = () => {
    const numeros = new Set(); // O Set impede números duplicados

    while (numeros.size < 6) {
        // Math.random() * 60 gera de 0 a 59.99... + 1 ajusta para a faixa de 1 a 60
        const numeroSorteado = Math.floor(Math.random() * 60) + 1 + ',';
        numeros.add(numeroSorteado);
    }
    return Array.from(numeros).sort((a, b) => a - b);
}
