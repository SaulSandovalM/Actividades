import React, { Component } from 'react'
import './vistas.css'

export default class Informacionactividad extends Component {
  render () {
    return (
      <div className='fader-vis'>

          <div className='form-content-gm'>
              <form noValidate autoComplete='off' className='mensajesg-container-3' onSubmit={this.onSubmit}>
                <div>
                  <h1>INFORMACION DE ACTIVIDAD</h1>
                </div>
                <div>
                <div className='desc-all' >
                <div className='tipo-act'>
                    <p className='desc-p'>Nombre de la Actividad </p>
                    <p className='desc-left'></p>
                </div>
                  <div className='tipo-act'>
                      <p className='desc-p'>Tipo de Actividad:</p>
                      <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                      <p className='desc-p'>Objetivo</p>
                      <p className='desc-left'></p>
                  </div>





            <div className='desc-colum'>
{/*primera parte */}
                <div className='desc-pri'>
                <div>

                  <div className='tipo-act'>
                    <p className='desc-p'>Estatus:</p>
                    <p className='desc-left'></p>
                  </div>

                  </div>


                  <div className='tipo-act'>
                    <p className='desc-p'>Fecha</p>
                    <p className='desc-left'> </p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Estado:</p>
                    <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Lugar:</p>
                    <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Con quien:</p>
                    <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                    <p className='desc-p'>Asistentes:</p>
                    <p className='desc-left'></p>
                  </div>
                </div>
{/* segunda parte */}
                <div className='desc-segu'>
                  <div className='tipo-act'>
                    <p className='desc-p'>Convoca:</p>
                    <p className='desc-left'>Procurador: Andres Lopez Sanchez</p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Duracion:</p>
                  <p className='desc-left'>}</p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Actividad Genenerada por PGJH</p>
                  <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Municipio:</p>
                  <p className='desc-left'></p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Dependencia</p>
                  <p className='desc-left'>Interna</p>
                  </div>
                  <div className='tipo-act'>
                  <p className='desc-p'>Responsable:</p>
                  <p className='desc-left'></p>
                  </div>
                </div>
            </div>
            <div>
            <p className='desc-p'>Descripcion</p>
            <p className='desc-left'></p>
            </div>
          </div>
                </div>

              </form>



          </div>
      </div>
    )
  }

}
