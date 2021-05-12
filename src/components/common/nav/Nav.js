import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../../actions'
import { connect } from 'react-redux'
import centenario from '../../../imgs/centenario.jpg'
import './Nav.css'
import firebase from '../../../Firebase'


class Nav extends Component {
  constructor (props) {
    super(props)
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









    return (
      <div className='nav-col'>
        <div>







          <div className='navbar-navigation'>
            <Link to='/' className='logo'>
              <img className='logoimg' src={centenario} alt='' />
            </Link>
          </div>

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

          <div className='navbar-left'>
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
          </div>
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
