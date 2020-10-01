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
        <div>
          <div className='mensajes-container'>
            {this.state.messages.map(messages =>
              <div className='content-title'>
                <div className='men-titulo'>
                  <div style={{display: 'flex'}}>
                    <span className='material-icons icon-sh'>
                      label_important
                    </span>
                    <p className='mg-c'>
                      {messages.asunto}
                    </p>
                  </div>
                </div>
                <div className='col-cen-s'>
                  <div className='men-desc'>
                    <p className='mes-m-show mg-c'>{messages.descripcion}</p>
                    <p className='mes-p-show mg-cg'>- {messages.fecha}</p>
                  </div>
                </div>
                <div className='cover'>
                  <div className='col-icon-c'>
                    <div className='row-w'>
                      <Link to={`/Editarmensaje/${messages.key}`}>
                        <span className='material-icons icon-sh2'>
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
            <Fab color='primary' aria-label='add' style={{background: 'green'}}>
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>
    )
  }
}
