import React, { Component } from 'react'
import './Sactividad.css'
import firebase from '../../Firebase'
export default class Eactividad extends Component {


      render () {
        return (
          <div className='mg-conta'>
            <div>
              <div className='divtop-mg'/>
                <div className='form-content-gm'>
                  <form noValidate autoComplete='off' className='mensajesg-container-3' onSubmit={this.onSubmit}>

                  </form>
                </div>

            </div>
          </div>
        )
      }
}
