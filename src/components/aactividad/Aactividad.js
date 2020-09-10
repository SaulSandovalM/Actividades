import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'

export default class Aactividad extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('actividades')
    this.refestado = firebase.firestore().collection('estados')
    this.reftipo = firebase.firestore().collection('tipoActividad')
    this.unsubscribe = null
    this.state = {
      estados: [],
      tipoActividad: [],
      tema: '',
      ainterna: '',
      aexterna: '',
      convocamos: '',
      convocados: '',
      convoca: '',
      fechai: '',
      fechaf: '',
      tipoA: '',
      estado: '',
      municipio: '',
      quien: '',
      lugar: '',
      imparte: '',
      desc: '',
      prioridad: '',
      servidores: ''
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onCollectionUpdateEstado = (querySnapshot) => {
    const estados = []
    querySnapshot.forEach((doc) => {
      const { estado } = doc.data()
      estados.push({
        key: doc.id,
        doc,
        estado
      })
    })
    this.setState({
      estados
   })
  }

  onCollectionUpdateTipo = (querySnapshot) => {
    const tipoActividad = []
    querySnapshot.forEach((doc) => {
      const { actividad } = doc.data()
      tipoActividad.push({
        key: doc.id,
        doc,
        actividad
      })
    })
    this.setState({
      tipoActividad
   })
  }

  componentDidMount() {
    this.unsubscribe = this.refestado.onSnapshot(this.onCollectionUpdateEstado)
  }

  componentDidMount() {
    this.unsubscribe = this.reftipo.onSnapshot(this.onCollectionUpdateTipo)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { tema, ainterna, aexterna, convocamos, convocados, convoca, fechai, fechaf, tipoA, estado,
          municipio, quien, lugar, imparte, desc, prioridad, servidores } = this.state
    this.ref.add({
      tema,
      ainterna,
      aexterna,
      convocamos,
      convocados,
      convoca,
      fechai,
      fechaf,
      tipoA,
      estado,
      municipio,
      quien,
      lugar,
      imparte,
      desc,
      prioridad,
      servidores
    }).then((docRef) => {
      this.setState({
        tema: '',
        ainterna: '',
        aexterna: '',
        convocamos: '',
        convocados: '',
        convoca: '',
        fechai: '',
        fechaf: '',
        tipoA: '',
        estado: '',
        municipio: '',
        quien: '',
        lugar: '',
        imparte: '',
        desc: '',
        prioridad: '',
        servidores: ''
      })
      this.props.history.push('/ActividadesRegistradas')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render () {
    const { tema, ainterna, aexterna, convocamos, convocados, convoca, fechai, fechaf, tipoA, estado,
            municipio, quien, lugar, imparte, desc, prioridad, servidores } = this.state
    return (
      <div style={{ paddingLeft: '13%' }}>
        <div className='container-aactividad'>
          <div>
            <h1>Agregar Actividad</h1>
          </div>
          <form className='content-aa' onSubmit={this.onSubmit}>
            <div className='input-c-c'>
              <p className='p-t-aa'>Tema:</p>
              <input name='quien' value={tema} onChange={this.onChange} />
            </div>
            <div className='input-c-c'>
              <p>Actividad Interna</p>
              <input className='style-check' type='checkbox' name='ainterna'
                value={ainterna} onChange={this.onChange}/>
              <p>Actividad Externa</p>
              <input className='style-check' type='checkbox' name='aexterna'
                value={aexterna} onChange={this.onChange}/>
            </div>
            <div className='input-c-c'>
              <p className='p-t-aa'>Tipo de Actividad:</p>
              <select className='select'>
              <option></option>
                {this.state.tipoActividad.map(tipoActividad =>
                  <option>{tipoActividad.actividad}</option>
                )}
              </select>
            </div>
            <div className='input-c-c'>
              <p>Convocamos:</p>
              <input className='style-check' type='checkbox' name='convocamos'
              value={convocamos} onChange={this.onChange}/>
              <p>Convocados:</p>
              <input className='style-check' type='checkbox' name='convocados'
                value={convocados} onChange={this.onChange}/>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Convocados por dependencia/persona externa:</p>
                <input name='quien' value={convoca} onChange={this.onChange} />
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Imparte:</p>
                <input name='quien' value={imparte} onChange={this.onChange} />
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Estado:</p>
                <select className='select'>
                <option></option>
                  {this.state.estados.map(estados =>
                    <option>{estados.estado}</option>
                  )}
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Municipio:</p>
                <select className='select' name='estado' value={municipio}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Lugar Específico:</p>
                <input name='lugar' value={lugar} onChange={this.onChange} />
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Nivel de prioridad:</p>
                <select className='select' name='prioridad' value={prioridad}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Servidores públicos participantes:</p>
                <input name='servidores' value={servidores} onChange={this.onChange} />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Fecha de Inicio:</p>
                <input type='date' name='fechai' value={fechai}
                  onChange={this.onChange} />
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Fecha de Fin:</p>
                <input type='date' name='fechaf' value={fechaf}
                  onChange={this.onChange} />
              </div>
            </div>
            <div>
              <p>Descripción</p>
              <textarea cols='80' rows='3' name='desc' value={desc}
                onChange={this.onChange} />
            </div>
            <div className='button-aa'>
              <button className='style-button-aa' type='submit' >Guardar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
