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
        checked: true,
        num: ''
      })
      const statsRef = firebase.firestore().collection('messages').doc('--contador--')
      const increment = firebase.firestore.FieldValue.increment(1)
      const batch = firebase.firestore().batch()
      batch.set(statsRef, { num: increment }, { merge: true })
      batch.commit()
      this.props.history.push('/')
      alert('Se Envio el formulario')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render() {
    const { asunto, descripcion } = this.state

    var meses = new Array ('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')
    var f = new Date()
    var fecha = (f.getDate() + ' de ' + meses[f.getMonth()] + ' de ' + f.getFullYear() + ', ' + f.getHours() + ':' + f.getMinutes())
    this.state.fecha = fecha
    console.log(this.state.asunto)
    console.log(fecha)
    console.log(this.state.checked)

    return (
      /*<div style={{ margin: '80px', paddingLeft: '256px' }}>
        <div>
          <div className='form-content-sw'>
            <h1 className='h1-g'>
              Generacion de Boletin
            </h1>
            <div>
              <Switch checked={this.state.checked} />
            </div>
          </div>
          <div>
            <form className='form-container-g' onSubmit={this.onSubmit}>
              <div className='form-content-g'>
                <label className='text-g'>Asunto:</label>
                <input
                  className='input-g'
                  name='asunto'
                  value={asunto}
                  onChange={this.onChange}
                  placeholder='Asunto'
                  required
                />
              </div>
              <div className='form-content-g'>
                <label className='text-g'>Descripcion:</label>
                <textArea
                  className='input-g'
                  name='descripcion'
                  onChange={this.onChange}
                  placeholder='Mensaje'
                  cols='80'
                  rows='3'
                  required
                >
                  {descripcion}
                </textArea>
              </div>
              <div className='form-content-g'>
                <label className='text-g'>Imagen:</label>
                <input
                  className='input-g'
                  type='file'
                  onChange={this.handleImage.bind(this)}
                  required
                />
              </div>
              <div className='form-content-g'>
                <label className='text-g' required />
                <progress className='progress2' value={this.state.imgp} />
              </div>
              <div className='button-e'>
                <button className='style-button-e' type='submit'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>*/
      <div className='mg-conta'>
        <div>
          <div className='divtop-mg' />
          <div className='form-content-gm'>
            <form noValidate autoComplete='off' className='mensajesg-container' onSubmit={this.onSubmit}>
              <h2>Generacion de Boletin</h2>
              <TextField
                id='standard-basic'
                label='Asunto'
                name='asunto'
                value={asunto}
                onChange={this.onChange}
                required
              />
              <TextField
                id='standard-basic'
                label='Descripción'
                style={{marginTop: '15px'}}
                name='descripcion'
                value={descripcion}
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
