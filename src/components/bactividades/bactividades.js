import React, { Component } from 'react'
import './bactividades.css'
import firebase from  '../../Firebase'
import MaterialTable from 'material-table';


export default class Mgenerales extends Component {

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
  handleBackss(id) {
      var opcion = window.confirm("¿Estás Seguro que deseas Eliminar el Mensaje? 🥺"+id);
      firebase.firestore().collection('messages').doc(id).delete()
        .then(()=>{alert("¡¡¡Exitoso!!! Mesaje eliminado 😎")})
        .catch((error)=>{ alert("Error removing document:", error)})
    }

  render () {
    const lavi = [
      {
        title: 'Actividad',
        field: 'actividad'
      },
      {
        title: 'Fecha Generacion',
        field: 'fechai'
      },
      {
        title: 'LUGAR',
        field: 'lugar'
      },
      {
        title: 'Responsable',
        field: 'responsable'
      }
    ];
    const tabl = this.state.actividades.map(actividades => actividades)
    return (
      <div className='fader-bacti'>
        <div>
            <h1>Borrador de Actividads (Texto de Prueba)</h1>

        </div>
        <div className= 'tabla-bacti'>

        </div>
          <MaterialTable
          title = "Eliminador de  Actividades"
          columns = {lavi}
          data = {tabl}

          actions = {[
            {
            icon: 'delete',
            tooltip: 'Borra Actividad',
            onClick: (event, rowData)=>this.handleBackss(rowData.key)
          },

          {
          icon: 'add',
          tooltip: 'Ver',
          onClick: (event, rowData)=>this.props.history.push(`/Sactividad/${rowData.key}`)
        }

          ]}

          options={{
            actionsColumnIndex: -1,
            exportButton: true
          }}

           />

      </div>
    )
  }
}
