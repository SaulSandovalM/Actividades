import React, { Component } from 'react'
import './Aregistradas.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { formatDate } from '@fullcalendar/react';

export default class DemoApp extends React.Component {

  render () {

    let str = formatDate(new Date(), {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      day: 'numeric',
      timeZoneName: 'short',
      timeZone: 'UTC',
      locale: 'es'
    });

    console.log(str)
    return (
      <div className='nav-ma1'>
        <div className='fader-calendario'>
          <div className='sub-fader'>

      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
          </div>
        </div>
      </div>


    )
  }
}
