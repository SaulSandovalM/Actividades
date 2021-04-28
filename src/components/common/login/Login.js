import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../../../actions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './Login.css'
import logoH from '../../../imgs/armas.png'
import centenario from '../../../imgs/centenario.jpg'
import pachuca from '../../../imgs/pachuca.jpg'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value })
  }

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value })
  }

  handleSubmit = () => {
    const { dispatch } = this.props
    const { email, password } = this.state
    dispatch(loginUser(email, password))
  }

  render () {
    const { loginError, isAuthenticated } = this.props
    if (isAuthenticated) {
      return <Redirect to='/' />
    } else {
      return (
      <div >
        <div className='login-container'>
          <div className='back-login'>
            <div className='fondo'>




            <div className='combo-logos'>
                <img className='logologin' src={logoH} alt='' />

                <div > prueba </div>

              <img className='logologin2' src={centenario} alt='' />
            </div>


            <div className='login-ins'>

              <div className='login-col'>



                <div className='login'>
                  <h2 className='login-color'>Iniciar Sesión</h2>
                  <div className='border-form-login'>
                    <div className='input-cen-log'>
                      <TextField
                        label='Correo'
                        id='email'
                        onChange={ this.handleEmailChange }
                        className='correo'
                      />
                    </div>
                    <div className='input-cen-log'>
                      <TextField
                        label='Contraseña'
                        id='password'
                        type='password'
                        onChange={ this.handlePasswordChange }
                        className='contraseña'
                      />
                    </div>
                    { loginError && (
                      <p className='error-log'>
                        Correo o contraseña icorrectos
                      </p>
                    )}
                    <div className='cta2'>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={ this.handleSubmit }
                        style={{ background: '#092432' }}
                      >
                        ENTRAR
                      </Button>
                    </div>

                  </div>
                </div>


              </div>
              <div className= 'red'>
              <h5>Actividades de PGDJH</h5>

              <p>Bienvenido al Sistema de organizacion de Actividades</p>
              <p>Sistema de organizacion de Actividades</p>


              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  }
}


export default (connect(mapStateToProps)(Login))
