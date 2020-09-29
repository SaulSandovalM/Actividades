import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'

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
            <h2 className='mg-mp'>Mensajes</h2>
          </div>
          <div className='mensajes-container'>
            {this.state.messages.map(messages =>
              <div className='content-title'>
                <div className='men-titulo'>
                  <p className='mes-p mg-c'>{messages.asunto}</p>
                </div>
                <div className='col-cen-s'>
                  <div className='men-desc'>
                    <p className='mes-m mg-c'>{messages.descripcion}</p>
                    <p className='mes-p mg-cg'>- {messages.fecha}</p>
                  </div>
                </div>
                <div className='cover'>
                  <div className='col-icon-c'>
                    <div className='row-w'>
                      <Link to={`/Editarmensaje/${messages.key}`}>
                        <span className='material-icons icon-e'>
                          edit
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='add-b'>
          <Link to='/Generaciondemensajes'>
            <Fab color='primary' aria-label='add' style={{background: '#092432'}}>
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>
    )
  }
}
