//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hooks
import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h2 style={{color: color}}>About</h2>
      <p>Valor do contador: { counter}</p>
    </div>
  )
}

export default About