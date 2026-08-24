import {useState} from 'react'
import { gerarNumerosRandomicos } from './gerarNumerosRandomicos';

const HookUserState = () => {
    //1 - useState
    let userName = 'João';
    const [name, setName] = useState("Matheus");
    const [numeroSorteado, setNumeroSorteado] = useState(null);
    
  
    const changeName = () => {
        userName = 'João Souza';
        setName('Matheus Battisti');
        setNumeroSorteado(gerarNumerosRandomicos());

        console.log(userName);
        console.log(name);

    }
    
    // 2 - useState e input
    const [age, setAge] = useState(18);
    const handleSubmit = (e) => {
        e.preventDefault();

        // poderia enviar este evento para uma  API
        console.log(age);
    }

  return (
      <div>
          {/* 1 - useSate */}
          <h2>UseState</h2>
          <p>Variável: {userName}</p>
          <p>useState: {name}</p>
          <p>Número sorteado: {numeroSorteado}</p>
          <button onClick={changeName}>Mudar nomes!</button>
          {/* 2 - useState e input */}
          <p>Digite sua idade:</p>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
              />
            <input type='submit' value='Enviar'/>
          </form>
          <p>Você tem {age} anos!</p>
          <hr />
    </div>
  )
}

export default HookUserState