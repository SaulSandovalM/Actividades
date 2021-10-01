import React , { Component } from 'react'
import './estadisticas.css'
import firebase from  '../../Firebase'
import MaterialTable from 'material-table';
import AnyChart from 'anychart-react'

export  default class  Estadistica extends Component {
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
      const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable, fecha, virpre, dependencia, direccion, tipoActividad, municipios, organismoi, plibro, capacitacion, dInvitada} = doc.data()
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
        virpre,
        dependencia,
        direccion,
        tipoActividad,
        municipios,
        lugar,
        organismoi,
        plibro,
        capacitacion,
        dInvitada

      })
    })
    this.setState({
      actividades
   })
   console.log(this.state.actividades)
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

 //  state = {
 //    respuesta : []
 //  }
 //   async peticion () {
 //     var peticion= await firebase.firestore().collection('actividades');
 //     var respuesta = await  peticion();
 //     this.state.actividades.map(actividades => actividades)
 //   console.log(respuesta)
 // }
  // async componentDidMount() {
  //     this.peticion () ;
  //
  // }
  render () {
    console.log(this.state.actividades.length)
    // const columnas = [
    //       {
    //         title: 'ACTIVIDADES TOTALES',
    //         field: '1025'
    //       },
    //       {
    //         title: 'Realizadas Por PGJEH',
    //         field: 'fechai'
    //       },
    //       {
    //         title: 'OTRAS INSTITUCIONES',
    //         field: 'fechai',
    //       }
    //     ];

        const tabla = this.state.actividades.map(actividades => actividades)

        // const sang = [
        //   {
        //     title: 'NOM ACTIVIDAD',
        //     field: 'actividad',
        //   },
        //       {
        //         title: 'VIRTUAL PRESENCIAL',
        //         field: 'virpre'
        //       },
        //       {
        //         title: 'DEPENDENCIA',
        //         field: 'dependencia'
        //       },
        //
        //       {
        //         title: 'DIRECCION',
        //         field: 'convoca'
        //       },
        //       {
        //         title: 'T. ACTIVIDAD',
        //         field: 'tipoActividad',
        //
        //       },
        //       {
        //         title: 'EDO',
        //         field: 'estados',
        //       },
        //       {
        //         title: 'MUNICIPIO',
        //         field: 'municipios',
        //       },
        //       {
        //         title: 'LUGAR',
        //         field: 'lugar',
        //       },
        //       {
        //         title: 'FECHA',
        //         field: 'fechai',
        //       },
        //
        //       {
        //         title: 'HORA',
        //         field: 'horai',
        //       }
        //
        //     ];
        //
        //     const sangs = [
        //       {
        //         title: 'NOMBRE DE LA ACTIVIDAD',
        //         field: 'actividad',
        //       },
        //           {
        //             title: 'VIRTUAL/PRESENCIAL',
        //             field: 'actividad'
        //           },
        //           {
        //             title: 'INSTITUCION FORANEA',
        //             field: 'fechai'
        //           },
        //           {
        //             title: 'T. ACTIVIDAD',
        //             field: 'fechai',
        //
        //           },
        //           {
        //             title: 'EDO',
        //             field: 'fechai',
        //           },
        //           {
        //             title: 'MUNICIPIO',
        //             field: 'fechai',
        //           },
        //           {
        //             title: 'LUGAR',
        //             field: 'fechai',
        //           },
        //           {
        //             title: 'FECHA',
        //             field: 'fechai',
        //           },
        //           {
        //             title: 'HORA',
        //             field: 'fechai',
        //           }
        //
        //
        //         ];
        //
        //         const sangso = [
        //               {
        //                 title: 'NOMBRE DE LA ACTIVIDAD',
        //                 field: 'actividad',
        //               },
        //               {
        //                 title: 'VIRTUAL/PRESENCIAL',
        //                 field: 'actividad'
        //               },
        //               {
        //                 title: 'INSTITUCION FORANEA',
        //                 field: 'fechai'
        //               },
        //               {
        //                 title: 'DIRECCION INVITADA',
        //                 field: 'dInvitada'
        //               },
        //               {
        //                 title: 'T. ACTIVIDAD',
        //                 field: 'fechai',
        //
        //               },
        //               {
        //                 title: 'EDO',
        //                 field: 'fechai',
        //               },
        //               {
        //                 title: 'MUNICIPIO',
        //                 field: 'fechai',
        //               },
        //               {
        //                 title: 'LUGAR',
        //                 field: 'fechai',
        //               },
        //               {
        //                 title: 'FECHA',
        //                 field: 'fechai',
        //               },
        //               {
        //                 title: 'FECHA ',
        //                 field: 'fechai',
        //               },
        //               {
        //                 title: 'HORA',
        //                 field: 'fechai',
        //               }
        //
        //
        //             ];

        const actividades  = this.state.actividades.map(actividades => actividades)
        const nombre = { labels: [ 'Presencial']

        }

        // var array = [
        //   { tipo: "Virtual"},
        //   { tipo: "Presencial"},
        //   { tipo: "Mixta"},
        //   { tipo: "Virtual"},
        //   { tipo: "Virtual"},
        //   { tipo: "Virtual"},
        //   { tipo: "Virtual"},
        //   { tipo: "Presencial"},
        //   { tipo: "Presencial"},
        //   { tipo: "Presencial"},
        //   { tipo: "Presencial"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //   { tipo: "Mixta"},
        //
        //
        // ]

        let arrayVirtual = []
        actividades.map(item =>
        item.virpre === 'Virtual' ? arrayVirtual.push(item.virpre) : null
          )
        console.log(arrayVirtual.length)


        let arrayMixta = []
        actividades.map(item =>
          item.tipoActividad  === 'Mixta' ? arrayVirtual.push(item.mixta) : null
        )
        console.log(arrayMixta.length)

        let arrayPresencial = []
        actividades.map(item =>
          item.Presencial  === 'Presencial' ? arrayVirtual.push(item.presencial) : null
        )
        console.log(arrayMixta.length)



        // let arrayVirtuall = []
        // array.map(item =>
        //   item.tipo === 'Virtual' ? arrayVirtual.push(item.tipo) : null
        // )
        // console.log(arrayVirtuall.length)
        //
        // let arrayPresenciall = []
        // array.map(item =>
        //   item.tipo === 'Presencial' ? arrayPresencial.push(item.tipo) : null
        // )
        // console.log(arrayPresenciall.length)
        //
        // let arrayMixtal = []
        // array.map(item =>
        //   item.tipo === 'Mixta' ? arrayMixta.push(item.tipo) : null
        // )
        // console.log(arrayMixtal.length)



    return (
        <div className='fa-esta'>
          <div>
            <h1>Estadisticas </h1>
          </div>
          <div className='queso-fa'>
            <AnyChart
              type="pie"
              data={[arrayVirtual.length,  arrayPresencial.length, arrayMixta.length]}
              title="Tipo de Actividad Virtual, Mixta y Presencial"
            />

          </div>

          <div>

            <div>


            </div>
            <div>
              <h2>Filtrador de Información</h2>
            <div>


              </div>
            </div>


            {/*<div className='est-totales'>
              <MaterialTable
              columns={columnas}
              data = {tabla}
              title = "Actividades Totale                                                                                                                                                                                                                                                                                                                                                                               s"
              options={{
                actionsColumnIndex: -1,
                exportButton: true,

              }}

              localization = {{
                header : {
                  actions : 'OPCIONES'
                }
              }}


              />
            </div>*/}


            {/*<div className='est-totales'>
            <MaterialTable
            columns={sang}
            data = {tabla}
            title = "Actividades PGJEH"



            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              filtering: true
            }}
            />
            </div>*/}

            {/*<div className='est-totales'>
            <MaterialTable
            columns={sangs}
            data = {tabla}
            title = "Actividades FORANEAS"



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

            <div className='est-totales'>
            <MaterialTable
            columns={sangso}
            data = {tabla}
            title = "Actividades FORANEAS"



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
            */}



          </div>


        </div>

    )
  }
}
