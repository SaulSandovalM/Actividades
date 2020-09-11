import React, { Component } from 'react'
import './Mgenerales.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

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
      const { asunto, descripcion, imagen } = doc.data();
      messages.push({
        key: doc.id,
        doc,
        asunto,
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
      <div style={{ backgroundColor: '#FAFAFA', paddingLeft: '13%' }}>
        <div className='mgenerales-container'>
          <div>
            <h1>Boletin PGJEH</h1>
          </div>
          <div>
            {this.state.messages.map(messages =>
              <div className='content-all'>
                <div className='content-tarjeta'>
                 <div className='image'>
                  <img className='image2' src={messages.imagen} alt=''/>
                 </div>
                 <div className='content-message2'>
                  <div className='asunto'>
                    <b>{messages.asunto}</b>
                  </div>
                  <div className='desc'>
                    {messages.descripcion}
                  </div>
                  <div>
                    <p>11/09/2020</p>
                  </div>
                 </div>
                </div>
              </div>
            ).reverse()}
          </div>
        </div>
      </div>
    )
  }
}
