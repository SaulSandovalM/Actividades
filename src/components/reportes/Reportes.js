import React, { Component } from 'react'
import './Reportes.css'
import firebase from '../../Firebase'

export default class Reportes extends Component {
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
      <div style={{ backgroundColor: '#FAFAFA', paddingLeft: '13%' }}>
      <div className='container-show' >
        <div>
          <h1>Reportes</h1>
        </div>
        <div className='search-r'>
          <div className='content-s'>
            <div className='content-s'>
              <p className='p-s'>Periodo: </p>
              <input type='date' />
            </div>
            <div className='content-s'>
              <p className='p-s'>a: </p>
              <input type='date' />
            </div>
          </div>
        </div>
        <div className='content-t-r' style={{ marginTop: '30px' }}>
          <div className='bor' />
          <div className='title-re'><b>Actividad</b></div>
          <div className='title-re'><b>Lugar</b></div>
          <div className='title-re'><b>Fiscalia/Direccion</b></div>
          <div className='title-re'><b>Fecha</b></div>
          <div className='title-re'><b>Editar</b></div>
          <div className='title-re'><b>Evidencia</b></div>
          <div className='title-re'><b>Relevante</b></div>
          <div className='bor' style={{ borderLeft: '1px solid #d0d0d0' }} />
        </div>
        <div>
          {this.state.actividades.map(actividades =>
            <div className='content-t-r'>
              <div className='bor' />
              <div className='title-re'>{actividades.tipoA}</div>
              <div className='title-re'>{actividades.lugar}</div>
              <div className='title-re'>{actividades.direccion}</div>
              <div className='title-re'>{actividades.fechai}</div>
              <div className='title-re'>Editar</div>
              <div className='title-re'>Evidencia</div>
              <div className='title-re'>Relevante</div>
              <div className='bor' style={{ borderLeft: '1px solid #d0d0d0' }} />
            </div>
          )}
        </div>
        </div>
      </div>
    )
  }
}
