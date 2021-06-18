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
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad,lugar, imparte, fechai, fechaf, convoca, dependencia, horai, objetivo, municipios, asistentes, direccion} = doc.data()
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
        municipios,
        asistentes,
        direccion,
        lugar,

      })
    })
    this.setState({
      actividades
   })
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

        <div>
          <div clasName="logos-pdfs">
            <div className='titulo-reporte'>
              <img className='icon-centenario' src={logop} alt='centenario' />
              <img className='icons-escudoH' src={logoh} alt='escudo de armas Hidalgo'/>
            </div>
          </div>
          <div clasName="titulos-pdfs">
            <h2 className='titulo-repo'>AGENDA SEMANAL DE ACTIVIDAD RELEVANTES</h2>

          </div>

          <div clasName='tabla-n'>
          </div>

        </div>








    </div>
    )
  }
}
