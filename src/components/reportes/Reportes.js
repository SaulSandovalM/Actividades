import React, { Component } from 'react'
import './Reportes.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'

export default class Reportes extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      tipoA: '',
      ano: ''
    }
  }



  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoA, lugar, fechai, estatus, area } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoA,
        lugar,
        fechai,
        estatus,
        area

      })
    })
    this.setState({
      actividades
   })
  }

  resetear = (e) =>{
            e.preventDefault()
            this.setState({count:0})
        }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render () {
    return (
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Reportes</h1>
        </div>

        <div className='busq'>
          <div className='imp-busq-2'>
            <div className='btn-reportes'>
              <p className='txt-rep'>Fecha inicial:* </p>
              <TextField
                type='date'
                style={{  width: '30%', paddingLeft: '20px' }}
                name='fecha'
                required
                />
                <p className='txt-rep'>Fecha final:* </p>
                <TextField
                  type='date'
                  style={{ width: '35%', paddingLeft:'20px' }}
                  name='fecha'
                  required
                />
                <a href='/Reportes'  className = ''>
                <button className='btn-b-l'>Limpiar</button>
                </a>

              </div>
        </div>
        </div>

        <div className='mes-center' style={{ position: 'fixed', marginTop: '183px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
            <div className='head-mes-rep' style={{paddingLeft: '3.5%', color: 'grey'}}>Actividad</div>
            <div className='head-mes-rep' style={{ color: 'grey' }}>Lugar</div>
            <div className='head-mes-rep' style={{ color: 'grey' }}>Fiscalia/Direccion</div>
            <div className='head-mes-rep' style={{ color: 'grey' }}>Fecha</div>
            <div className='head-mes-rep' style={{ color: 'grey' }}>Estatus</div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Agenda</div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Reporte</div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Agenda </div>
            <div className='head-mes-imp' style={{ color: 'grey' }}>Actividades</div>
            <div className='one-po' />
          </div>
        </div>
        <div style={{ paddingTop: '270px', marginLeft: '0px' }}>
          {this.state.actividades.map(actividades =>
            <div className='mes-center3'>
              <div className='mes-container-map' >
                <span className='material-icons icon-sh' style={{ marginLeft: '-10px', marginRight: '1px'}}>
                  label_important
                </span>
                <div className='head-mes-rep' style={{fontWeight: 'bold'}}>{actividades.tipoA}</div>
                <div className='head-mes-rep'>{actividades.Lugar}</div>
                <div className='head-mes-rep'>{actividades.area}</div>
                <div className='head-mes-rep'>{actividades.fechai}</div>
                <div className='head-mes-rep'>{actividades.estatus}</div>
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
                  <a className='hiper' href='/Agendasemanal'>
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
