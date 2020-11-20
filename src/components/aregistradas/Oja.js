import React, { Component } from 'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, span, p} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'


export default class Aregistradas extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades').orderBy('horai', 'asc')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      tipoActividad: ''
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad, imparte, lugar, horai, horaf, fechai } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoActividad,
        imparte,
        lugar,
        horai,
        horaf,
        fechai
      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount () {
    const ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id)
    ref.get().then((doc) => {
      if (doc.exists) {
        const messages = doc.data()
        this.setState({
          key: doc.id,
          tipoActividad: messages.tipoActividad,
          descripcion: messages.descripcion,
          imagen: messages.imagen,
          checked: messages.checked,
          fecha: messages.fecha,
          imparte: messages.imparte,
          lugar: messages.lugar,
          horai: messages.horai,
          horaf: messages.horaf,
          fechai: messages.fechai
        })
      } else {
        console.log('No hay documento!')
      }
    })
  }

  render () {
    return (

    <div className='modal-ojo'>
      <FormGroup style={{ width: '20%' }}>
        <span  class="material-icons" >
          remove_red_eye
        </span>
        <span class="material-icons">
          delete
        </span>
        <span class="material-icons">
          edit
        </span>
      </FormGroup>

      <FormGroup>
        <p className='title-activity-p'>{this.state.tipoActividad}</p>
        <p className='hora-activity-p'>{this.state.actividades.horai} - {this.state.actividades.horaf}</p>
        <p className='hora-activity-p'>{this.state.actividades.lugar}</p>
      </FormGroup>
    </div>

    )
  }



}
