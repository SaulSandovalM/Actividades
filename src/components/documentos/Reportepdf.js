import React, { Component} from 'react'
import ReactToPrint from 'react-to-print'
import Fab from '@material-ui/core/Fab'
import ReplyIcon from '@material-ui/icons/Reply'
import ImpIcon from '@material-ui/icons/Print'
import './stilospdf.css'
import firebase from '../../Firebase'
import logoh from './icons/logoh.png'
import logop from './icons/logo_01.png'


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
   //  const actividades = []
   //  var numfila = 0
   //  querySnapshot.forEach((doc) => {
   //    numfila++
   //    const { tipoActividad, estados, actividad, lugar, imparte, fechai, fechaf, convoca, dependencia, horai, objetivo, municipios, asistentes, direccion} = doc.data()
   //    actividades.push({
   //      key:doc.id,
   //      doc,
   //      numfila:numfila,
   //      tipoActividad,
   //      imparte,
   //      estados,
   //      fechai,
   //      fechaf,
   //      convoca,
   //      dependencia,
   //      horai,
   //      objetivo,
   //      municipios,
   //      asistentes,
   //      direccion,
   //      lugar,
   //      actividad
   //
   //    })
   //  })
   //  this.setState({
   //    actividades
   // })
  }

  componentDidMount() {
    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
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
        <div ref={el => (this.agenda = el)}>
          <div clasName="logos-pdfs">
            <div className='titulo-reporte'>
              <img className='icon-centenario' src={logop} alt='centenario' />
              <img className='icons-escudoH' src={logoh} alt='escudo de armas Hidalgo'/>
            </div>
          </div>
          <div clasName="titulos-pdfs">
            <div>
              <h2 className='titulo-repo'>AGENDA SEMANAL DE ACTIVIDAD RELEVANTES</h2>
            </div>
            <div className='sub-fe'>
              <p className='txt-dir'>DIRECCION:DESPACHO DEL PROCURADOR (todas las direcciones )</p>
              <p  className='txt-dir'>Fecha correspondiente:  </p>
            </div>
            <div className='sub-ca'>
              <table className="tabla-dir">
                <tr>
                  <th className='all-tabla tabla-n'>No.</th>
                  <th className='all-tabla color-t tabla-f'>DÍA</th>
                  <th className='all-tabla color-t tabla-f'>HORA</th>
                  <th className='all-tabla color-t tabla-a'>ACTIVIDAD</th>
                  <th className='all-tabla color-t tabla-l'>LUGAR </th>
                  <th className='all-tabla color-t '>MUNICIPIO/ESTADO</th>
                  <th className='all-tabla color-t '>SERVIDOR@S PUBLICOS COMISIONAD@S</th>
                </tr>
              {/* this.state.actividades.map(actividades =>
                <tr>
                  <td className='all-tabla color-tn'>{actividades.numfila}</td>
                  <td  className='all-tabla tabla-f'>{actividades.fechai}</td>
                  <td  className='all-tabla tabla-f'>{actividades.horai}</td>
                  <td  className='all-tabla tabla-a'>{actividades.tipoActividad}: {actividades.actividad}</td>
                  <td  className='all-tabla tabla-l'>{actividades.lugar}</td>
                  <td  className='all-tabla tabla-l'>{actividades.municipios}/{actividades.estados}</td>
                  <td  className='all-tabla'>{actividades.convoca}</td>
                </tr>
                )
              */}
              </table>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
