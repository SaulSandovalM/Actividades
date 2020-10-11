import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'

export default class Aactividad extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      fechai: '',
      horai: '',
      fechaf: '',
      horaf: '',
      actividad: '',
      objetivo: '',
      checkedOrganizada: false,
      tipoActividad: '',
      convoca: '',
      dependencia: '',
      estado: '',
      municipio: '',
      lugar: '',
      resposable: '',
      asistente: '',
      otro : ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeOr = this.handleChangeOr.bind(this)
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleChange(convocados) {
    this.setState({
      convocados: !this.state.convocados,
    })
  }

  handleChangeOr(checkedOrganizada) {
    this.setState({
      checkedOrganizada: !this.state.checkedOrganizada,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { fechai, horai, fechaf, horaf, actividad, objetivo, checkedOrganizada,
            tipoActividad, convoca, dependencia, estado, municipio, lugar,
            resposable, asistente, otro } = this.state
    this.ref.add({
      fechai,
      horai,
      fechaf,
      horaf,
      actividad,
      objetivo,
      checkedOrganizada,
      tipoActividad,
      convoca,
      dependencia,
      estado,
      municipio,
      lugar,
      resposable,
      asistente,
      otro
    }).then((docRef) => {
      this.setState({
        fechai: '',
        horai: '',
        fechaf: '',
        horaf: '',
        actividad: '',
        objetivo: '',
        checkedOrganizada: false,
        tipoActividad: '',
        convoca: '',
        dependencia: '',
        estado: '',
        municipio: '',
        lugar: '',
        resposable: '',
        asistente: '',
        otro : ''
      })
      this.props.history.push('/ActividadesRegistradas')
    })
    .catch((error) => {
      console.error('Error al crear: ', error)
    })
  }

  render () {
    const IOSSwitch = withStyles((theme) => ({
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none',
          },
        },
        '&$focusVisible $thumb': {
          color: '#52d869',
          border: '6px solid #fff',
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      checked: {},
      focusVisible: {},
    }))(({ classes, ...props }) => {
      return (
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          {...props}
        />
      )
    })

    return (
      <div className='aa-conta'>
        <div>
          <div className='divtop-mg' />
          <div className='form-content-ac'>
            <form noValidate autoComplete='off' className='mensajesg-container2'>
              <div style={{height: '100%'}}>
              <h2>Agregar Actividad</h2>
              <p className='martop-dt'>Fecha y hora de inicio</p>
              <div className='date-cont'>
                <TextField
                  type='date'
                  style={{ width: '45%' }}
                  onChange={this.onChange}
                  name='fechai'
                  required
                />
                <TextField
                  type='time'
                  style={{ width: '45%' }}
                  onChange={this.onChange}
                  name='horai'
                  required
                />
              </div>
              <p className='martop-dt'>Fecha y hora de Finalizacion *</p>
              <div className='date-cont'>
                <TextField
                  type='date'
                  style={{ width: '45%' }}
                  onChange={this.onChange}
                  name='fechaf'
                  placeholdercolor='grey'
                  required
                />
                <TextField
                  type='time'
                  style={{ width: '45%' }}
                  onChange={this.onChange}
                  name='horaf'
                  required
                />
              </div>
              <TextField
                label='Actividad'
                style={{ marginTop: '15px', width: '100%' }}
                name='actividad'
                onChange={this.onChange}
                required
              />
              <div className='div_cancel'>
                <TextField
                  label='Objetivo'
                  style={{marginTop: '15px'}}
                  name='objetivo'
                  onChange={this.onChange}
                  inputProps={{
                    maxLength: 300,
                  }}
                  multiline
                  required
                />
              </div>
              <FormControlLabel
                control={<IOSSwitch name='checkedOrganizada'
                checked={this.state.checkedOrganizada}
                onChange={this.handleChangeOr}
                />}
                label='Actividad organizada por procuraduría'
                style={{ marginTop: '20px' }}
              />
              <FormControl style={{ marginTop: '15px', width:'100%' }}>
                <InputLabel>Tipo Actividad</InputLabel>
                <Select
                  label='Tipo Actividad'
                  name='tipoActividad'
                  onChange={this.onChange}
                  required
                >
                  <MenuItem value={'taller'}>Taller</MenuItem>
                  <MenuItem value={'reunion'}>Reunión de Trabajo</MenuItem>
                  <MenuItem value={'curso'}>Curso</MenuItem>
                  <MenuItem value={'conferencia'}>Conferencia</MenuItem>
                  <MenuItem value={'otro'}>Otro</MenuItem>
                </Select>
              </FormControl>
              {this.state.tipoActividad === 'otro' &&
                <TextField
                  label='Otro'
                  style={{ marginTop: '15px', width: '100%' }}
                  name='otro'
                  onChange={this.onChange}
                />
              }
              <div className='date-cont'>
                <TextField
                  label='Convoca'
                  style={{ marginTop: '15px', width: '45%' }}
                  name='convoca'
                  onChange={this.onChange}
                  required
                />
                <TextField
                  label='Dependencia/Institución que convoca'
                  style={{ marginTop: '15px', width: '45%' }}
                  name='dependencia'
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className='date-cont'>
                <FormControl style={{ marginTop: '15px', width: '45%' }}>
                  <InputLabel>Estados</InputLabel>
                  <Select
                    label='Estados'
                    name='estados'
                    onChange={this.onChange}
                    required
                  >
                    <MenuItem value={'Aguascalientes'}>Aguascalientes</MenuItem>
                    <MenuItem value={'Baja California'}>Baja California</MenuItem>
                    <MenuItem value={'Baja California Sur'}>Baja California Sur</MenuItem>
                    <MenuItem value={'Campeche'}>Campeche</MenuItem>
                    <MenuItem value={'Chiapas'}>Chiapas</MenuItem>
                    <MenuItem value={'Chihuahua'}>Chihuahua</MenuItem>
                    <MenuItem value={'Ciudad de México'}>Ciudad de México</MenuItem>
                    <MenuItem value={'Coahuila'}>Coahuila</MenuItem>
                    <MenuItem value={'Colima'}>Colima</MenuItem>
                    <MenuItem value={'Durango'}>Durango</MenuItem>
                    <MenuItem value={'Guanajuato'}>Guanajuato</MenuItem>
                    <MenuItem value={'Guerrero'}>Guerrero</MenuItem>
                    <MenuItem value={'Hidalgo'}>Hidalgo</MenuItem>
                    <MenuItem value={'Jalisco'}>Jalisco</MenuItem>
                    <MenuItem value={'México'}>México</MenuItem>
                    <MenuItem value={'Michoacán'}>Michoacán</MenuItem>
                    <MenuItem value={'Morelos'}>Morelos</MenuItem>
                    <MenuItem value={'Nayarit'}>Nayarit</MenuItem>
                    <MenuItem value={'Nuevo León'}>Nuevo León</MenuItem>
                    <MenuItem value={'Oaxaca'}>Oaxaca</MenuItem>
                    <MenuItem value={'Puebla'}>Puebla</MenuItem>
                    <MenuItem value={'Querétaro'}>Querétaro</MenuItem>
                    <MenuItem value={'Quintana Roo'}>Quintana Roo</MenuItem>
                    <MenuItem value={'San Luis Potosí'}>San Luis Potosí</MenuItem>
                    <MenuItem value={'Sinaloa'}>Sinaloa</MenuItem>
                    <MenuItem value={'Sonora'}>Sonora</MenuItem>
                    <MenuItem value={'Tabasco'}>Tabasco</MenuItem>
                    <MenuItem value={'Tamaulipas'}>Tamaulipas</MenuItem>
                    <MenuItem value={'Tlaxcala'}>Tlaxcala</MenuItem>
                    <MenuItem value={'Veracruz'}>Veracruz</MenuItem>
                    <MenuItem value={'Yucatán'}>Yucatán</MenuItem>
                    <MenuItem value={'Zacatecas'}>Zacatecas</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ marginTop: '15px', width: '45%' }}>
                  <InputLabel>Municipio</InputLabel>
                  {this.state.estados === 'Zacatecas' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Apozol'}>Apozol</MenuItem>
                      <MenuItem value={'Apulco'}>Apulco</MenuItem>
                      <MenuItem value={'Atolinga'}>Atolinga</MenuItem>
                      <MenuItem value={'Benito Juárez'}>Benito Juárez</MenuItem>
                      <MenuItem value={'Calera'}>Calera</MenuItem>
                      <MenuItem value={'Cañitas de Felipe Pescador'}>Cañitas de Felipe Pescador</MenuItem>
                      <MenuItem value={'Chalchihuites'}>Chalchihuites</MenuItem>
                      <MenuItem value={'Concepción del Oro'}>Concepción del Oro</MenuItem>
                      <MenuItem value={'Cuauhtémoc'}>Cuauhtémoc</MenuItem>
                      <MenuItem value={'El Plateado de Joaquín Amaro'}>El Plateado de Joaquín Amaro</MenuItem>
                      <MenuItem value={'Fresnillo'}>Fresnillo</MenuItem>
                      <MenuItem value={'Genaro Codina'}>Genaro Codina</MenuItem>
                      <MenuItem value={'General Enrique Estrada'}>General Enrique Estrada</MenuItem>
                      <MenuItem value={'General Francisco R. Murguía'}>General Francisco R. Murguía</MenuItem>
                      <MenuItem value={'General Pánfilo Natera'}>General Pánfilo Natera</MenuItem>
                      <MenuItem value={'Guadalupe'}>Guadalupe</MenuItem>
                      <MenuItem value={'Huanusco'}>Huanusco</MenuItem>
                      <MenuItem value={'Jalpa'}>Jalpa</MenuItem>
                      <MenuItem value={'Jerez'}>Jerez</MenuItem>
                      <MenuItem value={'Jiménez del Teul'}>Jiménez del Teul</MenuItem>
                      <MenuItem value={'Juan Aldama'}>Juan Aldama</MenuItem>
                      <MenuItem value={'Juchipila'}>Juchipila</MenuItem>
                      <MenuItem value={'Loreto'}>Loreto</MenuItem>
                      <MenuItem value={'Luis Moya'}>Luis Moya</MenuItem>
                      <MenuItem value={'Mazapil'}>Mazapil</MenuItem>
                      <MenuItem value={'Melchor Ocampo'}>Melchor Ocampo</MenuItem>
                      <MenuItem value={'Mezquital del Oro'}>Mezquital del Oro</MenuItem>
                      <MenuItem value={'Miguel Auza'}>Miguel Auza</MenuItem>
                      <MenuItem value={'Momax'}>Momax</MenuItem>
                      <MenuItem value={'Monte Escobedo'}>Monte Escobedo</MenuItem>
                      <MenuItem value={'Morelos'}>Morelos</MenuItem>
                      <MenuItem value={'Moyahua de Estrada'}>Moyahua de Estrada</MenuItem>
                      <MenuItem value={'Nochistlán de Mejía'}>Nochistlán de Mejía</MenuItem>
                      <MenuItem value={'Noria de Ángeles'}>Noria de Ángeles</MenuItem>
                      <MenuItem value={'Ojocaliente'}>Ojocaliente</MenuItem>
                      <MenuItem value={'Sombrerete'}>Sombrerete</MenuItem>
                      <MenuItem value={'Susticacán'}>Susticacán</MenuItem>
                      <MenuItem value={'Tabasco'}>Tabasco</MenuItem>
                      <MenuItem value={'Tepechitlán'}>Tepechitlán</MenuItem>
                      <MenuItem value={'Tepetongo'}>Tepetongo</MenuItem>
                      <MenuItem value={'Teúl de González Ortega'}>Teúl de González Ortega</MenuItem>
                      <MenuItem value={'Trinidad García de la Cadena'}>Trinidad García de la Cadena</MenuItem>
                  </Select>}
                  {this.state.estados === 'Yucatán' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Abalá'}>Abalá</MenuItem>
                      <MenuItem value={'Acanceh'}>Acanceh</MenuItem>
                      <MenuItem value={'Akil'}>Akil</MenuItem>
                      <MenuItem value={'Baca'}>Baca</MenuItem>
                      <MenuItem value={'Bokobá'}>Bokobá</MenuItem>
                      <MenuItem value={'Buctzotz'}>Buctzotz</MenuItem>
                      <MenuItem value={'Chalchihuites'}>Chalchihuites</MenuItem>
                      <MenuItem value={'Concepción del Oro'}>Concepción del Oro</MenuItem>
                      <MenuItem value={'Cacalchén'}>Cacalchén</MenuItem>
                      <MenuItem value={'Calotmul'}>Calotmul</MenuItem>
                      <MenuItem value={'Cansahcab'}>Cansahcab</MenuItem>
                      <MenuItem value={'Cantamayec'}>Cantamayec</MenuItem>
                      <MenuItem value={'Celestún'}>Celestún</MenuItem>
                      <MenuItem value={'Cenotillo'}>Cenotillo</MenuItem>
                      <MenuItem value={'Chacsinkín'}>Chacsinkín</MenuItem>
                      <MenuItem value={'Chankom'}>Chankom</MenuItem>
                      <MenuItem value={'Chapab'}>Chapab</MenuItem>
                      <MenuItem value={'Chemax'}>Chemax</MenuItem>
                      <MenuItem value={'Chichimilá'}>Chichimilá</MenuItem>
                      <MenuItem value={'Chicxulub Pueblo'}>Chicxulub Pueblo</MenuItem>
                      <MenuItem value={'Chikindzonot'}>Chikindzonot</MenuItem>
                      <MenuItem value={'Chocholá'}>Chocholá</MenuItem>
                      <MenuItem value={'Chumayel'}>Chumayel</MenuItem>
                      <MenuItem value={'Conkal'}>Conkal</MenuItem>
                      <MenuItem value={'Cuncunul'}>Cuncunul</MenuItem>
                      <MenuItem value={'Cuzamá'}>Cuzamá</MenuItem>
                      <MenuItem value={'Dzán'}>Dzán</MenuItem>
                      <MenuItem value={'Dzemul'}>Dzemul</MenuItem>
                      <MenuItem value={'Dzidzantún'}>Dzidzantún</MenuItem>
                      <MenuItem value={'Dzilam de Bravo'}>Dzilam de Bravo</MenuItem>
                      <MenuItem value={'Dzilam González'}>Dzilam González</MenuItem>
                      <MenuItem value={'Dzitás'}>Dzitás</MenuItem>
                      <MenuItem value={'Dzoncauich'}>Dzoncauich</MenuItem>
                      <MenuItem value={'Espita'}>Espita</MenuItem>
                      <MenuItem value={'Halachó'}>Halachó</MenuItem>
                      <MenuItem value={'Hocabá'}>Hocabá</MenuItem>
                      <MenuItem value={'Hoctún'}>Hoctún</MenuItem>
                      <MenuItem value={'Homún'}>Homún</MenuItem>
                      <MenuItem value={'Kantunil'}>Kantunil</MenuItem>
                      <MenuItem value={'Kaua'}>Kaua</MenuItem>
                      <MenuItem value={'Kinchil'}>Kinchil</MenuItem>
                      <MenuItem value={'Kopomá'}>Kopomá</MenuItem>
                      <MenuItem value={'Mama'}>Mama</MenuItem>
                      <MenuItem value={'Maní'}>Maní</MenuItem>
                  </Select>}
                  {this.state.estados === 'Veracruz' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Acajete'}>Acajete</MenuItem>
                      <MenuItem value={'Acatlán'}>Acatlán</MenuItem>
                      <MenuItem value={'Acayucan'}>Acayucan</MenuItem>
                      <MenuItem value={'Actopan'}>Actopan</MenuItem>
                      <MenuItem value={'Acula'}>Acula</MenuItem>
                      <MenuItem value={'Acultzingo'}>Acultzingo</MenuItem>
                      <MenuItem value={'Alpatláhuac'}>Alpatláhuac</MenuItem>
                      <MenuItem value={'Alto Lucero de Gutiérrez Barrios'}>Alto Lucero de Gutiérrez Barrios</MenuItem>
                      <MenuItem value={'Altotonga'}>Altotonga</MenuItem>
                      <MenuItem value={'Alvarado'}>Alvarado</MenuItem>
                      <MenuItem value={'Amatitlán'}>Amatitlán</MenuItem>
                      <MenuItem value={'Angel R. Cabada'}>Angel R. Cabada</MenuItem>
                      <MenuItem value={'Apazapan'}>Apazapan</MenuItem>
                      <MenuItem value={'Aquila'}>Aquila</MenuItem>
                      <MenuItem value={'Astacinga'}>Astacinga</MenuItem>
                      <MenuItem value={'Atlahuilco'}>Atlahuilco</MenuItem>
                      <MenuItem value={'Atoyac'}>Atoyac</MenuItem>
                      <MenuItem value={'Atzacan'}>Atzacan</MenuItem>
                      <MenuItem value={'Atzalan'}>Atzalan</MenuItem>
                      <MenuItem value={'Ayahualulco'}>Ayahualulco</MenuItem>
                      <MenuItem value={'Banderilla'}>Banderilla</MenuItem>
                      <MenuItem value={'Benito Juárez'}>Benito Juárez</MenuItem>
                      <MenuItem value={'Boca del Río'}>Boca del Río</MenuItem>
                      <MenuItem value={'Calcahualco'}>Calcahualco</MenuItem>
                      <MenuItem value={'Camarón de Tejeda'}>Camarón de Tejeda</MenuItem>
                      <MenuItem value={'Camerino Z. Mendoza'}>Camerino Z. Mendoza</MenuItem>
                      <MenuItem value={'Carrillo Puerto'}>Carrillo Puerto</MenuItem>
                      <MenuItem value={'Catemaco'}>Catemaco</MenuItem>
                      <MenuItem value={'Cazones de Herrera'}>Cazones de Herrera</MenuItem>
                      <MenuItem value={'Cerro Azul'}>Cerro Azul</MenuItem>
                      <MenuItem value={'Citlaltépetl'}>Citlaltépetl</MenuItem>
                      <MenuItem value={'Coacoatzintla'}>Coacoatzintla</MenuItem>
                      <MenuItem value={'Colipa'}>Colipa</MenuItem>
                      <MenuItem value={'Comapa'}>Comapa</MenuItem>
                      <MenuItem value={'Córdoba'}>Córdoba</MenuItem>
                      <MenuItem value={'Cosamaloapan de Carpio'}>Cosamaloapan de Carpio</MenuItem>
                      <MenuItem value={'Cosautlán de Carvajal'}>Cosautlán de Carvajal</MenuItem>
                      <MenuItem value={'Coscomatepec'}>Coscomatepec</MenuItem>
                      <MenuItem value={'La Antigua'}>La Antigua</MenuItem>
                      <MenuItem value={'Naranjos Amatlán'}>Naranjos Amatlán</MenuItem>
                      <MenuItem value={'Tlaltetela'}>Tlaltetela</MenuItem>
                  </Select>}
                  {this.state.estados === 'Tlaxcala' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Acuamanala de Miguel Hidalgo'}>Acuamanala de Miguel Hidalgo</MenuItem>
                      <MenuItem value={'Amaxac de Guerrero'}>Amaxac de Guerrero</MenuItem>
                      <MenuItem value={'Apetatitlán de Antonio Carvajal'}>Apetatitlán de Antonio Carvajal</MenuItem>
                      <MenuItem value={'Apizaco'}>Apizaco</MenuItem>
                      <MenuItem value={'Atlangatepec'}>Atlangatepec</MenuItem>
                      <MenuItem value={'Atltzayanca'}>Atltzayanca</MenuItem>
                      <MenuItem value={'Benito Juárez'}>Benito Juárez</MenuItem>
                      <MenuItem value={'Calpulalpan'}>Calpulalpan</MenuItem>
                      <MenuItem value={'Chiautempan'}>Chiautempan</MenuItem>
                      <MenuItem value={'Contla de Juan Cuamatzi'}>Contla de Juan Cuamatzi</MenuItem>
                      <MenuItem value={'Cuapiaxtla'}>Cuapiaxtla</MenuItem>
                      <MenuItem value={'Cuaxomulco'}>Cuaxomulco</MenuItem>
                      <MenuItem value={'El Carmen Tequexquitla'}>El Carmen Tequexquitla</MenuItem>
                      <MenuItem value={'Emiliano Zapata'}>Emiliano Zapata</MenuItem>
                      <MenuItem value={'Españita'}>Españita</MenuItem>
                      <MenuItem value={'Huamantla'}>Huamantla</MenuItem>
                      <MenuItem value={'Hueyotlipan'}>Hueyotlipan</MenuItem>
                      <MenuItem value={'Ixtacuixtla de Mariano Matamoros'}>Ixtacuixtla de Mariano Matamoros</MenuItem>
                      <MenuItem value={'Ixtenco'}>Ixtenco</MenuItem>
                      <MenuItem value={'Lázaro Cárdenas'}>Lázaro Cárdenas</MenuItem>
                      <MenuItem value={'Mazatecochco de José María Morelos'}>Mazatecochco de José María Morelos</MenuItem>
                      <MenuItem value={'BMuñoz de Domingo Arenas'}>BMuñoz de Domingo Arenas</MenuItem>
                      <MenuItem value={'Nanacamilpa de Mariano Arista'}>Nanacamilpa de Mariano Arista</MenuItem>
                      <MenuItem value={'Natívitas'}>Natívitas</MenuItem>
                      <MenuItem value={'San Pablo del Monte'}>San Pablo del Monte</MenuItem>
                      <MenuItem value={'Sanctórum de Lázaro Cárdenas'}>Sanctórum de Lázaro Cárdenas</MenuItem>
                      <MenuItem value={'Santa Cruz Tlaxcala'}>Santa Cruz Tlaxcala</MenuItem>
                      <MenuItem value={'Tenancingo'}>Tenancingo</MenuItem>
                      <MenuItem value={'Teolocholco'}>Teolocholco</MenuItem>
                      <MenuItem value={'Tepetitla de Lardizábal'}>Tepetitla de Lardizábal</MenuItem>
                      <MenuItem value={'Tepeyanco'}>Tepeyanco</MenuItem>
                      <MenuItem value={'Terrenate'}>Terrenate</MenuItem>
                      <MenuItem value={'Tetla de la Solidaridad'}>Tetla de la Solidaridad</MenuItem>
                      <MenuItem value={'Tetlatlahuca'}>Tetlatlahuca</MenuItem>
                      <MenuItem value={'Tlaxcala'}>Tlaxcala</MenuItem>
                      <MenuItem value={'Tlaxco'}>Tlaxco</MenuItem>
                      <MenuItem value={'Tocatlán'}>Tocatlán</MenuItem>
                      <MenuItem value={'Totolac'}>Totolac</MenuItem>
                      <MenuItem value={'Xicohtzinco'}>Xicohtzinco</MenuItem>
                      <MenuItem value={'Yauhquemehcan'}>Yauhquemehcan</MenuItem>
                      <MenuItem value={'Zacatelco'}>Zacatelco</MenuItem>
                  </Select>}
                  {this.state.estados === 'Tamaulipas' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Abasolo'}>Abasolo</MenuItem>
                      <MenuItem value={'Aldama'}>Aldama</MenuItem>
                      <MenuItem value={'Altamira'}>Altamira</MenuItem>
                      <MenuItem value={'Antiguo Morelos'}>Antiguo Morelos</MenuItem>
                      <MenuItem value={'Burgos'}>Burgos</MenuItem>
                      <MenuItem value={'Bustamante'}>Bustamante</MenuItem>
                      <MenuItem value={'Camargo'}>Camargo</MenuItem>
                      <MenuItem value={'Casas'}>Casas</MenuItem>
                      <MenuItem value={'Ciudad Madero'}>Ciudad Madero</MenuItem>
                      <MenuItem value={'Cruillas'}>Cruillas</MenuItem>
                      <MenuItem value={'El Mante'}>El Mante</MenuItem>
                      <MenuItem value={'Gómez Farías'}>Gómez Farías</MenuItem>
                      <MenuItem value={'González'}>González</MenuItem>
                      <MenuItem value={'Güémez'}>Güémez</MenuItem>
                      <MenuItem value={'Guerrero'}>Guerrero</MenuItem>
                      <MenuItem value={'Gustavo Díaz Ordaz'}>Gustavo Díaz Ordaz</MenuItem>
                      <MenuItem value={'Hidalgo'}>Hidalgo</MenuItem>
                      <MenuItem value={'Jaumave'}>Jaumave</MenuItem>
                      <MenuItem value={'Jiménez'}>Jiménez</MenuItem>
                      <MenuItem value={'Llera'}>Llera</MenuItem>
                      <MenuItem value={'Mainero'}>Mainero</MenuItem>
                      <MenuItem value={'Matamoros'}>Matamoros</MenuItem>
                      <MenuItem value={'Méndez'}>Méndez</MenuItem>
                      <MenuItem value={'Mier'}>Mier</MenuItem>
                      <MenuItem value={'Miguel Alemán'}>Miguel Alemán</MenuItem>
                      <MenuItem value={'Miquihuana'}>Miquihuana</MenuItem>
                      <MenuItem value={'Nuevo Laredo'}>Nuevo Laredo</MenuItem>
                      <MenuItem value={'Nuevo Morelos'}>Nuevo Morelos</MenuItem>
                      <MenuItem value={'Ocampo'}>Ocampo</MenuItem>
                      <MenuItem value={'Padilla'}>Padilla</MenuItem>
                      <MenuItem value={'Palmillas'}>Palmillas</MenuItem>
                      <MenuItem value={'Reynosa'}>Reynosa</MenuItem>
                      <MenuItem value={'Río Bravo'}>Río Bravo</MenuItem>
                      <MenuItem value={'San Carlos'}>San Carlos</MenuItem>
                      <MenuItem value={'San Fernando'}>San Fernando</MenuItem>
                      <MenuItem value={'San Nicolás'}>San Nicolás</MenuItem>
                      <MenuItem value={'Villagrán'}>Villagrán</MenuItem>
                      <MenuItem value={'Xicoténcatl'}>Xicoténcatl</MenuItem>
                  </Select>}
                  {this.state.estados === 'Tabasco' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Balancán'}>Balancán</MenuItem>
                      <MenuItem value={'Cárdenas'}>Cárdenas</MenuItem>
                      <MenuItem value={'Centla'}>Centla</MenuItem>
                      <MenuItem value={'Centro'}>Centro</MenuItem>
                      <MenuItem value={'Comalcalco'}>Comalcalco</MenuItem>
                      <MenuItem value={'Cunduacán'}>Cunduacán</MenuItem>
                      <MenuItem value={'Emiliano Zapata'}>Emiliano Zapata</MenuItem>
                      <MenuItem value={'Huimanguillo'}>Huimanguillo</MenuItem>
                      <MenuItem value={'Jalapa'}>Jalapa</MenuItem>
                      <MenuItem value={'Jalpa de Méndez'}>Jalpa de Méndez</MenuItem>
                      <MenuItem value={'Jonuta'}>Jonuta</MenuItem>
                      <MenuItem value={'Macuspana'}>Macuspana</MenuItem>
                      <MenuItem value={'Nacajuca'}>Nacajuca</MenuItem>
                      <MenuItem value={'Paraíso'}>Paraíso</MenuItem>
                      <MenuItem value={'Tacotalpa'}>Tacotalpa</MenuItem>
                      <MenuItem value={'Teapa'}>Teapa</MenuItem>
                      <MenuItem value={'Tenosique'}>Tenosique</MenuItem>
                  </Select>}
                  {this.state.estados === 'Sonora' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Aconchi'}>Aconchi</MenuItem>
                      <MenuItem value={'Agua Prieta'}>Agua Prieta</MenuItem>
                      <MenuItem value={'Alamos'}>Alamos</MenuItem>
                      <MenuItem value={'Altar'}>Altar</MenuItem>
                      <MenuItem value={'Arivechi'}>Arivechi</MenuItem>
                      <MenuItem value={'Arizpe'}>Arizpe</MenuItem>
                      <MenuItem value={'Atil'}>Atil</MenuItem>
                      <MenuItem value={'Bacadéhuachi'}>Bacadéhuachi</MenuItem>
                      <MenuItem value={'Bacanora'}>Bacanora</MenuItem>
                      <MenuItem value={'Bacerac'}>Bacerac</MenuItem>
                      <MenuItem value={'Bacoachi'}>Bacoachi</MenuItem>
                      <MenuItem value={'Bácum'}>Bácum</MenuItem>
                      <MenuItem value={'Banámichi'}>Banámichi</MenuItem>
                      <MenuItem value={'Baviácora'}>Baviácora</MenuItem>
                      <MenuItem value={'Bavispe'}>Bavispe</MenuItem>
                      <MenuItem value={'Benjamín Hill'}>Benjamín Hill</MenuItem>
                      <MenuItem value={'Caborca'}>Caborca</MenuItem>
                      <MenuItem value={'Cajeme'}>Cajeme</MenuItem>
                      <MenuItem value={'Cananea'}>Cananea</MenuItem>
                      <MenuItem value={'Carbó'}>Carbó</MenuItem>
                      <MenuItem value={'Cucurpe'}>Cucurpe</MenuItem>
                      <MenuItem value={'Cumpas'}>Cumpas</MenuItem>
                      <MenuItem value={'Divisaderos'}>Divisaderos</MenuItem>
                      <MenuItem value={'Empalme'}>Empalme</MenuItem>
                      <MenuItem value={'Etchojoa'}>Etchojoa</MenuItem>
                      <MenuItem value={'Fronteras'}>Fronteras</MenuItem>
                      <MenuItem value={'Granados'}>Granados</MenuItem>
                      <MenuItem value={'Guaymas'}>Guaymas</MenuItem>
                      <MenuItem value={'Hermosillo'}>Hermosillo</MenuItem>
                      <MenuItem value={'Huachinera'}>Huachinera</MenuItem>
                      <MenuItem value={'Huásabas'}>Dzilam González</MenuItem>
                      <MenuItem value={'Huatabampo'}>Huatabampo</MenuItem>
                      <MenuItem value={'Huépac'}>Huépac</MenuItem>
                      <MenuItem value={'Imuris'}>Imuris</MenuItem>
                      <MenuItem value={'La Colorada'}>La Colorada</MenuItem>
                      <MenuItem value={'Magdalena'}>Magdalena</MenuItem>
                      <MenuItem value={'Navojoa'}>Navojoa</MenuItem>
                      <MenuItem value={'Nogales'}>Nogales</MenuItem>
                      <MenuItem value={'Onavas'}>Onavas</MenuItem>
                      <MenuItem value={'Opodepe'}>Opodepe</MenuItem>
                      <MenuItem value={'Oquitoa'}>Oquitoa</MenuItem>
                      <MenuItem value={'Pitiquito'}>Pitiquito</MenuItem>
                  </Select>}
                  {this.state.estados === 'Sinaloa' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Ahome'}>Ahome</MenuItem>
                      <MenuItem value={'Angostura'}>Angostura</MenuItem>
                      <MenuItem value={'Badiraguato'}>Badiraguato</MenuItem>
                      <MenuItem value={'Choix'}>Choix</MenuItem>
                      <MenuItem value={'Concordia'}>Concordia</MenuItem>
                      <MenuItem value={'Cosalá'}>Cosalá</MenuItem>
                      <MenuItem value={'Culiacán'}>Culiacán</MenuItem>
                      <MenuItem value={'El Fuerte'}>El Fuerte</MenuItem>
                      <MenuItem value={'Elota'}>Elota</MenuItem>
                      <MenuItem value={'Escuinapa'}>Escuinapa</MenuItem>
                      <MenuItem value={'Guasave'}>Guasave</MenuItem>
                      <MenuItem value={'Mazatlán'}>Mazatlán</MenuItem>
                      <MenuItem value={'Mocorito'}>Mocorito</MenuItem>
                      <MenuItem value={'Navolato'}>Navolato</MenuItem>
                      <MenuItem value={'Rosario'}>Rosario</MenuItem>
                      <MenuItem value={'Salvador Alvarado'}>Salvador Alvarado</MenuItem>
                      <MenuItem value={'San Ignacio'}>San Ignacio</MenuItem>
                      <MenuItem value={'Sinaloa'}>Sinaloa</MenuItem>
                  </Select>}
                  {this.state.estados === 'San Luis Potosí' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Ahualulco'}>Ahualulco</MenuItem>
                      <MenuItem value={'Alaquines'}>Alaquines</MenuItem>
                      <MenuItem value={'Aquismón'}>Aquismón</MenuItem>
                      <MenuItem value={'Armadillo de los Infante'}>Armadillo de los Infante</MenuItem>
                      <MenuItem value={'Cárdenas'}>Cárdenas</MenuItem>
                      <MenuItem value={'Catorce'}>Catorce</MenuItem>
                      <MenuItem value={'Cedral'}>Cedral</MenuItem>
                      <MenuItem value={'Cerritos'}>Cerritos</MenuItem>
                      <MenuItem value={'Cerro de San Pedro'}>Cerro de San Pedro</MenuItem>
                      <MenuItem value={'Charcas'}>Charcas</MenuItem>
                      <MenuItem value={'Ciudad del Maíz'}>Ciudad del Maíz</MenuItem>
                      <MenuItem value={'Ciudad Fernández'}>Cantamayec</MenuItem>
                      <MenuItem value={'Ciudad Valles'}>Ciudad Valles</MenuItem>
                      <MenuItem value={'Coxcatlán'}>Coxcatlán</MenuItem>
                      <MenuItem value={'Ebano'}>Ebano</MenuItem>
                      <MenuItem value={'Guadalcázar'}>Guadalcázar</MenuItem>
                      <MenuItem value={'Huehuetlán'}>Huehuetlán</MenuItem>
                      <MenuItem value={'Lagunillas'}>Lagunillas</MenuItem>
                      <MenuItem value={'Matehuala'}>Matehuala</MenuItem>
                      <MenuItem value={'Mexquitic de Carmona'}>Mexquitic de Carmona</MenuItem>
                      <MenuItem value={'Moctezuma'}>Moctezuma</MenuItem>
                      <MenuItem value={'Rayón'}>Rayón</MenuItem>
                      <MenuItem value={'Rioverde'}>Rioverde</MenuItem>
                      <MenuItem value={'Salinas'}>Salinas</MenuItem>
                      <MenuItem value={'San Antonio'}>San Antonio</MenuItem>
                      <MenuItem value={'San Ciro de Acosta'}>San Ciro de Acosta</MenuItem>
                      <MenuItem value={'San Luis Potosí'}>San Luis Potosí</MenuItem>
                      <MenuItem value={'San Martín Chalchicuautla'}>San Martín Chalchicuautla</MenuItem>
                      <MenuItem value={'San Nicolás Tolentino'}>San Nicolás Tolentino</MenuItem>
                      <MenuItem value={'San Vicente Tancuayalab'}>San Vicente Tancuayalab</MenuItem>
                      <MenuItem value={'Santa Catarina'}>Santa Catarina</MenuItem>
                      <MenuItem value={'Santa María del Río'}>Santa María del Río</MenuItem>
                      <MenuItem value={'Santo Domingo'}>Santo Domingo</MenuItem>
                      <MenuItem value={'Soledad de Graciano Sánchez'}>Soledad de Graciano Sánchez</MenuItem>
                      <MenuItem value={'Tamasopo'}>Tamasopo</MenuItem>
                      <MenuItem value={'Tancanhuitz'}>Tancanhuitz</MenuItem>
                      <MenuItem value={'Tanquián de Escobedo'}>Tanquián de Escobedo</MenuItem>
                      <MenuItem value={'Tierra Nueva'}>Tierra Nueva</MenuItem>
                      <MenuItem value={'Vanegas'}>Vanegas</MenuItem>
                      <MenuItem value={'Venado'}>Venado</MenuItem>
                      <MenuItem value={'Villa de Arriaga'}>Villa de Arriaga</MenuItem>
                      <MenuItem value={'Villa de Guadalupe'}>Villa de Guadalupe</MenuItem>
                  </Select>}
                  {this.state.estados === 'Quintana Roo' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Bacalar'}>Bacalar</MenuItem>
                      <MenuItem value={'Benito Juárez'}>Benito Juárez</MenuItem>
                      <MenuItem value={'Cozumel'}>Cozumel</MenuItem>
                      <MenuItem value={'Felipe Carrillo Puerto'}>Felipe Carrillo Puerto</MenuItem>
                      <MenuItem value={'Isla Mujeres'}>Isla Mujeres</MenuItem>
                      <MenuItem value={'José María Morelos'}>José María Morelos</MenuItem>
                      <MenuItem value={'Lázaro Cárdenas'}>Lázaro Cárdenas</MenuItem>
                      <MenuItem value={'Othón P. Blanco'}>Othón P. Blanco</MenuItem>
                      <MenuItem value={'Puerto Morelos'}>Puerto Morelos</MenuItem>
                      <MenuItem value={'Solidaridad'}>Solidaridad</MenuItem>
                      <MenuItem value={'Tulum'}>Tulum</MenuItem>
                  </Select>}
                  {this.state.estados === 'Querétaro' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Amealco de Bonfil'}>Amealco de Bonfil</MenuItem>
                      <MenuItem value={'Arroyo Seco'}>Arroyo Seco</MenuItem>
                      <MenuItem value={'Cadereyta de Montes'}>Cadereyta de Montes</MenuItem>
                      <MenuItem value={'Colón'}>Colón</MenuItem>
                      <MenuItem value={'Corregidora'}>Bokobá</MenuItem>
                      <MenuItem value={'El Marqués'}>El Marqués</MenuItem>
                      <MenuItem value={'Ezequiel Montes'}>Ezequiel Montes</MenuItem>
                      <MenuItem value={'Huimilpan'}>Huimilpan</MenuItem>
                      <MenuItem value={'Jalpan de Serra'}>Jalpan de Serra</MenuItem>
                      <MenuItem value={'Landa de Matamoros'}>Landa de Matamoros</MenuItem>
                      <MenuItem value={'Pedro Escobedo'}>Pedro Escobedo</MenuItem>
                      <MenuItem value={'Peñamiller'}>Peñamiller</MenuItem>
                      <MenuItem value={'Pinal de Amoles'}>Pinal de Amoles</MenuItem>
                      <MenuItem value={'Querétaro'}>Querétaro</MenuItem>
                      <MenuItem value={'San Joaquín'}>San Joaquín</MenuItem>
                      <MenuItem value={'San Juan del Río'}>San Juan del Río</MenuItem>
                      <MenuItem value={'Tequisquiapan'}>Tequisquiapan</MenuItem>
                      <MenuItem value={'Tolimán'}>Tolimán</MenuItem>
                  </Select>}
                  {this.state.estados === 'Puebla' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Acajete'}>Acajete</MenuItem>
                      <MenuItem value={'Acateno'}>Acateno</MenuItem>
                      <MenuItem value={'Acatlán'}>Acatlán</MenuItem>
                      <MenuItem value={'Acatzingo'}>Acatzingo</MenuItem>
                      <MenuItem value={'Acteopan'}>Acteopan</MenuItem>
                      <MenuItem value={'Ahuacatlán'}>Ahuacatlán</MenuItem>
                      <MenuItem value={'Ahuatlán'}>Ahuatlán</MenuItem>
                      <MenuItem value={'Ahuazotepec'}>Ahuazotepec</MenuItem>
                      <MenuItem value={'Ahuehuetitla'}>Ahuehuetitla</MenuItem>
                      <MenuItem value={'Ajalpan'}>Ajalpan</MenuItem>
                      <MenuItem value={'Albino Zertuche'}>Albino Zertuche</MenuItem>
                      <MenuItem value={'Aljojuca'}>Aljojuca</MenuItem>
                      <MenuItem value={'Altepexi'}>Altepexi</MenuItem>
                      <MenuItem value={'Amixtlán'}>Amixtlán</MenuItem>
                      <MenuItem value={'Amozoc'}>Amozoc</MenuItem>
                      <MenuItem value={'Aquixtla'}>Aquixtla</MenuItem>
                      <MenuItem value={'Atempan'}>Atempan</MenuItem>
                      <MenuItem value={'Atexcal'}>Atexcal</MenuItem>
                      <MenuItem value={'Atlixco'}>Chichimilá</MenuItem>
                      <MenuItem value={'Atoyatempan'}>Atoyatempan</MenuItem>
                      <MenuItem value={'Atzala'}>Atzala</MenuItem>
                      <MenuItem value={'Atzitzihuacán'}>Atzitzihuacán</MenuItem>
                      <MenuItem value={'Atzitzintla'}>Atzitzintla</MenuItem>
                      <MenuItem value={'Axutla'}>Axutla</MenuItem>
                      <MenuItem value={'Ayotoxco de Guerrero'}>Ayotoxco de Guerrero</MenuItem>
                      <MenuItem value={'Calpan'}>Calpan</MenuItem>
                      <MenuItem value={'Caltepec'}>Caltepec</MenuItem>
                      <MenuItem value={'Camocuautla'}>Camocuautla</MenuItem>
                      <MenuItem value={'Caxhuacan'}>Caxhuacan</MenuItem>
                      <MenuItem value={'Chalchicomula de Sesma'}>Chalchicomula de Sesma</MenuItem>
                      <MenuItem value={'Chapulco'}>Chapulco</MenuItem>
                      <MenuItem value={'Chiautla'}>Chiautla</MenuItem>
                      <MenuItem value={'Coatepec'}>Coatepec</MenuItem>
                      <MenuItem value={'Coatzingo'}>Coatzingo</MenuItem>
                      <MenuItem value={'Cohetzala'}>Cohetzala</MenuItem>
                      <MenuItem value={'Cohuecan'}>Cohuecan</MenuItem>
                      <MenuItem value={'Coronango'}>Coronango</MenuItem>
                      <MenuItem value={'Coxcatlán'}>Coxcatlán</MenuItem>
                      <MenuItem value={'Coyomeapan'}>Coyomeapan</MenuItem>
                      <MenuItem value={'Cuayuca de Andrade'}>Cuayuca de Andrade</MenuItem>
                      <MenuItem value={'Cuetzalan del Progreso'}>Cuetzalan del Progreso</MenuItem>
                      <MenuItem value={'Cuyoaco'}>Cuyoaco</MenuItem>
                  </Select>}
                  {this.state.estados === 'Oaxaca' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Abejones'}>Abejones</MenuItem>
                      <MenuItem value={'Acatlán de Pérez Figueroa'}>Acatlán de Pérez Figueroa</MenuItem>
                      <MenuItem value={'Asunción Cacalotepec'}>Asunción Cacalotepec</MenuItem>
                      <MenuItem value={'Asunción Cuyotepeji'}>Asunción Cuyotepeji</MenuItem>
                      <MenuItem value={'Asunción Ixtaltepec'}>Asunción Ixtaltepec</MenuItem>
                      <MenuItem value={'Asunción Nochixtlán'}>Asunción Nochixtlán</MenuItem>
                      <MenuItem value={'Asunción Ocotlán'}>Asunción Ocotlán</MenuItem>
                      <MenuItem value={'Asunción Tlacolulita'}>Asunción Tlacolulita</MenuItem>
                      <MenuItem value={'Ayotzintepec'}>Ayotzintepec</MenuItem>
                      <MenuItem value={'Calihualá'}>Calihualá</MenuItem>
                      <MenuItem value={'Candelaria Loxicha'}>Candelaria Loxicha</MenuItem>
                      <MenuItem value={'Chahuites'}>Chahuites</MenuItem>
                      <MenuItem value={'Chalcatongo de Hidalgo'}>Chalcatongo de Hidalgo</MenuItem>
                      <MenuItem value={'Chiquihuitlán de Benito Juárez'}>Chiquihuitlán de Benito Juárez</MenuItem>
                      <MenuItem value={'Ciénega de Zimatlán'}>Ciénega de Zimatlán</MenuItem>
                      <MenuItem value={'Ciudad Ixtepec'}>Ciudad Ixtepec</MenuItem>
                      <MenuItem value={'Coatecas Altas'}>Coatecas Altas</MenuItem>
                      <MenuItem value={'Coicoyán de las Flores'}>Coicoyán de las Flores</MenuItem>
                      <MenuItem value={'Concepción Buenavista'}>Concepción Buenavista</MenuItem>
                      <MenuItem value={'Concepción Pápalo'}>Concepción Pápalo</MenuItem>
                      <MenuItem value={'Constancia del Rosario'}>Constancia del Rosario</MenuItem>
                      <MenuItem value={'Cosolapa'}>Cosolapa</MenuItem>
                      <MenuItem value={'Cosoltepec'}>Cosoltepec</MenuItem>
                      <MenuItem value={'Cuilápam de Guerrero'}>Cuilápam de Guerrero</MenuItem>
                      <MenuItem value={'Cuyamecalco Villa de Zaragoza'}>Cuyamecalco Villa de Zaragoza</MenuItem>
                      <MenuItem value={'El Barrio de la Soledad'}>El Barrio de la Soledad</MenuItem>
                      <MenuItem value={'El Espinal'}>El Espinal</MenuItem>
                      <MenuItem value={'Eloxochitlán de Flores Magón'}>Eloxochitlán de Flores Magón</MenuItem>
                      <MenuItem value={'Fresnillo de Trujano'}>Fresnillo de Trujano</MenuItem>
                      <MenuItem value={'Guadalupe de Ramírez'}>Dzilam de Bravo</MenuItem>
                      <MenuItem value={'Guadalupe Etla'}>Guadalupe Etla</MenuItem>
                      <MenuItem value={'Guelatao de Juárez'}>Guelatao de Juárez</MenuItem>
                      <MenuItem value={'Guevea de Humboldt'}>Guevea de Humboldt</MenuItem>
                      <MenuItem value={'Heroica Ciudad de Ejutla de Crespo'}>Heroica Ciudad de Ejutla de Crespo</MenuItem>
                      <MenuItem value={'Heroica Ciudad de Juchitán de Zaragoza'}>Heroica Ciudad de Juchitán de Zaragoza</MenuItem>
                      <MenuItem value={'La Compañía'}>La Compañía</MenuItem>
                      <MenuItem value={'Loma Bonita'}>Loma Bonita</MenuItem>
                      <MenuItem value={'Magdalena Apasco'}>Magdalena Apasco</MenuItem>
                      <MenuItem value={'Magdalena Jaltepec'}>Magdalena Jaltepec</MenuItem>
                      <MenuItem value={'Santa Magdalena Jicotlán'}>Santa Magdalena Jicotlán</MenuItem>
                      <MenuItem value={'Tamazulápam del Espíritu Santo'}>Tamazulápam del Espíritu Santo</MenuItem>
                  </Select>}
                  {this.state.estados === 'Tamaulipas' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Abasolo'}>Abasolo</MenuItem>
                      <MenuItem value={'Acanceh'}>Acanceh</MenuItem>
                      <MenuItem value={'Akil'}>Akil</MenuItem>
                      <MenuItem value={'Baca'}>Baca</MenuItem>
                      <MenuItem value={'Bokobá'}>Bokobá</MenuItem>
                      <MenuItem value={'Buctzotz'}>Buctzotz</MenuItem>
                      <MenuItem value={'Chalchihuites'}>Chalchihuites</MenuItem>
                      <MenuItem value={'Concepción del Oro'}>Concepción del Oro</MenuItem>
                      <MenuItem value={'Cacalchén'}>Cacalchén</MenuItem>
                      <MenuItem value={'Calotmul'}>Calotmul</MenuItem>
                      <MenuItem value={'Cansahcab'}>Cansahcab</MenuItem>
                      <MenuItem value={'Cantamayec'}>Cantamayec</MenuItem>
                      <MenuItem value={'Celestún'}>Celestún</MenuItem>
                      <MenuItem value={'Cenotillo'}>Cenotillo</MenuItem>
                      <MenuItem value={'Chacsinkín'}>Chacsinkín</MenuItem>
                      <MenuItem value={'Chankom'}>Chankom</MenuItem>
                      <MenuItem value={'Chapab'}>Chapab</MenuItem>
                      <MenuItem value={'Chemax'}>Chemax</MenuItem>
                      <MenuItem value={'Chichimilá'}>Chichimilá</MenuItem>
                      <MenuItem value={'Chicxulub Pueblo'}>Chicxulub Pueblo</MenuItem>
                      <MenuItem value={'Chikindzonot'}>Chikindzonot</MenuItem>
                      <MenuItem value={'Chocholá'}>Chocholá</MenuItem>
                      <MenuItem value={'Chumayel'}>Chumayel</MenuItem>
                      <MenuItem value={'Conkal'}>Conkal</MenuItem>
                      <MenuItem value={'Cuncunul'}>Cuncunul</MenuItem>
                      <MenuItem value={'Cuzamá'}>Cuzamá</MenuItem>
                      <MenuItem value={'Dzán'}>Dzán</MenuItem>
                      <MenuItem value={'Dzemul'}>Dzemul</MenuItem>
                      <MenuItem value={'Dzidzantún'}>Dzidzantún</MenuItem>
                      <MenuItem value={'Dzilam de Bravo'}>Dzilam de Bravo</MenuItem>
                      <MenuItem value={'Dzilam González'}>Dzilam González</MenuItem>
                      <MenuItem value={'Dzitás'}>Dzitás</MenuItem>
                      <MenuItem value={'Dzoncauich'}>Dzoncauich</MenuItem>
                      <MenuItem value={'Espita'}>Espita</MenuItem>
                      <MenuItem value={'Halachó'}>Halachó</MenuItem>
                      <MenuItem value={'Hocabá'}>Hocabá</MenuItem>
                      <MenuItem value={'Hoctún'}>Hoctún</MenuItem>
                      <MenuItem value={'Homún'}>Homún</MenuItem>
                      <MenuItem value={'Kantunil'}>Kantunil</MenuItem>
                      <MenuItem value={'Kaua'}>Kaua</MenuItem>
                      <MenuItem value={'Kinchil'}>Kinchil</MenuItem>
                      <MenuItem value={'Kopomá'}>Kopomá</MenuItem>
                      <MenuItem value={'Mama'}>Mama</MenuItem>
                      <MenuItem value={'Maní'}>Maní</MenuItem>
                  </Select>}
                  {this.state.estados === 'Tamaulipas' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      required
                    >
                      <MenuItem value={'Abasolo'}>Abasolo</MenuItem>
                      <MenuItem value={'Acanceh'}>Acanceh</MenuItem>
                      <MenuItem value={'Akil'}>Akil</MenuItem>
                      <MenuItem value={'Baca'}>Baca</MenuItem>
                      <MenuItem value={'Bokobá'}>Bokobá</MenuItem>
                      <MenuItem value={'Buctzotz'}>Buctzotz</MenuItem>
                      <MenuItem value={'Chalchihuites'}>Chalchihuites</MenuItem>
                      <MenuItem value={'Concepción del Oro'}>Concepción del Oro</MenuItem>
                      <MenuItem value={'Cacalchén'}>Cacalchén</MenuItem>
                      <MenuItem value={'Calotmul'}>Calotmul</MenuItem>
                      <MenuItem value={'Cansahcab'}>Cansahcab</MenuItem>
                      <MenuItem value={'Cantamayec'}>Cantamayec</MenuItem>
                      <MenuItem value={'Celestún'}>Celestún</MenuItem>
                      <MenuItem value={'Cenotillo'}>Cenotillo</MenuItem>
                      <MenuItem value={'Chacsinkín'}>Chacsinkín</MenuItem>
                      <MenuItem value={'Chankom'}>Chankom</MenuItem>
                      <MenuItem value={'Chapab'}>Chapab</MenuItem>
                      <MenuItem value={'Chemax'}>Chemax</MenuItem>
                      <MenuItem value={'Chichimilá'}>Chichimilá</MenuItem>
                      <MenuItem value={'Chicxulub Pueblo'}>Chicxulub Pueblo</MenuItem>
                      <MenuItem value={'Chikindzonot'}>Chikindzonot</MenuItem>
                      <MenuItem value={'Chocholá'}>Chocholá</MenuItem>
                      <MenuItem value={'Chumayel'}>Chumayel</MenuItem>
                      <MenuItem value={'Conkal'}>Conkal</MenuItem>
                      <MenuItem value={'Cuncunul'}>Cuncunul</MenuItem>
                      <MenuItem value={'Cuzamá'}>Cuzamá</MenuItem>
                      <MenuItem value={'Dzán'}>Dzán</MenuItem>
                      <MenuItem value={'Dzemul'}>Dzemul</MenuItem>
                      <MenuItem value={'Dzidzantún'}>Dzidzantún</MenuItem>
                      <MenuItem value={'Dzilam de Bravo'}>Dzilam de Bravo</MenuItem>
                      <MenuItem value={'Dzilam González'}>Dzilam González</MenuItem>
                      <MenuItem value={'Dzitás'}>Dzitás</MenuItem>
                      <MenuItem value={'Dzoncauich'}>Dzoncauich</MenuItem>
                      <MenuItem value={'Espita'}>Espita</MenuItem>
                      <MenuItem value={'Halachó'}>Halachó</MenuItem>
                      <MenuItem value={'Hocabá'}>Hocabá</MenuItem>
                      <MenuItem value={'Hoctún'}>Hoctún</MenuItem>
                      <MenuItem value={'Homún'}>Homún</MenuItem>
                      <MenuItem value={'Kantunil'}>Kantunil</MenuItem>
                      <MenuItem value={'Kaua'}>Kaua</MenuItem>
                      <MenuItem value={'Kinchil'}>Kinchil</MenuItem>
                      <MenuItem value={'Kopomá'}>Kopomá</MenuItem>
                      <MenuItem value={'Mama'}>Mama</MenuItem>
                      <MenuItem value={'Maní'}>Maní</MenuItem>
                  </Select>}
                </FormControl>
              </div>
              <TextField
                label='Lugar Especifico'
                style={{ marginTop: '15px', width: '100%' }}
                name='dependencia'
                required
              />
              <FormControl style={{ marginTop: '15px', width: '100%' }}>
                <InputLabel>Responsable de Actividad</InputLabel>
                <Select
                  label='Responsable'
                  name='responsable'
                  required
                >
                  <MenuItem value={10}>Raúl Arroyo</MenuItem>
                  <MenuItem value={20}>León Maximiliano Hernández Valdés</MenuItem>
                  <MenuItem value={30}>Victor Ariel Peréz Benítez</MenuItem>
                  <MenuItem value={40}>Mercedes Citlali Mendoza Meza</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label='Asistentes'
                style={{ marginTop: '15px', width: '100%' }}
                name='asistente'
                onChange={this.onChange}
                inputProps={{
                  maxLength: 300,
                }}
                multiline
                required
              />
              </div>
              <div className='save-bt'>
                <Fab color='primary' aria-label='add' style={{ background: 'green' }} type='submit'>
                  <DoneIcon />
                </Fab>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
