import React, { Component } from 'react'
import './Sactividad.css'

export default class Sactividad extends Component {
  render () {
    return (
      <div>
      <div style={{ margin: '80px' }}>
        <div>
          <h1>
            SEGUIMIENTO DE ACTIVIDAD
          </h1>
        </div>
        <div>
      <div class='caja-inputs'>
        <div class='table-left'>
        </div>
        <div class='table-v-num'>
          <b>#</b>
        </div>
        <div class='table-v-importe'>
          <b>Titulo</b>
        </div>
        <div class='table-v-fechae'>
          <b>Descripción</b>
        </div>
        <div class='table-v-cantidad'>
          <b>Evidencia</b>
        </div>
        <div class='table-v-cantidad'>
          <b>Editar</b>
        </div>
        <div class='table-right'>
        </div>
      </div>
    </div>
        <div>
          <p>EVIDENCIA:</p>
          <p>TITULO:</p>
          <p>DESCRIPCIÓN:</p>
          </div>
          <div className='boton-v'>
              <button type='submit' className='input-sc boton-g'>Guardar</button>
            </div>
      </div>
      </div>
    )
  }
}
