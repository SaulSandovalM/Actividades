import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

export default class Showm extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('messages').orderBy('num', 'asc')
    this.unsubscribe = null
    this.state = {
      messages: []
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = []
    querySnapshot.forEach((doc) => {
      const { asunto, descripcion, imagen, checked, num, fecha } = doc.data()
      messages.push({
        key: doc.id,
        doc,
        asunto,
        descripcion,
        imagen,
        checked,
        num,
        fecha
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
      <div className='mg-conta'>
        <div>
          <div className='div-mg'>
            <h3 className='mg-mp'>Mensajes</h3>
          </div>
          <div className='mgenerales-container'>
            {this.state.messages.map(messages =>
              <div className='content-title'>
                <div className='men-titulo'>
                  <p className='mes-p'>{messages.asunto}</p>
                </div>
                <div className='men-desc'>
                  <p  className='mes-p'>{messages.descripcion}</p>
                  <p  className='mes-p'>{messages.fecha}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
