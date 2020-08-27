import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Sactividad.css'

export default class Sactividad extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('actividades')
    this.state = {
      file: '',
      titulo: '',
      desc: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { file, titulo, desc } = this.state
    this.ref.add({
      file,
      titulo,
      desc
    }).then((docRef) => {
      this.setState({
        file: '',
        titulo: '',
        desc: ''
      })
      this.props.history.push('/seguimientoAct')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  handleFile (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`evidencia/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        evip: percentage
      })
    }, error => {
      console.error(error.message)
    }, () => storageRef.getDownloadURL().then(url => {
      const record = url
      this.setState({
        evidencia: record
      })
    }))
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  render () {
    const { titulo, desc} = this.state
    return (
      <div>
      <div style={{ margin: '80px' }}>
        <div>
          <h1>
            SEGUIMIENTO DE ACTIVIDAD
          </h1>
        </div>
        <div>
        <div className='content-title-r'>
          <div className='bor' style={{borderRight: '1px solid #d0d0d0'}} />
          <div className='title-r'><p className='p-margin-r'><b>#</b></p></div>
          <div className='title-r'><p className='p-margin-r'><b>Titulo</b></p></div>
          <div className='title-r'><p className='p-margin-r'><b>Descripción</b></p></div>
          <div className='title-r'><p className='p-margin-r'><b>Evidencia</b></p></div>
          <div className='title-r'><p className='p-margin-r'><b>Editar</b></p></div>
          <div className='bor' />
        </div>

    </div>
    <form className='form-container-g' onSubmit={this.onSubmit}>
        <div>
          <div className='content-seguimiento'>
            <label for='file' >Evidencia:</label>
            <input className='input-g' type='file' onChange={this.handleFile.bind(this)} />
          </div>
          <div className='content-seguimiento'>
            <p className='p-t-aa'>Titulo:</p>
            <input name='titulo' value={titulo} onChange={this.onChange} />
          </div>
          <div className='content-seguimiento'>
            <p className='p-t-aa'>Descripción:</p>
            <textarea cols='80' rows='3' name='desc' value={desc}
              onChange={this.onChange} />
          </div>
          </div>
          <div className='boton-v'>
              <button type='submit' className='input-sc boton-g'>Guardar</button>
            </div>
    </form>
      </div>
      </div>
    )
  }
}
