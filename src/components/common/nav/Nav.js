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
        <div className='navbar-navigation'>
          <Link to='/'>
            <img className='logo' src={logoH} alt='' />
          </Link>
        </div>
        <div className='navbar-left'>
          <Link to='/Listademensajes' className='deco'>
            <h3 className='nav-t'>Lista de Mensajes</h3>
          </Link>
        </div>
        <div className='navbar-left'>
          <Link to='/ActividadesRegistradas' className='deco'>
            <h3 className='nav-t'>Actividades Registradas</h3>
          </Link>
        </div>
        <div className='navbar-left'>
          <Link to='/BusquedaActividad' className='deco'>
            <h3 className='nav-t'>Busqueda</h3>
          </Link>
        </div>
        <div className='navbar-left'>
          <Link to='/Reportes' className='deco'>
            <h3 className='nav-t'>Reportes</h3>
          </Link>
        </div>
        <div className='navbar-left'>
          <Link to='/Autorizacion' className='deco'>
            <h3 className='nav-t'>Autorizacion</h3>
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