import React, { Component } from 'react'
import './Editarm.css'
import firebase from '../../Firebase'

export default class Editarm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: '',
      asunto: '',
      descripcion: '',
      para: ''
    }
  }

  componentDidMount () {
    const ref = firebase.firestore().collection('messages').doc(this.props.match.params.id)
    ref.get().then((doc) => {
      if (doc.exists) {
        const messages = doc.data()
        this.setState({
          key: doc.id,
          asunto: messages.asunto,
          descripcion: messages.descripcion,
          para: messages.para
        })
      } else {
        console.log('No hay documento!')
      }
    })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState({ messages:state })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { asunto, descripcion, para } = this.state
    const updateRef = firebase.firestore().collection('messages').doc(this.state.key)
    updateRef.set({
      asunto,
      descripcion,
      para
    }).then((docRef) => {
      this.setState({
        key: '',
        asunto: '',
        descripcion: '',
        para: ''
      })
      this.props.history.push('/')
    })
    .catch((error) => {
      console.error('Error al agregar: ', error)
    })
  }

 render() {
   return (
     <div style={{ margin: '80px' }}>
       <div>
         <div>
           <h3>
             Edicion de Mensajes
           </h3>
         </div>
         <div>
           <form onSubmit={this.onSubmit}>
             <div>
               <label for='asunto'>Asunto:</label>
               <input type='text' name='asunto' value={this.state.asunto} onChange={this.onChange} placeholder='asunto' />
             </div>
             <div>
               <label for='descripcion'>Descripcion:</label>
               <input type='text' name='descripcion' value={this.state.descripcion} onChange={this.onChange} placeholder='descripcion' />
             </div>
             <div>
               <label for='para'>Para:</label>
               <input type='text' name='para' value={this.state.para} onChange={this.onChange} placeholder='para' />
             </div>
             <button type='submit'>Enviar</button>
           </form>
         </div>
       </div>
     </div>
   )
 }
}
