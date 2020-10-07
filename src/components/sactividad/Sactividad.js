import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Sactividad.css'
import Switch from 'react-switch'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import Input from '@material-ui/core/Input'

export default class Sactividad extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id).collection('evidencias')
    this.unsubscribe = null;
    this.state = {
      imgevi: '',
      titulo: '',
      descripcion: '',
      seguimiento: true,
      porque: '',
      evidencia: '',
      evidencias: [],
      imge: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  onCollectionUpdate = (querySnapshot) => {
    const evidencias = [];
    querySnapshot.forEach((doc) => {
      const { seguimientos, seguimienton, evidencia, titulo, descripcion, porque } = doc.data();
      evidencias.push({
        key: doc.id,
        doc,
        seguimientos,
        seguimienton,
        evidencia,
        titulo,
        descripcion,
        porque
      });
    });
    this.setState({
      evidencias
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleChange(seguimiento) {
    this.setState({ seguimiento });
  }

  handleImage (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`evidencias/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        imge: percentage
      })
    }, error => {
      console.error(error.message)
    }, () => storageRef.getDownloadURL().then(url => {
      const record = url
      this.setState({
        evidencia: record
      })
    }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { seguimiento, titulo, descripcion, porque } = this.state
    this.ref.add({
      seguimiento,
      titulo,
      descripcion,
      porque
    }).then((docRef) => {
      this.setState({
        seguimientos: false,
        seguimienton: false,
        titulo: '',
        descripcion: '',
        porque: ''
      })
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render () {
    const { descripcion, titulo, porque } = this.state
    return (
      <div style={{ backgroundColor: '#FAFAFA', paddingLeft: '15%' }}>
        <div className='container-ss'>
          <div>
            <h1>Seguimiento de Actividad</h1>
          </div>
          
          <form className='mar-for' onSubmit={this.onSubmit}>
            <div>
              <div className='form-content-sa'>
                <label className='text-g'>Evidencia:</label>
                <input className='input-g' type='file' onChange={this.handleImage.bind(this)} />
              </div>
              <div className='form-content-sa'>
                <label className='text-g'></label>
                <progress className='input-g' value={this.state.imge} />
              </div>


              <div className='form-content-sa'>
                <label className='text-g'>Titulo: </label>
                <input className='input-g' name='titulo' value={titulo} onChange={this.onChange} />
              </div>
              <div className='form-content-sa'>
                <label className='text-g'>Descripcion: </label>
                <input className='input-g' name='descripcion' value={descripcion} onChange={this.onChange}/>
              </div>
              <div className='form-content-sa'>
                <label className='text-g'>Actividad Realizada: </label>
                <div className='input-g'>
                  <Switch checked={this.state.seguimiento} onChange={this.handleChange} />
                  {this.state.seguimiento &&
                    <p>Si</p>
                  }
                </div>
              </div>
              {!this.state.seguimiento &&
              <div className='form-content-sa'>
                <label className='text-g'>¿Porque?: </label>
                <input className='input-g' value={porque} onChange={this.onChange}/>
              </div>}
            </div>
            <div className='boton-v'>
              <button type='submit'>Guardar</button>
            </div>
          </form>
          <div>
            <div className='caja-inputs'>
              <div className='table-ev-l' />
              <div className='table-ev-n'>
                <b>#</b>
              </div>
              <div className='table-t-sa'>
                <b>Titulo</b>
              </div>
              <div className='table-t-sa'>
                <b>Descripción</b>
              </div>
              <div className='table-ed-sa'>
                <b>Evidencia</b>
              </div>
              <div className='table-ed-sa'>
                <b>Editar</b>
              </div>
              <div className='table-ev-r' />
            </div>
            {this.state.evidencias.map(evidencias =>
              <div className='caja-inputs'>
                <div className='table-ev-l' />
                <div className='table-ev-n'>
                  <b></b>
                </div>
                <div className='table-t-sa'>
                  <b>{evidencias.titulo}</b>
                </div>
                <div className='table-t-sa'>
                  <b>{evidencias.descripcion}</b>
                </div>
                <div className='table-ed-sa'>
                  {evidencias.evidencia &&
                    <input type='checkbox' checked />
                  }
                </div>
                <div className='table-ed-sa'>
                  <b>Editar</b>
                </div>
                <div className='table-ev-r' />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
