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
      const { asunto, descripcion, para } = doc.data()
      messages.push({
        key: doc.id,
        doc, // DocumentSnapshot
        asunto,
        descripcion,
        para,
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
      <div style={{ margin: '80px' }}>
        <div>
          <div>
            <h3>
              Lista de Mensajes
            </h3>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Editar</th>
                  <th>Asunto</th>
                  <th>Descripcion</th>
                  <th>Para</th>
                </tr>
              </thead>
              <tbody>
                {this.state.messages.map(messages =>
                  <tr>
                    <td><Link to={`/Vermensajes/${messages.key}`}>Editar</Link></td>
                    <td>{messages.asunto}</td>
                    <td>{messages.descripcion}</td>
                    <td>{messages.para}</td>
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
