import React , { Component } from 'react'
import './estadisticas.css'
import firebase from  '../../Firebase'
import TextField from '@material-ui/core/TextField'

export  default class  Estadisgeneral extends Component {
  render () {
    return (
      <div className='fader-est'>
        <div>
          <h1>Estadistica Geneneral</h1>
        </div>
        <div className='date-cont'>
        <TextField
          type='date'
          style={{ width: '45%' }}
          onChange={this.onChange}
          name='fechai'
          required
        />
        </div>


      </div>
    )
  }
}
