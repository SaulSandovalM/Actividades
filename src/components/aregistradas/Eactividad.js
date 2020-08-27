import React, { Component } from 'react'
import './Aregistradas.css'
import firebase from '../../Firebase'

export default class Aactividad extends Component {
  constructor (props) {
    super(props)
    this.state = {
      convocados: '',
      convoca: '',
      fechai: '',
      fechaf: '',
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

  componentDidMount () {
    const ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id)
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
          estado: actividades.estado,
          internaE: actividades.internaE,
          municipio: actividades.municipio,
          quien: actividades.quien,
          lugar: actividades.lugar,
          imparte: actividades.imparte,
          desc: actividades.desc
        })
      } else {
        console.log('No hay documento!')
      }
    })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { convocados, convoca, fechai, fechaf, tipoA, estado, internaE,
            municipio, quien, lugar, imparte, desc } = this.state
    const updateRef = firebase.firestore().collection('actividades').doc(this.state.key)
    updateRef.set({
      convocados,
      convoca,
      fechai,
      fechaf,
      tipoA,
      estado,
      internaE,
      municipio,
      quien,
      lugar,
      imparte,
      desc
    }).then((docRef) => {
      this.setState({
        convocados: '',
        convoca: '',
        fechai: '',
        fechaf: '',
        tipoA: '',
        estado: '',
        internaE: '',
        municipio: '',
        quien: '',
        lugar: '',
        imparte: '',
        desc: ''
      })
      this.props.history.push('/ActividadesRegistradas')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render () {
    return (
      <div>
        <div className='container-aactividad'>
          <div>
            <h1>Seguimiento de Actividad</h1>
          </div>
          <div className='content-list-ea'>
            <div className='title-t-es'>
              <p className='style-p-ea'>Titulo</p>
            </div>
            <div className='title-t-es' style={{borderLeft: '1px solid'}}>
              <p className='style-p-ea'>Descripcion</p>
            </div>
            <div className='title-t-es' style={{borderLeft: '1px solid'}}>
              <p className='style-p-ea'>Evidencia</p>
            </div>
            <div className='title-t-es' style={{borderLeft: '1px solid'}}>
              <p className='style-p-ea'>Editar</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
