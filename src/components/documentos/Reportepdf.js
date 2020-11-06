import React, { Component} from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'
import logoh from './icons/logoh.png'
import logop from './icons/logo-PGJH.jpg'
import ReactToPrint from 'react-to-print'

export default class Reportepdf extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: []

    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad, imparte, fechai, fechaf, convoca, dependencia, horai, objetivo, municipio, asistentes, direccion} = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoActividad,
        imparte,
        fechai,
        fechaf,
        convoca,
        dependencia,
        horai,
        objetivo,
        municipio,
        asistentes,
        direccion
      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  render () {
    return (
      <div className='fader-reporte' >
        <div clasName="sub-f">
          <div clasName="imprime" ref={el => (this.agenda = el)}>
            <div>

              <div className='titulo-reporte'>
                <img className='icons-reporte2' src={logop} alt='' />
                <h2 className='titulo-repo'>AGENDA SEMANAL DE ACTIVIDAD RELEVANTES</h2>
                <img className='icons-reporte' src={logoh} alt='' />
              </div>

              <div className='sub-fe'>
                <p>Fecha: 9 al 3 marzo 2020 </p>
              </div>
              <div className='sub-ca'>
                <p>Direccion</p>
              </div>


              <div className="tabla-dir">
                <table>
                  <tr>
                  <th className='all-tabla color-t tabla-f'>DÍA</th>
                  <th className='all-tabla color-t tabla-h'>HORA</th>
                  <th className='all-tabla color-t tabla-a'>ACTIVIDAD</th>
                  <th className='all-tabla color-t tabla-l'>LUGAR </th>
                  <th className='all-tabla color-t '>MUNICIPIO/ESTADO</th>
                  <th className='all-tabla color-t '>SERVIDOR@S PUBLICOS COMISIONAD@S</th>
                  </tr>
                    {this.state.actividades.map(actividades =>
                  <tr>
                  <td  className='all-tabla tabla-f'>{actividades.fechai}</td>
                  <td  className='all-tabla tabla-h'>{actividades.horai}</td>
                  <td  className='all-tabla tabla-a'>{actividades.tipodeActividad}</td>
                  <td  className='all-tabla tabla-l'>{actividades.lugar}</td>
                  <td  className='all-tabla tabla-l'>{actividades.municipio}</td>
                  <td  className='all-tabla'>{actividades.convoca}</td>
                  </tr>
                    )}
                </table>
              </div>

            </div>
          </div>
          <div className='btn-imprimir'>

            <ReactToPrint
              trigger={() => <span class='material-icons' style={{ cursor:'pointer' }}>print</span>}
              content={() => this.agenda}
            />
              <p className='txt-impri'>Imprimir</p>
          </div>

        </div>


      </div>
    )
  }
}
