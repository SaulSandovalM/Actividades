import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
// Direcciones compartidas
import Login from './components/common/login/Login'
import Common from './components/common/home/Common' // agregas la ruta de tu archivo
// import Archivo from './components/archivo/Archivo' mas o menos asi te debe de quedar

function App (props) {
  const { isAuthenticated, isVerifying } = props
  return (
    <Switch>
      <Route path='/Login' component={Login} />
      <ProtectedRoute
        exact
        path='/'
        component={Common}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      {/* <ProtectedRoute
        exact
        path='/Archivo'
        component={Archivo}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      /> */}
    </Switch>
  )
}
function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps)(App)
