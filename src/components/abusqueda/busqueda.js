import React, { Component } from 'react'
import './Abusqueda.css'
import firebase from '../../Firebase'
import MaterialTable from 'material-table';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';


export default class busqueda extends Component {
    constructor (props) {
      super(props)
      this.ref = firebase.firestore().collection('actividades')
      this.unsubscribe = null
      this.state = {
        actividades: []
      }
    }

    onCollectionUpdate = (querySnapshot) => {
      const actividades = []
      querySnapshot.forEach((doc) => {
        const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable, fecha } = doc.data()
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
          responsable,
          fecha,

        })
      })
      this.setState({
        actividades
     })
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }
    handleBacks() {
        this.props.history.push(`/Sactividad/${this.state.actividades.key}`);
      }



    render () {
      const  cols = [
            {
              title: 'ACTIVIDAD',
              field: 'actividad'

            },
            {
              title: 'LUGAR',
              field: 'lugar'
            },
            {
              title: 'ESTADO',
              field: 'estados'
            },
            {
              title: 'FECHA',
              field: 'fechai'
            },
            {
              title: 'HORA',
              field: 'horai'
            },
            {
              title: 'CONVOCA',
              field: 'convoca'

            }


          ];

              const tablas = this.state.actividades.map(actividades => actividades)

      return (
        <div className='mg-conta'>
          <div><h1>texto de pruebas </h1></div>

          <div>
            <MaterialTable
              columns = {cols}
              data = {tablas}
              title = "Busqueda de Actividades"
              actions = {[

                {
                icon: 'add',
                tooltip: 'Ver',
                onClick: (event, rowData)=>this.props.history.push(`/Sactividad/${rowData.key}`)
                }
              ]}
              options={{
                actionsColumnIndex: -1
              }}

            />
          </div>

      </div>
    )
  }
}
