import React, { Component } from 'react'
import firebase from '../../Firebase'
import './Sactividad.css'

export default class Sactividad extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id).collection('evidencias')
    this.unsubscribe = null;
    this.state = {
      imgevi: '',
      titulo: '',
      descripcion: '',
      seguimiento: '',
      porque: '',
      evidencia: '',
      evidencias: [],
      imge: 0
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const evidencias = [];
    querySnapshot.forEach((doc) => {
      const { seguimiento, evidencia, titulo, descripcion, porque } = doc.data();
      evidencias.push({
        key: doc.id,
        doc,
        seguimiento,
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
        seguimiento: '',
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
    const { seguimiento, descripcion, titulo, porque } = this.state
    return (
      <div style={{ paddingLeft: '13%' }}>
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
              <div className='form-content'>
                <label for='img' className='text-g'>Evidencia:</label>
                <input className='input-g' type='file' onChange={this.handleImage.bind(this)} />
                <progress className='progress' value={this.state.imge}>
                  {this.state.imgevi} %
                </progress>
              </div>
              <div className='input-f-s'>
                <p className='p-fs'>Titulo: </p>
                <input name='titulo' value={titulo} onChange={this.onChange} />
              </div>
              <div className='input-f-s'>
                <p className='p-fs'>Descripcion: </p>
                <input name='descripcion' value={descripcion} onChange={this.onChange}/>
              </div>
              <div className='input-f-s'>
              <p>Se llevó acabo la actividad:</p>
              <input
                className='style-check'
                type='checkbox'
                name='seguimiento'
                value={seguimiento}
                onChange={this.onChange}
              />
              <input className='style-check' type='checkbox' />
              </div>
              <div className='input-f-s'>
                <p className='p-fs'>¿Por qué?: </p>
                <input name='porque' value={porque} onChange={this.onChange}/>
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
