import React, { Component} from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'
import logoh from './icons/logoh.png'
import logop from './icons/logo-PGJH.jpg'
import ReactToPrint from 'react-to-print'

export default class Reportepdf extends Component {
  render () {
    return (
      <div className='fader-reporte'>
        <div ref={el => (this.agenda = el)}>
            <div className='titulo-reporte'>
              <img className='icons-reporte2' src={logop} alt='' />
              <h2 className='titulo-repo'>AGENDA SEMANAL DE ACTIVIDAD RELEVANTES</h2>
              <img className='icons-reporte' src={logoh} alt='' />
            </div>
          <div className='fecha-reporte'>
            <p className='fecha-reporte'>FECHA:</p>
          </div>
          <div className='dir-reporte'>
            <p className='dir-reporte1'>DIRECCION: INSTITUTO DE FORMACION PROFESIONAL</p>
          </div>
          <div className='tabla-reporte'>
            <tr className='tab-arribarep'>
              <th className='filas-gene filas-taba1'>DÍA</th>
              <th className='filas-gene filas-taba2'>HORA</th>
              <th className='filas-gene filas-taba3'>ACTIVIDAD</th>
              <th className='filas-gene filas-taba4'>LUGAR</th>
              <th className='filas-gene filas-taba5'>MUNICIPIO/ESTADO</th>
              <th className='filas-gene filas-taba6'>SERVIDOR@S PÚBLICOS COMISIONADAS</th>
            </tr>
            <tr className='tab-a'>
              <td className='columnas-a col-1'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
            </tr>
            <tr className='tab-a'>
              <td className='columnas-a col-1'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
            </tr>
            <tr className='tab-a'>
              <td className='columnas-a col-1'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
            </tr>
            <tr className='tab-a'>
              <td className='columnas-a col-1'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
            </tr>
            <tr className='tab-a'>
              <td className='columnas-a col-1'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a'></td>
              <td className='columnas-a '></td>
            </tr>
          </div>
        </div>
        <div className='btn-imprimir'>
          <p>Imprimir</p>
          <ReactToPrint
            trigger={() => <span class='material-icons' style={{ cursor:'pointer' }}>print</span>}
            content={() => this.agenda}
          />


        </div>
      </div>
    )
  }
}
