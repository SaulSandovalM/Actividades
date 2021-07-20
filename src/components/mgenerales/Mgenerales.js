import React, { Component } from 'react'
import './Mgenerales.css'
import firebase from '../../Firebase'

export default class Mgenerales extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('messages').orderBy("fecha","desc")
    this.unsubscribe = null;
    this.state = {
      messages: [],
      imgs: null
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      const { asunto, descripcion, imagen, fecha, checked } = doc.data();
      messages.push({
        key: doc.id,
        doc,
        asunto,
        descripcion,
        imagen,
        fecha,
        checked
      })
    })
    this.setState({
      messages
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  handleBack() {
      this.props.history.push('/ActividadesRegistradas');
    }
  render () {
    return (
      <div className='mg-conta'>
        <div className='nav-ma2'>
          <div className='mes-icon' >
            <h1 className='titulo-mesaje'>¡Bienvend@!</h1>
          </div>
        </div>
          {this.state.messages.map(messages =>
          <div className='content-all' >
            {messages.checked &&
              <div className='content-tarjeta'>
                <div className='space-b'>
                  <div className='dir-content'>
                    <p className='mg-asunto'>{messages.asunto}</p>
                    <p className='mg-area'>Aviso generado por: El Despacho del Procurador {messages.fecha}</p>
                    <p>{messages.descripcion}</p>
                  </div>
                  <div className='image'>
                    <img className='image2' src={messages.imagen} alt=''/>
                  </div>
                </div>
              </div>
            }
          </div>
        )}
      </div>
    )
  }
}
