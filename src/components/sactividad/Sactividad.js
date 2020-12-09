import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Sactividad.css'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/Input'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'

export default class Sactividad extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgeevi: ' ',
      relevancia: '',
      resultado: '',
      evidencia: '',
      evidencias: [],
      imge: 0,
      checkedCancelada: false,
      checkedReprogramar: false,
      motivo_cancelado: '',
      fechai: '',
      horai: '',
      fechaf: '',
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
      desc: ''
    }
    this.handleChangeCancel = this.handleChangeCancel.bind(this)
    this.handleChangeRe = this.handleChangeRe.bind(this)
  }

  componentDidMount () {
    const ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id)
    ref.get().then((doc) => {
      if (doc.exists) {
        const actividades = doc.data()
        this.setState({
          key: doc.id,
          asunto: actividades.asunto,
          convocados: actividades.convocados,
          convoca: actividades.convoca,
          fechai: actividades.fechai,
          fechaf: actividades.fechaf,
          tipoA: actividades.tipoA,
          estado: actividades.estado,
          internaE: actividades.internaE,
          municipio: actividades.municipio,
          quien: actividades.quien,
          lugar: actividades.lugar,
          imparte: actividades.imparte,
          desc: actividades.desc
        })
      } else {
        console.log('No hay documento!')
      }
    })
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

  handleImage (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`evidencias/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        imge: percentage
      })
    }, error => {
      console.error(error.message)
    }, () => storageRef.getDownloadURL().then(url => {
      const record = url
      this.setState({
        imgeevi: record
      })
    }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { resultado, relevancia, motivo_cancelado, checkedCancelada, checkedReprogramar,
      fechai, horai, fechaf, horaf, imgeevi, estatus, convocados, convoca, tipoA, estado, internaE,
              municipio, quien, lugar, imparte, desc } = this.state
    const updateRef = firebase.firestore().collection('actividades').doc(this.state.key)
    updateRef.set({
      resultado,
      relevancia,
      motivo_cancelado,
      checkedCancelada,
      checkedReprogramar,
      fechai,
      horai,
      fechaf,
      horaf,
      imgeevi,
      estatus,
      convocados,
      convoca,
      tipoA,
      estado,
      internaE,
      municipio,
      quien,
      lugar,
      imparte,
      desc
    }).then((docRef) => {
      this.setState({
        resultado: '',
        seguimienton: false,
        descripcion: '',
        motivo_cancelado: '',
        checkedCancelada: false,
        checkedReprogramar: false,
        fechai: '',
        horai: '',
        fechaf: '',
        horaf: '',
        imgeevi: '',
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
        desc: ''
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
      estado, internaE, municipio, quien, lugar, imparte, desc } = this.state

    return (
      <div className='mg-conta'>
        <div>
          <div className='divtop-mg' />
          <div className='form-content-gm'>
            <form noValidate autoComplete='off' className='mensajesg-container' onSubmit={this.onSubmit}>
            <h1>Descripcion de Actividad </h1>
            
            <div className='input-c-c'>
              <p>Convodados:</p>
              <input
                className='style-check'
                type='checkbox'
                name='convocados'
                value={convocados}
                onChange={this.onChange}
              />
              <input className='style-check' type='checkbox' />
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Quien Convoca:</p>
                <select className='select' name='convoca' value={convoca}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Fecha de Inicio:</p>
                <input type='date' name='fechai' value={fechai}
                  onChange={this.onChange} />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Tipo de Actividad:</p>
                <select className='select' name='tipoA' value={tipoA}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Fecha de Fin:</p>
                <input type='date' name='fechaf' value={fechaf}
                  onChange={this.onChange} />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Estado:</p>
                <select className='select' name='estado' value={estado}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Interna Externa:</p>
                <input className='style-check-i' type='checkbox'
                  name='internaE' value={internaE}onChange={this.onChange} />
                <input className='style-check-i' type='checkbox' />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Municipio:</p>
                <select className='select' name='municipio' value={municipio}
                  onChange={this.onChange}>
                  <option></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Con quien:</p>
                <input name='quien' value={quien} onChange={this.onChange} />
              </div>
            </div>
            <div className='content-row'>
              <div className='input-c-c'>
                <p className='p-t-aa'>Lugar:</p>
                <input name='lugar' value={lugar} onChange={this.onChange} />
              </div>
              <div className='input-c-c'>
                <p className='p-t-aa'>Imparte:</p>
                <input name='imparte' value={imparte} onChange={this.onChange} />
              </div>
            </div>
            <div>
              <p>Descripción</p>
              <textarea cols='80' rows='3' name='desc' value={desc}
                onChange={this.onChange} />
            </div>
              <h2>Seguimiento de Actividad</h2>
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
              <TextField
                label='Descripcion de Actividad'
                style={{ marginTop: '15px' }}
                name='resultado'
                onChange={this.onChange}
                inputProps={{
                  maxLength: 150
                }}
                multiline
                required
              />
              <TextField
                label='Relevancia'
                style={{ marginTop: '15px' }}
                name='relevancia'
                onChange={this.onChange}
                inputProps={{
                  maxLength: 300
                }}
                multiline
                required
              />
              {this.state.checkedCancelada === false &&
                <div>
                  <Input
                    type='file'
                    style={{marginTop: '30px'}}
                    onChange={this.handleImage.bind(this)}
                  />
                  <progress className='progress2' value={this.state.imge} />
                </div>
              }
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
