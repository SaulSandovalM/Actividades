import React, { Component } from 'react'
import './Reportes.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import MaterialTable from 'material-table';

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
      lugar:'',
      actividad: '',
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { actividad, tipoA, lugar, fechai, estatus, estados, municipios, area, horai, convoca } = doc.data()
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
        area,
        actividad,
        convoca

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

  handleBackss(id) {
        firebase.firestore().collection('actividades').doc(id).delete()
    }

  render () {
    const cols = [
          {
            title: 'ACTIVIDAD',
            field: 'actividad'

          },
          {
            title: 'Fiscalia/Direccion',
            field: 'convoca'
          },
          {
            title: 'FECHA',
            field: 'fechai'
          },
          {
            title: 'HORA',
            field: 'horai'
          },
        ];
        const tablas = this.state.actividades.map(actividades => actividades)



    return (
      <div className='mg-conta'>
        <div className='nav-mmf'>
          <h1 className='h1-lm'>Editar Actividades</h1>
        </div>


        <div>
          <MaterialTable
          columns = {cols}
          data = {tablas}
          title = "Reportes de las Direcciones"

          actions = {[

          {
            icon: 'add',
            tooltip: 'Agenda',
            onClick: (event, rowData)=>this.props.history.push(`/Sactividad/${rowData.key}`)
          },

        {
        icon: 'delete',
        tooltip: 'Eliminar Actividad',
        onClick: (event, rowData) => window.confirm('¿Estas Seguro que deseas eliminar el mensaje?') && this.handleBackss(rowData.key)
      },
      {
      icon: 'block',
      tooltip: 'Cancelar/Reprogramar',
      onClick: (event, rowData)=>this.props.history.push(`/Cancelar/${rowData.key}`)
    },
          ]}

          options={{
            actionsColumnIndex: -1,
            exportButton: true
          }}

          localization = {{
            header : {
            actions : 'OPCIONES'
            }
          }}

          />
        </div>
      </div>

    )
  }
}
