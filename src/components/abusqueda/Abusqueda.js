import React, { Component } from 'react'
import './Abusqueda.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Search from '@material-ui/icons/Search'

export default class Aregistradas extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: [],
      tipoA: '',
      ano: '',
      search: ''
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoA, lugar, fechai } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoA,
        lugar,
        fechai
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

  render () {
    const filterData = this.state.actividades.filter(
      (actividades) => {
        return actividades.lugar.indexOf(this.state.search) !== -1
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
                onChange={this.updateSeacrh.bind(this)}
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
            <div className='head-mes-1' style={{ paddingLeft: '6.5%', color: 'grey' }}>Actividad</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Convocado</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Para</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Lugar</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Fecha</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Hora</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Estado</div>
            <div className='head-mes-1' style={{ color: 'grey' }}>Estatus</div>
            <div className='one-po' />
          </div>
        </div>
        <div style={{ paddingTop: '270px' }}>
          {filterData.map(actividades =>
            <div className='mes-center2'>
              <div className='mes-container-map'>
                <span className='material-icons icon-sh' style={{ marginLeft: '-40px', marginRight: '14px' }}>
                  label_important
                </span>
                <div className='head-mes-1' style={{fontWeight: 'bold'}}>{actividades.tipoA}</div>
                <div className='head-mes-1'>{actividades.Actividad}</div>
                <div className='head-mes-1'>{actividades.Lugar}</div>
                <div className='head-mes-1'>{actividades.tipoA}</div>
                <div className='head-mes-1'>{actividades.Actividad}</div>
                <div className='head-mes-1'>{actividades.Lugar}</div>
                <div className='head-mes-1'>{actividades.Lugar}</div>
                <div className='head-mes-1'>{actividades.Lugar}</div>
                <div className='one-po'>
                  <Link to={`/Editarmensaje/${actividades.key}`}>
                    <span className='material-icons icon-block'>
                      block
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
