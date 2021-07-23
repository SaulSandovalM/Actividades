import React , { Component } from 'react'
import './estadisticas.css'
import firebase from  '../../Firebase'
import MaterialTable from 'material-table';


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
      const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable, fecha, virpre, dependencia, direccion, tipoActividad, municipios} = doc.data()
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
    const columnas = [
          {
            title: 'ACTIVIDADES TOTALES',
            field: '1025'
          },
          {
            title: 'Realizadas Por PGJEH',
            field: 'fechai'
          },
          {
            title: 'OTRAS INSTITUCIONES',
            field: 'fechai',
          }
        ];

        const tabla = this.state.actividades.map(actividades => actividades)

        const sang = [
          {
            title: 'NOMBRE DE LA ACTIVIDAD',
            field: 'fechai',
          },
              {
                title: 'VIRTUAL/PRESENCIAL',
                field: 'virpre'
              },
              {
                title: 'DEPENDENCIA',
                field: 'dependencia'
              },

              {
                title: 'DIRECCION',
                field: 'convoca'
              },
              {
                title: 'T. ACTIVIDAD',
                field: 'tipoActividad',

              },
              {
                title: 'SUB. ACTIVIDAD',
                field: 'curso'

              },
              {
                title: 'EDO',
                field: 'estados',
              },
              {
                title: 'MUNICIPIO',
                field: 'municipios',
              },
              {
                title: 'LUGAR',
                field: 'lugar',
              },
              {
                title: 'FECHA',
                field: 'fechai',
              },
              {
                title: 'HORA',
                field: 'horai',
              }

            ];

            const sangs = [
              {
                title: 'NOMBRE DE LA ACTIVIDAD',
                field: 'fechai',
              },
                  {
                    title: 'VIRTUAL/PRESENCIAL',
                    field: 'actividad'
                  },
                  {
                    title: 'INSTITUCION FORANEA',
                    field: 'fechai'
                  },
                  {
                    title: 'T. ACTIVIDAD',
                    field: 'fechai',

                  },
                  {
                    title: 'EDO',
                    field: 'fechai',
                  },
                  {
                    title: 'MUNICIPIO',
                    field: 'fechai',
                  },
                  {
                    title: 'LUGAR',
                    field: 'fechai',
                  },
                  {
                    title: 'FECHA',
                    field: 'fechai',
                  },
                  {
                    title: 'HORA',
                    field: 'fechai',
                  }


                ];

                const sangso = [
                      {
                        title: 'NOMBRE DE LA ACTIVIDAD',
                        field: 'fechai',
                      },
                      {
                        title: 'VIRTUAL/PRESENCIAL',
                        field: 'actividad'
                      },
                      {
                        title: 'INSTITUCION FORANEA',
                        field: 'fechai'
                      },
                      {
                        title: 'T. ACTIVIDAD',
                        field: 'fechai',

                      },
                      {
                        title: 'EDO',
                        field: 'fechai',
                      },
                      {
                        title: 'MUNICIPIO',
                        field: 'fechai',
                      },
                      {
                        title: 'LUGAR',
                        field: 'fechai',
                      },
                      {
                        title: 'FECHA',
                        field: 'fechai',
                      },
                      {
                        title: 'HORA',
                        field: 'fechai',
                      }


                    ];


    return (
        <div className='fa-esta'>
          <div>
            <h1>Estadisticas </h1>
          </div>
          <div>
            <div>
              <h2>sirve para algo</h2>
            </div>
            <div className='est-totales'>
              <MaterialTable
              columns={columnas}
              data = {tabla}
              title = "Actividades Totales"



              options={{
                actionsColumnIndex: -1,
                exportButton: true
              }}


              />
            </div>
            <div className='est-totales'>
            <MaterialTable
            columns={sang}
            data = {tabla}
            title = "Actividades PGJEH"



            options={{
              actionsColumnIndex: -1,
              exportButton: true
            }}


            />
            </div>

            <div className='est-totales'>
            <MaterialTable
            columns={sangs}
            data = {tabla}
            title = "Actividades FORANEAS"



            options={{
              actionsColumnIndex: -1,
              exportButton: true
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


            />
            </div>
          </div>


        </div>

    )
  }
}
