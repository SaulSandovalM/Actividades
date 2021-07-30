import React, { Component } from 'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { formatDate } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';


export default class DemoApp extends Component {

  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades').orderBy('horai', 'asc')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      abierto: false
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad, fechai  } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoActividad,
        fechai,
      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount () {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  render () {

      let str = formatDate(new Date(), {
        month: 'short',
        year: 'numeric',
        day: 'numeric',
        day: 'numeric',
        timeZoneName: 'short',
        timeZone: 'UTC',
        locale: 'Es',
        omitCommas: true,
        weekday: 'short',
      });

var array = [{title: '', date: ''}]
this.state.actividades.map(item => {
  array.push({title: item.tipoActividad, date: item.fechai})
})
console.log(array)

var ara = [{title: 'lol', date: '2021-07-20'},{title: 'lol', date: '2021-07-20'}]
console.log(ara)

return (
    <div className='nav-ma3'>
      <div className='add-ar-calen'>
        <div className='txt-calendario'>
          <p className='txt-cale'>Agregar Actvidad</p>
          <Link to='/AgregarActividad'>
          <Fab color='primary' aria-label='add' style={{ background: '#71b631'}}>
            <AddIcon />
          </Fab>
        </Link>
      </div>
      </div>
        <div className='content-calendario'>
          <div className=''>
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events={
                  array
                }
            />
          </div>
        </div>
      </div>


    )
  }
}
