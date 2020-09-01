import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Sactividad.css'

export default class Sactividad extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id).collection('evidencias')
    this.unsubscribe = null;
    this.state = {
      evidencia: 0,
      titulo: '',
      descripcion: '',
      evidencias: []
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const evidencias = [];
    querySnapshot.forEach((doc) => {
      const { evidencia, titulo, descripcion } = doc.data();
      evidencias.push({
        key: doc.id,
        doc,
        evidencia,
        titulo,
        descripcion
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

  handleImage (event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`evidencias/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
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
    const { evidencia, titulo, descripcion } = this.state
    this.ref.add({
      evidencia,
      titulo,
      descripcion
    }).then((docRef) => {
      this.setState({
        evidencia: '',
        titulo: '',
        descripcion: ''
      })
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render () {
    const { evidencia, descripcion, titulo } = this.state
    return (
      <div>
        <div className='container-ss'>
          <div>
            <h1>Seguimiento de Actividad</h1>
          </div>
          <div>
            <div className='caja-inputs'>
              <div className='table-left' />
              <div className='table-v-num'>
                <b>#</b>
              </div>
              <div className='table-v-importe'>
                <b>Titulo</b>
              </div>
              <div className='table-v-fechae'>
                <b>Descripción</b>
              </div>
              <div className='table-v-cantidad'>
                <b>Evidencia</b>
              </div>
              <div className='table-v-cantidad'>
                <b>Editar</b>
              </div>
              <div className='table-right'>
              </div>
            </div>
            {this.state.evidencias.map(evidencias =>
              <div className='caja-inputs'>
                <div className='table-left' />
                <div className='table-v-num'>
                  <b>#</b>
                </div>
                <div className='table-v-importe'>
                  <b>{evidencias.titulo}</b>
                </div>
                <div className='table-v-fechae'>
                  <b>{evidencias.descripcion}</b>
                </div>
                <div className='table-v-cantidad'>
                  {evidencias.evidencia &&
                    <input type='checkbox' checked />
                  }
                </div>
                <div className='table-v-cantidad'>
                  <b>Editar</b>
                </div>
                <div className='table-right'>
                </div>
              </div>
            )}
          </div>
          <form className='mar-for' onSubmit={this.onSubmit}>
            <div>
              <div className='input-f-s'>
                <p className='p-fs'>Evidencias: </p>
                <input name='evidencia' value={evidencia} onChange={this.onChange} />
              </div>
              <div className='input-f-s'>
                <p className='p-fs'>Titulo: </p>
                <input name='titulo' value={titulo} onChange={this.onChange} />
              </div>
              <div className='input-f-s'>
                <p className='p-fs'>Descripcion: </p>
                <input name='descripcion' value={descripcion} onChange={this.onChange}/>
              </div>
            </div>
            <div className='boton-v'>
              <button type='submit'>Guardar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
