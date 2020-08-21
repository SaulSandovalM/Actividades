import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import Login from './components/common/login/Login'
// import Common from './components/common/home/Common' // agregas la ruta de tu archivo
// import Archivo from './components/archivo/Archivo' <-- mas o menos asi te debe de quedar
import Generacionm from './components/generaciondem/Generacionm'
import Mgenerales from './components/mgenerales/Mgenerales'
import Editarm from './components/editarm/Editarm'
import Showm from './components/editarm/Showm'
import Verm from './components/editarm/Verm'

function App (props) {
  const { isAuthenticated, isVerifying } = props
  return (
    <Switch>
      <Route path='/Login' component={Login} />
      {/* <ProtectedRoute
        exact
        path='/'
        component={Common}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      /> */}
      <ProtectedRoute
        exact
        path='/'
        component={Mgenerales}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Generaciondemensajes'
        component={Generacionm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Listademensajes'
        component={Showm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Vermensajes/:id'
        component={Verm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Editarmensaje/:id'
        component={Editarm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
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
