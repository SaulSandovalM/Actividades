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
    const ExcelFile = ExportExcel.ExcelFile;
    const ExcelSheet = ExportExcel.ExcelSheet;
    const ExcelColumn = ExportExcel.ExcelColumn;

    const ciudadesMaspobladas = [
      {
        lugar: "Ciudad de Mexico",
        poblacion: 564854,
        entidad:"estado",
        pais:"México",

      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"estado",
        pais:"México"
      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"estado",
        pais:"México"
      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"estado",
        pais:"México"
      },
      {
        cuidad: "Ciudad dce Mexico",
        poblacion: 564854,
        entidad:"estado",
        pais:"México"
      },
    ];

    return (
      <div className='fader-est'>
        <div className='divtop-mg' />
          <div className='form-content-estage'>
            <form className='mensajesg-container-estge' onSubmit={this.onSubmit}>
              <div>
              <h2>Reporte de Estadistica Geneneral</h2>
              </div>
              <div className='datos-est'>
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
                      <FormControl style={{ marginTop: '15px', width: '100%' }}>
                    <InputLabel>Tipo Actividad *</InputLabel>
                      <Select
                        name='tipoActividad'
                        onChange={this.onChange}
                        required
                        >
                        <MenuItem value='capacitacion'>Capacitacion</MenuItem>
                        <MenuItem value='vinculacion'>Vinculacion</MenuItem>
                        <MenuItem value='difusion'>Difusion</MenuItem>
                        <MenuItem value='taller'>Gobernador</MenuItem>
                        <MenuItem value='taller'>Otras actividades</MenuItem>
                      </Select>
                      </FormControl>
                    </div>


                    <div className='mdc-button-estg'>
                      <ExcelFile element = {<button class="mdc-button mdc-button--raised">
                      <span class="mdc-button__label">Generar </span>
                    </button>} filename='
                    Excel prueba'>
                    <ExcelSheet data={ciudadesMaspobladas} name='Ciudades mas pobladas'>
                      <ExcelColumn label="ciudad" value="ciudad"/>
                      <ExcelColumn label="Poblacion" value="poblacion"/>
                      <ExcelColumn label="Entidad" value="entidad"/>
                      <ExcelColumn label="Pais" value="pais"/>


                    </ExcelSheet>
                    </ExcelFile>
                    </div>
                  </div>





              </div>
          </form>
        </div>
      </div>
    )
  }
}
