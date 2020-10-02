import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'

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
      const { asunto, descripcion, imagen, checked, fecha } = doc.data()
      messages.push({
        key: doc.id,
        doc,
        asunto,
        descripcion,
        imagen,
        checked,
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
        <div className='nav-lm'>
          <h1 className='h1-lm'>Mis Mensajes</h1>
        </div>
        <div className='mes-center'>
          <div className='mes-container'>
            <div className='head-mes'>
              Asunto
            </div>
            <div className='head-mesd'>
              Descripcion
            </div>
            <div className='head-mesf'>
              Fecha
            </div>
          </div>
        </div>
        {this.state.messages.map(messages =>
          <div className='mes-center2'>
            <div className='mes-container-map'>
              <span className='material-icons icon-sh' style={{ marginLeft: '-40px', marginRight: '14px'}}>
                label_important
              </span>
              <div className='head-mes'>
                {messages.asunto}
              </div>
              <div className='head-mesd'>
                {messages.descripcion}
              </div>
              <div className='head-mesf'>
                {messages.fecha}
              </div>
            </div>
          </div>
        )}
        {this.state.messages.map(messages =>
          <div className='mes-center2'>
            <div className='mes-container-map'>
              <span className='material-icons icon-sh' style={{ marginLeft: '-40px', marginRight: '14px'}}>
                label_important
              </span>
              <div className='head-mes'>
                {messages.asunto}
              </div>
              <div className='head-mesd'>
                {messages.descripcion}
              </div>
              <div className='head-mesf'>
                {messages.fecha}
              </div>
            </div>
          </div>
        )}
        <div className='add-b'>
          <Link to='/Generaciondemensajes'>
            <Fab color='primary' aria-label='add' style={{background: '#71b631'}}>
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>
    )
  }
}
