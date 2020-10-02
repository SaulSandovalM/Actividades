import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Generacionm.css'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import Input from '@material-ui/core/Input'

export default class Generacionm extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('messages')
    this.state = {
      asunto: '',
      descripcion: '',
      imgp: 0,
      checked: true,
      fecha: ''
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
    const { asunto, descripcion, imagen, checked, fecha } = this.state
    this.ref.add({
      asunto,
      descripcion,
      imagen,
      checked,
      fecha
    }).then((docRef) => {
      this.setState({
        asunto: '',
        descripcion: '',
        imagen: '',
        checked: true
      })
      this.props.history.push('/')
      alert('Se Envio el formulario')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render() {
    const { asunto, descripcion } = this.state

    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    var f = new Date()
    var date = (meses[f.getMonth()] + ' ' + f.getDate() + ' de ' + f.getFullYear() + ', ' + f.getHours() + ':' + f.getMinutes())
    this.state.fecha = date

    return (
      <div className='mg-conta'>
        <div>
          <div className='divtop-mg' />
          <div className='form-content-gm'>
            <form noValidate autoComplete='off' className='mensajesg-container' onSubmit={this.onSubmit}>
              <h2>Generación de Boletin</h2>
              <TextField
                label='Asunto'
                name='asunto'
                value={asunto}
                onChange={this.onChange}
                required
              />
              <TextField
                label='Descripción'
                style={{marginTop: '15px'}}
                name='descripcion'
                value={descripcion}
                onChange={this.onChange}
                required
              />
              <TextField
                label='Fecha'
                style={{marginTop: '15px'}}
                name='fecha'
                value={date}
                onChange={this.onChange}
                required
              />
              <Input
                type='file'
                style={{marginTop: '30px'}}
                onChange={this.handleImage.bind(this)}
                required
              />
              <progress className='progress2' value={this.state.imgp} />
              <div className='add-gb'>
                <Fab color='primary' aria-label='add' style={{background: 'green'}} type='submit'>
                  <DoneIcon />
                </Fab>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
