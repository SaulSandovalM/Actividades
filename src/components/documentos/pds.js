<div className="divde-prueba">


  <div className='btn-imprimir'>
    <span class="material-icons" style={{ cursor:'pointer'  }} onClick={this.handleBack.bind(this)}>
      <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
        <ReplyIcon />
      </Fab>
        {/*<p className='txt-impri'>
          Regresar
        </p>*/}
    </span>
    <div clasName=''>
      <ReactToPrint
        trigger={() =>
      <span class='material-icons impresora-padding' style={{ cursor:'pointer' }}>
          <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
            <ImpIcon />
          </Fab>
      </span>}
        content={() => this.agenda}
      />
        {/*<p className='txt-impri'>
          Imprimir
        </p>*/}
    </div>
    </div>
  <div className='fader-reporte' >

        <div clasName="sub-f">
          <div clasName="imprime" ref={el => (this.agenda = el)}>
            <div>
              <div className='titulo-reporte'>
                <img className='icons-reporte2' src={logop} alt='' />
                <img className='icons-reporte' src={logoh} alt='' />
              </div>

                <h2 className='titulo-repo'>AGENDA SEMANAL DE ACTIVIDAD RELEVANTES</h2>
                <div>

              <div className='sub-fe'>

                <p  className='txt-dir'>Fecha correspondiente:  </p>

              </div>

              </div>

              <div className='sub-ca'>
                <p className='txt-dir'>DIRECCION:    DESPACHO DEL PROCURADOR</p>
              </div>


              <div className="tabla-dir">
                <table>
                  <tr>
                  <th className='all-tabla color-t tabla-f'>DÍA</th>
                  <th className='all-tabla color-t tabla-h'>HORA</th>
                  <th className='all-tabla color-t tabla-a'>ACTIVIDAD</th>
                  <th className='all-tabla color-t tabla-l'>LUGAR </th>
                  <th className='all-tabla color-t '>MUNICIPIO/ESTADO</th>
                  <th className='all-tabla color-t '>SERVIDOR@S PUBLICOS COMISIONAD@S</th>
                  </tr>
                {this.state.actividades.map(actividades =>
                  <tr>
                  <td  className='all-tabla tabla-f'>{actividades.fechai}</td>
                  <td  className='all-tabla tabla-h'>{actividades.horai}</td>
                  <td  className='all-tabla tabla-a'>{actividades.tipoActividad}</td>
                  <td  className='all-tabla tabla-l'>{actividades.lugar}</td>
                  <td  className='all-tabla tabla-l'>{actividades.municipios}</td>
                  <td  className='all-tabla'>{actividades.convoca}</td>
                  </tr>
                    )}
                </table>
              </div>

            </div>
          </div>
        </div>


  </div>
  <div className='btn-imprimir'>
    <span class="material-icons" style={{ cursor:'pointer'  }} onClick={this.handleBack.bind(this)}>
      <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
        <ReplyIcon />
      </Fab>
        {/*<p className='txt-impri'>
          Regresar
        </p>*/}
    </span>
    <div clasName=''>
      <ReactToPrint
        trigger={() =>
      <span class='material-icons impresora-padding' style={{ cursor:'pointer' }}>
          <Fab color='primary' aria-label='add' style={{ background: '#092432' }} type='submit'>
            <ImpIcon />
          </Fab>
      </span>}
        content={() => this.agenda}
      />
        {/*<p className='txt-impri'>
          Imprimir
        </p>*/}
    </div>
    </div>

    </div>
