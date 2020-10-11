import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'

export default class Aactividad extends Component {
   constructor () {
     super()
     this.ref = firebase.firestore().collection('actividades')
     this.refestado = firebase.firestore().collection('estados')
     this.refprioridad = firebase.firestore().collection('prioridad')
     this.refdirecciones = firebase.firestore().collection('direcciones')
     this.refmunicipios = firebase.firestore().collection('municipios')
     this.unsubscribe = null
     this.state = {
       estados: [],
       tipoActividad: '',
       prioridad: [],
       direcciones: [],
       municipios: [],
       tema: '',
       ainterna: '',
       aexterna: '',
       convocamos: '',
       convocados: false,
       convoca: '',
       fechai: '',
       fechaf: '',
       tipoA: '',
       estado: '',
       municipio: '',
       quien: '',
       lugar: '',
       imparte: '',
       desc: '',
       servidores: '',
       checkedOrganizada: false,
       otro : ''
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleChangeOr = this.handleChangeOr.bind(this)
   }

   onChange = (e) => {
     const state = this.state
     state[e.target.name] = e.target.value
     this.setState(state)
   }

   handleChange(convocados) {
     this.setState({
       convocados: !this.state.convocados,
     });
   }

   handleChangeOr(checkedOrganizada) {
     this.setState({
       checkedOrganizada: !this.state.checkedOrganizada,
     });
   }

   onCollectionUpdateEstado = (querySnapshot) => {
     const estados = []
     querySnapshot.forEach((doc) => {
       const { estado } = doc.data()
       estados.push({
         key: doc.id,
         doc,
         estado
       })
     })
     this.setState({
       estados
    })
   }

   onCollectionUpdatePrioridad = (querySnapshot) => {
     const prioridad = []
     querySnapshot.forEach((doc) => {
       const { nprioridad } = doc.data()
     prioridad.push({
         key: doc.id,
         doc,
         nprioridad
       })
     })
     this.setState({
       prioridad
    })
   }

   onCollectionUpdateDirecciones = (querySnapshot) => {
     const direcciones = []
     querySnapshot.forEach((doc) => {
       const { Direccion } = doc.data()
       direcciones.push({
         key: doc.id,
         doc,
         Direccion
       })
     })
     this.setState({
       direcciones
    })
   }

   onCollectionUpdateMunicipios = (querySnapshot) => {
     const municipios = []
     querySnapshot.forEach((doc) => {
       const { municipio } = doc.data()
       municipios.push({
         key: doc.id,
         doc,
         municipio
       })
     })
     this.setState({
       municipios
    })
   }

   componentDidMount() {
     this.unsubscribe = this.refestado.onSnapshot(this.onCollectionUpdateEstado)
     this.unsubscribe = this.refprioridad.onSnapshot(this.onCollectionUpdatePrioridad)
     this.unsubscribe = this.refdirecciones.onSnapshot(this.onCollectionUpdateDirecciones)
     this.unsubscribe = this.refmunicipios.onSnapshot(this.onCollectionUpdateMunicipios)
   }

   onSubmit = (e) => {
   e.preventDefault()
     const { tema, ainterna, aexterna, convocamos, convocados, convoca, fechai, fechaf, tipoA, estado,
           municipio, quien, lugar, imparte, desc, prioridad, servidores, tipoActividad, checkedOrganizada, otro } = this.state
     this.ref.add({
       tema,
       ainterna,
       aexterna,
       convocamos,
       convocados,
       convoca,
       fechai,
       fechaf,
       tipoA,
       estado,
       municipio,
       quien,
       lugar,
       imparte,
       desc,
       prioridad,
       servidores,
       tipoActividad,
       checkedOrganizada,
       otro
     }).then((docRef) => {
       this.setState({
         tema: '',
         ainterna: '',
         aexterna: '',
         convocamos: '',
         convocados: false,
         convoca: '',
         fechai: '',
         fechaf: '',
         tipoA: '',
         estado: '',
         municipio: '',
         quien: '',
         lugar: '',
         imparte: '',
         desc: '',
         prioridad: '',
         servidores: '',
         tipoActividad: '',
         checkedOrganizada: false,
         otro: ''
       })
       this.props.history.push('/ActividadesRegistradas')
     })
     .catch((error) => {
       console.error('Error al crear: ', error)
     })
   }

  render () {
    // const { tema, ainterna, aexterna, convocamos, convocados, convoca, fechai, fechaf, estado,
    //         municipio, lugar, imparte, desc, prioridad, servidores, tipoActividad } = this.state
    //         console.log(this.state.convocados)
    //         let impart;
    //         if(this.state.tipoActividad === 'Curso' || this.state.tipoActividad === 'Conferencia'){
    //           impart = <div className='input-c-c'>
    //             <p className='p-t-aaex'>Imparte:</p>
    //             <input className='inp-imp' name='imparte' value={imparte} onChange={this.onChange} />
    //           </div>
    //         }

    // var meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    // var f = new Date()
    // var date = (meses[f.getMonth()] + ' ' + f.getDate() + ', ' + f.getFullYear())
    // this.state.fecha = date
    const IOSSwitch = withStyles((theme) => ({
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none',
          },
        },
        '&$focusVisible $thumb': {
          color: '#52d869',
          border: '6px solid #fff',
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      checked: {},
      focusVisible: {},
    }))(({ classes, ...props }) => {
      return (
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          {...props}
        />
      );
    });


console.log(this.state.descripcion)
console.log(this.state.estados)
    return (
      <div className='aa-conta'>
        <div>
          <div className='divtop-mg' />
          <div className='form-content-ac'>
            <form noValidate autoComplete='off' className='mensajesg-container2'>
              <div style={{height: '100%'}}>
              <h2>Agregar Actividad</h2>
              <p className='martop-dt'>Fecha y hora de inicio *</p>
              <div className='date-cont'>
                <TextField
                  type='date'
                  style={{ width: '45%' }}
                  name='fechai'
                  required
                />
                <TextField
                  type='time'
                  style={{ width: '45%' }}
                  name='horai'
                  required
                />
              </div>
              <p className='martop-dt'>Fecha y hora de Finalizacion *</p>
              <div className='date-cont'>
                <TextField
                  type='date'
                  style={{ width: '45%' }}
                  name='fechaf'
                  placeholdercolor='grey'
                  required
                />
                <TextField
                  type='time'
                  style={{ width: '45%' }}
                  name='horaf'
                  required
                />
              </div>
              <TextField
                label='Actividad'
                style={{ marginTop: '15px', width: '100%' }}
                name='asunto'
                required
              />
              <div className='div_cancel'>
                <TextField
                  label='Objetivo'
                  style={{marginTop: '15px'}}
                  name='objetivo'
                  onChange={this.onChange}
                  inputProps={{
                    maxLength: 300,
                  }}
                  multiline
                  required
                />
              </div>
              <FormControlLabel
                control={<IOSSwitch name='checkedOrganizada'
                checked={this.state.checkedOrganizada}
                onChange={this.handleChangeOr}
                />}
                label='Actividad organizada por procuraduría'
                style={{ marginTop: '20px' }}
              />

              <FormControl style={{ marginTop: '15px', width:'100%' }}>
                <InputLabel id='demo-simple-select-outlined-label'>Tipo Actividad</InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  label='Tipo Actividad'
                  name='descripcion'
                  onChange={this.onChange}
                  required
                >
                  <MenuItem value={'taller'}>Taller</MenuItem>
                  <MenuItem value={'reunion'}>Reunión de Trabajo</MenuItem>
                  <MenuItem value={'curso'}>Curso</MenuItem>
                  <MenuItem value={'conferencia'}>Conferencia</MenuItem>
                  <MenuItem value={'otro'}>Otro</MenuItem>
                </Select>
              </FormControl>
              {this.state.descripcion === 'otro' &&
                <TextField
                  label='Otro'
                  style={{ marginTop: '15px', width: '100%' }}
                  name='otro'
                />
              }

              <div className='date-cont'>
              <TextField
                label='Convoca'
                style={{ marginTop: '15px', width: '45%'}}
                name='convoca'
                required
              />
              <TextField
                label='Dependencia/Institución que convoca'
                style={{ marginTop: '15px', width: '45%'}}
                name='dependencia'
                required
              />
              </div>

              <div className='date-cont'>
              <FormControl style={{ marginTop: '15px', width: '45%' }}>
                <InputLabel id='demo-simple-select-outlined-label'>Estados</InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  label='Estados'
                  name='estados'
                  onChange={this.onChange}

                  required
                >
                {this.state.estados.map(estados =>
                  <MenuItem value="">
                  {estados.estado}
                 </MenuItem>
               )}
                </Select>
              </FormControl>

              {this.state.estados === this.state.municipios &&
                <FormControl style={{ marginTop: '15px', width: '45%' }}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Municipio
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-outlined-label'
                    id='demo-simple-select-outlined'
                    label='Municipios'
                    name='municipios'
                    required
                  >
                  {this.state.municipios.map(municipios =>
                    <MenuItem value="">
                    {municipios.municipio}
                   </MenuItem>
                    )}
                  </Select>
                </FormControl>
              }
              </div>

              <TextField
                label='Lugar Especifico'
                style={{ marginTop: '15px', width: '100%' }}
                name='dependencia'
                required
              />
              <FormControl style={{ marginTop: '15px', width: '100%' }}>
                <InputLabel id='demo-simple-select-outlined-label'>Responsable de Actividad</InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  label='Responsable'
                  name='responsable'
                  required
                >
                  <MenuItem value={10}>Raúl Arroyo</MenuItem>
                  <MenuItem value={20}>León Maximiliano Hernández Valdés</MenuItem>
                  <MenuItem value={30}>Victor Ariel Peréz Benítez</MenuItem>
                  <MenuItem value={40}>Mercedes Citlali Mendoza Meza</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label='Asistente'
                style={{marginTop: '15px', width: '100%'}}
                name='asistente'
                onChange={this.onChange}
                inputProps={{
                  maxLength: 300,
                }}
                multiline
                required
              />
              </div>
              <div className='save-bt'>
                <Fab color='primary' aria-label='add' style={{ background: 'green' }} type='submit'>
                  <DoneIcon />
                </Fab>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
