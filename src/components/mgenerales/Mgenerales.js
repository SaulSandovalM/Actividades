import React, { Component } from 'react'
import './Mgenerales.css'
import firebase from '../../Firebase'

export default class Mgenerales extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('messages');
    this.unsubscribe = null;
    this.state = {
      messages: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      const { asunto, descripcion, img } = doc.data();
      messages.push({
        key: doc.id,
        doc,
        asunto,
        descripcion,
        img,
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
                    <td>{messages.img}</td>
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
