import React, {Component} from 'react'
import './Reportes.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'

export default class Reportes extends Component {
  constructor (props) {
    super (props)
    this.state = {
      key:'',
      tipoActividad:'',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    const ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id)
    ref.get().then((doc) => {
      if (doc.exists) {
        const messages = doc.data()
        this.setState({
          key: doc.id,
          tipoActividad: messages.tipoActividad,

        })
      } else {
        console.log('No hay documento!')
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { tipoActividad } = this.state
    const updateRef = firebase.firestore().collection('actividades').doc(this.state.key)
    updateRef.set({
      tipoActividad

    }).then((docRef) => {
      this.setState({
        key: '',
        tipoActividad: ''
      })
      this.props.history.push('/Editarborrar')
    })
    .catch((error) => {
      console.error('Error al agregar: ', error)
    })
  }

  handleBack() {
      this.props.history.push('/Listademensajes');
    }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState({ actividades:state })
  }

  handleChange(checked) {
    this.setState({ checked });
  }

render () {
  return (
    <div className='fader-edit'>
      <div><h1> Editando </h1></div>
      <form noValidate autoComplete='off' className='mensajesg-container' onSubmit={this.onSubmit}>
      <div>
        <TextField
        id='standard-basic'
        label='Tipo de Actividad'
        name='tipoActividad'
        value={this.state.tipoActividad}
        onChange={this.onChange}
        required
        />


        <FormControl style={{ marginTop: '15px', width: '100%' }}>
          <InputLabel>Tipo Actividad *</InputLabel>
          <Select
            name='tipoActividad'
            onChange={this.onChange}
            value= {this.state.tipoActividad}
            required
           >
            <MenuItem value='Capacitación'>Capacitación</MenuItem>
            <MenuItem value='Difusión'>Difusión</MenuItem>
            <MenuItem value='Reunion de Trabajo'>Reunion de Trabajo</MenuItem>
            <MenuItem value='Audiencia Pública '>Audiencia Pública </MenuItem>
            <MenuItem value='Eventos Especiales'>Eventos Especiales</MenuItem>




          </Select>
        </FormControl>

      </div>
      <div className='save-bt'>
        <Fab color='primary' aria-label='add' style={{ background: 'green' }} type='submit'>
          <DoneIcon />
        </Fab>
      </div>
      <div className='save-btr'>
        <Fab color='primary' aria-label='add' style={{ background: 'red' }} onClick={this.handleBack.bind(this)}>
          <CloseIcon />
        </Fab>
      </div>
      </form>


    </div>
  )
}
}
