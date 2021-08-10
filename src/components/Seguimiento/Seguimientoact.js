import React, { Component } from 'react'
import './Seguimientoact.css'
import firebase from '../../Firebase'
import MaterialTable from 'material-table';


export default class Historial extends Component {
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
      const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable, fecha, imgeevi, descripcion } = doc.data()
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
        imgeevi,
        descripcion

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
    const  cols = [
          {
            title: 'ACTIVIDAD',
            field: 'actividad'

          },
          {
            title: 'DESCRIPCIÓN',
            field: 'descripcion'

          },
          {
            title: 'LUGAR',
            field: 'lugar'
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
            title: 'IMAGEN SEGUIMIENTO',
            field: 'imgeevi',
            render: messages => <img src = { messages.imgeevi } style = {{ width: 100}} />,

          }
        ];
          const tablas = this.state.actividades.map(actividades => actividades)

    return (
       <div className ='faderhistorial'>
          <div>
              <h1> Actividades Con/Sin Seguimiento  + (Nombre de Usuario)</h1>
          </div>
          <div className = 'tabla-historial'>
          <MaterialTable
            columns = {cols}
            data = {tablas}
            title = "Seguimiento"
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
