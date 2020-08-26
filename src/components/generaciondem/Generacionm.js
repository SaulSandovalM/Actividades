import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Generacionm.css'

export default class Generacionm extends Component {
  constructor() {
    super()
    this.ref = firebase.firestore().collection('messages')
    this.state = {
      para: '',
      asunto: '',
      descripcion: '',
      imgp: 0
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleImage (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`imgs/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        imgp: percentage
      })
    }, error => {
      console.error(error.message)
    }, () => storageRef.getDownloadURL().then(url => {
      const record = url
      this.setState({
        imagen: record
      })
    }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { para, asunto, descripcion, imagen } = this.state
    this.ref.add({
      para,
      asunto,
      descripcion,
      imagen
    }).then((docRef) => {
      this.setState({
        para: '',
        asunto: '',
        descripcion: '',
        imagen: ''
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
                <input type='file' onChange={this.handleImage.bind(this)} />
              </div>
              <button type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
