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
      <div style={{ backgroundColor: '#FAFAFA', paddingLeft: '13%' }}>
        <div className='container-aregistradas-b'>
          <div>
            <h1>Busqueda Actividades</h1>
          </div>
          <div>
            <div className='input-c-qc'>
              <p className='p-t-aa1'>Tipo de Actividad:</p>
              <select className='borderSelect' style={{}}>
                <option>Conferencia, dio</option>

              </select>
            </div>
            <div className='input-c-c'>
                <p className='p-t-aa'>Periodo:</p>
                <select className='borderSelect' style={{ width: '150px'}}>
                  <option>Conferencia</option>
                </select>
            </div>
          </div>
          <div className='button-r'>
            <Link to=''><button className='style-button-r'>Buscar</button></Link>
          </div>
          <div>
            <div className='content-title-r'>
              <div className='bor' style={{ borderRight: '1px solid #d0d0d0' }} />
              <div className='title-r'><p className='p-margin-r'><b>Actividad</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Convoca</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Para</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Lugar</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Fecha</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Hora</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Estado</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Evidencia</b></p></div>
              <div className='title-r'><p className='p-margin-r'><b>Reagendar</b></p></div>
              <div className='bor' />
            </div>
            {this.state.actividades.map(actividades =>
              <div className='content-title'>
                <div className='bor' style={{ borderRight: '1px solid #d0d0d0' }} />
                <div className='title-r'><p className='p-margin-r'>{actividades.tipoA}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.convoca}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.Quien}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.lugar}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.fechai}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.fechaf}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.estado}</p></div>

                <div className='title-r'>
                  <Link to={`/Sactividad/${actividades.key}`}>
                <p className='p-margin-r'>Evidencia</p></Link>
                </div>
                <Link to={`/EditarActividad/${actividades.key}`}><div className='title-r'><p className='p-margin-r'>Reagendar</p></div></Link>
                <div className='bor' />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
