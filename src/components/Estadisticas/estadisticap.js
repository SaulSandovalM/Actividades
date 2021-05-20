import React , { Component } from 'react'
import './estadisticas.css'
import firebase from  '../../Firebase'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import {MDCRipple} from '@material/ripple'
import { withStyles } from '@material-ui/core/styles'
import ExportExcel from 'react-export-excel'
import ReactExport from 'react-export-excel';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




export  default class  Estadisgeneral extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      tipoA: '',
      ano: '',
      fecha: '',
      search: '',
      municipios: '',
      estados: '',
      lugar:''
    }
  }
  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoA, lugar, fechai, estatus, estados, municipios, area, horai } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoA,
        lugar,
        fechai,
        estatus,
        municipios,
        estados,
        horai,
        area

      })
    })
    this.setState({
      actividades
   })
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }
  render () {
    const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



 // console.log(this.state.tipoActividad.lenght)


const rows = [
  createData('Total de Actividades', 159, 6.0, 24, 4.0),
  createData('Actividades Realizadas por Procuraduria', 237, 9.0, 37, 4.3),
  createData('Actividades organizadas por Otras Instituciones', 262, 16.0, 24, 6.0),
  createData(' ', 305, 3.7, 67, 4.3),
  createData('Total', 356, 16.0, 49, 3.9),
];



    return (
      <div className='fader-est'>
        <div className='divtop-mg' />
          <div className='form-content-estage'>

         </div>
        <div>
          <div>
            <TableContainer component={Paper}>
              <Table  aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Actividades Totales</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>


        </div>


      </div>
    )
  }
}
