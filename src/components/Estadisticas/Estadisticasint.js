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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
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

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


    const ExcelFile = ExportExcel.ExcelFile;
    const ExcelSheet = ExportExcel.ExcelSheet;
    const ExcelColumn = ExportExcel.ExcelColumn;
    const ciudadesMaspobladas = [
      {
        cuidad: "Taller",
        poblacion: 564854,
        entidad:"capacitacion",
        semana:'46',
        pais :9874
      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"capacitacion",
        semana:'46',
        pais:8542
      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"Vinculacion",
        semana:'46',
        pais:753
      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"Taller",
        semana:'46',
        pais:582
      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"estado",
        semana:'46',
        pais:45
      },
    ];

return (
      <div className='fader-est'>
        <div className='divtop-mg' />
          <div className='form-content-estage'>
            <form className='mensajesg-container-estge' onSubmit={this.onSubmit}>
              <div className='titulo-int'>
              <h2>Estadistica Int </h2>
              </div>

              <div className='datos-estad'>
                <div className='mijo'>

                  <div className='fechas-esta'>
                    <div>
                      <p className='txt-rep'>Fecha inicio *</p>
                    </div>
                        <div>
                          <TextField
                          type='date'
                          style={{ width: '' }}
                          onChange={this.onChange}
                          name='fechain'
                          required
                          />
                      </div>
                    </div>

                    <div className='fechas-esta'>
                      <div>
                        <p className='txt-rep'>Fecha final *</p>
                      </div>
                      <div>
                        <TextField
                          type='date'
                          style={{ width: '' }}
                          onChange={this.onChange}
                          name='fechain'
                          required
                        />
                      </div>

                    </div>
                  </div>


                  <div className='semana-int'>
                    <div>
                      <p className='txt-rep'>Numero de Semana * </p>
                    </div>
                    <div>
                      <TextField
                        style={{  width: '57%', paddingLeft: '20px' }}
                        name='fecha'
                        required
                        value={this.state.search}
                        onChange={this.handleChange.bind(this)}
                      />
                    </div>

                  </div>
                  <div>
                    <div>
                      <FormControl style={{ marginTop: '15px', width: '45%' }}>
                    <InputLabel>Tipo Actividad *</InputLabel>
                      <Select
                        name='tipoActividad'
                        onChange={this.onChange}
                        required
                        >
                        <MenuItem value='capacitacion'>Capacitacion</MenuItem>
                        <MenuItem value='vinculacion'>Vinculacion</MenuItem>
                        <MenuItem value='difusion'>Difusion</MenuItem>
                        <MenuItem value='gobernador'>Gobernador</MenuItem>
                        <MenuItem value='otro'>Otras actividades</MenuItem>
                      </Select>
                      </FormControl>

                      {this.state.tipoActividad === 'capacitacion' &&
                      <FormControl style={{ marginTop: '15px', width: '50%' }}>
                        <InputLabel>Tipo de capacitacion *</InputLabel>
                          <Select
                            name='capacitacion'
                            onChange={this.onChange}
                            required
                          >
                            <MenuItem value='taller'>Taller</MenuItem>
                            <MenuItem value='curso'>Curso</MenuItem>
                            <MenuItem value='diplomado'>Diplomando</MenuItem>
                            <MenuItem value='certificado'>Certificado</MenuItem>
                            <MenuItem value='otroc'>Otro</MenuItem>
                          </Select>
                      </FormControl>
                      }
                      {this.state.tipoActividad === 'vinculacion' &&
                      <FormControl style={{ marginTop: '15px', width: '50%' }}>
                        <InputLabel>Tipo de Vinculacion *</InputLabel>
                          <Select
                            name='vinculacion'
                            onChange={this.onChange}
                            required
                          >
                            <MenuItem value='organizmon'>Organismo Nacional</MenuItem>
                            <MenuItem value='organismoi'>Organismo Internacional</MenuItem>
                            <MenuItem value='otrov'>Otro</MenuItem>
                          </Select>
                      </FormControl>
                      }



                      {this.state.tipoActividad === 'organizmon' &&
                      <FormControl style={{ marginTop: '15px', width: '50%' }}>
                        <InputLabel>Local/Nacional *</InputLabel>
                          <Select
                            name='organismon'
                            onChange={this.onChange}
                            required
                          >
                            <MenuItem value='local'>Local</MenuItem>
                            <MenuItem value='republica'>Resto de la Republica</MenuItem>
                          </Select>
                      </FormControl>
                      }

                      {this.state.tipoActividad === 'gobernador' &&
                      <FormControl style={{ marginTop: '15px', width: '100%' }}>
                        <InputLabel>Actividades con el gobernador *</InputLabel>
                          <Select
                            name='vinculacion'
                            onChange={this.onChange}
                            required
                          >
                            <MenuItem value=' '>Actividad</MenuItem>
                            <MenuItem value=' '>Actividad</MenuItem>
                            <MenuItem value='otrov'>Otro</MenuItem>
                          </Select>
                      </FormControl>
                      }









                      {this.state.tipoActividad === 'difusion' &&
                      <FormControl style={{ marginTop: '15px', width: '100%' }}>
                        <InputLabel>Tipo de Difusión *</InputLabel>
                          <Select
                            name='difusion'
                            onChange={this.onChange}
                            required
                          >
                            <MenuItem value='organizmon'>Entrevista</MenuItem>
                            <MenuItem value='organismoi'>Conferencia</MenuItem>
                            <MenuItem value='organismoi'>Rueda de Prensa</MenuItem>
                            <MenuItem value='organismoi'>Platica (menor a 3 horas)</MenuItem>
                            <MenuItem value='otrod'>Otro</MenuItem>
                          </Select>
                      </FormControl>
                      }

                    </div>

                    <div className='mdc-button-estg'>
                      <ExcelFile element = {
                        <button class="mdc-button mdc-button--raised">
                          <span class="mdc-button__label">
                            Generar Reporte
                          </span>
                        </button>} filename='Excel prueba'>
                        <ExcelSheet data={ciudadesMaspobladas} name='Ciudades mas pobladas'>
                          <ExcelColumn label="Fecha" value="ciudad"/>
                          <ExcelColumn label="Numero de Semana" value="semana"/>
                          <ExcelColumn label="Tipo de Actividad" value="poblacion"/>
                          <ExcelColumn label="Sub Actividad" value="entidad"/>
                          <ExcelColumn label="Numero" value="pais"/>
                          <ExcelColumn label=" " value=" "/>


                        </ExcelSheet>
                    </ExcelFile>
                  </div>

                </div>
              </div>
          </form>
        </div>
        <div className='tabla-inte'>
        <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Vinculacion</TableCell>
          <TableCell align="right">Numero</TableCell>
          <TableCell align="right">%</TableCell>
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
            <TableCell align="right">15</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
        </div>
        <div className='tabla-inte'>
        <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Difusion</TableCell>
          <TableCell align="right">Numero</TableCell>
          <TableCell align="right">%</TableCell>
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
            <TableCell align="right">465</TableCell>
            <TableCell align="right">23%</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
        </div>


      </div>
    )
}
}
