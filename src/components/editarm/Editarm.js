import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import Input from '@material-ui/core/Input'

export default class Editarm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: '',
      asunto: '',
      descripcion: '',
      imagen: '',
      checked: true,
      imgc: 0,
      fecha: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    const ref = firebase.firestore().collection('messages').doc(this.props.match.params.id)
    ref.get().then((doc) => {
      if (doc.exists) {
        const messages = doc.data()
        this.setState({
          key: doc.id,
          asunto: messages.asunto,
          descripcion: messages.descripcion,
          imagen: messages.imagen,
          checked: messages.checked,
          fecha: messages.fecha
        })
      } else {
        console.log('No hay documento!')
      }
    })
  }

  handleImage (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`imgs/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        imgc: percentage
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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState({ messages:state })
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { asunto, descripcion, imagen, checked, fecha } = this.state
    const updateRef = firebase.firestore().collection('messages').doc(this.state.key)
    updateRef.set({
      asunto,
      descripcion,
      imagen,
      checked,
      fecha
    }).then((docRef) => {
      this.setState({
        key: '',
        asunto: '',
        descripcion: '',
        imagen: '',
        checked: true,
        fecha: ''
      })
      this.props.history.push('/Listademensajes')
    })
    .catch((error) => {
      console.error('Error al agregar: ', error)
    })
  }

  render() {

    return (
      <div className='mg-conta'>
        <div>
          <div className='divtop-mg' />
          <div className='form-content-gm'>
            <form noValidate autoComplete='off' className='mensajesg-container' onSubmit={this.onSubmit}>
              <h2>Edición de Mensajes</h2>
              <TextField
                id='standard-basic'
                label='Asunto'
                name='asunto'
                value={this.state.asunto}
                onChange={this.onChange}
                required
              />
              <TextField
                id='standard-basic'
                label='Descripción'
                style={{marginTop: '15px'}}
                name='descripcion'
                value={this.state.descripcion}
                onChange={this.onChange}
                required
              />

              <Input
                type='file'
                style={{ marginTop: '30px' }}
                onChange={this.handleImage.bind(this)}
                required
              />
              <progress className='progress2' value={this.state.imgc} />
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
