import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'

export default class Editarm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: '',
      asunto: '',
      descripcion: '',
      para: '',
      imagen: ''
    }
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
          para: messages.para,
          imagen: messages.imagen
        })
      } else {
        console.log('No hay documento!')
      }
    })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState({ messages:state })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { asunto, descripcion, para, imagen } = this.state
    const updateRef = firebase.firestore().collection('messages').doc(this.state.key)
    updateRef.set({
      asunto,
      descripcion,
      para,
      imagen
    }).then((docRef) => {
      this.setState({
        key: '',
        asunto: '',
        descripcion: '',
        para: '',
        imagen: ''
      })
      this.props.history.push('/Listademensajes')
    })
    .catch((error) => {
      console.error('Error al agregar: ', error)
    })
  }

  render() {
    return (
      <div style={{ margin: '80px' }}>
        <div>
          <div>
            <h1>Edicion de Mensajes</h1>
          </div>
          <div>
            <form className='container-edit' onSubmit={this.onSubmit}>
              <div className='content-edit'>
                <label className='title-e' for='asunto'>Asunto:</label>
                <input className='input-e' name='asunto' value={this.state.asunto} onChange={this.onChange} placeholder='asunto' />
              </div>
              <div className='content-edit'>
                <label className='title-e' for='para'>Para:</label>
                <input className='input-e' name='para' value={this.state.para} onChange={this.onChange} placeholder='para' />
              </div>
              <div className='content-edit'>
                <label className='title-e' for='descripcion'>Descripcion:</label>
                <textarea cols='80' rows='3' className='input-e' name='descripcion' value={this.state.descripcion} onChange={this.onChange} placeholder='descripcion' />
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
