import React, { Component } from 'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'

export default class Aregistradas extends Component {
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
      const { tipoA, imparte, fechai, fechaf } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoA,
        imparte,
        fechai,
        fechaf
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
        <div className='nav-ma'>
          <h1 className='h1-ar'>Mis Actividades</h1>
        </div>
        <div className='add-ar'>
          <Link to='/AgregarActividad'>
            <Fab color='primary' aria-label='add' style={{background: '#71b631'}}>
              <AddIcon />
            </Fab>
          </Link>
        </div>

        <div className='calendar-container'>
          <div className='calendar-content'>
            <div className='week-cont'>
              <div className='space-cal' />
              <p className='title-week'>Lunes</p>
              <p className='title-week'>Martes</p>
              <p className='title-week'>Miercoles</p>
              <p className='title-week'>Jueves</p>
              <p className='title-week'>Viernes</p>
              <p className='title-week'>Sabado</p>
              <p className='title-week'>Domingo</p>
              <div className='space-cal' />
            </div>
            <div className='activity-container'>
              <div className='space-cal' />
              <div className='day-container'>
                <div className='day-content'>
                  {this.state.actividades.map(actividades =>
                    <div>
                      {actividades.fechai === 'hoy' &&
                        <div className='card-cal-cont'>
                          <p className='title-activity'>{actividades.tipoA}</p>
                          <p className='hora-activity'>{actividades.fechai} - {actividades.fechaf}</p>
                          <p className='hora-activity'>{actividades.imparte}</p>
                        </div>
                      }
                    </div>
                  )}
                </div>
                <div className='day-content'>
                  <div className='card-cal-cont'>
                    <p className='title-activity'>Actividad de Prueba</p>
                    <p className='hora-activity'>9am - 10am</p>
                    <p className='hora-activity'>Procuraduria General</p>
                  </div>
                </div>
                <div className='day-content'>
                  <div className='card-cal-cont'>
                    <p className='title-activity'>Actividad de Prueba</p>
                    <p className='hora-activity'>9am - 10am</p>
                    <p className='hora-activity'>Procuraduria General</p>
                  </div>
                </div>
                <div className='day-content'>
                  <div className='card-cal-cont'>
                    <p className='title-activity'>Actividad de Prueba</p>
                    <p className='hora-activity'>9am - 10am</p>
                    <p className='hora-activity'>Procuraduria General</p>
                  </div>
                </div>
                <div className='day-content'>
                  <div className='card-cal-cont'>
                    <p className='title-activity'>Actividad de Prueba</p>
                    <p className='hora-activity'>9am - 10am</p>
                    <p className='hora-activity'>Procuraduria General</p>
                  </div>
                </div>
                <div className='day-content'>
                </div>
                <div className='day-content'>
                </div>
              </div>
              <div className='space-cal' />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
//
// <div className='title-ra'><p className='p-margin-r'><Link to={`/EditarActividad/${actividades.key}`}>Editar</Link></p></div>
// <div className='title-ra'><p className='p-margin-r'><Link to={`/Sactividad/${actividades.key}`}>Evidencia</Link></p></div>
