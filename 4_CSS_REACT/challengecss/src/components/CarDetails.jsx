import styles from "./CarDetails.module.css"

const CarDateils = ({brand, models, km, color }) => {

  return (
    <div className = {styles.my_stilo}>
          <h1>Marca: {brand}</h1>
          <p>Modelo: {models}</p>
          <p>Kilometros: {km}</p>
          <p>Cor: {color}</p>
    </div>
  )
}

export default CarDateils;
