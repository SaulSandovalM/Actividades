import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
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
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render() {
    function deleteMessage(id)
    {
      alert(id)
    }
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
            field: 'fecha'
          },
          {
            title: 'OPCIONES',
            field: 'buttom'
          }

        ];





        const tabla = this.state.messages.map(messages => messages)

        console.log (tabla)

    return (
      <div className='mg-conta'>
        <div className='nav-mm'>
          <h1 className='h1-lm'>Agregar, Editar o eMensajes </h1>
          </div>
        <div className='mes-center' style={{ position: 'fixed', marginTop: '120px', background: '#fafafa' }}>
          <div className='mes-container' style={{ marginRight: '256px' }}>
          <div className='head-mes' style={{paddingLeft: '6.5%', color: 'grey'}}>
              Asunto
            </div>
            <div className='head-mesd' style={{ color: 'grey' }}>
              Descripcion
            </div>
            <div className='head-mesf' style={{ color: 'grey' }}>
              Fecha
            </div>
            <div className='one-po' />
          </div>
        </div>

        <div style={{paddingTop: '195px'}}>
          {this.state.messages.map(messages =>
            <div className='mes-center2'>
              <div className='mes-container-map'>
                <div className='head-mes' style={{fontWeight: 'bold'}}>
                   ✮ {messages.asunto}
                </div>
                <div className='head-mesd' style={{color: '#424242'}}>
                  {messages.descripcion}
                </div>
                <div className='head-mesf' style={{color: '#424242'}}>
                  {messages.fecha}
                </div>
                <div className='one-po icons-delete'>
                  <Link to={`/Editarmensaje/${messages.key}`}>
                    <span className='material-icons icon-edit'>
                      create
                    </span>
                    </Link>
                    <Link>
                      <span class="material-icons" >
                      delete
                      </span>
                    </Link>
                    <div>
                    <button > Eliminar</button>
                    </div>

                  </div>

              </div>
            </div>

          )}
        </div>

        <div className='add-m' style={{position: 'fixed'}}>
          <Link to='/Generaciondemensajes'>
            <Fab color='primary' aria-label='add' style={{background: '#71b631'}}>
              <AddIcon />
            </Fab>
          </Link>
        </div>
        <div className='dad-tablita'>
        <div className='tablita'>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className='conte-tablita'>
                <TableCell style={{ color: '#dc5f70', fontWeight: 'bold' }}>ASUNTO</TableCell>
                <TableCell style={{ color: '#dc5f70', fontWeight: 'bold'}} >DESCRIPCION</TableCell>
                <TableCell style={{ color: '#dc5f70', fontWeight: 'bold'}} >FECHA</TableCell>
                <TableCell style={{ color: '#dc5f70', fontWeight: 'bold'}} >OPCIONES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Adios</TableCell>
                <TableCell>Adios</TableCell>
                <TableCell>Adios</TableCell>
                <TableCell>Adios</TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        </div>


        <div>
                  <MaterialTable
                    columns={columnas}
                    data = {tabla}
                    title = "Mensajes"

                    actions = {[
                      {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: (event, rowData)=>Link('/Editarmensaje/${messages.key}')
                      },
                      {
                        icon: 'delete',
                        tooltip: 'Editar artista',
                        onClick: (event, rowData)=>window.confirm('Estas seguro que quires elimar el mensaje : ' +rowData.artista+'?')
                      }
                    ] }

                    options={{
                      actionsColumnIndex: -1
                    }}

                  />
                </div>


      </div>
    )
  }
}
// import React, {
// Component
// } from 'react'
// import './Editarm.css'
// import firebase from '../../Firebase'
// import {
//   Link
// } from 'react-router-dom'
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add'
// import {
//   AccessAlarm,
//   ThreeDRotation
// } from '@material-ui/icons';
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell
// } from '@material-ui/core';
// import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
// import CommentIcon from '@material-ui/icons/Comment';
// import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
//
// import MaterialTable from 'material-table';
//
// export default class Showm extends Component {
//   constructor(props) {
//     super(props)
//     this.ref = firebase.firestore().collection('messages')
//     this.unsubscribe = null
//     this.state = {
//       messages: []
//     }
//   }
//
//   onCollectionUpdate = (querySnapshot) => {
//     const messages = []
//     querySnapshot.forEach((doc) => {
//       const {
//         asunto,
//         descripcion,
//         imagen,
//         checked,
//         fecha
//       } = doc.data()
//       messages.push({
//         key: doc.id,
//         doc,
//         asunto,
//         descripcion,
//         imagen,
//         checked,
//         fecha
//       })
//     })
//     this.setState({
//       messages
//     })
//   }
//
//   componentDidMount() {
//     this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
//   }
//
//
//
//   render() {
//     function deleteMessage(id) {
//       alert(id)
//     }
//
//     const columnas = [
//       {
//         title: 'Hola',
//         field: 'hola'
//       },
//       {
//         title: 'Holaii',
//         field: 'holaii'
//       },
//       {
//         title: 'Holaiii',
//         field: 'holaiii'
//       }
//
//     ];
//
//
//     const data = [
//       {hola: 'fer', holaii:'saul', holaiii:'cosa'},
//       {hola: 'fer', holaii:'saul', holaiii:'cosa'},
//       {hola: 'fer', holaii:'saul', holaiii:'cosa'}
//     ];
//     var perro = this.state.messages.map(messages => messages.asunto)
//
//   return (
//     <div className= 'mg-conta'>
//       <div className = 'nav-mm'>
//         <h1 className = 'h1-lm'>
//           <span class = "material-icons msj-d"> speaker_notes < /span>
//           Vista de Pruebas
//         </h1>
//       </div>
//       <div className = 'mes-center' style = {{ position: 'fixed', marginTop: '120px', background: '#fafafa'}}>
//         <div className = 'mes-container' style = {{ marginRight: '256px' }} />
//         <div style = {{ paddingTop: '195px' }} />
//         <div className = 'add-m' style = {{ position: 'fixed' }}>
//           <Link to='/Generaciondemensajes'>
//             <Fab color='primary' aria-label='add' style={{ background: '#71b631' }}>
//               <AddIcon / >
//             </Fab>
//           </Link>
//         </div>
//         <div className='dad-tablita'>
//           {this.state.messages.map(messages =>
//             <div className='tablita'>
//               <TableContainer>
//                 <Table>
//                   <TableHead>
//                     <TableRow className='conte-tablita' >
//                       <TableCell style={{ color: '#dc5f70', fontWeight: 'bold' }}>
//                         ✮ASUNTO
//                       </TableCell>
//                       <TableCell style = {{ color: '#dc5f70', fontWeight: 'bold' }}>
//                         DESCRIPCIÓN
//                       </TableCell>
//                       <TableCell style={{ color: '#dc5f70', fontWeight: 'bold'}}>
//                         FECHA
//                       </TableCell>
//                       <TableCell style={{color: '#dc5f70', fontWeight: 'bold'}}>
//                         OPCIONES
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody >
//                     <TableRow >
//                       <TableCell > { messages.asunto} < /TableCell>
//                       <TableCell > { messages.descripcion} </TableCell>
//                       <TableCell > {messages.fecha} < /TableCell>
//                       <TableCell >
//                         <div className = 'one-po icons-delete' >
//                           <Link to = {`/Editarmensaje/${messages.key}`} >
//                             <span className = 'material-icons icon-edit' > create < /span></Link >
//                           <Link > < span class = "material-icons" > delete < /span></Link >
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </div>
//           )}
//         </div>
//         <div>
//           <MaterialTable
//             columns={columnas}
//             data = {data}
//           />
//         </div>
//       </div>
//     </div>
//     )
//   }
// }
