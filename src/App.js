import React from 'react'
import './css/style.css'

import logo from './assets/logo.svg'

function App() {

  return (
    <section className="container">
      <img src={logo} alt="Logo Aircnc" title="Logo Aircnc"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para  programadores e encontre 
          <strong>talentos</strong> para sua empresa
        </p>

        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder="Seu melhor e-mail"/>

          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </section>
  )
}

export default App
