import React, { Component } from 'react'
import './Sactividad.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/Input'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import ReplyIcon from '@material-ui/icons/Reply'



export default class soñe extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.state = {
      actividades: '',
      imgeevi: ' ',
      relevancia: '',
      resultado: '',
      objetivo: '',
      descripcion: '',
      evidencia: '',
      evidencias: [],
      imge: 0,
      checkedCancelada: false,
      checkedReprogramar: false,
      motivo_cancelado: '',
      fechai: '',
      horai: '',
      horaf: '',
      estatus : '',
      convocados: '',
      convoca: '',
      tipoA: '',
      estado: '',
      internaE: '',
      municipio: '',
      quien: '',
      lugar: '',
      imparte: '',
      desc: '',
      checkedOrganizada: '',
      otro: '',
      Capacitación:'',
      curso: '',
      otroc:'',
      otrocc:'',
      vinculacion: '',
      otrov:'',
      organizmon:'',
      difusion:'',
      otrod:'',
      aespeciales:'',
      otrog:'',
      actividad: '',
      asistente:'',
      catalogosAct: '',
      tipoActividad: '',
      presencial: '',
      dInvitada: '',
      subtipoa:'',
      vinculacion:'',
      difusion:'',
      aespeciales:'',
      reuniont:'',
      virpre:'',
      noasistente:'',
      representante: '',
      otrod:'',
      otrog:'',
      difusion:'',
      aespeciales:'',
      organismon:'',
      locRepInt:'',
      aespeciales:'',
      aespeciales:'',
      Vinculación: '',
      dependencia: '',
      checkedOrganizada: '',
      onChange:'',
      Eventos:'',
      Reuniones: '',
      Reuniones1:'',
      Reuniones2:'',
      Reuniones3:'',
      Reuniones4:'',
      Capacitacion:'',
      Difusión:'',








    }
    this.handleChangeCancel = this.handleChangeCancel.bind(this)
    this.handleChangeRe = this.handleChangeRe.bind(this)
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleChangeCancel(checkedCancelada) {
    this.setState({
      checkedCancelada: !this.state.checkedCancelada,
    })
  }

  handleChangeRe(checkedReprogramar) {
    this.setState({
      checkedReprogramar: !this.state.checkedReprogramar,
    })
  }

  handleBack() {
    this.props.history.push('/ActividadesRegistradas')
  }
  onSubmit = (e) => {
    e.preventDefault()
    const { resultado, relevancia, motivo_cancelado, checkedCancelada, checkedReprogramar,
      fechai, horai, duracion, imgeevi, estatus, convoca, estados, municipio,
       lugar,  actividad, objetivo, descripcion, } = this.state
    const updateRef = firebase.firestore().collection('actividades').doc(this.state.key)

    updateRef.set({
      resultado,
      relevancia,
      actividad,
      motivo_cancelado,
      checkedCancelada,
      checkedReprogramar,
      fechai,
      horai,
      objetivo,
      descripcion,
      duracion,
      imgeevi,
      estatus,
      convoca,
      estados,
      municipio,
      lugar,

    }).then((docRef) => {
      this.setState({
        resultado: '',
        seguimienton: false,
        descripcion: '',
        motivo_cancelado: '',
        checkedCancelada: false,
        checkedReprogramar: false,
        fechai: '',
        actividad: '',
        objetivo: '',
        descripcion: '',
        horai: '',
        horaf: '',
        imgeevi: '',
        estatus : '',
        convoca: '',
        tipoA: '',
        estados: '',
        internaE: '',
        municipio: '',
        quien: '',
        lugar: '',
        imparte: '',
        desc: '',
        presencial: '',
        dInvitada:''
      })
      this.props.history.push('/ActividadesRegistradas')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render () {

    const IOSSwitch = withStyles((theme) => ({
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1)
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none'
          },
        },
        '&$focusVisible $thumb': {
          color: '#52d869',
          border: '6px solid #fff'
        },
      },
      thumb: {
        width: 24,
        height: 24
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border'])
      },
      checked: {},
      focusVisible: {}
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
    )
  })

  if (this.state.checkedCancelada){
    this.state.estatus = 'Cancelado'
  }
  if (!this.state.checkedCancelada){
    this.state.estatus = 'Realizado'
  }
  if (this.state.checkedCancelada && this.state.checkedReprogramar){
    this.state.estatus = 'Reprogramado'
  }
  const { resultado, relevancia, motivo_cancelado, checkedCancelada, checkedReprogramar,
    fechai, horai, fechaf, horaf, imgeevi, estatus, convocados, convoca, tipoA,
    estados, internaE, municipios, objetivo, descripcion, quien, lugar, imparte, actividad, desc} = this.state

    console.log(resultado)

    return (
      <div className='mg-conta'>
      <div>
      <div className='divtop-mg'>
        <div className='title-sa'>
          <span class="material-icons" style={{ fontSize:60 }} >
            done_all
          </span>
          <h1 style={{ paddingLeft:'.8%',  paddingTop:'.5%' }}>Cancelar/Reprogramar</h1>
        </div>
        </div>
        <div className='form-content-gm'>
          <form noValidate autoComplete='off' className='mensajesg-container-3' onSubmit={this.onSubmit}>
            <div className='desc-all' >
              <div className='icon-sa'>
              <span class="material-icons" style= {{paddingRight:'.5%', fontSize:35}}>
                delete_forever
              </span>
              <div className='txt-info'>
                <h4 className='info-sa' style={{padding:'4px'}}>
                    Cancelar la Actividad
                </h4>
                </div>
              </div>
              <div className='mensajesg-container-3sa'>
              <FormControlLabel
                control={
                  <IOSSwitch
                    name='checkedCancelada'
                    checked={this.state.checkedCancelada}
                    onChange={this.handleChangeCancel}
                  />
                }
                label='¿Cancelar Actividad?'
                style={{ marginTop: '20px' }}
              />
              {this.state.checkedCancelada === true &&
                <div className='div_cancel'>
                  <TextField
                    label='Motivo de cancelación'
                    style={{marginTop: '15px'}}
                    name='motivo_cancelado'
                    onChange={this.onChange}
                    inputProps={{
                      maxLength: 300,
                    }}
                    multiline
                    required
                  />
                  <FormControlLabel
                    control={
                      <IOSSwitch name='checkedReprogramar'
                        checked={this.state.checkedReprogramar}
                        onChange={this.handleChangeRe}
                      />
                    }
                    label='Re-programar'
                    style={{ marginTop: '20px' }}
                  />
                </div>
              }
              {this.state.checkedReprogramar === true &&
                <div>
                  <p className='martop-dt'>Fecha y hora de inicio *</p>
                  <div className='date-cont'>
                    <TextField
                      type='date'
                      style={{ width: '45%' }}
                      name='fechai'
                      onChange={this.onChange}
                      required
                    />
                    <TextField
                      type='time'
                      style={{ width: '45%' }}
                      name='horai'
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className='date-cont'>
                    <TextField
                      label='Duración'
                      style={{ marginTop: '15px', width: '45%' }}
                      name='duracion'
                      onChange={this.onChange}
                      required
                    />
                    <div className='hra-hras'>
                      <p>hr/hrs</p>
                    </div>
                  </div>
                </div>
              }

              </div>



            </div>
            <div className='add-gb'>
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
        </div>

      </div>
    )
  }
}
