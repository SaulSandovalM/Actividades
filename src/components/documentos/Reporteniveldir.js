import React, { Component} from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'
import ReactToPrint from 'react-to-print'

export default class Reporteniveldir extends Component {
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
      const { tipoActividad, imparte, fechai, fechaf, convoca, dependencia, horai, objetivo} = doc.data()
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
        objetivo
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
        <div ref={el => (this.agenda = el)}>
        <div className='Nombre-cargo' >
          <div>
            <div className='name'>
              <p className='name'>Nombre:</p>
            </div>
            <div className='cargo'>
              <p className='cargo'>Cargo:</p>
            </div>
          </div>
          <div>
            <h3 className='h3-top'>Mercedes Citlali Mendoza Meza<br />
              Directora del Instituto de Formacion Profesional de la Procuraduria
            </h3>
          </div>
        </div>
        <div className='tabla-reporteniveldir'>
        <table>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Actividad</th>
            <th>Beneficio para la PGJEH</th>
            <th>RELEVANCIA</th>
          </tr>

          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>6</td>

          </tr>

        </table>
        </div>
        <div className='btn-imprimir'>
          <p>Imprimir</p>
          <ReactToPrint
            trigger={() => <span class='material-icons' style={{ cursor:'pointer' }}>print</span>}
            content={() => this.agenda}
          />


        </div>


          </div>
      </div>
    )
  }
}
