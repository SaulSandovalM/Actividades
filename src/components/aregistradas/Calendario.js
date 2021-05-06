import React, { Component } from 'react'
import './Aregistradas.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



export default class Calendario extends Component {

  render () {
    return (
      <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
                { title: 'event 1', date: '2021-05-06' },
                { title: 'event 2', date: '2019-04-02' }
    ]}
  />

    )
  }
}
