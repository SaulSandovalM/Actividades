import React, { Component } from 'react'
import './Sactividad.css'
import firebase from '../../Firebase'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'

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
          <div className='form-content-gm'>
            <form noValidate autoComplete='off' className='mensajesg-container-3' onSubmit={this.onSubmit}>
            <div className='desc-all' >
              <h5>Informacion</h5>
              <div className='icon-sa'>
                <div className='mensajesg-container-3sa'>
                  <div>

                    <div className='info-i'>
                      <p className='desc-p'>Nombre de la Actividad :</p>
                      <p>texto de prueba</p>
                    </div>
                    <div className='info-i'>
                      <p className='desc-p'>Presencial/Virtual</p>
                      <p></p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Tipo de Actividad</p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Hora de Cita: </p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Estado:</p>
                      <p>texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Lugar:</p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Responsable:</p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Representante:</p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Convoca:</p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Sub Tipo-Actividad:</p>
                      <p> texto de prueba</p>
                    </div>
                  <div>

                  <div>


                    <div className='info-i'>
                      <p className='desc-p'>Nombre deActividad:</p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Fecha de Inicio:</p>
                      <p>texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Duracion:</p>
                      <p>texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Estatus:</p>
                      <p>texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Municipio:</p>
                      <p> texto de prueba</p>
                    </div>


                    <div className='info-i'>
                      <p className='desc-p'>No. Asistentes:</p>
                      <p> texto de prueba</p>
                    </div>


                    <div className='info-i'>
                      <p className='desc-p'>Descripcion de la Actividad </p>
                      <p> texto de prueba</p>
                    </div>

                    <div className='info-i'>
                      <p className='desc-p'>Objetivo de la Actividad:</p>
                      <p> texto de prueba</p>
                    </div>

                  </div>
                </div>
              </div>



              </div>




            </div>
          </div>
          </form>
        </div>





          </div>
        )
      }
}
