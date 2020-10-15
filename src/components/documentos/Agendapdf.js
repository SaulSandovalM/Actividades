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

export default class Agendasemanal extends Component{
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
      const { tipoActividad, imparte, fechai, fechaf, convoca, dependencia, horai} = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoActividad,
        imparte,
        fechai,
        fechaf,
        convoca,
        dependencia,
        horai


      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render(){
    return(
<div className='fader' >
<div className='btn-imprimir'>
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
        <p className='txt-age-1'>ACTIVIDADES</p>
        <div class='linea'>  </div>
        <h2 className='txt-res'>RELEVANTES</h2>
        <p className='txt-fe'>Enero 13 2019</p>
    </div>

<div className='sub-contenedor-2'>
  <div className='caja'>
      <div className='prueba2'> <img className='img-azul' src={presentacion} alt=''/></div>
  </div>
</div>
</div>


<div>

</div>


<div classname='img-mano'>

    <div className='esp-pro'>
    perro
    </div>


    <div className='txt-img-mano'>

      <div><img className='iconmano'src={iconmano} alt=''/></div>
      <div><p className='txt-com-mano'>incidencia delictiva en el municipio de Tula de Allende</p></div>
    </div>


  </div>





    <div>


    <div class='txt-abajo'>
{this.state.actividades.map(actividades =>
      <div className='datos-persona'>
          <p className='text-arro'>{/*{actividades.convoca}*/}Raul ARROYO</p>
          <p className='text-pro'> {/*{actividades.dependencia}*/}Procurador General</p>

          <div className='linea-pro'></div>
      </div>
    )}



      <div className='datos-generales'>
      <div className='icons1'>
            <div className='icons-pos'>
            <img className='icons' src={iconfe} alt='' />
            <p className='icons-txt'>Enero 8</p>
            </div>
      </div>
      <div className='icons'>
            <div className='icons-pos'>
            <img className='icons' src={iconhora} alt='' />
            <p className='icons-txt'>12-15hr</p>
            </div>
      </div>
      <div className='icons'>
            <div  className='icons-pos'>
            <img className='icons' src={iconubi} alt='' />
            <p className='icons-txt'>Tula de Allende, Hgo.</p>
            </div>
      </div>

      </div>

      <div className='datos-reunion'>
      <div className='datos-pro-text' >
      <p className='tipo-text'>Reunión en Tula en pregira con Jorge Arzubide de ProJusticia y Rebeca Fernández Calleja del Instituto de Resultados Rápidos, para afinar detalles del “Reto de los 100 días”.</p>
      </div>
      </div>
      <div>




      </div>


    </div>
</div>
}
<div className='btn-imprimir'>
  <ReactToPrint
  trigger={() => <span class="material-icons" style={{cursor:'pointer'}}>
  print
  </span>}
  content={() => this.agenda}
  />
</div>
    </div>

    </div>







    )

  }
}
