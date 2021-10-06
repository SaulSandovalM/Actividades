import React,  {Component} from  'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
//import {Injet, SchuduleComponent, Day, Week, Month, Agenda, WorkWeek, } from  '@syncfusion/ej2-react-schedule'
import {Scheduler,
        MonthView,
        Toolbar,
        DateNavigator,
        Appointments,
        TodayButton,
        Title,} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './month-appointments';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }

  render() {

    const { data } = this.state;

    return (
      <div className= 'agenda-fader'>
        <div>
          <h1>Agenda</h1>
        </div>
        <div>
          Area de botones
           Agregar actividades
        </div>


        <div className='calendario-age'>
        {/*<SchuduleComponent>
          <Injet services={[Day, Week, WorkWeek, Month, Agenda]}/>

        </SchuduleComponent>*/} 
          <Paper>

        <Scheduler
          data={data}
          locale="Es"

        >
          <ViewState
            defaultCurrentDate="2021-10-05"

          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          </Scheduler>


          </Paper>

        </div>
      </div>


    );
  }
}
