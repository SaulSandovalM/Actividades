import React,  {Component} from  'react'
import './Aregistradas.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        Title,
        DragDropProvider,} from '@devexpress/dx-react-scheduler-material-ui';
//botones
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default class Demo extends React.PureComponent {
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
  handleBack() {
    this.props.history.push('/AgregarActividad');
  }
  render() {

    const { data } = this.state.actividades.map(actividades => actividades)



    const array = [{title: '', date: ''}]
       this.state.actividades.map(item => {
      array.push({title: item.tipoActividad, date: item.fechai})
      })
      var ara = [{
        title: 'Website Re-Design Plan',
        startDate: new Date(2021, 9, 7, 9, 30),
        endDate: new Date(2021, 9, 7, 11, 30),
      },]
      console.log(ara)


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
          <Paper>
            <Scheduler
              data={ara}
              locale="Es"
          >
          <ViewState
            defaultCurrentDate="2021-10-07"
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
