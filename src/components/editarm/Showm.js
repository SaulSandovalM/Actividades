import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

export default class Showm extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('messages')
    this.unsubscribe = null
    this.state = {
      messages: []
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = []
    querySnapshot.forEach((doc) => {
      const { asunto, descripcion, para, imagen } = doc.data()
      messages.push({
        key: doc.id,
        doc, // DocumentSnapshot
        asunto,
        descripcion,
        para,
        imagen
      })
    })
    this.setState({
      messages
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render() {
    return (
      <div>
        <div className='container-show'>
          <div>
            <h1>Mensajes Realizados</h1>
          </div>
          <div>
            <div className='content-title'>
              <div className='bor' />
              <div className='title-a'><p className='p-padding'><b>Asunto</b></p></div>
              <div className='title-a'><p className='p-padding'><b>Mensaje</b></p></div>
              <div className='title-a'><p className='p-padding'><b>Para</b></p></div>
              <div className='title-a'><p className='p-padding'><b>Editar</b></p></div>
              <div className='bor' style={{borderLeft: '1px solid #d0d0d0'}} />
            </div>
            <div>
              {this.state.messages.map(messages =>
                <div className='content-title'>
                  <div className='bor' />
                  <div className='title-a'><p className='p-padding'>{messages.asunto}</p></div>
                  <div className='title-a'><p className='p-padding'>{messages.descripcion}</p></div>
                  <div className='title-a'><p className='p-padding'>{messages.para}</p></div>
                  <div className='title-a'><p className='p-padding'><Link to={`/Editarmensaje/${messages.key}`}>Editar</Link></p></div>
                  <div className='bor' style={{borderLeft: '1px solid #d0d0d0'}} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
