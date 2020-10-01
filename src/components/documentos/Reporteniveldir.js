import React, { Component} from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'

export default class Reporteniveldir extends Component{
  render(){
    return(
    <div className='fader-reporte'>

    <div className='Nombre-cargo'>
      <div>
        <p>Nombre</p>
        <p>Cargo</p>
      </div>

      <div>
        <h3>Mercedes Citlali Mendoza Meza</h3>
        <h3>Directora del Instituto de Formacion Profesional de la Procuraduria</h3>
      </div>
    </div>
    <div className='tabla-reporteniveldir'>

    <tr className='tab-arriba'>
        <th className='filas-tab'>Fecha</th>
        <th className='filas-tab'>Hora</th>
        <th className='filas-tab'>Lugar</th>
        <th className='filas-tab'>Actividad</th>
        <th className='filas-tab'>Beneficio para PGJEH</th>
        <th className='filas-tab'>RELEVANCIA</th>
    </tr>

  <tr className='tab-abajo'>
  <td className='columnas-tab'>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
  <tr>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
  <tr>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
  <tr>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
  <tr>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
  <tr>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
  <tr>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
  <tr>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
  </tr>
    </div>

    </div>
  )
  }
}
