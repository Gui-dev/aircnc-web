import React, { useState, useMemo } from 'react'
import api from './../../services/api'
import camera from './../../assets/camera.svg'
import './style.css'

function New( { history } ) {

  const [ company, setCompany ] = useState( '' )
  const [ techs, setTechs ] = useState( '' )
  const [ price, setPrice ] = useState( '' )
  const [ thumbnail, setThumbnail ] = useState( null )

  const preview = useMemo( () => {
    return thumbnail ? URL.createObjectURL( thumbnail ) : null
  }, [ thumbnail ] )

  const handleSubmit = async ( e ) => {

    e.preventDefault()
    const user_id = localStorage.getItem( 'user' )
    const dataForm = new FormData()
    dataForm.append( 'thumbnail', thumbnail )
    dataForm.append( 'company', company )
    dataForm.append( 'techs', techs )
    dataForm.append( 'price', price )

    await api.post( '/spots', dataForm, {
      headers: { user_id }
    } )

    history.push( '/dashboard' )
  }

  return (
    <form onSubmit={handleSubmit}>

      <label id="thumbnail"
        style={ { backgroundImage: `url(${preview})` } }
        className={ thumbnail ? 'has-thumbnail' : '' }
      >
        <input type="file" name="thumbnail" 
          onChange={ e => setThumbnail( e.target.files[ 0 ] ) }
        />
        <img src={camera} alt="Escolher Image do Spot" title="Selecionar Imagem"/>
      </label>

      <label htmlFor="company">EMPRESA <sup className="alert-info">*</sup></label>
      <input type="text" name="company" id="company" 
        placeholder="Sua empresa incrível"
        value={ company }
        onChange={ e => setCompany( e.target.value ) }
      />
      
      <label htmlFor="techs">
        Tecnologias <sup className="alert-info">*</sup> <span>(Separadas por vírgula)</span>
      </label>
      <input type="text" name="techs" id="techs" 
        placeholder="Quais tecnologias usam?"
        value={ techs }
        onChange={ e => setTechs( e.target.value ) }
      />
      
      <label htmlFor="price">
        Valor da diária <sup className="alert-info">*</sup> 
        <span>(em branco para GRATUITO)</span>
      </label>
      <input type="text" name="price" id="price" 
        placeholder="Valor cobrado por dia"
        value={ price }
        onChange={ e => setPrice( e.target.value ) }
      />

      <button className="btn">Criar Spot</button>

    </form>
  )
}

export default New