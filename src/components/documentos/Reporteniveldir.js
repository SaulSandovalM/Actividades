import React, { Component} from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'

export default class Reporteniveldir extends Component{
  render(){
    return(
    <div className='fader-reporte'>

      <div className='Nombre-cargo'>
        <div>
          <div className='name'>
          <p className='name' >Nombre:</p>
        </div>
          <div className='cargo'>
          <p className='cargo'>Cargo:</p>
        </div>

      </div>

      <div>
        <h3 className='h3-top'>Mercedes Citlali Mendoza Meza
        <br/>
        Directora del Instituto de Formacion Profesional de la Procuraduria</h3>
      </div>
    </div>
    <div className='tabla-reporteniveldir'>

    <tr className='tab-arriba'>
        <th className='filas-tab filas-tab1'>No.</th>
        <th className='filas-tab filas-tab1'>Fecha</th>
        <th className='filas-tab filas-tab2'>Hora</th>
        <th className='filas-tab filas-tab3'>Lugar</th>
        <th className='filas-tab filas-tab4'>Actividad</th>
        <th className='filas-tab filas-tab5'>Beneficio para PGJEH</th>
        <th className='filas-tab filas-tab6'>RELEVANCIA</th>
    </tr>

  <tr className='tab-abajo'>
  <td className='columnas-tab num-c'>1</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'>3</td>
  </tr>
  <tr>
  <td className='columnas-tab'>2</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'></td>
  </tr>
  <tr>
  <td className='columnas-tab'>3</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'></td>
  </tr>
  <tr>
  <td className='columnas-tab'>4</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'></td>
  </tr>
  <tr>
  <td className='columnas-tab'>5</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'></td>
  </tr>
  <tr>
  <td className='columnas-tab'>7</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'></td>
  </tr>  <tr>
  <td className='columnas-tab'>8</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'></td>
  </tr>
  <tr>
  <td className='columnas-tab'>9</td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab'></td>
  <td className='columnas-tab columna-tab-bori'></td>
  </tr>
  </div>
  </div>
  )
  }
}
