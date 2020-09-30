import React, { Component } from 'react'
import './Mgenerales.css'
import firebase from '../../Firebase'

export default class Mgenerales extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('messages')
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
      });
    });
    this.setState({
      messages
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className='mg-conta'>
        {this.state.messages.map(messages =>
          <div className='content-all'>
            {messages.checked &&
              <div className='content-tarjeta'>
                <div className='dir-content'>
                  <p className='mg-asunto'>{messages.asunto}</p>
                  <p className='mg-area'>{messages.asunto} - {messages.fecha}</p>
                </div>
                <div className='image'>
                  <img className='image2' src={messages.imagen} alt=''/>
                </div>
                <div className='content-message2'>
                  <div className='content-desc'>
                    <div>
                      <b>{messages.asunto}</b>
                    </div>
                    <div className='desc'>
                      {messages.descripcion}
                    </div>
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
