import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import './stilospdf.css'
import firebase from '../../Firebase'
import iconfe from './icons/iconfe.png'
import iconhora from './icons/iconhora.png'
import iconubi from './icons/iconubi.png'
import iconmano from './icons/iconmano.png'
import presentacion from './icons/presentacion .png'

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
      const { tipoActividad, imparte, fechai, fechaf, convoca, dependencia, horai, objetivo, imagen} = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoActividad,
        imparte,
        fechai,
        fechaf,
        convoca,
        dependencia,
        horai,
        objetivo,
        imagen


      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render () {
    return (
      <div className='fader'>
        <div className='btn-imprimir'>
          <p>Imprimir</p>
          <ReactToPrint
            trigger={() => <span className='material-icons' style={{ cursor: 'pointer' }}>print</span>}
            content={() => this.agenda}
          />
        </div>
        <div className='contedorall' ref={el => (this.agenda = el)}>
          <div className='contenedor-1'>
            <div className='sub-contenedor'>
              <p className='txt-age-1'>ACTIVIDADES</p>
              <div className='linea' />
              <h2 className='txt-res'>RELEVANTES</h2>
              <p className='txt-fe'>Enero 13 2019</p>
            </div>
            <div className='sub-contenedor-2'>
              <div className='caja'>
                <div className='prueba2'>
                  <img className='img-azul' src={presentacion} alt='' />
                </div>
              </div>
            </div>
          </div>

          <div>
            {this.state.actividades.map(actividades =>
              <div>
                <div classname='img-mano'>
                  <div className='esp-pro'>
              
                  </div>
                  <div className='txt-img-mano'>
                    <div>
                      <img className='iconmano' src={iconmano} alt='' />
                    </div>
                    <div>
                      <p className='txt-com-mano'>
                        incidencia delictiva en el municipio de Tula de Allende
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='txt-abajo'>
                    <div className='datos-persona'>
                      <p className='text-arro'>{actividades.convoca}Raul ARROYO</p>
                      <p className='text-pro'>{actividades.cargo}Procurador General</p>
                      <div className='linea-pro' />
                    </div>

                    <div className='datos-generales'>
                      <div className='icons1'>
                        <div className='icons-pos'>
                          <img className='icons' src={iconfe} alt='' />
                          <p className='icons-txt'>{actividades.fechai}Enero 8</p>
                        </div>
                      </div>

                      <div className='icons'>
                        <div className='icons-pos'>
                          <img className='icons' src={iconhora} alt='' />
                          <p className='icons-txt'>{actividades.horai}12-15hr</p>
                        </div>
                      </div>

                      <div className='icons'>
                        <div className='icons-pos'>
                          <img className='icons' src={iconubi} alt='' />
                          <p className='icons-txt'>
                            {actividades.municipio}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='datos-reunion'>
                      <div className='datos-pro-text'>
                        <p className='tipo-text'>{actividades.objetivo}Reunión en Tula en pregira con Jorge Arzubide de ProJusticia y Rebeca Fernández Calleja del Instituto de Resultados Rápidos, para afinar detalles del “Reto de los 100 días”.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='btn-imprimir'>
            <ReactToPrint
              trigger={() => <span class='material-icons' style={{ cursor: 'pointer' }}>print</span>}
              content={() => this.agenda}
            />
          </div>
        </div>
      </div>
    )
  }
}
