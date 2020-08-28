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
      const { asunto, descripcion, para, imagen } = doc.data();
      messages.push({
        key: doc.id,
        doc,
        asunto,
        para,
        descripcion,
        imagen,
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
      <div>
        <div className='mgenerales-container'>
          <div>
            <h1>Mensajes Generales</h1>
          </div>
          <div>
            {this.state.messages.map(messages =>
              <div className='content-message'>
                <div className='content-asunto'><b>{messages.asunto}</b></div>
                <div className='content-desimg'>
                  <div className='w-desc'>{messages.descripcion}</div>
                  <img className='w-imagen' src={messages.imagen} alt='' />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
