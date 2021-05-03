import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../../actions'
import { connect } from 'react-redux'
import logoH from '../../../imgs/logo2.png'
import './Nav.css'
import firebase from '../../../Firebase'


class Nav extends Component {
  constructor () {
    super()
    this.state = {
      isHiddenV: true,
      isHiddenP: true
    }
  }

  toggleHiddenP () {
    this.setState({
      isHiddenP: !this.state.isHiddenP
    })
  }

  toggleHiddenV () {
    this.setState({
      isHiddenV: !this.state.isHiddenV
    })
  }

  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(logoutUser())
  }

  render () {
    const { isLoggingOut, logoutError } = this.props
    var user = firebase.auth().currentUser
    var email

    if (user != null) {
        email = user.email
      }

    let admin
    if (email === 'procuadmin@gmail.com') {
     admin = 'ADMIN'

   } else if  (email === 'sderechos@procu.gob.mx'){
     admin = 'Derechos Humanos'

   } else if  (email === 'subponiente@procu.gob.mx'){
     admin = 'Sub Poniente'

   }  else if  (email === 'delitosaltoi@procu.gob.mx'){
     admin = 'Delitos'

   } else if  (email === 'institutofp@procu.gob.mx'){
     admin = 'IFP'

   } else if  (email === 'cirvr@prou.gob.mx'){
     admin = 'CIRVR'

   } else if  (email === 'mandamientosj@procu.gob.mx'){
     admin = 'Mandamientos Judiciales'

   } else if  (email === 'dgjuridica@procu.gob.mx'){
     admin = 'Juridico'

    } else if  (email === 'fcorrupcion@procu.gob.mx'){
      admin = 'fcorrupcion'

    } else if  (email === 'felectorales@procu.gob.mx'){
      admin = 'Electorales'

    } else if  (email === 'relacionesni@procu.gob.mx'){
      admin = 'R. Internacionales'

    } else if  (email === 'suboriente@procu.gob.mx'){
      admin = 'Oriente'

    } else if  (email === 'coe@procu.gob.mx'){
      admin = 'COE'

    } else if  (email === 'dprevencion@procu.gob.mx'){
      admin = 'Prevencion'

    } else if  (email === 'dgfinanzas@procu.gob.mx'){
      admin = 'Finanzas'

    } else if  (email === 'justiciar@procu.gob.mx'){
      admin = 'Justicia R.'

    } else if  (email === 'dgpoliciai@procu.gob.mx'){
      admin = 'DGPI'

    } else if  (email === 'combatesecuestro@procu.gob.mx'){
      admin = 'Secuentro'

    } else if  (email === 'inteligenciap@procu.gob.mx'){
      admin = 'Inteligencia'

    } else if  (email === 'ccomunicacion@procu.gob.mx'){
      admin = 'Comunicacion'

    } else if  (email === 'visitaduriag@procu.gob.mx'){
      admin = 'Visitaduria'

    } else if  (email === 'dgpericiales@procu.gob.mx'){
      admin = 'DGP'

    } else if  (email === 'fer@procu.gob.mx'){
      admin = 'FERA'

    } else if  (email === 'diana.pgjh@procu.gob.mx'){
      admin = 'Diana'

    } else if  (email === 'ruth.pgjh@hidalgo.gob.mx'){
      admin = 'Ruth'

    } else if  (email === 'eloisa.pgjh@procu.gob.mx'){
      admin = 'Elo'

    } else if  (email === 'mariam.pgjh@procu.gob.mx'){
      admin = 'Mariam'

    } else if  (email === 'jalfredo.pgjh@procu.gob.mx'){
      admin = 'Jose Alfredo'

    } else if  (email === 'nadia.pgjh@procu.gob.mx'){
      admin = 'Nad'
    }



    console.log(admin)




    return (
      <div className='nav-col'>
        <div>







          <div className='navbar-navigation'>
            <Link to='/' className='logo'>
              <img className='logoimg' src={logoH} alt='' />
            </Link>
          </div>
          {(
            admin === 'Derechos Humanos' ||          
            admin === 'Sub Poniente' ||
            admin === 'Delitos' ||
            admin === 'IFP' ||
            admin === 'CIRVR' ||
            admin === 'Mandamientos Judiciales' ||
            admin === 'Juridico' ||
            admin === 'fcorrupcion' ||
            admin === 'Electorales' ||
            admin === 'R. Internacionales' ||
            admin === 'Oriente' ||
            admin === 'COE' ||
            admin === 'Prevencion' ||
            admin === 'Finanzas' ||
            admin === 'Justicia R' ||
            admin === 'DGPI' ||
            admin === 'Secuentro' ||
            admin === 'Inteligencia' ||
            admin === 'Comunicacion' ||
            admin === 'Visitaduria' ||
            admin === 'DGP') &&

            <div className='navbar-left'>
            <Link to='/Listademensajes' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    email
                  </span>
                  <p className='nav-t'>Mensajes</p>
                </div>
              </div>
            </Link>
          </div>
        }




          <div className='navbar-left'>
            <Link to='/ActividadesRegistradas' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    event_note
                  </span>
                  <p className='nav-t'>Agenda</p>
                </div>
              </div>
            </Link>
          </div>

          {/* <div className='navbar-left'>
            <Link to='/ActividadInforme' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    event_available
                  </span>
                  <p className='nav-t'>Informes</p>
                </div>
              </div>
            </Link>
          </div> */}



          <div className='navbar-left'>
            <Link to='/BusquedaActividad' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    search
                  </span>
                  <p className='nav-t'>Busqueda</p>
                </div>
              </div>
            </Link>
          </div>



          <div className='navbar-left'>
            <Link to='/Reportes' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    description
                  </span>
                  <p className='nav-t'>Reportes</p>
                </div>
              </div>
            </Link>
          </div>

          {/* <div className='navbar-left'>
            <Link to='/Autorizacion' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    description
                  </span>
                  <p className='nav-t'>Autorización</p>
                </div>
              </div>
            </Link>
          </div> */}
          {/* <div className='navbar-left'>
            <Link to='/Agendapdf' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    description
                  </span>
                  <p className='nav-t'>Resumen Semanal</p>
                </div>
              </div>
            </Link>
          </div> */}

          {/*<div className='navbar-left'>
            <Link to='/Agendasemanal' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    description
                  </span>
                  <p className='nav-t'>Agenda Semanal</p>
                </div>
              </div>
            </Link>
          </div>
          */}

          {/*<div className='navbar-left'>
            <Link to='/Reporteniveldir' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    description
                  </span>
                  <p className='nav-t'>Reporte Direccion</p>
                </div>
              </div>
            </Link>
          </div>*/}
          <div className='navbar-left'>
            <Link to='/Reportepdf' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    description
                  </span>
                  <p className='nav-t'>Archivo de agenda</p>
                </div>
              </div>
            </Link>
          </div>*/

          {(
            admin === 'Derechos Humanos' ||
            admin === 'Sub Poniente' ||
            admin === 'Delitos' ||
            admin === 'IFP' ||
            admin === 'CIRVR' ||
            admin === 'Mandamientos Judiciales' ||
            admin === 'Juridico' ||
            admin === 'fcorrupcion' ||
            admin === 'Electorales' ||
            admin === 'R. Internacionales' ||
            admin === 'Oriente' ||
            admin === 'COE' ||
            admin === 'Prevencion' ||
            admin === 'Finanzas' ||
            admin === 'Justicia R' ||
            admin === 'DGPI' ||
            admin === 'Secuentro' ||
            admin === 'Inteligencia' ||
            admin === 'Comunicacion' ||
            admin === 'Visitaduria' ||
            admin === 'DGP') &&
          <div className='navbar-left'>
            <Link to='/Estadisgeneral' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    show_chart
                  </span>
                  <p className='nav-t'>Estadistica G</p>
                </div>
              </div>
            </Link>
          </div>
        }
        {(
          admin === 'Derechos Humanos' ||
          admin === 'Sub Poniente' ||
          admin === 'Delitos' ||
          admin === 'IFP' ||
          admin === 'CIRVR' ||
          admin === 'Mandamientos Judiciales' ||
          admin === 'Juridico' ||
          admin === 'fcorrupcion' ||
          admin === 'Electorales' ||
          admin === 'R. Internacionales' ||
          admin === 'Oriente' ||
          admin === 'COE' ||
          admin === 'Prevencion' ||
          admin === 'Finanzas' ||
          admin === 'Justicia R' ||
          admin === 'DGPI' ||
          admin === 'Secuentro' ||
          admin === 'Inteligencia' ||
          admin === 'Comunicacion' ||
          admin === 'Visitaduria' ||
          admin === 'DGP') &&
          <div className='navbar-left'>
            <Link to='/Estadisticasint' className='deco'>
              <div className='hover-center'>
                <div className='row-h'>
                  <span className='material-icons icon-s'>
                    square_foot
                  </span>
                  <p className='nav-t'>Estadistica Int</p>
                </div>
              </div>
            </Link>
          </div>
        }
        </div>

        <div className='navbar-left'>
          <Link to='/Autorizacion' className='deco' onClick={this.handleLogout}>
            <div className='hover-center'>
              <div className='row-h'>
                <span className='material-icons icon-s'>
                  person
                </span>
                <p className='nav-t'>Salir</p>
              </div>
            </div>
          </Link>
          {isLoggingOut && <p>Cerrando Sesion....</p>}
          {logoutError && <p>Error al Cerrar Sesion</p>}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  }
}

export default connect(mapStateToProps)(Nav)
