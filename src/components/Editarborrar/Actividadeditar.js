import React, { Component } from 'react'
import './Reportes.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import Input from '@material-ui/core/Input'
import CloseIcon from '@material-ui/icons/Close'


export default class Actividadeditar extends Component {

  render () {
    return (
      <div className='fader-editaracti'>
        <div>
          <h1>Edicion de Actividad</h1>
        </div>

        <div  className=' '>
        <form noValidate autoComplete='off' className='mensajesg-container' onSubmit={this.onSubmit}>
          <h1>Edicion de Actividad</h1>


        </form>


        </div>
      </div>
    )
  }
}
