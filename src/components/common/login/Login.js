import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../../../actions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './Login.css'
import logoH from '../../../imgs/logo2.png'

import ReactPlayer from 'react-player'


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

        <div className='login-container'>
        <div className='fondo-a'/>
          <div className='back-login'>
            <div className='fondo'>
              <div className='combo-logos'> <img className='logologin' src={logoH} alt='Cenetenario' /></div>
                <div className='login-ins'>
                  <div className= 'cajatext-log'>
                      <div className='text-log'>
                        <p className='letreros'>¡Regresaste!</p>
                        <h5 className='letrero'>Actividades <br/>PGJEH</h5>
                        <p className='letreros'>¡Bienvenid@!</p>
                        <p>Sistema de control y organizacion de las Actividades  más relevantes de la Procuraduria General de Justicia del Estado de Hidalgo</p>
                      </div>
                  </div>

                  <div className='login-col'>
                    <div className='video'>
                      <ReactPlayer url = { require ('../../../imgs/video.mp4') }
                        width = '100%'
                        height = '30%px'
                        controls
                        playing
                        loop
                        replaying
                      />
                    </div>
                    <div className='login'>

                      <h5 className='login-color'>Iniciar Sesión</h5>
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
