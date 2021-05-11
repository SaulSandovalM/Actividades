import React, { Component } from 'react'
import './Aregistradas.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { formatDate } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';


export default class DemoApp extends React.Component {

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





    return (
      <div className='nav-ma1'>
        <div className='fader-calendario'>
          <div className='sub-fader fc fc-col-header-cell-cushion'>
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
