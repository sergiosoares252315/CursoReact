// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hooks
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  const {color} = useTitleColorContext();
  
  return (
    <div>
      <h2 style={{color: color}}>Produtos</h2>
      <p>Valor do contador: { counter}</p>
    </div>
  )
}

export default Products