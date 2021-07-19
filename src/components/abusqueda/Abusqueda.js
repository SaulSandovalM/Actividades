import React, { Component } from 'react'
import './Abusqueda.css'
import firebase from '../../Firebase'
// import { Link } from 'react-router-dom'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Search from '@material-ui/icons/Search'
import MaterialTable from 'material-table';

export default class Aregistradas extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      actividad: '',
      convoca: '',
      lugar: '',
      fechai: '',
      horai: '',
      estados: '',
      estatus: '',
      responsable: '',
      ano: '',
      search: ''
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        actividad,
        convoca,
        lugar,
        fechai,
        horai,
        estados,
        estatus,
        responsable
      })
    })
    this.setState({
      actividades
   })
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  updateSeacrh (event) {
    this.setState({ search: event.target.value.substr(0, 20) })
  }

  handleChange(event) {
    this.setState({search: event.target.search});
  }

  render () {

    const columnass = [
          {
            title: 'ACTIVIDAD',
            field: 'actividad'

          },
          {
            title: 'DESCRIPCIÓN',
            field: 'responsable'
          },
          {
            title: 'FECHA/HORA',
            field: 'fechai'
          },
          {
            title: 'Estatus',
            field: 'lugar'
          }

        ];


    const filterData = this.state.actividades.filter(
      (actividades) => {

        return  actividades.lugar.indexOf(this.state.search) !== -1
      }
    )


    return (
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Busqueda</h1>
        </div>
        <div className='imp-busq'>
          <div style={{ width: '30%', marginRight: '20%', marginLeft: '3.5%' }}>
            <FormControl style={{ width: '100%' }}>
              <InputLabel htmlFor="input-with-icon-adornment">Nombre a buscar</InputLabel>
              <Input
                value={this.state.search}
                onChange={this.handleChange.bind(this)}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className='mes-center' style={{ position: 'fixed', marginTop: '195px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
            <div className='head-mes-1' style={{ paddingLeft:'2.5%', color: 'grey' }}>Actividad</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Lugar</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Fecha/Hora</div>
            <div className='head-mes-1 status-abus' style={{ color: 'grey' }}>Estatus</div>
            <div className='one-po' />
          </div>
        </div>
        <div style={{ paddingTop: '270px' }}>
          {filterData.map(actividades =>
            <div className='mes-center2'>
              <div className='mes-container-map'>
                <span className='material-icons icon-sh' style={{ marginLeft: '-30px', marginRight: '14px' }}>
                  label_important
                </span>
                <div className='head-mes-1' style={{fontWeight: 'bold'}}>{actividades.actividad}</div>
                <div className='head-mes-1'>{actividades.lugar} + {actividades.estados}</div>
                <div className='head-mes-1'>{actividades.fechai} + {actividades.horai}</div>
                <div className='head-mes-1 status-abus'>{actividades.estatus}
                <div className='one-po'>
                  {actividades.estatus === 'Cancelado' &&
                    <span className='material-icons icon-block'>
                      block
                    </span>
                  }
                  {actividades.estatus === 'En proceso' &&
                    <span className='material-icons icon-block hip' style={{ color:'blue' }}>
                      cached
                    </span>
                  }
                  {actividades.estatus === 'Reprogramado' &&
                    <span className='material-icons icon-block' style={{ color:'orange' }}>
                      restore
                    </span>
                  }
                  {actividades.estatus === 'Realizado' &&
                    <span className='material-icons icon-block' style={{ color:'green' }}>
                      check_circle
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
          )}
        </div>




        <div>
        <MaterialTable


          />


        </div>
      </div>
    )
  }
}
