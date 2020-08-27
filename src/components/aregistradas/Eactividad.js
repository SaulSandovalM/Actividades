import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'

export default class Aactividad extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('actividades')
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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { convocados, convoca, fechai, fechaf, tipoA, estado, internaE,
            municipio, quien, lugar, imparte, desc } = this.state
    this.ref.add({
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
    const { convocados, convoca, fechai, fechaf, tipoA, estado, internaE,
            municipio, quien, lugar, imparte, desc } = this.state
    return (
      <div>
        <div className='container-aactividad'>
          <div>
            <h1>Agregar Actividad</h1>
          </div>
          <form className='content-aa' onSubmit={this.onSubmit}>
            <div className='input-c-c'>
              <p>Convodados:</p>
              <input className='style-check' type='checkbox' name='convocados'
                value={convocados} onChange={this.onChange}/>
              <input className='style-check' type='checkbox' />
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Quien Convoca:</p>
                <select className='select' name='convoca' value={convoca}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Fecha de Inicio:</p>
                <input type='date' name='fechai' value={fechai}
                  onChange={this.onChange} />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Tipo de Actividad:</p>
                <select className='select' name='tipoA' value={tipoA}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Fecha de Fin:</p>
                <input type='date' name='fechaf' value={fechaf}
                  onChange={this.onChange} />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Estado:</p>
                <select className='select' name='estado' value={estado}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Interna Externa:</p>
                <input className='style-check-i' type='checkbox'
                  name='internaE' value={internaE}onChange={this.onChange} />
                <input className='style-check-i' type='checkbox' />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Municipio:</p>
                <select className='select' name='municipio' value={municipio}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Con quien:</p>
                <input name='quien' value={quien} onChange={this.onChange} />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Lugar:</p>
                <input name='lugar' value={lugar} onChange={this.onChange} />
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Imparte:</p>
                <input name='imparte' value={imparte} onChange={this.onChange} />
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
