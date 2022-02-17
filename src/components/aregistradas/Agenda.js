import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import './Aregistradas.css'
import TextField from '@material-ui/core/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import firebase from '../../Firebase'
import {
          Scheduler,
          Resources,
          MonthView,
          TodayButton,
          DateNavigator,
          Appointments,
          AppointmentTooltip,
          AppointmentForm,
          EditRecurrenceMenu,
          DragDropProvider,
          Toolbar,
      } from '@devexpress/dx-react-scheduler-material-ui';

import { green, deepOrange, lightBlue } from '@material-ui/core/colors';
import { owners } from './tasks';
import { appointments, resourcesData } from './resources';
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
      tipoActividad: [],

      abierto: false

    }
  }


  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad, fechai,} = doc.data()
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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: appointments,
  //     resources: [
  //       {
  //         fieldName: 'roomId',
  //         title: 'Room',
  //         instances: resourcesData,
  //       },
  //       {
  //         fieldName: 'members',
  //         title: 'Members',
  //         instances: owners,
  //         allowMultiple: true,
  //       },
  //     ],
  //   };
  //
  //   this.commitChanges = this.commitChanges.bind(this);
  // }

  // commitChanges({ added, changed, deleted }) {
  //   this.setState((state) => {
  //     let { actividades } = state;
  //     if (added) {
  //       const startingAddedId = actividades.length > 0 ? actividades[actividades.length - 1].id + 1 : 0;
  //       actividades = [...actividades, { id: startingAddedId, ...added }];
  //     }
  //     if (changed) {
  //       actividades = actividades.map(appointment => (
  //         changed[appointment.id] ?  { ...appointment, ...changed[appointment.id] } : appointment));
  //     }
  //     if (deleted !== undefined) {
  //       actividades = actividades.filter(appointment => appointment.id !== deleted);
  //     }
  //     return { actividades };
  //   });
  // }

  handleBack() {
    this.props.history.push('/AgregarActividad');
  }
  render() {
  //   var array = [{title: '',  date: ''}]
  //
  //   const { data, resources } = this.state;
  //
  //   var array = [{title: '', subt:'',   date: ''}]
  //       this.state.actividades.map(item => {
  //       array.push({title: item.tipoActividad,  sub:item.activida,  date: item.fechai})
  //   })
  //   console.log(array)
  //
  // const owners = [
  //     {
  //       text: 'Andrew Glover',
  //       id: 1,
  //       color: '#7E57C2',
  //     }, {
  //       text: 'Arnie Schwartz',
  //       id: 2,
  //       color: '#FF7043',
  //     }, {
  //       text: 'John Heart',
  //       id: 3,
  //       color: '#E91E63',
  //     }, {
  //       text: 'Taylor Riley',
  //       id: 4,
  //       color: '#E91E63',
  //     }, {
  //       text: 'Brad Farkus',
  //       id: 5,
  //       color: '#AB47BC',
  //     }, {
  //       text: 'Arthur Miller',
  //       id: 6,
  //       color: '#FFA726',
  //     },
  //   ];

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
        <div>
      <Paper>
        <Scheduler

          locale="Es"
          >
        <ViewState
            defaultCurrentDate="2021-10-25"
            />
        <EditingState
            onCommitChanges={this.commitChanges}
            />
        <EditRecurrenceMenu />
        <MonthView />
        <Toolbar />
        <Appointments />
        <AppointmentTooltip
            showOpenButton
            />
        <AppointmentForm />
        <TodayButton/>
        <DateNavigator />

        <DragDropProvider />
        </Scheduler> 
      </Paper>
        </div>
      </div>

    );
  }
}
