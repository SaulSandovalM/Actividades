import React, { Component } from 'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'

export default class Aregistradas extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: []
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoA, lugar, fechai } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoA,
        lugar,
        fechai
      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render () {
    return (
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Mis Actividades</h1>
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
          {this.state.actividades.map(actividades =>
            <div className='mes-center2'>
              <div className='mes-container-map'>
                <span className='material-icons icon-sh' style={{ marginLeft: '-40px', marginRight: '14px'}}>
                  label_important
                </span>
                <div className='head-mes' style={{fontWeight: 'bold'}}>
                  {actividades.tipoA}
                </div>
                <div className='head-mesd' style={{color: '#424242'}}>
                  {actividades.lugar}
                </div>
                <div className='head-mesf' style={{color: '#424242'}}>
                  {actividades.fechai}
                </div>
                <div className='one-po'>
                  <Link to={`/Editarmensaje/${actividades.key}`}>
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
          <Link to='/AgregarActividad'>
            <Fab color='primary' aria-label='add' style={{background: '#71b631'}}>
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>
    )
  }
}
//
// <div className='title-ra'><p className='p-margin-r'><Link to={`/EditarActividad/${actividades.key}`}>Editar</Link></p></div>
// <div className='title-ra'><p className='p-margin-r'><Link to={`/Sactividad/${actividades.key}`}>Evidencia</Link></p></div>
