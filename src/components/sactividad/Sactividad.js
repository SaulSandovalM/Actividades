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
      desc: '',
      checkedOrganizada: '',
      otro: '',
      capacitacion:'',
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
      dependencia:'',
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






    }
    this.handleChangeCancel = this.handleChangeCancel.bind(this)
    this.handleChangeRe = this.handleChangeRe.bind(this)
  }
  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { fechai, resposable, fechaf, convoca, horai, objetivo, descripcion, imagen, lugar, estado, municipios, presencial } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        fechai,
        fechaf,
        descripcion,
        convoca,
        horai,
        objetivo,
        resposable,
        imagen,
        lugar,
        municipios,
        estado,
        presencial
      })
    })

    this.setState({
      actividades
   })
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
          estados: actividades.estados,
          internaE: actividades.internaE,
          municipios: actividades.municipios,
          quien: actividades.quien,
          lugar: actividades.lugar,
          imparte: actividades.imparte,
          desc: actividades.desc,
          actividad: actividades.actividad,
          duracion: actividades.duracion,
          responsable: actividades.responsable,
          objetivo: actividades.objetivo,
          descripcion: actividades.descripcion,
          tipoActividad: actividades.tipoActividad,
          otro: actividades.otro,
          presencial: actividades.presencial,
          horai: actividades.horai,
          dInvitada: actividades.dInvitada,
          subtipoa: actividades.subtipoa,
          otroc: actividades.otroc,
          otrocc: actividades.otrocc,
          capacitacion: actividades.capacitacion,
          vinculacion: actividades.vinculacion,
          difusion: actividades.difusion,
          reuniont: actividades.reuniont,
          virpre: actividades.virpre,
          noasistente: actividades.noasistente,
          asistente: actividades.asistente,
          otrod: actividades.otrod,
          otrog: actividades.otrog,
          difusion: actividades.difusion,
          aespeciales: actividades.aespeciales,
          organismon: actividades.organismon,
          locRepInt: actividades.locRepIntt,
          aespeciales: actividades.aespeciales,





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
      fechai, horai, duracion, fechaf, horaf, imgeevi, estatus, convocados, convoca, tipoA, estados, internaE,
              municipio, quien, lugar, imparte, actividad, objetivo, descripcion, desc } = this.state
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
      fechaf,
      horaf,
      objetivo,
      descripcion,
      duracion,
      imgeevi,
      estatus,
      convocados,
      convoca,
      tipoA,
      estados,
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
        actividad: '',
        objetivo: '',
        descripcion: '',
        horai: '',
        fechaf: '',
        horaf: '',
        imgeevi: '',
        estatus : '',
        convocados: '',
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

    return (
      <div className='mg-conta'>
        <div>
          <div className='divtop-mg'>
            <div className='title-sa'>



            <span class="material-icons" style={{ fontSize:60 }} >
              done_all
            </span>



              <h1 style={{ paddingLeft:'.8%',  paddingTop:'.5%' }}>Seguimiento de Actividad</h1>

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
                      checked={this.state. checkedReprogramar}
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

              <div>


                  <div className='desc-all' >
                  <div className='icon-sa'>
                  <span class='material-icons' style={{ fontSize:30, paddingRight:'.8%' }} >
                    feed
                  </span>
                    <div className='txt-info'><h4 className='info-sa' style={{padding:'2px'}}>Informacion de la Actividad</h4></div>
                    </div>
                    <div className='mensajesg-container-3sa'>

                    <div className='combo'>

                        <div className='combo-1'>

                          <div className='tipo-act'>
                              <p className='desc-p'>Actividad Generada por:</p>
                              <p className='desc-left'>{this.stateorganizada} procuraduria Gerneral de justicia de hidalgo</p>
                          </div>
                          <div className='tipo-act'>
                              <p className='desc-p'>Tipo de Actividad:</p>
                              <p className='desc-left'>{this.state.tipoActividad} {this.state.otro} {this.state.otroc} {this.state.otrov} {this.state.otrod} </p>
                          </div>


                          <div className='tipo-act'>
                              <p className='desc-p'>Virtual/Local:</p>
                              <p className='desc-left'>{this.state.virpre}</p>
                          </div>

                          <div className='tipo-act'>
                            <p className='desc-p'>Hora de Cita:</p>
                            <p className='desc-left'>{this.state.horai}</p>
                          </div>



                          <div className='tipo-act'>
                            <p className='desc-p'>Estado:</p>
                            <p className='desc-left'>{this.state.estados}</p>
                          </div>

                          <div className='tipo-act'>
                            <p className='desc-p'>Lugar:</p>
                            <p className='desc-left'>{this.state.lugar}</p>
                          </div>



                          <div className='tipo-act'>
                            <p className='desc-p'>Responsable:</p>
                            <p className='desc-left'>{this.state.responsable}</p>
                          </div>

                          <div className='tipo-act'>
                            <p className='desc-p'>Representante:</p>
                            <p className='desc-left'>{this.state.asistente}</p>
                          </div>

                      </div>
                      <div className='combo-2'>

                      <div className='tipo-act'>
                        <p className='desc-p'>Convoca:</p>
                        <p className='desc-left'>{this.state.convoca}</p>
                      </div>

                      <div className='tipo-act'>
                          <p className='desc-p'>Sub Tipo-Actividad:</p>
                          <p className='desc-left'>{this.state.capacitacion} {this.state.otroc} {this.state.vinculacion} {this.state.otrov} {this.state.locRepint} {this.state.aespeciales} {this.state.otrog}</p>
                      </div>



                        <div className='tipo-act'>
                            <p className='desc-p'>Nombre deActividad:</p>
                            <p className='desc-left'>{this.state.actividad}</p>
                        </div>


                        <div className='tipo-act'>
                          <p className='desc-p'>Fecha de Inicio:</p>
                          <p className='desc-left'>{this.state.fechai}</p>
                        </div>

                        <div className='tipo-act'>
                          <p className='desc-p'>Duracion:</p>
                          <p className='desc-left'>{this.state.duracion}</p>
                        </div>

                        <div className='tipo-act'>
                          <p className='desc-p'>Estatus:</p>
                          <p className='desc-left'>{this.state.estatus}</p>
                        </div>

                        <div className='tipo-act'>
                          <p className='desc-p'>Municipio:</p>
                          <p className='desc-left'>{this.state.municipios}</p>
                        </div>

                        <div className='tipo-act'>
                        <p className='desc-p'>No. Asistentes:</p>
                        <p className='desc-left'>{this.state.noasistente}</p>
                        </div>


                      </div>
                    </div>
                    <div>
                      <p className='desc-p'>Descripcion de la Actividad </p>
                      <p className='desc-left'>{this.state.descripcion}.</p>
                    </div>
                    <div>
                      <p className='desc-p'>Objetivo de la Actividad:</p>
                      <p className='desc-left'>{this.state.objetivo}</p>
                    </div>
                  </div>
               </div>

              </div>

              <div className='desc-all' >
              <div className='icon-sa'>
              <span class='material-icons' style={{ fontSize:30, paddingRight:'.8%' }} >
                maps_ugc
                </span>
                <div className='txt-info'><h4 className='info-sa'>Agrega Seguimiento de la Actividad</h4></div>
                </div>
                <div className='mensajesg-container-3sa'>
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
