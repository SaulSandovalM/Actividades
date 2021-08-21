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

import Eactividad from './components/aregistradas/Eactividad'
import Aactividad from './components/aactividad/Aactividad'
import Ainforme from './components/aregistradas/Ainforme'
import Abusqueda from './components/abusqueda/Abusqueda'


import Autorizacion from './components/autorizacion/Autorizacion'
import Arelevante from './components/documentos/Arelevante'
import Agendasemanal from './components/documentos/Agendasemanal'

import Reportepdf from './components/documentos/Reportepdf'
import Tarchivos from './components/textos/Tarchivos'
import Tpresentacion from './components/textos/Tpresentacion'

import Iactividad from './components/sactividad/Iactividad'
import Edactividad from './components/sactividad/Edactividad'

import Informacionactividad from './components/vistas/Informacionactividad'

/*Estadisticas*/
import Estadisgeneral from './components/Estadisticas/Estadisgeneral'
import Estadisticasint from './components/Estadisticas/Estadisticasint'
import Calendario from './components/aregistradas/Calendario'
import Estadistica from './components/Estadisticas/Estadistica'


import estadisticap from './components/Estadisticas/estadisticap'

/*Diana*/
import Reportedireccionesd from './components/documentos/Reportedireccionesd'
 /*Procurador*/

 /*Despacho-PROCURADOR*/
 import Reportedirecciones from './components/documentos/Reportedirecciones'

 /*Reportedirecciones*/
 import Reporteniveldir from './components/documentos/Reporteniveldir'



 import busqueda from './components/abusqueda/busqueda'

 /*Borrador de Actividades */
 import bactividades from './components/bactividades/bactividades'


 /*Editar/Borrar/seguimiento Actividades*/
 import Seguimientoact from './components/Seguimiento/Seguimientoact'
 import Editarborrar from './components/Editarborrar/Editarborrar'
 import Reportesniveldir from './components/Editarborrar/Reportesniveldir'
 import Actividadeditar from './components/Editarborrar/Actividadeditar'

/*Evidencias*/
import Sactividad from './components/sactividad/Sactividad'
import Cancelar from './components/sactividad/Cancelar'

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
        path='/Edactividad'
        component={Edactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Iactividad'
        component={Iactividad}
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
        path='/Editarborrar'
        component={Editarborrar}
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
      <ProtectedRoute
        exact
        path='/Informacionactividad'
        component={Informacionactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />

      <ProtectedRoute
        exact
        path='/Estadisgeneral'
        component={Estadisgeneral}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Estadisticasint'
        component={Estadisticasint}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />

      <ProtectedRoute
        exact
        path='/Calendario'
        component={Calendario}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />


      <ProtectedRoute
        exact
        path='/estadisticap'
        component={estadisticap}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Reportedireccionesd'
        component={Reportedireccionesd}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Reportedirecciones'
        component={Reportedirecciones}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/busqueda'
        component={busqueda}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />

      <ProtectedRoute
        exact
        path='/bactividades'
        component={bactividades}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Estadistica'
        component={Estadistica}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />



      <ProtectedRoute
        exact
        path='/Seguimientoact'
        component={Seguimientoact}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />

      <ProtectedRoute
        exact
        path='/Actividadeditar/:id'
        component={Actividadeditar}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Cancelar/:id'
        component={Cancelar}
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
