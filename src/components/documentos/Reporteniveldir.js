import React, { Component} from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'
import ReactToPrint from 'react-to-print'
import ReplyIcon from '@material-ui/icons/Reply'
import ImpIcon from '@material-ui/icons/Print'
import Fab from '@material-ui/core/Fab'


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
  //   const actividades = []
  //   var numfila = 0
  //   querySnapshot.forEach((doc) => {
  //     numfila++
  //     const { tipoActividad, imparte, actividad, lugar, fechai, fechaf, convoca, dependencia, horai, objetivo} = doc.data()
  //     actividades.push({
  //       key: doc.id,
  //       doc,
  //       numfila:numfila,
  //       tipoActividad,
  //       imparte,
  //       fechai,
  //       fechaf,
  //       convoca,
  //       dependencia,
  //       horai,
  //       objetivo,
  //       lugar,
  //       actividad,
  //     })
  //   })
  //   this.setState({
  //     actividades
  //  })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  handleBack() {
      this.props.history.push('/Reportes');
    }

  render () {
    return (
      <div className='fader-pfd'>
      <div className='btn-imprimir'>
        <span class="material-icons" style={{ cursor:'pointer'  }} onClick={this.handleBack.bind(this)}>
        </span>
      <div clasName=''>
        <ReactToPrint
          trigger={() =>
        <span class='material-icons impresora-padding' style={{ cursor:'pointer' }}>
          <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
            <ImpIcon />
          </Fab>
        </span>}
          content={() => this.agenda}
        />
        <div className="regresars">
        <span class="material-icons" style={{ cursor:'pointer'  }} onClick={this.handleBack.bind(this)}>
          <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
            <ReplyIcon />
          </Fab>
        </span>
        </div>
      </div>
      </div>

        <div className='documento'  ref={el => (this.agenda = el)}>
        {/*{this.state.actividades.map(actividades =>*/}
          <div clasName='titulos-pdf'>
            <div className='cargos '>
              <p className='textos-ca name1'>Nombre:</p>
              <h5 className='textc'>{/*{actividades.convoca}*/}DIANA CORONA MENESES </h5>
            </div>

            <div className='cargos '>
              <p className='textos-ca name2'>Cargo:</p>
              <h5 className='textc'>{/*{actividades.dependencia}*/}SECRETARIA PARTICULAR DEL DESPACHO DEL PROCURADOR</h5>
            </div>
            </div>
            <div className='tabla-reporte'>
              <table>
                <tr>
                  <th className='all-tabla tabla-n'>No.</th>
                  <th className='all-tabla tabla-top color-t'>Fecha</th>
                  <th className='all-tabla tabla-top color-t2'>Hora</th>
                  <th className='all-tabla tabla-top color-t'>Lugar</th>
                  <th className='all-tabla tabla-top color-t2'>Actividad</th>
                  <th className='all-tabla tabla-top color-t'>Beneficio para la PGJEH</th>
                  <th className='all-tabla tabla-top color-t2'>Relevancia</th>
                </tr>
                {
                  this.state.actividades.map(actividades =>
                <tr>
                  <td className='all-tabla color-tn'>{actividades.numfila}</td>
                  <td className='all-tabla tabla-f'>{actividades.fechai }</td>
                  <td className='all-tabla tabla-h'>{actividades.horai } hrs.</td>
                  <td className='all-tabla tabla-l'>{actividades.lugar}</td>
                  <td className='all-tabla tabla-a'>{actividades.tipoActividad}: {actividades.actividad}</td>
                  <td className='all-tabla tabla-b'>{actividades.evidencia}Texto de prueba</td>
                  <td className='all-tabla tabla-r'>{actividades.relevacia}Relevancia justificada por el sistema (prueba)</td>
                </tr>
                )
              }
              </table>
            </div>
        </div>
      </div>

    )
  }
}
