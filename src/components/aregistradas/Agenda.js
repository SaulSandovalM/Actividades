import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import './Aregistradas.css'
import TextField from '@material-ui/core/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
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
import { owners } from './tasks';
import { appointments, resourcesData } from './resources';
//botones
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [
        {
          fieldName: 'roomId',
          title: 'Room',
          instances: resourcesData,
        },
        {
          fieldName: 'members',
          title: 'Members',
          instances: owners,
          allowMultiple: true,
        },
      ],
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  handleBack() {
    this.props.history.push('/AgregarActividad');
  }
  render() {
    const { data, resources } = this.state;

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
          data={data}
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
        <Resources
            data={resources}
            mainResourceName="roomId"
            />
        <DragDropProvider />
        </Scheduler>
      </Paper>
        </div>
      </div>

    );
  }
}
