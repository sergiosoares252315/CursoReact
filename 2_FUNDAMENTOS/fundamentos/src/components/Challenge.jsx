
const Challenge = () => {
    // Criação dos dois valores númericos
    const valorA = 14;
    const valorB = 25;

    // Função para lidar com o click
    const handleSumClick = () => {

        const soma = valorA + valorB;

        //Soma dos valores e exibe no consoles
        console.log(`[Challenge Component] Valor A: ${valorA}`);
        console.log(`[Challenge Component] Valor B: ${valorB}`);
        console.log(`[Challenge Component] A soma dos valores (${valorA} + ${valorB}) é: ${soma}`);
    };

    return (
        <div>
            <h2>Desafio de Programação</h2>
            <div>
                <p>Valor 1 =  {valorA}</p>
                <p>Valor 2 = {valorB}</p>
            </div>
            <br />
            <button onClick={handleSumClick}>Click para Soma do desafio</button>
        </div>
    )
}

export default Challenge;