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
import { withStyles } from '@material-ui/core/styles'


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
    return (
      <div className='fader-est'>
        <div className='divtop-mg' />
          <div className='form-content-estage'>
            <form className='mensajesg-container-estge' onSubmit={this.onSubmit}>
              <div>
              <h2>Estadistica Geneneral</h2>
              </div>
              <div className='datos-est'>
                <div className='mijo'>
                  <div className='date-cont'>
                  <TextField
                    type='date'

                    style={{ width: '' }}
                    onChange={this.onChange}
                    name='fechain'
                    required
                  />

                  <TextField
                    type='date'
                    style={{ width: '' }}
                    onChange={this.onChange}
                    name='fechain'
                    required
                  />
                  </div>
                  </div>
                  <div>
                  <p className='txt-rep'>Numero de Semana * </p>
                  <TextField
                    style={{  width: '30%', paddingLeft: '20px' }}
                    name='fecha'
                    required
                    value={this.state.search}
                    onChange={this.handleChange.bind(this)}

                  />
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
                        <MenuItem value='taller'>Taller</MenuItem>
                        <MenuItem value='taller'>Curso</MenuItem>
                        <MenuItem value='taller'>Diplomado</MenuItem>
                        <MenuItem value='taller'>Certificación</MenuItem>
                        <MenuItem value='taller'>Gobernador</MenuItem>
                        <MenuItem value='taller'>Otro</MenuItem>
                      </Select>
                      </FormControl>
                    </div>
                    <div>

                    </div>
                  </div>


              </div>
          </form>
        </div>
      </div>
    )
  }
}
