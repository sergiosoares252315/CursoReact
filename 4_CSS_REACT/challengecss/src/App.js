
import './App.css';
import CarDateils from './components/CarDetails';



function App() {

  const cars = [
    { id: 1, brand: "Vw", models: "Golf", km: 24560, color: "prata"},
    { id: 2, brand: "Renault", models: "Kwid", km: 0, color: "branco"},
    { id: 3, brand: "Fiat", models: "Palio", km: 63258, color: "vermelho"},
    { id: 4, brand: "Chevrolet", models: "Onix", km: 0, color: "preto"},
    { id: 5, brand: "Toyota", models: "Corolla", km: 12789, color: "verde"},
  ];

  return (
    <div className="App">
      <h1>Showromm de carros</h1>
      <div className="car-container">
        {/* Detalhes do carro*/}
        {cars.map((car) => (
          <CarDateils
            key={car.id}
            brand={car.brand}
            models={car.models}
            km={car.km}
            color={car.color} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
