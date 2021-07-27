import React, { Component } from 'react'
import './Sactividad.css'
import firebase from '../../Firebase'

export default class Iactividad extends Component {

  render () {
    return (
      <div  className='mg-conta'>
        <div className='divtop-mg'>
          <div className='title-sa'>
            <span class="material-icons" style={{ fontSize:60 }} >
              done_all
            </span>
            <h1 style={{ paddingLeft:'10%',  paddingTop:'.5%' }}>
              Informacion completa de la Actividad
            </h1>
          </div>
          </div>
          <div className='calendar-container'>
            <div className='calendar-content'>
              <div>

              </div>

              <div>
              </div>


              </div>
            </div>



          </div>
        )
      }
}
