import React, { Component } from 'react'
import './Abusqueda.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

export default class Aregistradas extends Component {
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

  render () {
    return (
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Busqueda</h1>
        </div>
        <div className='imp-busq'>

        <FormControl style={{width:'30%', marginRight:'20%', marginLeft:'3.5%'}}>
          <InputLabel>Tipo de Actividad</InputLabel>
          <Select>
            <MenuItem value={10}>Convocatoria</MenuItem>
            <MenuItem value={20}>Congreso</MenuItem>
            <MenuItem value={30}>Junta</MenuItem>
          </Select>
        </FormControl>



        <FormControl style={{width:'30%'}}>
          <InputLabel>Periodo</InputLabel>
          <Select>
            <MenuItem value={10}>Periodo</MenuItem>
            <MenuItem value={20}>Periodo</MenuItem>
            <MenuItem value={30}>Periodo</MenuItem>
          </Select>
        </FormControl>

        </div>
        <div className='mes-center' style={{ position: 'fixed', marginTop: '200px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
            <div className='head-mes-1' style={{paddingLeft: '6.5%', color: 'grey'}}>Actividad</div>
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
        <div style={{paddingTop: '270px'}}>
          {this.state.actividades.map(actividades =>
            <div className='mes-center2'>
              <div className='mes-container-map' >
                <span className='material-icons icon-sh' style={{ marginLeft: '-40px', marginRight: '14px'}}>
                  label_important
                </span>
                <div className='head-mes-1' style={{fontWeight: 'bold'}}>{actividades.tipoA}</div>
                <div className='head-mes-1' >{actividades.Actividad}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
                <div className='head-mes-1' >{actividades.tipoA}</div>
                <div className='head-mes-1' >{actividades.Actividad}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
                <div className='head-mes-1' >{actividades.Lugar}</div>
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
