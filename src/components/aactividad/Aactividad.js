import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'

export default class Aactividad extends Component {
  // constructor () {
  //   super()
  //   this.ref = firebase.firestore().collection('actividades')
  //   this.refestado = firebase.firestore().collection('estados')
  //   this.refprioridad = firebase.firestore().collection('prioridad')
  //   this.refdirecciones = firebase.firestore().collection('direcciones')
  //   this.refmunicipios = firebase.firestore().collection('municipios')
  //   this.unsubscribe = null
  //   this.state = {
  //     estados: [],
  //     tipoActividad: '',
  //     prioridad: [],
  //     direcciones: [],
  //     municipios: [],
  //     tema: '',
  //     ainterna: '',
  //     aexterna: '',
  //     convocamos: '',
  //     convocados: false,
  //     convoca: '',
  //     fechai: '',
  //     fechaf: '',
  //     tipoA: '',
  //     estado: '',
  //     municipio: '',
  //     quien: '',
  //     lugar: '',
  //     imparte: '',
  //     desc: '',
  //     servidores: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }
  //
  // onChange = (e) => {
  //   const state = this.state
  //   state[e.target.name] = e.target.value
  //   this.setState(state)
  // }
  //
  // handleChange(convocados) {
  //   this.setState({
  //     convocados: !this.state.convocados,
  //   });
  // }
  //
  // onCollectionUpdateEstado = (querySnapshot) => {
  //   const estados = []
  //   querySnapshot.forEach((doc) => {
  //     const { estado } = doc.data()
  //     estados.push({
  //       key: doc.id,
  //       doc,
  //       estado
  //     })
  //   })
  //   this.setState({
  //     estados
  //  })
  // }
  //
  // onCollectionUpdatePrioridad = (querySnapshot) => {
  //   const prioridad = []
  //   querySnapshot.forEach((doc) => {
  //     const { nprioridad } = doc.data()
  //     prioridad.push({
  //       key: doc.id,
  //       doc,
  //       nprioridad
  //     })
  //   })
  //   this.setState({
  //     prioridad
  //  })
  // }
  //
  // onCollectionUpdateDirecciones = (querySnapshot) => {
  //   const direcciones = []
  //   querySnapshot.forEach((doc) => {
  //     const { Direccion } = doc.data()
  //     direcciones.push({
  //       key: doc.id,
  //       doc,
  //       Direccion
  //     })
  //   })
  //   this.setState({
  //     direcciones
  //  })
  // }
  //
  // onCollectionUpdateMunicipios = (querySnapshot) => {
  //   const municipios = []
  //   querySnapshot.forEach((doc) => {
  //     const { municipio } = doc.data()
  //     municipios.push({
  //       key: doc.id,
  //       doc,
  //       municipio
  //     })
  //   })
  //   this.setState({
  //     municipios
  //  })
  // }
  //
  // componentDidMount() {
  //   this.unsubscribe = this.refestado.onSnapshot(this.onCollectionUpdateEstado)
  //   this.unsubscribe = this.refprioridad.onSnapshot(this.onCollectionUpdatePrioridad)
  //   this.unsubscribe = this.refdirecciones.onSnapshot(this.onCollectionUpdateDirecciones)
  //   this.unsubscribe = this.refmunicipios.onSnapshot(this.onCollectionUpdateMunicipios)
  // }
  //
  // onSubmit = (e) => {
  //   e.preventDefault()
  //   const { tema, ainterna, aexterna, convocamos, convocados, convoca, fechai, fechaf, tipoA, estado,
  //         municipio, quien, lugar, imparte, desc, prioridad, servidores, tipoActividad } = this.state
  //   this.ref.add({
  //     tema,
  //     ainterna,
  //     aexterna,
  //     convocamos,
  //     convocados,
  //     convoca,
  //     fechai,
  //     fechaf,
  //     tipoA,
  //     estado,
  //     municipio,
  //     quien,
  //     lugar,
  //     imparte,
  //     desc,
  //     prioridad,
  //     servidores,
  //     tipoActividad
  //   }).then((docRef) => {
  //     this.setState({
  //       tema: '',
  //       ainterna: '',
  //       aexterna: '',
  //       convocamos: '',
  //       convocados: false,
  //       convoca: '',
  //       fechai: '',
  //       fechaf: '',
  //       tipoA: '',
  //       estado: '',
  //       municipio: '',
  //       quien: '',
  //       lugar: '',
  //       imparte: '',
  //       desc: '',
  //       prioridad: '',
  //       servidores: '',
  //       tipoActividad: ''
  //     })
  //     this.props.history.push('/ActividadesRegistradas')
  //   })
  //   .catch((error) => {
  //     console.error('Error al crear: ', error)
  //   })
  // }

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

    return (
      <div className='mg-conta'>
        <div>
          <div className='divtop-mg' />
          <div className='form-content-gm'>
            <form noValidate autoComplete='off' className='mensajesg-container'>
              <h2>Agregar Actividad</h2>
              <p className='martop-dt'>Fecha y hora de inicio *</p>
              <div className='date-cont'>
                <TextField
                  type='date'
                  style={{ width: '45%' }}
                  name='fecha'
                  required
                />
                <TextField
                  type='time'
                  style={{ width: '45%' }}
                  name='fecha'
                  required
                />
              </div>
              <p className='martop-dt'>Fecha y hora de Finalizacion *</p>
              <div className='date-cont'>
                <TextField
                  type='date'
                  style={{ marginTop: '30px', width: '45%' }}
                  name='fecha'
                  placeholdercolor='grey'
                  required
                />
                <TextField
                  type='time'
                  style={{ marginTop: '30px', width: '45%' }}
                  name='fecha'
                  required
                />
              </div>
              <TextField
                label='Actividad'
                style={{ marginTop: '15px' }}
                name='asunto'
                required
              />
              <TextField
                label='Tipo Actividad'
                style={{ marginTop: '15px' }}
                name='descripcion'
                required
              />
              <TextField
                label='Convoca'
                style={{ marginTop: '15px' }}
                name='fecha'
                required
              />

              <div className='add-gb'>
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
