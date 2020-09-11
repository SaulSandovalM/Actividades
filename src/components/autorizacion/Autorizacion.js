import React, { Component } from 'react'
import './Autorizacion.css'
import firebase from '../../Firebase'

export default class Autorizacion extends Component {
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
      <div style={{ backgroundColor: '#FAFAFA', paddingLeft: '13%' }}>
        <div className='container-show-a'>
          <div>
            <h1>Autorizacion</h1>
          </div>
          <div>
            {this.state.actividades.map(actividades =>
              <div className='content-title'>
                <div className='bor' style={{borderRight: '1px solid #d0d0d0'}} />
                <div className='title-r'><p className='p-margin-r'>{actividades.tipoA}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.lugar}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.direccion}</p></div>
                <div className='title-r'><p className='p-margin-r'>{actividades.fechai}</p></div>
                <div className='title-r'><button className='p-margin-r'>Autorizar</button></div>
                <div className='bor' />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
