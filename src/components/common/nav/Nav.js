import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../../actions'
import { connect } from 'react-redux'
import './Nav.css'
import logoH from '../../../imgs/logo_h.svg'

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(logoutUser())
  }

  render () {
    const { isLoggingOut, logoutError } = this.props
    return (
      <div className='nav-col'>
        <div>
          <div className='navbar-navigation'>
            <Link to='/' className='logo'>
              <h3>Hidalgo</h3>
            </Link>
          </div>
          <div className='navbar-left'>
            <Link to='/Listademensajes' className='deco'>
              <span className='material-icons icon-s'>
                email
              </span>
              <p className='nav-t'>Mensajes</p>
            </Link>
          </div>
          <div className='navbar-left'>
            <Link to='/ActividadesRegistradas' className='deco'>
              <span className='material-icons icon-s'>
                calendar_today
              </span>
              <p className='nav-t'>Actividades</p>
            </Link>
          </div>
          <div className='navbar-left'>
            <Link to='/Agendapdf' className='deco'>
              <h3 className='nav-t'>Agendapdf</h3>
            </Link>
          </div>
          <div className='navbar-left'>
            <Link to='/Agendasemanal' className='deco'>
              <h3 className='nav-t'>Agendasemanal</h3>
            </Link>
          </div>
          <div className='navbar-left'>
            <Link to='/BusquedaActividad' className='deco'>
              <span className='material-icons icon-s'>
                search
              </span>
              <p className='nav-t'>Busqueda</p>
            </Link>
          </div>
          <div className='navbar-left'>
            <Link to='/Reportes' className='deco'>
              <span className='material-icons icon-s'>
                description
              </span>
              <p className='nav-t'>Reportes</p>
            </Link>
          </div>
          <div className='navbar-left'>
            <Link to='/Autorizacion' className='deco'>
              <span className='material-icons icon-s'>
                assignment_turned_in
              </span>
              <p className='nav-t'>Autorización</p>
            </Link>
          </div>
        </div>
        <div className='navbar-left'>
          <Link to='/Autorizacion' className='deco' onClick={this.handleLogout}>
            <span className='material-icons icon-s'>
              person
            </span>
            <p className='nav-t'>Salir</p>
          </Link>
        </div>


        <div className='navbar-left'>
          <div className='deco'>
            <button
              onClick={this.handleLogout}
              className='nav-t'
              style={{ background: '#092432', border: 'none' }}>
              <h3 className='nav-t'>
                Cerrar Sesion
              </h3>
            </button>
            {isLoggingOut && <p>Cerrando Sesion....</p>}
            {logoutError && <p>Error al Cerrar Sesion</p>}
          </div>
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
