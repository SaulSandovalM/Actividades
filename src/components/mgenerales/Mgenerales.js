import React, { Component } from 'react'
import './Mgenerales.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'

export default class Mgenerales extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('messages').orderBy('num','asc')
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
        <div>
          <div className='div-mg'>
            <h3 className='mg-mp'>Boletin PGJEH</h3>
          </div>
          <div className='mgenerales-container'>
            {this.state.messages.map(messages =>
              <div>
              {messages.checked &&
                <div className='mes-content'>
                  <div className='mes-area'>
                    <div className='mes-text'>
                      <p>Dirección de Informática</p>
                    </div>
                    <div className='mes-date'>
                      <p>{messages.fecha}</p>
                    </div>
                  </div>
                  <div className='mes-desc'>
                    <p className='mes-p'>{messages.descripcion}</p>
                  </div>
                  <div className='mes-img'>
                    <div className='mes-img-cars'>
                      <img className='image2' src={messages.imagen} alt='' />
                    </div>
                  </div>
                </div>
              }
              </div>
            ).reverse()}
          </div>
        </div>
      </div>
    )
  }
}
