import React, { useState } from 'react'
import api from './../../services/api'

function Login( { history } ) {

  const [ email, setEmail ] = useState( '' )

  const handleSubmit = async ( e ) => {
    e.preventDefault()
    const { data } = await api.post( '/login', { email } )
    localStorage.setItem( 'user', data._id )
    history.push( '/dashboard' )
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para  programadores e 
        encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Seu melhor e-mail"
          required
          value={ email }
          onChange={ e => setEmail( e.target.value ) }
        />

        <button type="submit" className="btn">Entrar</button>
      </form>
    </>
  )
}

export default Login