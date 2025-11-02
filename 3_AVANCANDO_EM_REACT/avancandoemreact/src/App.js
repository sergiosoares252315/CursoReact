
import {useState} from 'react';
import './App.css';
import Img2 from "./assets/Img2.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34850},
    {id: 3, brand: "Renault", color: "Preto", newCar: false, km: 10280},
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = (useState(""))
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const pessoas = [
    {id: 1, nome: "Alex Gren", idade: 18, profissao: "Técnico Eletrônico"},
    {id: 2, nome: "Maria Lopes", idade: 35, profissao: "Enfermeira"},
    {id: 3, nome: "Devid Brown", idade: 40, profissao: "Arquiteto"},
    {id: 4, nome: "Enzo Lopes", idade: 15, profissao: "Estudante"},
    {id: 5, nome: "Luna Oliveira", idade: 10, profissao: "Estudante"},
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/Financeiro.jpg" alt="Layout" />
      </div>
      <div>
        {/*Imagem em assent */}
        <img src={Img2} alt="Imagem_2" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="Vw" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* loop em arry de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar} />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container> <Container myValue="testing 2">
        <h5>Novo conteúdo</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      < Message msg={message} />
      < ChangeMessageState handleMessage={handleMessage} />
      {/*Desafio tarefa 4! */}
      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao} />
      ))}
    </div>
  );
}

export default App;
