import React, { Component } from 'react'
import './Abusqueda.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

export default class Aregistradas extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      tipoA: '',
      ano: ''
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoA, lugar, fechai } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoA,
        lugar,
        fechai
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
      <div>
        <div className='container-aregistradas'>
          <div>
            <h1>Busqueda Actividades</h1>
          </div>
          <div>
          <div className='input-c-c'>
            <p className='p-t-aa'>Tipo de Actividad:</p>
          </div>
          <div>
            <p className='p-t-aa'>Periodo:</p>

          </div>
          </div>
          <div className='button-r'>
            <button className='style-button-r'><Link to=''>Buscar</Link></button>
          </div>
          <div>
            <div className='content-title-r'>
              <div className='bor' style={{borderRight: '1px solid #d0d0d0'}} />
              <div className='title-r'><p className='p-margin-r'><b>Actividad/Asunto</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Convoca</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Para</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Lugar</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Fecha</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Hora</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Estado</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Evidencia</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Editar</b></p></div>
              <div className='bor' />
            </div>
            <div>
              {this.state.actividades.map(actividades =>
                <div className='content-title'>
                  <div className='bor' style={{borderRight: '1px solid #d0d0d0'}} />
                  <div className='title-r'><p className='p-margin-r'>{actividades.tipoA}</p></div>
                  <div className='title-r'><p className='p-margin-r'>{actividades.convoca}</p></div>
                  <div className='title-r'><p className='p-margin-r'>{actividades.Quien}</p></div>
                  <div className='title-r'><p className='p-margin-r'>{actividades.lugar}</p></div>
                  <div className='title-r'><p className='p-margin-r'>{actividades.fechai}</p></div>
                  <div className='title-r'><p className='p-margin-r'>{actividades.fechaf}</p></div>
                  <div className='title-r'><p className='p-margin-r'>{actividades.estado}</p></div>
                  <div className='title-ra'><p className='p-margin-r'><Link to={`/Sactividad/${actividades.key}`}>Evidencia</Link></p></div>
                 <div className='title-ra'><p className='p-margin-r'><Link to={`/EditarActividad/${actividades.key}`}>Editar</Link></p></div>
                  <div className='bor' />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
