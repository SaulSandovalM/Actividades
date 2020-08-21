import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Generacionm.css'
import { Link } from 'react-router-dom'

export default class Generacionm extends Component {
  constructor() {
    super()
    this.ref = firebase.firestore().collection('messages')
    this.state = {
      poara: '',
      asunto: '',
      descripcion: ''
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { para, asunto, descripcion } = this.state
    this.ref.add({
      para,
      asunto,
      descripcion
    }).then((docRef) => {
      this.setState({
        para: '',
        asunto: '',
        descripcion: ''
      })
      this.props.history.push('/')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render() {
    const { asunto, descripcion, para } = this.state
    return (
      <div style={{ margin: '80px' }}>
        <div>
          <div>
            <h1>
              Generacion de mensajes generales
            </h1>
          </div>
          <div>
            <form onSubmit={this.onSubmit}>
              <div>
                <label for='para'>Para:</label>
                <input type='text' name='para' value={para} onChange={this.onChange} placeholder='Yo mero :v' />
              </div>
              <div>
                <label for='asunto'>Asunto:</label>
                <input type='text' name='asunto' value={asunto} onChange={this.onChange} placeholder='lo que sea ' />
              </div>
              <div>
                <label for='descripcion'>Descripcion:</label>
                <textArea name='descripcion' onChange={this.onChange} placeholder='lo que sea :v' cols='80' rows='3'>{descripcion}</textArea>
              </div>
              <div>
                <label for='img'>Imagen:</label>
                <input type='file' />
              </div>
              <button type='submit' class='btn btn-success'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
