import React, { Component } from 'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default class Aregistradas extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades').orderBy('fechai', 'desc')
    this.unsubscribe = null
    this.state = {
      actividades: []
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad, imparte, lugar, horai, horaf, fechai } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoActividad,
        imparte,
        lugar,
        horai,
        horaf,
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
    var f = new Date()
    var meses2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    f.setDate(f.getDate() - f.getDay())
    const lunes = f.getFullYear() + '-' + meses2[f.getMonth()] + '-' + (f.getDate() + f.getDay()+1)
    const martes = f.getFullYear() + '-' + meses2[f.getMonth()] + '-' + (f.getDate() + f.getDay()+2)
    const miercoles = f.getFullYear() + '-' + meses2[f.getMonth()] + '-' + (f.getDate() + f.getDay()+3)
    const jueves = f.getFullYear() + '-' + meses2[f.getMonth()] + '-' + (f.getDate() + f.getDay()+4)
    const viernes = f.getFullYear() + '-' + meses2[f.getMonth()] + '-' + (f.getDate() + f.getDay()+5)
    const dia1 = (f.getDate() + f.getDay()+1)
    const dia2 = (f.getDate() + f.getDay()+2)
    const dia3 = (f.getDate() + f.getDay()+3)
    const dia4 = (f.getDate() + f.getDay()+4)
    const dia5 = (f.getDate() + f.getDay()+5)

    return (
      <div className='mg-conta'>
        <div className='nav-ma'>
          <h1 className='h1-ar'>Octubre 2020</h1>
        </div>
        <div className='add-ar'>
          <Link to='/AgregarActividad'>
            <Fab color='primary' aria-label='add' style={{ background: '#71b631' }}>
              <AddIcon />
            </Fab>
          </Link>
        </div>
        <div className='calendar-container'>
          <div className='calendar-content'>
            <div className='week-cont'>
              <div className='space-cal' />
              <div className='title-week'>
                <p className='p-dia-n'>Lunes</p>
                <p className='p-dia'>{dia1}</p>
              </div>
              <div className='title-week'>
                <p className='p-dia-n'>Martes</p>
                <p className='p-dia'>{dia2}</p>
              </div>
              <div className='title-week'>
                <p className='p-dia-n'>Miercoles</p>
                <p className='p-dia'>{dia3}</p>
              </div>
              <div className='title-week'>
                <p className='p-dia-n'>Jueves</p>
                <p className='p-dia'>{dia4}</p>
              </div>
              <div className='title-week'>
                <p className='p-dia-n'>Viernes</p>
                <p className='p-dia'>{dia5}</p>
              </div>
              <div className='space-cal' />
            </div>
            <div className='activity-container'>
            <div className='space-cal' />
              <div className='day-container'>
                <div className='day-content'>
                  {this.state.actividades.map(actividades =>
                    <div>
                      {actividades.fechai === lunes &&
                        <Link to={`/Sactividad/${actividades.key}`} className='card-cal-cont'>
                          <p className='title-activity'>{actividades.tipoActividad}</p>
                          <p className='hora-activity'>{actividades.horai} - {actividades.horaf}</p>
                          <p className='hora-activity'>{actividades.lugar}</p>
                        </Link>
                      }
                    </div>
                  )}
                </div>
                <div className='day-content'>
                  {this.state.actividades.map(actividades =>
                    <div>
                      {actividades.fechai === martes &&
                        <div className='card-cal-cont'>
                          <p className='title-activity'>{actividades.tipoActividad}</p>
                          <p className='hora-activity'>{actividades.horai} - {actividades.horaf}</p>
                          <p className='hora-activity'>{actividades.lugar}</p>
                        </div>
                      }
                    </div>
                  )}
                </div>
                <div className='day-content'>
                  {this.state.actividades.map(actividades =>
                    <div>
                      {actividades.fechai === miercoles &&
                        <div className='card-cal-cont'>
                          <p className='title-activity'>{actividades.tipoActividad}</p>
                          <p className='hora-activity'>{actividades.horai} - {actividades.horaf}</p>
                          <p className='hora-activity'>{actividades.lugar}</p>
                        </div>
                      }
                    </div>
                  )}
                </div>
                <div className='day-content'>
                  {this.state.actividades.map(actividades =>
                    <div>
                      {actividades.fechai === jueves &&
                        <div className='card-cal-cont'>
                          <p className='title-activity'>{actividades.tipoActividad}</p>
                          <p className='hora-activity'>{actividades.horai} - {actividades.horaf}</p>
                          <p className='hora-activity'>{actividades.lugar}</p>
                        </div>
                      }
                    </div>
                  )}
                </div>
                <div className='day-content'>
                  {this.state.actividades.map(actividades =>
                    <div>
                      {actividades.fechai === viernes &&
                        <div className='card-cal-cont'>
                          <p className='title-activity'>{actividades.tipoActividad}</p>
                          <p className='hora-activity'>{actividades.horai} - {actividades.horaf}</p>
                          <p className='hora-activity'>{actividades.lugar}</p>
                        </div>
                      }
                    </div>
                  )}
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
// <div className='title-ra'><p className='p-margin-r'><Link to={`/EditarActividad/${actividades.key}`}>Editar</Link></p></div>
// <div className='title-ra'><p className='p-margin-r'><Link to={`/Sactividad/${actividades.key}`}>Evidencia</Link></p></div>
