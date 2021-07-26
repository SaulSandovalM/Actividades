import React, { Component } from 'react'
import './Sactividad.css'
import firebase from '../../Firebase'

export default class Iactividad extends Component {

    constructor (props) {
      super(props)
      this.ref = firebase.firestore().collection('actividades')
      this.state = {
        actividades: '',
        imgeevi: ' ',
        relevancia: '',
        resultado: '',
        objetivo: '',
        descripcion: '',
        evidencia: '',
        evidencias: [],
        imge: 0,
        checkedCancelada: false,
        checkedReprogramar: false,
        motivo_cancelado: '',
        fechai: '',
        horai: '',
        horaf: '',
        estatus : '',
        convocados: '',
        convoca: '',
        tipoA: '',
        estado: '',
        internaE: '',
        municipio: '',
        quien: '',
        lugar: '',
        imparte: '',
        desc: '',
        checkedOrganizada: '',
        otro: '',
        capacitacion:'',
        curso: '',
        otroc:'',
        otrocc:'',
        vinculacion: '',
        otrov:'',
        organizmon:'',
        difusion:'',
        otrod:'',
        aespeciales:'',
        otrog:'',
        actividad: '',
        dependencia:'',
        asistente:'',
        catalogosAct: '',
        tipoActividad: '',
        presencial: '',
        dInvitada: '',
        subtipoa:'',
        vinculacion:'',
        difusion:'',
        aespeciales:'',
        reuniont:'',
        virpre:'',
        noasistente:'',
        representante: '',
        otrod:'',
        otrog:'',
        difusion:'',
        aespeciales:'',
        organismon:'',
        locRepInt:'',
        aespeciales:'',
        aespeciales:'',






      }
      this.handleChangeCancel = this.handleChangeCancel.bind(this)
      this.handleChangeRe = this.handleChangeRe.bind(this)
    }
    onCollectionUpdate = (querySnapshot) => {
      const actividades = []
      querySnapshot.forEach((doc) => {
        const { fechai, resposable, convoca, horai, objetivo, descripcion, imagen, lugar, estado, municipios, presencial } = doc.data()
        actividades.push({
          key: doc.id,
          doc,
          fechai,
          descripcion,
          convoca,
          horai,
          objetivo,
          resposable,
          imagen,
          lugar,
          municipios,
          estado,
          presencial
        })
      })

      this.setState({
        actividades
     })
    }


    componentDidMount () {
      const ref = firebase.firestore().collection('actividades').doc(this.props.match.params.id)
      ref.get().then((doc) => {
        if (doc.exists) {
          const actividades = doc.data()
          this.setState({
            key: doc.id,
            asunto: actividades.asunto,
            convoca: actividades.convoca,
            fechai: actividades.fechai,
            tipoA: actividades.tipoA,
            estados: actividades.estados,
            internaE: actividades.internaE,
            municipios: actividades.municipios,
            quien: actividades.quien,
            lugar: actividades.lugar,
            imparte: actividades.imparte,
            desc: actividades.desc,
            actividad: actividades.actividad,
            duracion: actividades.duracion,
            responsable: actividades.responsable,
            objetivo: actividades.objetivo,
            descripcion: actividades.descripcion,
            tipoActividad: actividades.tipoActividad,
            otro: actividades.otro,
            presencial: actividades.presencial,
            horai: actividades.horai,
            dInvitada: actividades.dInvitada,
            subtipoa: actividades.subtipoa,
            otroc: actividades.otroc,
            otrocc: actividades.otrocc,
            capacitacion: actividades.capacitacion,
            vinculacion: actividades.vinculacion,
            difusion: actividades.difusion,
            reuniont: actividades.reuniont,
            virpre: actividades.virpre,
            noasistente: actividades.noasistente,
            asistente: actividades.asistente,
            otrod: actividades.otrod,
            otrog: actividades.otrog,
            difusion: actividades.difusion,
            aespeciales: actividades.aespeciales,
            organismon: actividades.organismon,
            locRepInt: actividades.locRepIntt,
            aespeciales: actividades.aespeciales,





          })
        } else {
          console.log('No hay documento!')
        }
      })
    }

    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value
      this.setState(state)
    }

    handleChangeCancel(checkedCancelada) {
      this.setState({
        checkedCancelada: !this.state.checkedCancelada,
      })
    }

    handleChangeRe(checkedReprogramar) {
      this.setState({
        checkedReprogramar: !this.state.checkedReprogramar,
      })
    }

    handleBack() {
      this.props.history.push('/ActividadesRegistradas')
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
          imgeevi: record
        })
      }))
    }

    onSubmit = (e) => {
      e.preventDefault()
      const { resultado, relevancia, motivo_cancelado, checkedCancelada, checkedReprogramar,
        fechai, horai, duracion, imgeevi, estatus, convoca, estados, municipio,
         lugar,  actividad, objetivo, descripcion, } = this.state
      const updateRef = firebase.firestore().collection('actividades').doc(this.state.key)

      updateRef.set({
        resultado,
        relevancia,
        actividad,
        motivo_cancelado,
        checkedCancelada,
        checkedReprogramar,
        fechai,
        horai,
        objetivo,
        descripcion,
        duracion,
        imgeevi,
        estatus,
        convoca,
        estados,
        municipio,
        lugar,
      })

    }

      render () {
        return (
          <div  className='mg-conta'>
            <div>
              <div className='divtop-mg'>
                <div className='title-sa'>
                <span class="material-icons" style={{ fontSize:60 }} >
                  done_all
                </span>



                  <h1 style={{ paddingLeft:'.8%',  paddingTop:'.5%' }}>Informacion de ACtividad</h1>

                </div>
               </div>
               <div>


                   <div className='desc-all' >
                   <div className='icon-sa'>
                   <span class='material-icons' style={{ fontSize:30, paddingRight:'.8%' }} >
                     feed
                   </span>
                     <div className='txt-info'><h4 className='info-sa' style={{padding:'2px'}}>Informacion de la Actividad</h4></div>
                     </div>
                     <div className='mensajesg-container-3sa'>

                     <div className='combo'>

                         <div className='combo-1'>

                           <div className='tipo-act'>
                               <p className='desc-p'>Actividad Generada por:</p>
                               <p className='desc-left'>{this.stateorganizada} procuraduria Gerneral de justicia de hidalgo</p>
                           </div>
                           <div className='tipo-act'>
                               <p className='desc-p'>Tipo de Actividad:</p>
                               <p className='desc-left'>{this.state.tipoActividad} {this.state.otro} {this.state.otroc} {this.state.otrov} {this.state.otrod} </p>
                           </div>


                           <div className='tipo-act'>
                               <p className='desc-p'>Virtual/Local:</p>
                               <p className='desc-left'>{this.state.virpre}</p>
                           </div>

                           <div className='tipo-act'>
                             <p className='desc-p'>Hora de Cita:</p>
                             <p className='desc-left'>{this.state.horai}</p>
                           </div>



                           <div className='tipo-act'>
                             <p className='desc-p'>Estado:</p>
                             <p className='desc-left'>{this.state.estados}</p>
                           </div>

                           <div className='tipo-act'>
                             <p className='desc-p'>Lugar:</p>
                             <p className='desc-left'>{this.state.lugar}</p>
                           </div>



                           <div className='tipo-act'>
                             <p className='desc-p'>Responsable:</p>
                             <p className='desc-left'>{this.state.responsable}</p>
                           </div>

                           <div className='tipo-act'>
                             <p className='desc-p'>Representante:</p>
                             <p className='desc-left'>{this.state.asistente}</p>
                           </div>

                       </div>
                       <div className='combo-2'>

                       <div className='tipo-act'>
                         <p className='desc-p'>Convoca:</p>
                         <p className='desc-left'>{this.state.convoca}</p>
                       </div>

                       <div className='tipo-act'>
                           <p className='desc-p'>Sub Tipo-Actividad:</p>
                           <p className='desc-left'>{this.state.capacitacion} {this.state.otroc} {this.state.vinculacion} {this.state.otrov} {this.state.locRepint} {this.state.aespeciales} {this.state.otrog}</p>
                       </div>



                         <div className='tipo-act'>
                             <p className='desc-p'>Nombre deActividad:</p>
                             <p className='desc-left'>{this.state.actividad}</p>
                         </div>


                         <div className='tipo-act'>
                           <p className='desc-p'>Fecha de Inicio:</p>
                           <p className='desc-left'>{this.state.fechai}</p>
                         </div>

                         <div className='tipo-act'>
                           <p className='desc-p'>Duracion:</p>
                           <p className='desc-left'>{this.state.duracion}</p>
                         </div>

                         <div className='tipo-act'>
                           <p className='desc-p'>Estatus:</p>
                           <p className='desc-left'>{this.state.estatus}</p>
                         </div>

                         <div className='tipo-act'>
                           <p className='desc-p'>Municipio:</p>
                           <p className='desc-left'>{this.state.municipios}</p>
                         </div>

                         <div className='tipo-act'>
                         <p className='desc-p'>No. Asistentes:</p>
                         <p className='desc-left'>{this.state.noasistente}</p>
                         </div>


                       </div>
                     </div>
                     <div>
                       <p className='desc-p'>Descripcion de la Actividad </p>
                       <p className='desc-left'>{this.state.descripcion}.</p>
                     </div>
                     <div>
                       <p className='desc-p'>Objetivo de la Actividad:</p>
                       <p className='desc-left'>{this.state.objetivo}</p>
                     </div>
                   </div>
                </div>

               </div>

            </div>
          </div>
        )
      }
}
