import React, { Component } from 'react'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

export default class Verm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: {},
      key: ''
    }
  }

  componentDidMount () {
    const ref = firebase.firestore().collection('messages').doc(this.props.match.params.id)
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          message: doc.data(),
          key: doc.id,
          isLoading: false
        })
      } else {
        console.log('No hay documento!')
      }
    })
  }

  delete (id) {
    firebase.firestore().collection('messages').doc(id).delete().then(() => {
      console.log('Documento borrado!')
      this.props.history.push('/')
    }).catch((error) => {
      console.error('Error al borrar: ', error)
    })
  }

  render () {
    return (
      <div style={{ margin: '80px' }}>
        <div>
          <div>
            <dl>
              <dt>Asunto:</dt>
              <dd>{this.state.message.asunto}</dd>
              <dt>Descripcion:</dt>
              <dd>{this.state.message.descripcion}</dd>
              <dt>Para:</dt>
              <dd>{this.state.message.para}</dd>
            </dl>
            <Link to={`/Editarmensaje/${this.state.key}`}>Editar</Link>
            <button onClick={this.delete.bind(this, this.state.key)}>Borrar</button>
          </div>
        </div>
      </div>
    )
  }
}
