import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
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
  constructor (props) {
    super(props)
    this.state = {
      contenedorall: ''
    }
  }

  render(){
    return(
<div className='fader' >

<div className='btn-imprimir'>
<p>Imprimir</p>
  <ReactToPrint
  trigger={() => <span class="material-icons" style={{cursor:'pointer'}}>
  print
  </span>}
  content={() => this.agenda}
  />
</div>

  <div className='contedorall' ref={el => (this.agenda= el)}>

      <div className='contenedor-1'>
          <div className="sub-contenedor">
                <p className='txt-age-2'>AGENDA DE TRABAJO</p>
                <div class='linea-2'></div>
                <p2 className='txt-res2'>RESUMEN SEMANAL </p2>
                <p className='txt-fe'>Enero 13 2019</p>
          </div>
          <div className='sub-contenedor-2'>
            <div className='caja'>
                <div className='prueba2'> <img className='img-azul' src={presentacion} alt=''/></div>
            </div>
          </div>
     </div>
     <div className='segunda-vista'>
        <div className='coontenedor-2da-vista'>
          <div className='contenedor-2'>
              <p className='nombre-agendasemanal'>Mercedes Citlali Mendoza Meza</p>
              <p className='cargo-age'>Directora del Instituto de Formación Profesional de la Procuraduría</p>
              <div className='linea-pro'></div>
          </div>
        </div>


      <div className='datos-agenda'>
      <div className='datos-paq-1'>
        <div>
          <div className='paquete-1'>
            <div><img className='iconmano paq-1'src={iconfe} alt=''/></div>
            <div className=''><p className='icons-txt paq-1'>Noviembre 30</p></div>
          </div>
            <div className='paquete-1'>
            <div><img className='iconmano paq-1'src={iconhora} alt=''/></div>
            <div><p className='icons-txt paq-1'>12-15hr</p></div>
          </div>
          <div className='paquete-1' >
            <div> <img className='iconmano paq-1' src={iconubi} alt='' /></div>
            <div> <p className='icons-txt paq-1'>Tula de Allende, Hidalgo</p></div>
          </div>
            <div className='paquete-1T'>
            <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”.kjjkdfbd bgjkd bgjkdfbdkbgk jdbgdgbk jbgkjdfg bj ksdbgjkdsbfg KSJSSKSK SKSKSKSK
            fkjdbgkjfdbgkdfgbkjfbgkdfbbdg </p>
          </div>
            </div>

            <div className='bot-paq'>
              <div className='paquete-1 bot-paq'>
                <div><img className='iconmano paq-1'src={iconfe} alt=''/></div>
                <div className=''><p className='icons-txt paq-1'>Noviembre 30</p></div>
              </div>
                <div className='paquete-1'>
                <div><img className='iconmano paq-1'src={iconhora} alt=''/></div>
                <div><p className='icons-txt paq-1'>12-15hr</p></div>
              </div>
                <div className='paquete-1'>
                <div> <img className='iconmano paq-1' src={iconubi} alt='' /></div>
                <div> <p className='icons-txt paq-1'>Tula de Allende, Hidalgo</p></div>
              </div>
                <div className='paquete-1T'>
                <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”.kjjkdfbd bgjkd bgjkdfbdkbgk jdbgdgbk jbgkjdfg bj ksdbgjkdsbfg KSJSSKSK SKSKSKSK
                fkjdbgkjfdbgkdfgbkjfbgkdfbbdg </p>
              </div>
                </div>
            </div>


              <div  className='datos-paq-1'>
                <div>
                  <div className='paquete-1'>
                    <div><img className='iconmano paq-1'src={iconfe} alt=''/></div>
                    <div className=''><p className='icons-txt paq-1'>Noviembre 30</p></div>
                  </div>
                    <div className='paquete-1'>
                    <div><img className='iconmano paq-1'src={iconhora} alt=''/></div>
                    <div><p className='icons-txt paq-1'>12-15hr</p></div>
                  </div>
                    <div className='paquete-1'>
                    <div> <img className='iconmano paq-1' src={iconubi} alt='' /></div>
                    <div> <p className='icons-txt paq-1'>Tula de Allende, Hidalgo</p></div>
                  </div>
                    <div className='paquete-1T'>
                    <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”.kjjkdfbd bgjkd bgjkdfbdkbgk jdbgdgbk jbgkjdfg bj ksdbgjkdsbfg KSJSSKSK SKSKSKSK
                    fkjdbgkjfdbgkdfgbkjfbgkdfbbdg </p>
                  </div>
                    </div>

                    <div className='bot-paq'>
                      <div className='paquete-1 bot-paq'>
                        <div><img className='iconmano paq-1'src={iconfe} alt=''/></div>
                        <div className=''><p className='icons-txt paq-1'>Noviembre 30</p></div>
                      </div>
                        <div className='paquete-1'>
                        <div><img className='iconmano paq-1'src={iconhora} alt=''/></div>
                        <div><p className='icons-txt paq-1'>12-15hr</p></div>
                      </div>
                        <div className='paquete-1'>
                        <div> <img className='iconmano paq-1' src={iconubi} alt='' /></div>
                        <div> <p className='icons-txt paq-1'>Tula de Allende, Hidalgo</p></div>
                      </div>
                        <div className='paquete-1T'>
                        <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”.kjjkdfbd bgjkd bgjkdfbdkbgk jdbgdgbk jbgkjdfg bj ksdbgjkdsbfg KSJSSKSK SKSKSKSK
                        fkjdbgkjfdbgkdfgbkjfbgkdfbbdg </p>
                      </div>
                        </div>
                    </div>
      </div>



    </div>


    <div className='tercera-parte'>

    <div>
    <div className='coontenedor-2da-vista'>
      <div className='contenedor-2'>
          <p className='nombre-agendasemanal'>Mercedes Citlali Mendoza Meza</p>
          <p className='cargo-age'>Directora del Instituto de Formación Profesional de la Procuraduría</p>
          <div className='linea-pro'></div>
      </div>
    </div>


    <div  className='datos-paq-1'>
      <div>
        <div className='paquete-1'>
          <div><img className='iconmano paq-1'src={iconfe} alt=''/></div>
          <div className=''><p className='icons-txt paq-1'>Noviembre 30</p></div>
        </div>
          <div className='paquete-1'>
          <div><img className='iconmano paq-1'src={iconhora} alt=''/></div>
          <div><p className='icons-txt paq-1'>12-15hr</p></div>
        </div>
          <div className='paquete-1'>
          <div> <img className='iconmano paq-1' src={iconubi} alt='' /></div>
          <div> <p className='icons-txt paq-1'>Tula de Allende, Hidalgo</p></div>
        </div>
          <div className='paquete-1T'>
          <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”.kjjkdfbd bgjkd bgjkdfbdkbgk jdbgdgbk jbgkjdfg bj ksdbgjkdsbfg KSJSSKSK SKSKSKSK
          fkjdbgkjfdbgkdfgbkjfbgkdfbbdg </p>
        </div>
          </div>

          <div className='bot-paq'>
            <div className='paquete-1 bot-paq'>
              <div><img className='iconmano paq-1'src={iconfe} alt=''/></div>
              <div className=''><p className='icons-txt paq-1'>Noviembre 30</p></div>
            </div>
              <div className='paquete-1'>
              <div><img className='iconmano paq-1'src={iconhora} alt=''/></div>
              <div><p className='icons-txt paq-1'>12-15hr</p></div>
            </div>
              <div className='paquete-1'>
              <div> <img className='iconmano paq-1' src={iconubi} alt='' /></div>
              <div> <p className='icons-txt paq-1'>Tula de Allende, Hidalgo</p></div>
            </div>
              <div className='paquete-1T'>
              <p className='paq-1'>Ciclo de Cine Jurídico 2020, proyección de la película “Lista de Schindler”.kjjkdfbd bgjkd bgjkdfbdkbgk jdbgdgbk jbgkjdfg bj ksdbgjkdsbfg KSJSSKSK SKSKSKSK
              fkjdbgkjfdbgkdfgbkjfbgkdfbbdg </p>
            </div>
              </div>
          </div>
          </div>

          <div className=''>
          <div className='sub-contenedor-2'>
            <div className='caja'>
                <div className='prueba2'> <img className='img-verde' src={presentacionv} alt=''/></div>
            </div>
          </div>
          </div>
    </div>



    <div className='btn-imprimir'>
      <ReactToPrint
      trigger={() => <buttom className='btn-b-l-2' style={{ cursor:'pointer'}}>Imprimir</buttom>}
      content={() => this.agenda}
      />
    </div>

</div>

</div>




    )

  }
}
