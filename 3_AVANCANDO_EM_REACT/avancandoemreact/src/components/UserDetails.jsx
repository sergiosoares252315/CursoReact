import React from 'react'

const UserDetails = ({ nome, idade, profissao }) => {

  return (
      <div>
          <h2>{nome}</h2>
          <p>{idade}</p>
          <p>{profissao}</p>
          <br />
          {idade >= 18 ? (
          <p>Pode tirar a carteira de habilitação!</p>
          ) : (<p>Menor de idade!</p>)}
    </div>
  )
}

export default UserDetails

