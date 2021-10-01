import React, { Component } from 'react'
import './Reportes.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'

export default class Reportesniveldir extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      tipoA: '',
      ano: '',
      fechai: '',
      search: '',
      municipios: '',
      estados: ''
    }
  }

  // onCollectionUpdate = (querySnapshot) => {
  //   const actividades = []
  //   querySnapshot.forEach((doc) => {
  //     const { tipoA, lugar, fechai, estatus, municipios, horai, estados, area } = doc.data()
  //     actividades.push({
  //       key: doc.id,
  //       doc,
  //       tipoA,
  //       lugar,
  //       fechai,
  //       estatus,
  //       municipios,
  //       estados,
  //       horai,
  //       area
  //
  //     })
  //   })
  //   this.setState({
  //     actividades
  //  })
  // }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  render () {
    var moment = require('moment')
    var date = moment('2020').add(this.state.search, 'weeks').startOf('isoweek').format('YYYY-MM-DD')

    const filterData = this.state.actividades.filter(
      (actividades) => {
        return  actividades.fechai.indexOf(date) !== -1
      }
    )

    return (
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Editar </h1>
        </div>
        <div className='busq'>
          <div className='imp-busq-2'>
            <div className='btn-reportes'>
              <p className='txt-rep'>Numero de Semana:* </p>
              <TextField
                style={{  width: '30%', paddingLeft: '20px' }}
                name='fecha'
                required
                value={this.state.search}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
        </div>
        <div className='mes-center' style={{ position: 'fixed', marginTop: '183px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
            <div className='head-mes-rep-dir' style={{paddingLeft: '3.5%', color: 'grey'}}>Actividad</div>
            <div className='head-mes-rep-dir' style={{ color: 'grey' }}>Lugar</div>
            <div className='head-mes-rep-dir' style={{ color: 'grey' }}>Fecha/Hora</div>
            <div className='head-mes-imp-dir' style={{ color: 'grey' }}>Agenda</div>
            <div className='head-mes-imp-dir' style={{ color: 'grey' }}>Reporte</div>
            <div className='one-po' />
          </div>
        </div>
        <div style={{ paddingTop: '270px', marginLeft: '0px' }}>
          {filterData.map(actividades =>
            <div className='mes-center3'>
              <div className='mes-container-map' >
                <span className='material-icons icon-sh' style={{ marginLeft: '-10px', marginRight: '1px'}}>
                  label_important
                </span>
                <div className='head-mes-rep-dir' style={{fontWeight: 'bold'}}>Escribiendo un tipo de actividad {actividades.tipoA}</div>
                <div className='head-mes-rep-dir'>{actividades.lugar}, {actividades.municipios}, {actividades.estados}</div>
                <div className='head-mes-rep-dir'>{actividades.fechai} - {actividades.horai}</div>
                <div className='head-mes-imp-dir'>
                  <a  className='hiper' href='/Reportepdf'>
                    <span class='material-icons' style={{ cursor:'pointer', color:'gray' }}>
                      article
                      </span>
                  </a>
                </div>
                <div className='head-mes-imp'>
                  <a className='hiper' href='/Reporteniveldir'>
                    <span class='material-icons' style={{ cursor:'pointer', color:'gray' }}>
                      article
                    </span>
                  </a>
                </div>
                <div className='one-po'>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    )
  }
}
