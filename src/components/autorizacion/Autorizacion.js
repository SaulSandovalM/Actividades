import React, { Component } from 'react'
import './Autorizacion.css'
// import firebase from '../../Firebase'
// import { Link } from 'react-router-dom'

export default class Autorizacion extends Component {
  // constructor (props) {
  //   super(props)
  //   this.ref = firebase.firestore().collection('actividades')
  //   this.unsubscribe = null
  //   this.state = {
  //     actividades: []
  //   }
  // }
  //
  // onCollectionUpdate = (querySnapshot) => {
  //   const actividades = []
  //   querySnapshot.forEach((doc) => {
  //     const { tipoA, lugar, fechai } = doc.data()
  //     actividades.push({
  //       key: doc.id,
  //       doc,
  //       tipoA,
  //       lugar, 
  //       fechai,
  //       estatus
  //     })
  //   })
  //   this.setState({
  //     actividades
  //  })
  // }
  //
  // componentDidMount() {
  //   this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  // }

  // update = (item) => {
  //   let updates = {}
  //   updates['vales/' + item.key] = {
  //     tipoA: item.tipoA,
  //     lugar: item.lugar,
  //     fechai: item.fechai,
  //     estatus: 'Autorizado'
  //   }
  //   firebase.firestore().collection('actividades').update(updates)
  // }

  render () {
    return (
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Autorización</h1>
        </div>
        <div className='mes-center' style={{ position: 'fixed', marginTop: '120px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
            <div className='head-mes' style={{ paddingLeft: '6.5%', color: 'grey' }}>
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

        <div style={{ paddingTop: '195px' }}>
          <div className='mes-center2'>
            <div className='mes-container-map'>
              <span className='material-icons icon-sh' style={{ marginLeft: '-40px', marginRight: '14px' }}>
                label_important
              </span>
              <div className='head-mes' style={{ fontWeight: 'bold' }}>
                asunto
              </div>
              <div className='head-mesd' style={{ color: '#424242' }}>
                lugar
              </div>
              <div className='head-mesf' style={{ color: '#424242' }}>
              fecja
              </div>
              <div className='one-po'>
                <span className='material-icons icon-edit' style={{ color: 'green' }}>
                  done
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*<div style={{paddingTop: '195px'}}>
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
                      done
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>*/}

      </div>
    )
  }
}
