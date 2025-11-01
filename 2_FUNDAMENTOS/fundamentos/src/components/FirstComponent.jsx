// Arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // aqui também pode ter comentario

    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;