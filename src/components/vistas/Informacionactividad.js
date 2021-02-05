import React, { Component } from 'react'
import firebase from '../../Firebase'

import './vistas.css'

export default class Informacionactividad extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: '',
      actividades: '',
      imgeevi: ' ',
      relevancia: '',
      resultado: '',
      objetivo: '',
      descripcion: '',
      evidencia: '',
      evidencias: [],
      imge: 0,
      checkedCancelada: false,
      checkedReprogramar: false,
      motivo_cancelado: '',
      fechai: '',
      horai: '',
      fechaf: '',
      horaf: '',
      estatus : '',
      convocados: '',
      convoca: '',
      tipoA: '',
      estado: '',
      internaE: '',
      municipio: '',
      quien: '',
      lugar: '',
      imparte: '',
      desc: ''
    }
  }
  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad, imparte, fechai, fechaf, convoca, dependencia, horai, objetivo, asunto,  } = doc.data()
      actividades.push({
        key: doc.id,
        asunto,
        convocados,
        convoca,
        fechai,
        doc,
        tipoActividad,
        imparte,
        fechai,
        fechaf,
        tipoA,
        estados,
        convoca,
        internaE,
        municipios,
        quien,
        lugar,
        imparte,
        desc,
        actividad,
        duracion,
        responsable,
        objetivo,
        descripcion,
        dependencia,

        horai,
        objetivo
      })
    })
    this.setState({
      actividades
   })
  }
  componentDidMount () {
    const ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id. hW9YkDD4Zp3oAdYsFEt)
    ref.get().then((doc) => {
      if (doc.exists) {
        const actividades = doc.data()
        this.setState({
          key: doc.id,
          asunto: actividades.asunto,
          convocados: actividades.convocados,
          convoca: actividades.convoca,
          fechai: actividades.fechai,
          fechaf: actividades.fechaf,
          tipoA: actividades.tipoA,
          estados: actividades.estados,
          internaE: actividades.internaE,
          municipios: actividades.municipios,
          quien: actividades.quien,
          lugar: actividades.lugar,
          imparte: actividades.imparte,
          desc: actividades.desc,
          actividad: actividades.actividad,
          duracion: actividades.duracion,
          responsable: actividades.responsable,
          objetivo: actividades.objetivo,
          descripcion: actividades.descripcion

        })
      } else {
        console.log('No hay documento!')
      }
    })
  }



  render () {
    return (
      <div className='fader-vis'>

          <div className='form-content-gm'>
              <form noValidate autoComplete='off' className='mensajesg-container-3' onSubmit={this.onSubmit}>
                <div>
                  <h1>INFORMACION DE ACTIVIDAD</h1>
                </div>
                <div>
                <div className='desc-all' >
                <div className='tipo-act'>
                    <p className='desc-p'>Nombre de la Actividad </p>
                    <p className='desc-left'> this state actividad}</p>
                </div>
                  <div className='tipo-act'>
                      <p className='desc-p'>Tipo de Actividad:</p>
                      <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                      <p className='desc-p'>Objetivo</p>
                      <p className='desc-left'></p>
                  </div>





            <div className='desc-colum'>
{/*primera parte */}
                <div className='desc-pri'>
                <div>

                  <div className='tipo-act'>
                    <p className='desc-p'>Estatus:</p>
                    <p className='desc-left'>thisstate estatus}</p>
                  </div>

                  </div>


                  <div className='tipo-act'>
                    <p className='desc-p'>Fecha</p>
                    <p className='desc-left'>this state fechai}</p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Estado:</p>
                    <p className='desc-left'>this state estados}</p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Lugar:</p>
                    <p className='desc-left'>this state lugar}</p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Con quien:</p>
                    <p className='desc-left'>this state lugar}</p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Asistentes:</p>
                    <p className='desc-left'> </p>
                  </div>
                </div>
{/* segunda parte */}
                <div className='desc-segu'>
                  <div className='tipo-act'>
                    <p className='desc-p'>Convoca:</p>
                    <p className='desc-left'>  this state convoca}</p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Duracion:</p>
                  <p className='desc-left'> this state duracion}</p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Actividad Genenerada por PGJH</p>
                  <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Municipio:</p>
                  <p className='desc-left'> this state municipios}</p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Dependencia</p>
                  <p className='desc-left'>this state dependencias}</p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Responsable:</p>
                  <p className='desc-left'></p>
                  </div>
                </div>
            </div>
            <div>
            <p className='desc-p'>Descripcion</p>
            <p className='desc-left'>this state descripcion}.</p>
            </div>
          </div>
                </div>

              </form>



          </div>
      </div>
    )
  }

}
