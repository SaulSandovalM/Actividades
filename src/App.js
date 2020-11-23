import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import Login from './components/common/login/Login'
import Generacionm from './components/generaciondem/Generacionm'
import Mgenerales from './components/mgenerales/Mgenerales'
import Editarm from './components/editarm/Editarm'
import Showm from './components/editarm/Showm'
import Aregistradas from './components/aregistradas/Aregistradas'
import Oja from './components/aregistradas/Oja'
import Eactividad from './components/aregistradas/Eactividad'
import Aactividad from './components/aactividad/Aactividad'
import Ainforme from './components/aregistradas/Ainforme'
import Abusqueda from './components/abusqueda/Abusqueda'
import Sactividad from './components/sactividad/Sactividad'
import Reportes from './components/reportes/Reportes'
import Reportesniveldir from './components/reportes/Reportesniveldir'
import Autorizacion from './components/autorizacion/Autorizacion'
import Arelevante from './components/documentos/Arelevante'
import Agendasemanal from './components/documentos/Agendasemanal'
import Reporteniveldir from './components/documentos/Reporteniveldir'
import Reportepdf from './components/documentos/Reportepdf'
import Tarchivos from './components/textos/Tarchivos'
import Tpresentacion from './components/textos/Tpresentacion'

function App (props) {
  const { isAuthenticated, isVerifying } = props
  return (
    <Switch>
      <Route path='/Login' component={Login} />
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
        path='/Editarmensaje/:id'
        component={Editarm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/ActividadesRegistradas'
        component={Aregistradas}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Oja/:id'
        component={Oja}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/ActividadInforme'
        component={Ainforme}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/AgregarActividad'
        component={Aactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/EditarActividad/:id'
        component={Eactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Actividades'
        component={Aactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/BusquedaActividad'
        component={Abusqueda}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Sactividad/:id'
        component={Sactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Reportes'
        component={Reportes}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Reportesniveldir'
        component={Reportesniveldir}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Autorizacion'
        component={Autorizacion}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Arelevante'
        component={Arelevante}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Agendasemanal'
        component={Agendasemanal}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Reporteniveldir'
        component={Reporteniveldir}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Reportepdf'
        component={Reportepdf}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Tarchivos/:id'
        component={Tarchivos}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Tpresentacion'
        component={Tpresentacion}
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

export default connect(mapStateToProps, {})(App)
