import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Generacionm.css'
import Switch from 'react-switch'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done'

export default class Generacionm extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('messages')
    this.state = {
      asunto: '',
      descripcion: '',
      imgp: 0,
      checked: true,
      num: '',
      contador: {},
      fecha: ''
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  componentDidMount() {
    this.consumoNum()
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
    const { asunto, descripcion, imagen, checked, num, fecha } = this.state
    this.ref.add({
      asunto,
      descripcion,
      imagen,
      checked,
      num,
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
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  consumoNum = () => {
    const ref = firebase.firestore().collection('messages').doc('--contador--')
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          contador: doc.data(),
          key: doc.id,
          isLoading: false
        })
        console.log(doc.data())
      } else {
        console.log('No hay nada!')
      }
    })
  }

  render() {
    const { asunto, descripcion } = this.state
    this.state.num = this.state.contador.num

    var meses = new Array ('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')
    var f = new Date()
    var fecha = (f.getDate() + ' de ' + meses[f.getMonth()] + ' de ' + f.getFullYear() + ', ' + f.getHours() + ':' + f.getMinutes())
    console.log(fecha)
    this.state.fecha = fecha

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
          <div className='div-mg'>
            <h2 className='mg-mp'>Generacion de Boletin</h2>
          </div>
          <form noValidate autoComplete='off' className='mensajesg-container'>
            <TextField id='standard-basic' label='Asunto' />
            <TextField id='standard-basic' label='Descripción' style={{marginTop: '15px'}} />
          </form>
        </div>
        <div className='add-b'>
          <Fab color='primary' aria-label='add' style={{background: 'green'}}>
            <DoneIcon />
          </Fab>
        </div>
      </div>
    )
  }
}
