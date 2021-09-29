import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import MaterialTable from 'material-table';



export default class Showm extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('messages')
    this.unsubscribe = null
    this.state = {
      messages: []
    }
  }
  handleBack() {
      this.props.history.push(`/Editarmensaje/${this.state.messages.key}`);
    }
  handleBacks() {
        this.props.history.push('/Generaciondemensajes');
      }

  handleBackss(id) {
      firebase.firestore().collection('messages').doc(id).delete()
}



  onCollectionUpdate = (querySnapshot) => {
    const messages = []
    querySnapshot.forEach((doc) => {
      const { asunto, descripcion, imagen, checked, fecha } = doc.data()
      messages.push({
        key: doc.id,
        doc,
        asunto,
        descripcion,
        imagen,
        checked,
        fecha
      })
    })
    this.setState({
      messages
   })
   console.log(messages)
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render() {


    const columnas = [
          {
            title: 'ASUNTO ',
            field: 'asunto'
          },
          {
            title: 'DESCRIPCIÓN',
            field: 'descripcion'
          },
          {
            title: 'FECHA',
            field: 'fecha',

          },
          {
            title: 'IMAGEN',
            field: 'imagen',
            render: messages => <img src = { messages.imagen } style = {{ width: 100}} />,

          }

        ];

        const tabla = this.state.messages.map(messages => messages)

        console.log (tabla)




    return (
      <div className='mg-conta-msj'>
        <div className='nav-mm-msj'>
          <h1 className='h1-lms'>Mensajes </h1>
          </div>


        <div style={{paddingTop: '0%'}}>

        </div>

        <div className='dad-tablita'>
        <div className='tablita'>

        </div>
        </div>


        <div className='tabla-msjx'>
                  {/*<MaterialTable
                    columns={columnas}
                    data = {tabla}
                    title = "Mensajes"
                    actions = "Opciones"





                    actions = {[
                      {
                        icon: 'add',
                        tooltip: 'Agregar Nuevo Mensaje',
                        isFreeAction: true,
                        onClick: (this.handleBacks.bind(this))
                      },
                      {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: (event, rowData)=>this.props.history.push(`/Editarmensaje/${rowData.key}`)
                      },
                      {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: (event, rowData) => window.confirm('¿Estas Seguro que deseas eliminar el mensaje?') && this.handleBackss(rowData.key)
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




                  />*/}
                </div>

                <div>

                </div>


      </div>
    )
  }
}
