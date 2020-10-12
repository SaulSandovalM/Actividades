import React, { Component } from 'react'
import './Reportes.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'

export default class Reportes extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      tipoA: '',
      ano: ''
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoA, lugar, fechai } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoA,
        lugar,
        fechai
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
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Reportes</h1>
        </div>

        <div className='busq'>
          <div className='imp-busq-2'>
            <div className='btn-reportes'>
              <p className='txt-rep'>Fecha inicial:* </p>
              <TextField
                type='date'
                style={{  width: '30%', paddingLeft: '20px' }}
                name='fecha'
                required
                />
                <p className='txt-rep'>Fecha final:* </p>
                <TextField
                  type='date'
                  style={{ width: '35%', paddingLeft:'20px' }}
                  name='fecha'
                  required
                />


                <div className='btn-reportes-1'>
                <bottom className='btn-b-l'>Buscar </bottom>
                <bottom className='btn-b-l'>Limpiar</bottom>
                </div>

              </div>





        </div>





        </div>

        <div className='mes-center' style={{ position: 'fixed', marginTop: '200px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
            <div className='head-mes-1' style={{paddingLeft: '3.5%', color: 'grey'}}>Actividad</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Lugar</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Fiscalia/Direccion</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Fecha</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Editar</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Evidencia</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Relevante</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Estatus</div>


            <div className='one-po' />
          </div>
        </div>
        <div style={{paddingTop: '270px'}}>
          {this.state.actividades.map(actividades =>
            <div className='mes-center2'>
              <div className='mes-container-map' >
                <span className='material-icons icon-sh' style={{ marginLeft: '-40px', marginRight: '14px'}}>
                  label_important
                </span>
                <div className='head-mes-1' style={{fontWeight: 'bold'}}>{actividades.tipoA}</div>
                <div className='head-mes-1' >{actividades.Actividad}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
                <div className='head-mes-1' >{actividades.tipoA}</div>
                <div className='head-mes-1' >{actividades.Actividad}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
                <div className='one-po'>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    )
  }
}
