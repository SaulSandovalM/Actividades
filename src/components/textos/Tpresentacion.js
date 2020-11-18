import React, { Component } from 'react'
import './Tarchivos.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import firebase from '../../Firebase'

export default class Tpresentacion  extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades').orderBy('horai', 'asc')
    this.unsubscribe = null
    this.state = {
      actividades: []
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { tipoActividad, horai, horaf, fechai, convoca } = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        tipoActividad,
        horai,
        horaf,
        fechai,
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

  render () {
    var f = new Date()
    var meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    var meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    f.setDate(f.getDate() - f.getDay())
    const lunes = f.getFullYear() + '-' + meses[f.getMonth()] + '-' + (f.getDate() + f.getDay() + 1)
    const martes = f.getFullYear() + '-' + meses[f.getMonth()] + '-' + (f.getDate() + f.getDay() + 2)
    const miercoles = f.getFullYear() + '-' + meses[f.getMonth()] + '-' + (f.getDate() + f.getDay() + 3)
    const jueves = f.getFullYear() + '-' + meses[f.getMonth()] + '-' + (f.getDate() + f.getDay() + 4)
    const viernes = f.getFullYear() + '-' + meses[f.getMonth()] + '-' + (f.getDate() + f.getDay() + 5)
    const dia1 = (f.getDate() + f.getDay() + 1)
    const dia2 = (f.getDate() + f.getDay() + 2)
    const dia3 = (f.getDate() + f.getDay() + 3)
    const dia4 = (f.getDate() + f.getDay() + 4)
    const dia5 = (f.getDate() + f.getDay() + 5)
    const mes = meses2[f.getMonth()]

    return (
      <div class='fader-texto'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Actividad</b></TableCell>
                <TableCell align="right"><b>Direccion</b></TableCell>
                <TableCell align="right"><b>Fecha/Hora</b></TableCell>
                <TableCell align="right"><b>Editar</b></TableCell>

              </TableRow>
            </TableHead>
            {this.state.actividades.map(actividades =>
            <TableBody>
            {actividades.fechai === lunes &&
              <TableRow>
                <TableCell>{actividades.tipoActividad}</TableCell>
                <TableCell align="right">{actividades.convoca}</TableCell>
                <TableCell align="right">{actividades.fechai} - {actividades.horai}</TableCell>
                <TableCell align="right">
                  <Link to={`/Tarchivos/${actividades.key}`}>
                    <span className='material-icons icon-edit'>
                      create
                    </span>
                  </Link>
                </TableCell>
              </TableRow>
            }
            </TableBody>
          )}
          {this.state.actividades.map(actividades =>
          <TableBody>
          {actividades.fechai === martes &&
            <TableRow>
              <TableCell>{actividades.tipoActividad}</TableCell>
              <TableCell align="right">{actividades.convoca}</TableCell>
              <TableCell align="right">{actividades.fechai} - {actividades.horai}</TableCell>
              <TableCell align="right">
                <Link to={`/Tarchivos/${actividades.key}`}>
                  <span className='material-icons icon-edit'>
                    create
                  </span>
                </Link>
              </TableCell>
            </TableRow>
          }
          </TableBody>
        )}
        {this.state.actividades.map(actividades =>
        <TableBody>
        {actividades.fechai === miercoles &&
          <TableRow>
            <TableCell>{actividades.tipoActividad}</TableCell>
            <TableCell align="right">{actividades.convoca}</TableCell>
            <TableCell align="right">{actividades.fechai} - {actividades.horai}</TableCell>
            <TableCell align="right">
              <Link to={`/Tarchivos/${actividades.key}`}>
                <span className='material-icons icon-edit'>
                  create
                </span>
              </Link>
            </TableCell>
          </TableRow>
        }
        </TableBody>
      )}
      {this.state.actividades.map(actividades =>
      <TableBody>
      {actividades.fechai === jueves &&
        <TableRow>
          <TableCell>{actividades.tipoActividad}</TableCell>
          <TableCell align="right">{actividades.convoca}</TableCell>
          <TableCell align="right">{actividades.fechai} - {actividades.horai}</TableCell>
          <TableCell align="right">
            <Link to={`/Tarchivos/${actividades.key}`}>
              <span className='material-icons icon-edit'>
                create
              </span>
            </Link>
          </TableCell>
        </TableRow>
      }
      </TableBody>
    )}
    {this.state.actividades.map(actividades =>
    <TableBody>
    {actividades.fechai === viernes &&
      <TableRow>
        <TableCell>{actividades.tipoActividad}</TableCell>
        <TableCell align="right">{actividades.convoca}</TableCell>
        <TableCell align="right">{actividades.fechai} - {actividades.horai}</TableCell>
        <TableCell align="right">
          <Link to={`/Tarchivos/${actividades.key}`}>
            <span className='material-icons icon-edit'>
              create
            </span>
          </Link>
        </TableCell>
      </TableRow>
    }
    </TableBody>
  )}

          </Table>
        </TableContainer>
      </div>
    )
  }

}
