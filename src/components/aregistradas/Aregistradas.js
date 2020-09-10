import React, { Component } from 'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

export default class Aregistradas extends Component {
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
      <div style={{ paddingLeft: '13%' }}>
        <div className='container-aregistradas'>
          <div>
            <h1>Actividades Registradas</h1>
          </div>
          <div className='button-r'>
            <button className='style-button-r'><Link to='/AgregarActividad'>Agregar</Link></button>
          </div>
          <div>
            <div className='content-title-r'>
              <div className='bor' style={{borderRight: '1px solid #d0d0d0'}} />
              <div className='title-reg'><p className='p-margin-r'><b>Asunto</b></p></div>
              <div className='title-reg'><p className='p-margin-r'><b>Mensaje</b></p></div>
              <div className='title-reg'><p className='p-margin-r'><b>Para</b></p></div>
              <div className='title-reg'><p className='p-margin-r'><b>Fecha</b></p></div>
              <div className='title-ra'><p className='p-margin-r'><b>Editar</b></p></div>
              <div className='title-ra'><p className='p-margin-r'><b>Evidencia</b></p></div>
              <div className='bor' />
            </div>
            <div>
              {this.state.actividades.map(actividades =>
                <div className='content-title'>
                  <div className='bor' style={{borderRight: '1px solid #d0d0d0'}} />
                  <div className='title-reg'><p className='p-margin-r'>{actividades.tipoA}</p></div>
                  <div className='title-reg'><p className='p-margin-r'>{actividades.lugar}</p></div>
                  <div className='title-reg'><p className='p-margin-r'>{actividades.direccion}</p></div>
                  <div className='title-reg'><p className='p-margin-r'>{actividades.fechai}</p></div>
                  <div className='title-ra'><p className='p-margin-r'><Link to={`/EditarActividad/${actividades.key}`}>Editar</Link></p></div>
                  <div className='title-ra'><p className='p-margin-r'><Link to={`/Sactividad/${actividades.key}`}>Evidencia</Link></p></div>
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