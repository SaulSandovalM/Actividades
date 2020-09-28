import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import Switch from 'react-switch'

export default class Editarm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: '',
      asunto: '',
      descripcion: '',
      imagen: '',
      checked: true,
      num: '',
      imgc: 0
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
          num: messages.num
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
    const { asunto, descripcion, imagen, checked, num } = this.state
    const updateRef = firebase.firestore().collection('messages').doc(this.state.key)
    updateRef.set({
      asunto,
      descripcion,
      imagen,
      checked,
      num
    }).then((docRef) => {
      this.setState({
        key: '',
        asunto: '',
        descripcion: '',
        imagen: '',
        checked: true,
        num: ''
      })
      this.props.history.push('/Listademensajes')
    })
    .catch((error) => {
      console.error('Error al agregar: ', error)
    })
  }

  render() {
    return (
      <div style={{ margin: '80px', paddingLeft: '13%' }}>
        <div>
          <div className='form-content-sw'>
            <h1 className='h1-g'>
              Edición de Mensaje
            </h1>
            <div>
              <Switch checked={this.state.checked} onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <form className='container-edit' onSubmit={this.onSubmit}>
              <div className='content-edit'>
                <label className='title-e'>Asunto:</label>
                <input className='input-e' name='asunto' value={this.state.asunto} onChange={this.onChange} placeholder='asunto' />
              </div>
              <div className='content-edit'>
                <label className='title-e'>Descripcion:</label>
                <textarea cols='80' rows='3' className='input-g' name='descripcion' value={this.state.descripcion} onChange={this.onChange} placeholder='descripcion' />
              </div>
              <div className='form-content'>
                <label className='text-g'>Imagen:</label>
                <input className='input-g' type='file' onChange={this.handleImage.bind(this)} />
              </div>
              <div className='form-content'>
                <label className='text-g' />
                <progress className='progress3' value={this.state.imgc} />
              </div>
              <div className='button-e'>
                <button className='style-button-e' type='submit'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
