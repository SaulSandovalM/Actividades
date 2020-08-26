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
        descripcion,
        para,
        imagen
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
        <div style={{ margin: '80px' }}>
          <div>
            <h1>
              MENSAJES GENERALES
            </h1>
          </div>
          <div>
            <table>
              <tbody>
                {this.state.messages.map(messages =>
                  <tr>
                    <td>{messages.asunto}</td>
                    <td>{messages.descripcion}</td>
                    <td>{messages.para}</td>
                    <img width='320' src={messages.imagen} alt='' />
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
