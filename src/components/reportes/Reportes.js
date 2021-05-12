import React, { Component } from 'react'
import './Reportes.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'

export default class Reportes extends Component {
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
          <h1 className='h1-lm'>Reportes</h1>
        </div>
        <div className='busq'>
          <div className='imp-busq-2'>
            <div className='btn-reportes'>
              <p className='txt-rep'>Fecha:  * </p>
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
            <div className='head-mes-rep' style={{paddingLeft: '3.5%', color: 'grey'}}>Actividad</div>
            <div className='head-mes-rep' style={{ color: 'grey' }}>Lugar</div>
            <div className='head-mes-rep' style={{ color: 'grey' }}>Fiscalia/Direccion</div>
            <div className='head-mes-rep' style={{ color: 'grey' }}>Fecha/Hora</div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Agenda</div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Reporte</div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Agenda</div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Actividades</div>
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
                <div className='head-mes-rep' style={{fontWeight: 'bold'}}>{actividades.tipoA}</div>
                <div className='head-mes-rep'>{actividades.lugar} {actividades.municipio} {actividades.estados}</div>
                <div className='head-mes-rep'>{actividades.area}</div>
                <div className='head-mes-rep'>{actividades.fecha} - {actividades.horai}</div>
                <div className='head-mes-imp'>
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

                <div className='head-mes-imp'>
                  <a className='hiper' href='/Agendasemanal'>
                   <span class='material-icons' style={{ cursor:'pointer', color:'#F08080' }}>
                    picture_as_pdf
                  </span>
                  </a>
                </div>

                <div className='head-mes-imp'>
                  <a className='hiper' href='/Arelevante'>
                   <span class='material-icons' style={{ cursor:'pointer', color:'#F08080' }}>
                    picture_as_pdf
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
