import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import Fab from '@material-ui/core/Fab'
import ReplyIcon from '@material-ui/icons/Reply'
import ImpIcon from '@material-ui/icons/Print'
import './stilospdf.css'
import firebase from '../../Firebase'
import iconfe from './icons/iconfe.png'
import iconhora from './icons/iconhora.png'
import iconubi from './icons/iconubi.png'
import precentacion from './icons/precentacion.png'
import presentacionv from './icons/presentacionv.png'

export default class Agendasemanal extends Component {
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
      const {fechai, resposable, fechaf, convoca, horai, objetivo, imagen, lugar, estado } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        fechai,
        fechaf,
        convoca,
        horai,
        objetivo,
        resposable,
        imagen,
        lugar,
        estado
      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  handleBack() {
    this.props.history.push('/Reportes');
  }

  render () {
    return (
      <div>
        <div className='btn-imprimir'>
          <span class="material-icons" style={{ cursor: 'pointer'  }} onClick={this.handleBack.bind(this)}>
            <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
              <ReplyIcon />
            </Fab>
              {/*<p className='txt-impri'>
                Regresar
              </p>*/}
          </span>
          <div>
            <ReactToPrint
              trigger={() =>
                <span class='material-icons impresora-padding' style={{ cursor:'pointer' }}>
                    <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
                      <ImpIcon />
                    </Fab>
                </span>}
              content={() => this.agenda}
            />
              {/*<p className='txt-impri'>
                Imprimir
              </p>*/}
          </div>
          </div>
          <div className='fader'>
            <div className='contedorall' ref={el => (this.agenda = el)}>
                  <div className='contenedor-1'>
                    <div className='sub-contenedor'>
                      <p className='txt-age-2'>
                      AGENDA DE TRABAJO
                      </p>
                      <div class='linea-2' />
                      <p className='txt-res2'>
                      RESUMEN SEMANAL
                      </p>
                      {this.state.actividades.map(actividades =>
                      <p className='txt-fe'>
                      
                      </p>
                    )}
                    </div>
                    <div className='sub-contenedor-2'>
                      <div className='caja'>
                        <div className='prueba2'>
                          <img className='img-azul' src={precentacion} alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
              <div>
                {this.state.actividades.map(actividades =>
                <div>
                  <div className='segunda-vista'>
                    <div className='coontenedor-2da-vista'>
                      <div className='contenedor-2'>
                        <p className='nombre-agendasemanal'>{actividades.responsable}Mercedes Citlali Mendoza Meza</p>
                        <p className='cargo-age'>{actividades.convoca}Directora del Instituto de Formación Profesional de la Procuraduría</p>
                        <div className='linea-pro' />
                      </div>
                    </div>

                  <div className='datos-agenda'>
                      <div className='datos-paq-1'>
                        <div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconfe} alt='' />
                            </div>
                            <div className=''>
                              <p className='icons-txt paq-1'>
                                {actividades.fechai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconhora} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                              {actividades.horai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconubi} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                              {actividades.municipio}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1T'>
                            <p className='paq-1'>
                              {actividades.actividad}
                            </p>
                          </div>
                        </div>
                        <div className='bot-paq'>
                          <div className='paquete-1 bot-paq'>
                            <div>
                              <img className='iconmano paq-1' src={iconfe} alt='' />
                            </div>
                            <div className=''>
                              <p className='icons-txt paq-1'>
                                {actividades.fechai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconhora} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.horai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconubi} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.municipio}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1T'>
                            <p className='paq-1'>
                            {actividades.tipoActividad}

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='datos-paq-1'>
                        <div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconfe} alt='' />
                            </div>
                            <div className=''>
                              <p className='icons-txt paq-1'>
                                {actividades.fechai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconhora} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.horai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconubi} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.municipio}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1T'>
                            <p className='paq-1'>
                            {actividades.tipoActividad}

                            </p>
                          </div>
                        </div>
                        <div className='bot-paq'>
                          <div className='paquete-1 bot-paq'>
                            <div>
                              <img className='iconmano paq-1' src={iconfe} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.fechai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconhora} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.horai}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconubi} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.municipio}
                              </p>
                            </div>
                          </div>

                          <div className='paquete-1T'>
                            <p className='paq-1'>
                            {actividades.tipoActividad}

                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  */}

                  <div className='tercera-parte'>
                    <div>
                      <div className='coontenedor-2da-vista'>
                        <div className='contenedor-2'>
                          <p className='nombre-agendasemanal'>
                            {actividades.responsable}
                          </p>
                          <p className='cargo-age'>
                            {actividades.convoca}
                          </p>
                          <div className='linea-pro' />
                        </div>
                      </div>
                      <div className='datos-paq-1'>
                        <div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconfe} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.fechai}-{actividades.fechaf}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconhora} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.horai}-{actividades.horaf}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconubi} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                              {actividades.lugar}
                              {actividades.municipio}
                              {actividades.estado}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1T'>
                            <p className='paq-1'>
                              {actividades.objetivo}
                            </p>
                          </div>
                        </div>
                        <div className='bot-paq'>
                          <div className='paquete-1 bot-paq'>
                            <div>
                              <img className='iconmano paq-1' src={iconfe} alt='' />
                            </div>
                            <div className=''>
                              <p className='icons-txt paq-1'>
                                {actividades.fechai}-{actividades.fechaf}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconhora} alt='' />
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                                {actividades.horai}-{actividades.horaf} hrs
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1'>
                            <div>
                              <img className='iconmano paq-1' src={iconubi} alt='' />
                              <p className='icons-txt paq-1'>

                              </p>
                            </div>
                            <div>
                              <p className='icons-txt paq-1'>
                              {actividades.lugar}
                              {actividades.municipio}
                              {actividades.estado}
                              </p>
                            </div>
                          </div>
                          <div className='paquete-1T'>
                            <p className='paq-1'>
                              {actividades.objetivo}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <div className='sub-contenedor-2'>
                        <div className='caja'>
                          <div className='prueba2'>
                            <img className='img-verde' src={presentacionv} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
            </div>
            <div className='btn-imprimir'>
              <span class="material-icons" style={{ cursor:'pointer'  }} onClick={this.handleBack.bind(this)}>
                <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
                  <ReplyIcon />
                </Fab>
                  {/*<p className='txt-impri'>
                    Regresar
                  </p>*/}
              </span>
              <div clasName=''>
                <ReactToPrint
                  trigger={() =>
                <span class='material-icons impresora-padding' style={{ cursor:'pointer' }}>
                    <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
                      <ImpIcon />
                    </Fab>
                </span>}
                  content={() => this.agenda}
                />
                  {/*<p className='txt-impri'>
                    Imprimir
                  </p>*/}
              </div>
              </div>
      </div>
    )
  }
}
