import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'

export default class Aactividad extends Component {
  render () {
    return (
      <div>
        <div style={{ margin: '80px' }}>
          <div>
            <h1>
              ACTIVIDADES
            </h1>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Actividad</th>
                  <th>Fecha</th>
                  <th>Moneda</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
