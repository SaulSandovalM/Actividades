import React, { Component } from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'
import logo from './icons/logo.png'
import logo2 from './icons/logo chiquito.png'
import iconfe from './icons/iconfe.png'
import iconhora from './icons/iconhora.png'
import iconubi from './icons/iconubi.png'
import iconmano from './icons/iconmano.png'
import presentacion from './icons/presentacion .png'
import presentacionv from './icons/presentacionv.png'

export default class Agendasemanal extends Component{

  render(){
    return(

      <div className='fader'>

      <div  >
              <div className='prueba' >


              <div className='portada'>
              <div>
                  <p className='txt-age-2'>AGENDA DE TRABAJO</p>
               </div>
                  <div class='linea-2'>
                  </div>
                  <div>
                  <h2 className='txt-res2'>RESUMEN SEMANAL </h2>
                  <p className='txt-fe'>Enero 13 2019</p>
                   </div>
              </div>
                <div className='caja'>
                  <div className='prueba2'> <img className='img-azul' src={presentacion} alt=''/></div>

                  <div className="logos">

                  <div>
                    <img className='ims2' src={logo} alt='' />
                  </div>
                  <div>
                    <img className='ims' src={logo2} alt='' />
                  </div>
                  </div>
                </div>
                </div>


                <div>
                  <div>
                    <p className='nombre-agendasemanal'>Mercedes Citlali Mendoza Meza</p>
                    <p className='cargo-age'>Directora del Instituto de Formación Profesional de la Procuraduría</p>
                    <div className='linea-pro'></div>
                  </div>
                </div>


            <div className='sigueinte-parte'>
            <div className='dte'>
            <div className="paquete-age">
                <div>
                    <div className="fecha-hora-ubi">
                      <div className='paq-1'>
                      <img className='iconmano paq-1'src={iconfe} alt=''/>
                      <p className='icons-txt paq-1'>Enero 8</p>
                      </div>

                      <div className='paq-1'>
                      <img className='iconmano paq-1'src={iconhora} alt=''/>
                      <p className='icons-txt paq-1'>12-15hr</p>
                      </div>

                      <div className='paq-1'>
                      <img className='icons paq-1' src={iconubi} alt='' />
                      <p className='icons-txt paq-1'>Tula de Allende, Hgo.</p>
                      </div>

                      <div className='paq-1'>
                      <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”. </p>
                      </div>
                     </div>
                    <div>
                     </div>
                </div>


                <div className="fecha-hora-ubi">
                  <div className='paq-1'>
                  <img className='iconmano paq-1'src={iconfe} alt=''/>
                  <p className='icons-txt paq-1'>Enero 8</p>
                  </div>

                  <div className='paq-1'>
                  <img className='iconmano paq-1'src={iconhora} alt=''/>
                  <p className='icons-txt paq-1'>12-15hr</p>
                  </div>

                  <div className='paq-1'>
                  <img className='icons paq-1' src={iconubi} alt='' />
                  <p className='icons-txt paq-1'>Tula de Allende, Hgo.</p>
                  </div>

                  <div className='paq-1'>
                  <p  className='paq-1'>Maestría  en Género, Derecho y Proceso Penal, impartida por el Centro de Estudios de Posgrado </p>
                  </div>
                 </div>
                <div>
                 </div>
            </div>
            </div>

            <div>
            <div className="h">
                <div>
                    <div className="fecha-hora-ubi">
                      <div className='paq-1'>
                      <img className='iconmano paq-1'src={iconfe} alt=''/>
                      <p className='icons-txt paq-1'>Enero 8</p>
                      </div>

                      <div className='paq-1'>
                      <img className='iconmano paq-1'src={iconhora} alt=''/>
                      <p className='icons-txt paq-1'>12-15hr</p>
                      </div>

                      <div className='paq-1'>
                      <img className='icons paq-1' src={iconubi} alt='' />
                      <p className='icons-txt paq-1'>Tula de Allende, Hgo.</p>
                      </div>

                      <div className='paq-1'>
                      <p className='paq-1'>Doctorado en Anticorrupción y Sistema de Justicia, impartido por el Centro de Estudios de Posgrado</p>
                      </div>
                     </div>
                    <div>
                     </div>
                </div>
                </div>



                <div>
                </div>
               </div>

               </div>
               </div>

               <div>
               <div>
                 <p className='nombre-agendasemanal'>Mercedes Citlali Mendoza Meza</p>
                 <p className='cargo-age'>Directora del Instituto de Formación Profesional de la Procuraduría</p>
                 <div className='linea-pro'></div>
               </div>
               </div>

               <div className='sigueinte-parte'>
               <div className="paquete-age">
                   <div>
                       <div className="fecha-hora-ubi">
                         <div className='paq-1'>
                         <img className='iconmano paq-1'src={iconfe} alt=''/>
                         <p className='icons-txt paq-1'>Enero 8</p>
                         </div>

                         <div className='paq-1'>
                         <img className='iconmano paq-1'src={iconhora} alt=''/>
                         <p className='icons-txt paq-1'>12-15hr</p>
                         </div>

                         <div className='paq-1'>
                         <img className='icons paq-1' src={iconubi} alt='' />
                         <p className='icons-txt paq-1'>Tula de Allende, Hgo.</p>
                         </div>

                         <div className='paq-1'>
                         <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”. </p>
                         </div>
                        </div>
                       <div>
                        </div>
                   </div>


                   <div className="fecha-hora-ubi">
                     <div className='paq-1'>
                     <img className='iconmano paq-1'src={iconfe} alt=''/>
                     <p className='icons-txt paq-1'>Enero 8</p>
                     </div>

                     <div className='paq-1'>
                     <img className='iconmano paq-1'src={iconhora} alt=''/>
                     <p className='icons-txt paq-1'>12-15hr</p>
                     </div>

                     <div className='paq-1'>
                     <img className='icons paq-1' src={iconubi} alt='' />
                     <p className='icons-txt paq-1'>Tula de Allende, Hgo.</p>
                     </div>

                     <div className='paq-1'>
                     <p  className='paq-1'>3 caso  en Género, Derecho y Proceso Penal, impartida por el Centro de Estudios de Posgrado </p>
                     </div>
                    </div>
                   <div>
                    </div>
               </div>




                  <div className='caja'>
                    <div className='prueba2'>
                    <img className='img-azul' src={presentacionv} alt=''/>

                    </div>
                    <div className="logos">
                    <div>
                      <img className='ims2' src={logo} alt='' />
                    </div>
                    <div>
                      <img className='ims' src={logo2} alt='' />
                    </div>
                    </div>

                  </div>





                  </div>






      </div>






    )

  }
}
