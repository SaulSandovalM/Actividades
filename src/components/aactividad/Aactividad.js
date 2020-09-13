import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'

export default class Aactividad extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('actividades')
    this.refestado = firebase.firestore().collection('estados')
    this.refprioridad = firebase.firestore().collection('prioridad')
    this.refdirecciones = firebase.firestore().collection('direcciones')
    this.refmunicipios = firebase.firestore().collection('municipios')
    this.unsubscribe = null
    this.state = {
      estados: [],
      tipoActividad: '',
      prioridad: [],
      direcciones: [],
      municipios: [],
      tema: '',
      ainterna: '',
      aexterna: '',
      convocamos: '',
      convocados: false,
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
      servidores: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleChange(convocados) {
    this.setState({
      convocados: !this.state.convocados,
    });
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

  onCollectionUpdatePrioridad = (querySnapshot) => {
    const prioridad = []
    querySnapshot.forEach((doc) => {
      const { nprioridad } = doc.data()
      prioridad.push({
        key: doc.id,
        doc,
        nprioridad
      })
    })
    this.setState({
      prioridad
   })
  }

  onCollectionUpdateDirecciones = (querySnapshot) => {
    const direcciones = []
    querySnapshot.forEach((doc) => {
      const { Direccion } = doc.data()
      direcciones.push({
        key: doc.id,
        doc,
        Direccion
      })
    })
    this.setState({
      direcciones
   })
  }

  onCollectionUpdateMunicipios = (querySnapshot) => {
    const municipios = []
    querySnapshot.forEach((doc) => {
      const { municipio } = doc.data()
      municipios.push({
        key: doc.id,
        doc,
        municipio
      })
    })
    this.setState({
      municipios
   })
  }

  componentDidMount() {
    this.unsubscribe = this.refestado.onSnapshot(this.onCollectionUpdateEstado)
    this.unsubscribe = this.refprioridad.onSnapshot(this.onCollectionUpdatePrioridad)
    this.unsubscribe = this.refdirecciones.onSnapshot(this.onCollectionUpdateDirecciones)
    this.unsubscribe = this.refmunicipios.onSnapshot(this.onCollectionUpdateMunicipios)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { tema, ainterna, aexterna, convocamos, convocados, convoca, fechai, fechaf, tipoA, estado,
          municipio, quien, lugar, imparte, desc, prioridad, servidores, tipoActividad } = this.state
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
      servidores,
      tipoActividad
    }).then((docRef) => {
      this.setState({
        tema: '',
        ainterna: '',
        aexterna: '',
        convocamos: '',
        convocados: false,
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
        servidores: '',
        tipoActividad: ''
      })
      this.props.history.push('/ActividadesRegistradas')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render () {
    const { tema, ainterna, aexterna, convocamos, convocados, convoca, fechai, fechaf, estado,
            municipio, lugar, imparte, desc, prioridad, servidores, tipoActividad } = this.state
            console.log(this.state.convocados)
            let impart;
            if(this.state.tipoActividad === 'Curso' || this.state.tipoActividad === 'Conferencia'){
              impart = <div className='input-c-c'>
                <p className='p-t-aa'>Imparte:</p>
                <input name='imparte' value={imparte} onChange={this.onChange} />
              </div>
            }
    return (
      <div style={{ backgroundColor: '#FAFAFA', paddingLeft: '13%' }}>
        <div className='container-aactividad'>
          <div>
            <h1>Agregar Actividad</h1>
          </div>
          <form className='content-aa' onSubmit={this.onSubmit}>
            <div className='input-c-c'>
              <p className='p-t-aa'>Tema:</p>
              <input name='tema' value={tema} onChange={this.onChange} />
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
              <select className='select' name='tipoActividad' onChange={this.onChange} value={tipoActividad}>
                <option></option>
                <option name='tipoActividad'>Curso</option>
                <option name='tipoActividad'>Conferencia</option>
                <option name='tipoActividad'>Taller</option>
                <option name='tipoActividad'>Reunión de Trabajo</option>
                <option name='tipoActividad'>Otro</option>

              </select>
            </div>
            <div className='input-c-c'>
              <p>Convocamos:</p>
              <input className='style-check' type='checkbox' name='convocamos'
              value={convocamos} onChange={this.onChange}/>
              <p>Convocados:</p>
              <input className='style-check' type='checkbox'
                value={this.state.convocados} onChange={this.handleChange}/>
            </div>
            { this.state.convocados && <div className='input-c-c'>
              <p className='p-t-aa'>Convocados por:</p>
              <select className='select'>
              <option></option>
                {this.state.direcciones.map(direcciones =>
                  <option>{direcciones.Direccion}</option>
                )}
              </select>
            </div>}
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Convocados por dependencia/persona externa:</p>
                <input name='convoca' value={convoca} onChange={this.onChange} />
              </div>
              {
                impart
              }

              <div className='input-c-c'>
                <p className='p-t-aa'>Estado:</p>
                <select className='select' value={estado}>
                <option></option>
                  {this.state.estados.map(estados =>
                    <option>{estados.estado}</option>
                  )}
                </select>
              </div>
              { this.state.estado && <div className='input-c-c'>
                <p className='p-t-aa'>Municipio:</p>
                <select className='select'>
                <option></option>
                  {this.state.municipios.map(municipios =>
                    <option>{municipios.municipio}</option>
                  )}
                </select>
              </div>}
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Lugar Específico:</p>
                <input name='lugar' value={lugar} onChange={this.onChange} />
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Nivel de prioridad:</p>
                <select className='select'>
                <option></option>
                  {this.state.prioridad.map(prioridad =>
                    <option>{prioridad.nprioridad}</option>
                  )}
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
