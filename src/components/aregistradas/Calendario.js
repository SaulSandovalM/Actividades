import React, { Component } from 'react'
import './Aregistradas.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { formatDate } from '@fullcalendar/react';



export default class Calendario extends Component {



  render () {
    return (

        <div className='nav-ma1'>
          <div className='fader-calendario'>
          



        <div className='sub-fader'>

            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                      { title: 'event 1', date: '2021-05-06' },
                      { title: 'event 2', date: '2019-04-02' }
                      ]}
             />





          </div>
          </div>
      </div>

    )
  }
}
