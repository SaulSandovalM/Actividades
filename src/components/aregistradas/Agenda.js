import React,  {Component} from  'react'
import './Aregistradas.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }
  handleBack() {
    this.props.history.push('/AgregarActividad');
  }
  render() {

    const { data } = this.state;

    return (
      <div className= 'agenda-fader'>
        <div className='let-cal'>
          <h1>Calendario de Actividades</h1>
        </div>
        <div className='btn-age'>
           <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="outlined" size="large" onClick={this.handleBack.bind(this)} >
              Agregar Actividad
            </Button>
           </Box>
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
