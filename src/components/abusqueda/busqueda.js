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
        const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable, fecha, dependencia } = doc.data()
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
          dependencia

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
        this.props.history.push(`/Iactividad/${this.state.actividades.key}`);
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
              title: 'DEPENDECIA',
              field: 'dependencia'

            }


          ];

              const tablas = this.state.actividades.map(actividades => actividades)

      return (
        <div className='mg-conta'>
        <div className='nav-mms'>
          <h1 className='h1-lm'>Busqueda</h1>
        </div>
          <div style={{ width: '95%', marginRight: '3.5%', marginLeft: '3.5%', paddingTop: '2%'  }}>
            <MaterialTable
              columns = {cols}
              data = {tablas}
              title = "Actividades"
              actions = {[

                {
                icon: 'add',
                tooltip: '⚈ Ver Información completa',
                onClick: (event, rowData)=>this.props.history.push(`/Sactividad/${rowData.key}`)
              }

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
