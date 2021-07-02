import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'

{/* Librerias de Tabla */}



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
        <div className='nav-mm'>
          <h1 className='h1-lm'>Agregar, Editar o eMensajes </h1>
          </div>
        <div className='mes-center' style={{ position: 'fixed', marginTop: '120px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
          <div className='head-mes' style={{paddingLeft: '6.5%', color: 'grey'}}>
              Asunto
            </div>
            <div className='head-mesd' style={{ color: 'grey' }}>
              Descripcion
            </div>
            <div className='head-mesf' style={{ color: 'grey' }}>
              Fecha
            </div>
            <div className='one-po' />
          </div>
        </div>

        <div style={{paddingTop: '195px'}}>
          {this.state.messages.map(messages =>
            <div className='mes-center2'>
              <div className='mes-container-map'>
                <div className='head-mes' style={{fontWeight: 'bold'}}>
                   ✮ {messages.asunto}
                </div>
                <div className='head-mesd' style={{color: '#424242'}}>
                  {messages.descripcion}
                </div>
                <div className='head-mesf' style={{color: '#424242'}}>
                  {messages.fecha}  
                </div>
                <div className='one-po'>
                  <Link to={`/Editarmensaje/${messages.key}`}>
                    <span className='material-icons icon-edit'>
                      create
                    </span>
                  </Link>
                  <Link to={`/Editarmensaje/${messages.key}`}>
                    <span className='material-icons icon-edit'>
                      create
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          )}
        </div>

        <div className='add-m' style={{position: 'fixed'}}>
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
