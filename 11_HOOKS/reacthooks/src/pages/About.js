import React from 'react'
// useContex
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

const About = () => {
  const { contextValue } = useContext(SomeContext);
    
  return (
    <div>
      <h2>About</h2>
      <p>Valor de context: {contextValue}</p>
      <hr />
    </div>
  )
}

export default About