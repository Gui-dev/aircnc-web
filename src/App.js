import React from 'react'
import './css/style.css'

import logo from './assets/logo.svg'

import Routes from './routes'

function App() {

  return (
    <section className="container">
      <img src={logo} alt="Logo Aircnc" title="Logo Aircnc"/>

      <div className="content">

        <Routes />
        
      </div>
    </section>
  )
}

export default App
