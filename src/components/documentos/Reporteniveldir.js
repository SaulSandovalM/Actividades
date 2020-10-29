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

      <div>
      <div ref={el => (this.agenda = el)}>
        <div className='all'>
        <div className='Nombre-cargo' >
          <div>
            <div className='name1'>
              <p className='name'>Nombre:</p>
            </div>
            <div className='cargo'>
              <p className='cargo'>Cargo:</p>
            </div>
          </div>
          {/*{this.state.actividades.map(actividades =>*/}
          <div className='Nom-car'>
            <h3 className='h3-top'>{/*{actividades.convoca}*/}Mercedes Citlali Mendoza Meza</h3>
            <h3 className='h3-top'>{/*{actividades.dependencia}*/}Directora del Instituto de Formacion Profesional de la Procuraduria
            </h3>
          </div>
        </div>



        <div className="tabla-dir">
        <table>
          <tr>
          <th className='all-tabla tabla-n'>No.</th>
            <th className='all-tabla tabla-top color-t'>Fecha</th>
            <th className='all-tabla tabla-top color-t2'>Hora</th>
            <th className='all-tabla tabla-top color-t'>Lugar</th>
            <th className='all-tabla tabla-top color-t2'>Actividad</th>
            <th className='all-tabla tabla-top color-t'>Beneficio para la PGJEH</th>
            <th className='all-tabla tabla-top color-t2'>RELEVANCIA</th>
          </tr>
            {this.state.actividades.map(actividades =>
          <tr>
            <td className='all-tabla color-t'></td>
            <td className='all-tabla tabla-f'>{ actividades.fechai }</td>
            <td className='all-tabla tabla-h'>{ actividades.horai } hrs.</td>
            <td className='all-tabla tabla-l'>{ actividades.lugar }</td>
            <td className='all-tabla tabla-a'>{actividades.tipodeActividad }</td>
            <td className='all-tabla tabla-b'>{actividades.evidencia}</td>
            <td className='all-tabla tabla-r'>{actividades.relevacia}</td>
          </tr>



        )}





        </table>
        </div>



          </div>

        </div>

        <div className='btn-imprimir'>
          <p className='txt-impri'>Imprimir</p>
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
