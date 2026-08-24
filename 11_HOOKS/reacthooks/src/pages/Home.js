//UseContex
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';
//HOOKS
import HookUserState from '../components/HookUserState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';
import HookCustom from '../components/HookCustom';

const Home = () => {


  const { contextValue } = useContext(SomeContext);
  return (
      <div>
          <HookUserState />
          <HookUseReducer />
          <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor de context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      < HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home