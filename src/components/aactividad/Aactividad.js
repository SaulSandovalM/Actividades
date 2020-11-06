import React, { Component } from 'react'
import './Aactividad.css'
import firebase from '../../Firebase'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'

export default class Aactividad extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      fechai: '',
      horai: '',
      actividad: '',
      objetivo: '',
      checkedOrganizada: false,
      tipoActividad: '',
      convoca: '',
      dependencia: '',
      estados: '',
      municipios: '',
      lugar: '',
      responsable: '',
      asistente: '',
      otro : '',
      estatus : 'En proceso',
      duracion : ''
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

  handleBack() {
      this.props.history.push('/ActividadesRegistradas');
    }

  onSubmit = (e) => {
    e.preventDefault()
    const { fechai, horai, actividad, objetivo, checkedOrganizada,
            tipoActividad, convoca, dependencia, estados, municipios, lugar,
            responsable, asistente, otro, estatus, duracion } = this.state
    this.ref.add({
      fechai,
      horai,
      actividad,
      objetivo,
      checkedOrganizada,
      tipoActividad,
      convoca,
      dependencia,
      estados,
      municipios,
      lugar,
      responsable,
      asistente,
      otro,
      estatus,
      duracion
    }).then((docRef) => {
      this.setState({
        fechai: '',
        horai: '',
        actividad: '',
        objetivo: '',
        checkedOrganizada: false,
        tipoActividad: '',
        convoca: '',
        dependencia: '',
        estados: '',
        municipios: '',
        lugar: '',
        responsable: '',
        asistente: '',
        otro : '',
        estatus : 'En proceso',
        duracion : ''
      })
      this.props.history.push('/ActividadesRegistradas')
      alert('Se Envio el formulario')
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
            <form noValidate autoComplete='off' className='mensajesg-container2' onSubmit={this.onSubmit}>
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
              <div className='date-cont'>
                <TextField
                  label='Duración'
                  style={{ marginTop: '15px', width: '45%' }}
                  name='duracion'
                  onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                  {this.state.estados === 'Nuevo León' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Abasolo'}>Abasolo</MenuItem>
                      <MenuItem value={'Agualeguas'}>Agualeguas</MenuItem>
                      <MenuItem value={'Allende'}>Allende</MenuItem>
                      <MenuItem value={'Anáhuac'}>Anáhuac</MenuItem>
                      <MenuItem value={'Apodaca'}>Apodaca</MenuItem>
                      <MenuItem value={'Aramberri'}>Aramberri</MenuItem>
                      <MenuItem value={'Bustamante'}>Bustamante</MenuItem>
                      <MenuItem value={'Cadereyta Jiménez'}>Cadereyta Jiménez</MenuItem>
                      <MenuItem value={'Cerralvo'}>Cerralvo</MenuItem>
                      <MenuItem value={'China'}>China</MenuItem>
                      <MenuItem value={'Ciénega de Flores'}>Ciénega de Flores</MenuItem>
                      <MenuItem value={'Doctor Arroyo'}>Doctor Arroyo</MenuItem>
                      <MenuItem value={'Doctor Coss'}>Doctor Coss</MenuItem>
                      <MenuItem value={'Doctor González'}>Doctor González</MenuItem>
                      <MenuItem value={'El Carmen'}>El Carmen</MenuItem>
                      <MenuItem value={'Galeana'}>Galeana</MenuItem>
                      <MenuItem value={'García'}>García</MenuItem>
                      <MenuItem value={'General Bravo'}>General Bravo</MenuItem>
                      <MenuItem value={'General Escobedo'}>General Escobedo</MenuItem>
                      <MenuItem value={'General Terán'}>General Terán</MenuItem>
                      <MenuItem value={'General Treviño'}>General Treviño</MenuItem>
                      <MenuItem value={'General Zaragoza'}>General Zaragoza</MenuItem>
                      <MenuItem value={'General Zuazua'}>General Zuazua</MenuItem>
                      <MenuItem value={'Guadalupe'}>Guadalupe</MenuItem>
                      <MenuItem value={'Hidalgo'}>Hidalgo</MenuItem>
                      <MenuItem value={'Higueras'}>Higueras</MenuItem>
                      <MenuItem value={'Hualahuises'}>Hualahuises</MenuItem>
                      <MenuItem value={'Iturbide'}>Iturbide</MenuItem>
                      <MenuItem value={'Juárez'}>Juárez</MenuItem>
                      <MenuItem value={'Lampazos de Naranjo'}>Lampazos de Naranjo</MenuItem>
                      <MenuItem value={'Linares'}>Linares</MenuItem>
                      <MenuItem value={'Los Aldamas'}>Los Aldamas</MenuItem>
                      <MenuItem value={'Los Herreras'}>Los Herreras</MenuItem>
                      <MenuItem value={'Marín'}>Marín</MenuItem>
                      <MenuItem value={'Melchor Ocampo'}>Melchor Ocampo</MenuItem>
                      <MenuItem value={'Mier y Noriega'}>Mier y Noriega</MenuItem>
                      <MenuItem value={'Rayones'}>Rayones</MenuItem>
                      <MenuItem value={'Sabinas Hidalgo'}>Sabinas Hidalgo</MenuItem>
                      <MenuItem value={'Salinas Victoria'}>Salinas Victoria</MenuItem>
                      <MenuItem value={'San Nicolás de los Garza'}>San Nicolás de los Garza</MenuItem>
                      <MenuItem value={'San Pedro Garza García'}>San Pedro Garza García</MenuItem>
                  </Select>}
                  {this.state.estados === 'Nayarit' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Acaponeta'}>Acaponeta</MenuItem>
                      <MenuItem value={'Ahuacatlán'}>Ahuacatlán</MenuItem>
                      <MenuItem value={'Amatlán de Cañas'}>Amatlán de Cañas</MenuItem>
                      <MenuItem value={'Bahía de Banderas'}>Bahía de Banderas</MenuItem>
                      <MenuItem value={'Compostela'}>Compostela</MenuItem>
                      <MenuItem value={'Del Nayar'}>Del Nayar</MenuItem>
                      <MenuItem value={'Huajicori'}>Huajicori</MenuItem>
                      <MenuItem value={'Ixtlán del Río'}>Ixtlán del Río</MenuItem>
                      <MenuItem value={'Jala'}>Jala</MenuItem>
                      <MenuItem value={'La Yesca'}>La Yesca</MenuItem>
                      <MenuItem value={'Rosamorada'}>Rosamorada</MenuItem>
                      <MenuItem value={'Ruíz'}>Ruíz</MenuItem>
                      <MenuItem value={'San Blas'}>San Blas</MenuItem>
                      <MenuItem value={'San Pedro Lagunillas'}>San Pedro Lagunillas</MenuItem>
                      <MenuItem value={'Santa María del Oro'}>Santa María del Oro</MenuItem>
                      <MenuItem value={'Santiago Ixcuintla'}>Santiago Ixcuintla</MenuItem>
                      <MenuItem value={'Tecuala'}>Tecuala</MenuItem>
                      <MenuItem value={'Tepic'}>Tepic</MenuItem>
                      <MenuItem value={'Tuxpan'}>Tuxpan</MenuItem>
                      <MenuItem value={'Xalisco'}>Xalisco</MenuItem>
                  </Select>}
                  {this.state.estados === 'Morelos' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Amacuzac'}>Amacuzac</MenuItem>
                      <MenuItem value={'Atlatlahucan'}>Atlatlahucan</MenuItem>
                      <MenuItem value={'Axochiapan'}>Axochiapan</MenuItem>
                      <MenuItem value={'Ayala'}>Ayala</MenuItem>
                      <MenuItem value={'Coatlán del Río'}>Coatlán del Río</MenuItem>
                      <MenuItem value={'Cuautla'}>Cuautla</MenuItem>
                      <MenuItem value={'Cuernavaca'}>Cuernavaca</MenuItem>
                      <MenuItem value={'Emiliano Zapata'}>Emiliano Zapata</MenuItem>
                      <MenuItem value={'Huitzilac'}>Huitzilac</MenuItem>
                      <MenuItem value={'Jantetelco'}>Jantetelco</MenuItem>
                      <MenuItem value={'Jiutepec'}>Jiutepec</MenuItem>
                      <MenuItem value={'Jojutla'}>Jojutla</MenuItem>
                      <MenuItem value={'Jonacatepec'}>Jonacatepec</MenuItem>
                      <MenuItem value={'Mazatepec'}>Mazatepec</MenuItem>
                      <MenuItem value={'Miacatlán'}>Miacatlán</MenuItem>
                      <MenuItem value={'Ocuituco'}>Ocuituco</MenuItem>
                      <MenuItem value={'Puente de Ixtla'}>Puente de Ixtla</MenuItem>
                      <MenuItem value={'Temixco'}>Temixco</MenuItem>
                      <MenuItem value={'Temoac'}>Temoac</MenuItem>
                      <MenuItem value={'Tepalcingo'}>Tepalcingo</MenuItem>
                      <MenuItem value={'Tepoztlán'}>Tepoztlán</MenuItem>
                      <MenuItem value={'Tetecala'}>Tetecala</MenuItem>
                      <MenuItem value={'Tetela del Volcán'}>Tetela del Volcán</MenuItem>
                      <MenuItem value={'Tlalnepantla'}>Tlalnepantla</MenuItem>
                      <MenuItem value={'Tlaltizapán de Zapata'}>Tlaltizapán de Zapata</MenuItem>
                      <MenuItem value={'Tlaquiltenango'}>Tlaquiltenango</MenuItem>
                      <MenuItem value={'Tlayacapan'}>Tlayacapan</MenuItem>
                      <MenuItem value={'Totolapan'}>Totolapan</MenuItem>
                      <MenuItem value={'Xochitepec'}>Xochitepec</MenuItem>
                      <MenuItem value={'Yautepec'}>Yautepec</MenuItem>
                      <MenuItem value={'Yecapixtla'}>Yecapixtla</MenuItem>
                      <MenuItem value={'Zacatepec'}>Zacatepec</MenuItem>
                  </Select>}
                  {this.state.estados === 'Michoacán' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Acuitzio'}>Acuitzio</MenuItem>
                      <MenuItem value={'Aguililla'}>Aguililla</MenuItem>
                      <MenuItem value={'Álvaro Obregón'}>Álvaro Obregón</MenuItem>
                      <MenuItem value={'Angamacutiro'}>Angamacutiro</MenuItem>
                      <MenuItem value={'Angangueo'}>Angangueo</MenuItem>
                      <MenuItem value={'Apatzingán'}>Apatzingán</MenuItem>
                      <MenuItem value={'Aporo'}>Aporo</MenuItem>
                      <MenuItem value={'Aquila'}>Aquila</MenuItem>
                      <MenuItem value={'Ario'}>Ario</MenuItem>
                      <MenuItem value={'Arteaga'}>Arteaga</MenuItem>
                      <MenuItem value={'Briseñas'}>Briseñas</MenuItem>
                      <MenuItem value={'Buenavista'}>Buenavista</MenuItem>
                      <MenuItem value={'Carácuaro'}>Carácuaro</MenuItem>
                      <MenuItem value={'Charapan'}>Charapan</MenuItem>
                      <MenuItem value={'Charo'}>Charo</MenuItem>
                      <MenuItem value={'Chavinda'}>Chavinda</MenuItem>
                      <MenuItem value={'Cherán'}>Cherán</MenuItem>
                      <MenuItem value={'Chilchota'}>Chilchota</MenuItem>
                      <MenuItem value={'Chinicuila'}>Chinicuila</MenuItem>
                      <MenuItem value={'Chucándiro'}>Chucándiro</MenuItem>
                      <MenuItem value={'Churintzio'}>Churintzio</MenuItem>
                      <MenuItem value={'Churumuco'}>Churumuco</MenuItem>
                      <MenuItem value={'Coahuayana'}>Coahuayana</MenuItem>
                      <MenuItem value={'Coalcomán de Vázquez Pallares'}>Coalcomán de Vázquez Pallares</MenuItem>
                      <MenuItem value={'Coeneo'}>Coeneo</MenuItem>
                      <MenuItem value={'Contepec'}>Contepec</MenuItem>
                      <MenuItem value={'Copándaro'}>Copándaro</MenuItem>
                      <MenuItem value={'Cotija'}>Cotija</MenuItem>
                      <MenuItem value={'Cuitzeo'}>Cuitzeo</MenuItem>
                      <MenuItem value={'Ecuandureo'}>Ecuandureo</MenuItem>
                      <MenuItem value={'Epitacio Huerta'}>Epitacio Huerta</MenuItem>
                      <MenuItem value={'Erongarícuaro'}>Erongarícuaro</MenuItem>
                      <MenuItem value={'Gabriel Zamora'}>Gabriel Zamora</MenuItem>
                      <MenuItem value={'Hidalgo'}>Hidalgo</MenuItem>
                      <MenuItem value={'Huandacareo'}>Huandacareo</MenuItem>
                      <MenuItem value={'Jacona'}>Jacona</MenuItem>
                      <MenuItem value={'Jiménez'}>Jiménez</MenuItem>
                      <MenuItem value={'Jiquilpan'}>Jiquilpan</MenuItem>
                      <MenuItem value={'Juárez'}>Juárez</MenuItem>
                      <MenuItem value={'Jungapeo'}>Jungapeo</MenuItem>
                      <MenuItem value={'La Huacana'}>La Huacana</MenuItem>
                      <MenuItem value={'Lagunillas'}>Lagunillas</MenuItem>
                  </Select>}
                  {this.state.estados === 'México' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Acambay de Ruíz Castañeda'}>Acambay de Ruíz Castañeda</MenuItem>
                      <MenuItem value={'Acolman'}>Acolman</MenuItem>
                      <MenuItem value={'Aculco'}>Aculco</MenuItem>
                      <MenuItem value={'Almoloya de Alquisiras'}>Almoloya de Alquisiras</MenuItem>
                      <MenuItem value={'Almoloya de Juárez'}>Almoloya de Juárez</MenuItem>
                      <MenuItem value={'Almoloya del Río'}>Almoloya del Río</MenuItem>
                      <MenuItem value={'Amanalco'}>Amanalco</MenuItem>
                      <MenuItem value={'Amatepec'}>Amatepec</MenuItem>
                      <MenuItem value={'Amecameca'}>Amecameca</MenuItem>
                      <MenuItem value={'Apaxco'}>Apaxco</MenuItem>
                      <MenuItem value={'Atenco'}>Atenco</MenuItem>
                      <MenuItem value={'Atizapán'}>Atizapán</MenuItem>
                      <MenuItem value={'Atizapán de Zaragoza'}>Atizapán de Zaragoza</MenuItem>
                      <MenuItem value={'Atlacomulco'}>Atlacomulco</MenuItem>
                      <MenuItem value={'Atlautla'}>Atlautla</MenuItem>
                      <MenuItem value={'Axapusco'}>Axapusco</MenuItem>
                      <MenuItem value={'Ayapango'}>Ayapango</MenuItem>
                      <MenuItem value={'Calimaya'}>Calimaya</MenuItem>
                      <MenuItem value={'Capulhuac'}>Capulhuac</MenuItem>
                      <MenuItem value={'Chalco'}>Chalco</MenuItem>
                      <MenuItem value={'Chapa de Mota'}>Chapa de Mota</MenuItem>
                      <MenuItem value={'Chapultepec'}>Chapultepec</MenuItem>
                      <MenuItem value={'Chiautla'}>Chiautla</MenuItem>
                      <MenuItem value={'Chicoloapan'}>Chicoloapan</MenuItem>
                      <MenuItem value={'Chiconcuac'}>Coeneo</MenuItem>
                      <MenuItem value={'Chimalhuacán'}>Chimalhuacán</MenuItem>
                      <MenuItem value={'Coacalco de Berriozábal'}>Coacalco de Berriozábal</MenuItem>
                      <MenuItem value={'Coatepec Harinas'}>Coatepec Harinas</MenuItem>
                      <MenuItem value={'Cocotitlán'}>Cocotitlán</MenuItem>
                      <MenuItem value={'Coyotepec'}>Coyotepec</MenuItem>
                      <MenuItem value={'Cuautitlán'}>Cuautitlán</MenuItem>
                      <MenuItem value={'Donato Guerra'}>Donato Guerra</MenuItem>
                      <MenuItem value={'Ecatepec de Morelos'}>Ecatepec de Morelos</MenuItem>
                      <MenuItem value={'Ecatzingo'}>Ecatzingo</MenuItem>
                      <MenuItem value={'Huehuetoca'}>Huehuetoca</MenuItem>
                      <MenuItem value={'Hueypoxtla'}>Hueypoxtla</MenuItem>
                      <MenuItem value={'Jaltenco'}>Jaltenco</MenuItem>
                      <MenuItem value={'Jilotepec'}>Jilotepec</MenuItem>
                      <MenuItem value={'Jilotzingo'}>Jilotzingo</MenuItem>
                      <MenuItem value={'Jiquipilco'}>Jiquipilco</MenuItem>
                      <MenuItem value={'Jocotitlán'}>Jocotitlán</MenuItem>
                      <MenuItem value={'Xalatlaco'}>Xalatlaco</MenuItem>
                  </Select>}
                  {this.state.estados === 'Jalisco' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Acatic'}>Acatic</MenuItem>
                      <MenuItem value={'Acatlán de Juárez'}>Acatlán de Juárez</MenuItem>
                      <MenuItem value={'Ahualulco de Mercado'}>Ahualulco de Mercado</MenuItem>
                      <MenuItem value={'Amacueca'}>Amacueca</MenuItem>
                      <MenuItem value={'Amatitán'}>Amatitán</MenuItem>
                      <MenuItem value={'Ameca'}>Ameca</MenuItem>
                      <MenuItem value={'Arandas'}>Arandas</MenuItem>
                      <MenuItem value={'Atemajac de Brizuela'}>Atemajac de Brizuela</MenuItem>
                      <MenuItem value={'Atengo'}>Atengo</MenuItem>
                      <MenuItem value={'Atenguillo'}>Atenguillo</MenuItem>
                      <MenuItem value={'Atotonilco el Alto'}>Atotonilco el Alto</MenuItem>
                      <MenuItem value={'Atoyac'}>Atoyac</MenuItem>
                      <MenuItem value={'Autlán de Navarro'}>Autlán de Navarro</MenuItem>
                      <MenuItem value={'Ayotlán'}>Ayotlán</MenuItem>
                      <MenuItem value={'Ayutla'}>Ayutla</MenuItem>
                      <MenuItem value={'Bolaños'}>Bolaños</MenuItem>
                      <MenuItem value={'Cabo Corrientes'}>Cabo Corrientes</MenuItem>
                      <MenuItem value={'Casimiro Castillo'}>Casimiro Castillo</MenuItem>
                      <MenuItem value={'Chapala'}>Chapala</MenuItem>
                      <MenuItem value={'Chimaltitán'}>Chimaltitán</MenuItem>
                      <MenuItem value={'Chiquilistlán'}>Chiquilistlán</MenuItem>
                      <MenuItem value={'Cihuatlán'}>Cihuatlán</MenuItem>
                      <MenuItem value={'Cocula'}>Cocula</MenuItem>
                      <MenuItem value={'Colotlán'}>Colotlán</MenuItem>
                      <MenuItem value={'Concepción de Buenos Aires'}>Concepción de Buenos Aires</MenuItem>
                      <MenuItem value={'Cuautla'}>Cuautla</MenuItem>
                      <MenuItem value={'Cuquío'}>Cuquío</MenuItem>
                      <MenuItem value={'Degollado'}>Degollado</MenuItem>
                      <MenuItem value={'Ejutla'}>Ejutla</MenuItem>
                      <MenuItem value={'El Arenal'}>El Arenal</MenuItem>
                      <MenuItem value={'Encarnación de Díaz'}>Encarnación de Díaz</MenuItem>
                      <MenuItem value={'Etzatlán'}>Etzatlán</MenuItem>
                      <MenuItem value={'Ixtlahuacán de los Membrillos'}>Ixtlahuacán de los Membrillos</MenuItem>
                      <MenuItem value={'Ixtlahuacán del Río'}>Ixtlahuacán del Río</MenuItem>
                      <MenuItem value={'Jalostotitlán'}>Jalostotitlán</MenuItem>
                      <MenuItem value={'Jamay'}>Jamay</MenuItem>
                      <MenuItem value={'Jesús María'}>Jesús María</MenuItem>
                      <MenuItem value={'La Barca'}>La Barca</MenuItem>
                      <MenuItem value={'La Huerta'}>La Huerta</MenuItem>
                      <MenuItem value={'San Juanito de Escobedo'}>San Juanito de Escobedo</MenuItem>
                      <MenuItem value={'Zapotlán el Grande'}>Zapotlán el Grande</MenuItem>
                  </Select>}
                  {this.state.estados === 'Hidalgo' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Acatlán'}>Acatlán</MenuItem>
                      <MenuItem value={'Acaxochitlán'}>Acaxochitlán</MenuItem>
                      <MenuItem value={'Actopan'}>Actopan</MenuItem>
                      <MenuItem value={'Agua Blanca de Iturbide'}>Agua Blanca de Iturbide</MenuItem>
                      <MenuItem value={'Ajacuba'}>Ajacuba</MenuItem>
                      <MenuItem value={'Alfajayucan'}>Alfajayucan</MenuItem>
                      <MenuItem value={'Almoloya'}>Almoloya</MenuItem>
                      <MenuItem value={'Apan'}>Apan</MenuItem>
                      <MenuItem value={'Atitalaquia'}>Atitalaquia</MenuItem>
                      <MenuItem value={'Atlapexco'}>Atlapexco</MenuItem>
                      <MenuItem value={'Atotonilco de Tula'}>Atotonilco de Tula</MenuItem>
                      <MenuItem value={'Atotonilco el Grande'}>Atotonilco el Grande</MenuItem>
                      <MenuItem value={'Calnali'}>Calnali</MenuItem>
                      <MenuItem value={'Cardonal'}>Cardonal</MenuItem>
                      <MenuItem value={'Chapantongo'}>Chapantongo</MenuItem>
                      <MenuItem value={'Chapulhuacán'}>Chapulhuacán</MenuItem>
                      <MenuItem value={'Chilcuautla'}>Chilcuautla</MenuItem>
                      <MenuItem value={'Cuautepec de Hinojosa'}>Cuautepec de Hinojosa</MenuItem>
                      <MenuItem value={'El Arenal'}>El Arenal</MenuItem>
                      <MenuItem value={'Eloxochitlán'}>Eloxochitlán</MenuItem>
                      <MenuItem value={'Emiliano Zapata'}>Emiliano Zapata</MenuItem>
                      <MenuItem value={'FEpazoyucan'}>FEpazoyucan</MenuItem>
                      <MenuItem value={'Francisco I. Madero'}>Francisco I. Madero</MenuItem>
                      <MenuItem value={'Huasca de Ocampo'}>Huasca de Ocampo</MenuItem>
                      <MenuItem value={'Huautla'}>Huautla</MenuItem>
                      <MenuItem value={'Huazalingo'}>Huazalingo</MenuItem>
                      <MenuItem value={'Huehuetla'}>Huehuetla</MenuItem>
                      <MenuItem value={'Huejutla de Reyes'}>Huejutla de Reyes</MenuItem>
                      <MenuItem value={'Huichapan'}>Huichapan</MenuItem>
                      <MenuItem value={'Ixmiquilpan'}>Ixmiquilpan</MenuItem>
                      <MenuItem value={'Jacala de Ledezma'}>Jacala de Ledezma</MenuItem>
                      <MenuItem value={'Jaltocán'}>Jaltocán</MenuItem>
                      <MenuItem value={'Juárez Hidalgo'}>Juárez Hidalgo</MenuItem>
                      <MenuItem value={'Lolotla'}>Lolotla</MenuItem>
                      <MenuItem value={'Metepec'}>Metepec</MenuItem>
                      <MenuItem value={'Nicolás Flores'}>Nicolás Flores</MenuItem>
                      <MenuItem value={'Nopala de Villagrán'}>Nopala de Villagrán</MenuItem>
                      <MenuItem value={'Omitlán de Juárez'}>Omitlán de Juárez</MenuItem>
                      <MenuItem value={'Pachuca de Soto'}>Pachuca de Soto</MenuItem>
                      <MenuItem value={'Pacula'}>Pacula</MenuItem>
                      <MenuItem value={'San Agustín Metzquititlán'}>San Agustín Metzquititlán</MenuItem>
                      <MenuItem value={'San Felipe Orizatlán'}>San Felipe Orizatlán</MenuItem>
                  </Select>}
                  {this.state.estados === 'Guerrero' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Acapulco de Juárez'}>Acapulco de Juárez</MenuItem>
                      <MenuItem value={'Ahuacuotzingo'}>Ahuacuotzingo</MenuItem>
                      <MenuItem value={'Ajuchitlán del Progreso'}>Ajuchitlán del Progreso</MenuItem>
                      <MenuItem value={'Alcozauca de Guerrero'}>Alcozauca de Guerrero</MenuItem>
                      <MenuItem value={'Alpoyeca'}>Alpoyeca</MenuItem>
                      <MenuItem value={'Apaxtla'}>Apaxtla</MenuItem>
                      <MenuItem value={'Arcelia'}>Arcelia</MenuItem>
                      <MenuItem value={'Atenango del Río'}>Atenango del Río</MenuItem>
                      <MenuItem value={'Atlamajalcingo del Monte'}>Atlamajalcingo del Monte</MenuItem>
                      <MenuItem value={'Atlixtac'}>Atlixtac</MenuItem>
                      <MenuItem value={'Atoyac de Álvarez'}>Atoyac de Álvarez</MenuItem>
                      <MenuItem value={'Ayutla de los Libres'}>Ayutla de los Libres</MenuItem>
                      <MenuItem value={'Azoyú'}>Azoyú</MenuItem>
                      <MenuItem value={'Benito Juárez'}>Benito Juárez</MenuItem>
                      <MenuItem value={'Buenavista de Cuéllar'}>Buenavista de Cuéllar</MenuItem>
                      <MenuItem value={'Chilapa de Álvarez'}>Chilapa de Álvarez</MenuItem>
                      <MenuItem value={'Chilpancingo de los Bravo'}>Chilpancingo de los Bravo</MenuItem>
                      <MenuItem value={'Coahuayutla de José María Izazaga'}>Coahuayutla de José María Izazaga</MenuItem>
                      <MenuItem value={'Cocula'}>Cocula</MenuItem>
                      <MenuItem value={'Copala'}>Copala</MenuItem>
                      <MenuItem value={'Copalillo'}>Copalillo</MenuItem>
                      <MenuItem value={'Copanatoyac'}>Copanatoyac</MenuItem>
                      <MenuItem value={'Coyuca de Benítez'}>Coyuca de Benítez</MenuItem>
                      <MenuItem value={'Coyuca de Catalán'}>Coyuca de Catalán</MenuItem>
                      <MenuItem value={'Cuajinicuilapa'}>Cuajinicuilapa</MenuItem>
                      <MenuItem value={'Cualác'}>Cualác</MenuItem>
                      <MenuItem value={'Cuautepec'}>Cuautepec</MenuItem>
                      <MenuItem value={'Cuetzala del Progreso'}>Cuetzala del Progreso</MenuItem>
                      <MenuItem value={'Cutzamala de Pinzón'}>Cutzamala de Pinzón</MenuItem>
                      <MenuItem value={'Florencio Villarreal'}>Florencio Villarreal</MenuItem>
                      <MenuItem value={'General Canuto A. Neri'}>General Canuto A. Neri</MenuItem>
                      <MenuItem value={'General Heliodoro Castillo'}>General Heliodoro Castillo</MenuItem>
                      <MenuItem value={'Huamuxtitlán'}>Huamuxtitlán</MenuItem>
                      <MenuItem value={'Huitzuco de los Figueroa'}>Lolotla</MenuItem>
                      <MenuItem value={'Iguala de la Independencia'}>Iguala de la Independencia</MenuItem>
                      <MenuItem value={'Igualapa'}>Igualapa</MenuItem>
                      <MenuItem value={'Metlatónoc'}>Metlatónoc</MenuItem>
                      <MenuItem value={'Mochitlán'}>Mochitlán</MenuItem>
                      <MenuItem value={'Olinalá'}>Olinalá</MenuItem>
                      <MenuItem value={'Ometepec'}>Ometepec</MenuItem>
                      <MenuItem value={'Pedro Ascencio Alquisiras'}>Pedro Ascencio Alquisiras</MenuItem>
                      <MenuItem value={'Petatlán'}>Petatlán</MenuItem>
                  </Select>}
                  {this.state.estados === 'Guanajuato' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Abasolo'}>Abasolo</MenuItem>
                      <MenuItem value={'Acámbaro'}>Acámbaro</MenuItem>
                      <MenuItem value={'Apaseo el Alto'}>Apaseo el Alto</MenuItem>
                      <MenuItem value={'Apaseo el Grande'}>Apaseo el Grande</MenuItem>
                      <MenuItem value={'Atarjea'}>Atarjea</MenuItem>
                      <MenuItem value={'Celaya'}>Celaya</MenuItem>
                      <MenuItem value={'Comonfort'}>Comonfort</MenuItem>
                      <MenuItem value={'Coroneo'}>Coroneo</MenuItem>
                      <MenuItem value={'Cortazar'}>Cortazar</MenuItem>
                      <MenuItem value={'Cuerámaro'}>Cuerámaro</MenuItem>
                      <MenuItem value={'Doctor Mora'}>Doctor Mora</MenuItem>
                      <MenuItem value={'Dolores Hidalgo Cuna de la Independencia Nacional'}>Dolores Hidalgo Cuna de la Independencia Nacional</MenuItem>
                      <MenuItem value={'Guanajuato'}>Guanajuato</MenuItem>
                      <MenuItem value={'Huanímaro'}>Huanímaro</MenuItem>
                      <MenuItem value={'Irapuato'}>Irapuato</MenuItem>
                      <MenuItem value={'Jaral del Progreso'}>Jaral del Progreso</MenuItem>
                      <MenuItem value={'Jerécuaro'}>Jerécuaro</MenuItem>
                      <MenuItem value={'León'}>León</MenuItem>
                      <MenuItem value={'Manuel Doblado'}>Manuel Doblado</MenuItem>
                      <MenuItem value={'Moroleón'}>Moroleón</MenuItem>
                      <MenuItem value={'Ocampo'}>Ocampo</MenuItem>
                      <MenuItem value={'Pénjamo'}>Pénjamo</MenuItem>
                      <MenuItem value={'Pueblo Nuevo'}>Pueblo Nuevo</MenuItem>
                      <MenuItem value={'Purísima del Rincón'}>Purísima del Rincón</MenuItem>
                      <MenuItem value={'Romita'}>Romita</MenuItem>
                      <MenuItem value={'Salamanca'}>Salamanca</MenuItem>
                      <MenuItem value={'San Diego de la Unión'}>San Diego de la Unión</MenuItem>
                      <MenuItem value={'San Felipe'}>San Felipe</MenuItem>
                      <MenuItem value={'San Francisco del Rincón'}>San Francisco del Rincón</MenuItem>
                      <MenuItem value={'San José Iturbide'}>San José Iturbide</MenuItem>
                      <MenuItem value={'San Luis de la Paz'}>San Luis de la Paz</MenuItem>
                      <MenuItem value={'San Miguel de Allende'}>San Miguel de Allende</MenuItem>
                      <MenuItem value={'Santa Catarina'}>Santa Catarina</MenuItem>
                      <MenuItem value={'Santa Cruz de Juventino Rosas'}>Santa Cruz de Juventino Rosas</MenuItem>
                      <MenuItem value={'Santiago Maravatío'}>Santiago Maravatío</MenuItem>
                      <MenuItem value={'Silao de la Victoria'}>Silao de la Victoria</MenuItem>
                      <MenuItem value={'Victoria'}>Victoria</MenuItem>
                      <MenuItem value={'Villagrán'}>Villagrán</MenuItem>
                      <MenuItem value={'Xichú'}>Xichú</MenuItem>
                      <MenuItem value={'Yuriria'}>Yuriria</MenuItem>
                  </Select>}
                  {this.state.estados === 'Durango' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Canatlán'}>Canatlán</MenuItem>
                      <MenuItem value={'Canelas'}>Canelas</MenuItem>
                      <MenuItem value={'Coneto de Comonfort'}>Coneto de Comonfort</MenuItem>
                      <MenuItem value={'Cuencamé'}>Cuencamé</MenuItem>
                      <MenuItem value={'Durango'}>Durango</MenuItem>
                      <MenuItem value={'El Oro'}>El Oro</MenuItem>
                      <MenuItem value={'General Simón Bolívar'}>General Simón Bolívar</MenuItem>
                      <MenuItem value={'Gómez Palacio'}>Gómez Palacio</MenuItem>
                      <MenuItem value={'Guadalupe Victoria'}>Guadalupe Victoria</MenuItem>
                      <MenuItem value={'Guanaceví'}>Guanaceví</MenuItem>
                      <MenuItem value={'Hidalgo'}>Hidalgo</MenuItem>
                      <MenuItem value={'Indé'}>Indé</MenuItem>
                      <MenuItem value={'Lerdo'}>Lerdo</MenuItem>
                      <MenuItem value={'Mapimí'}>Mapimí</MenuItem>
                      <MenuItem value={'Mezquital'}>Mezquital</MenuItem>
                      <MenuItem value={'Nazas'}>Nazas</MenuItem>
                      <MenuItem value={'Nombre de Dios'}>Nombre de Dios</MenuItem>
                      <MenuItem value={'Ocampo'}>Ocampo</MenuItem>
                      <MenuItem value={'Otáez'}>Otáez</MenuItem>
                      <MenuItem value={'Pánuco de Coronado'}>Pánuco de Coronado</MenuItem>
                      <MenuItem value={'Peñón Blanco'}>Peñón Blanco</MenuItem>
                      <MenuItem value={'Poanas'}>Poanas</MenuItem>
                      <MenuItem value={'Pueblo Nuevo'}>Pueblo Nuevo</MenuItem>
                      <MenuItem value={'Rodeo'}>Rodeo</MenuItem>
                      <MenuItem value={'San Bernardo'}>San Bernardo</MenuItem>
                      <MenuItem value={'San Dimas'}>San Dimas</MenuItem>
                      <MenuItem value={'San Juan de Guadalupe'}>San Juan de Guadalupe</MenuItem>
                      <MenuItem value={'San Juan del Río'}>San Juan del Río</MenuItem>
                      <MenuItem value={'San Luis del Cordero'}>San Luis del Cordero</MenuItem>
                      <MenuItem value={'San Pedro del Gallo'}>San Pedro del Gallo</MenuItem>
                      <MenuItem value={'San José Iturbide'}>San José Iturbide</MenuItem>
                      <MenuItem value={'San Luis de la Paz'}>San Luis de la Paz</MenuItem>
                      <MenuItem value={'San Miguel de Allende'}>San Miguel de Allende</MenuItem>
                      <MenuItem value={'Santa Catarina'}>Santa Catarina</MenuItem>
                      <MenuItem value={'Santa Cruz de Juventino Rosas'}>Santa Cruz de Juventino Rosas</MenuItem>
                      <MenuItem value={'Santiago Maravatío'}>Santiago Maravatío</MenuItem>
                      <MenuItem value={'Silao de la Victoria'}>Silao de la Victoria</MenuItem>
                      <MenuItem value={'Victoria'}>Victoria</MenuItem>
                      <MenuItem value={'Villagrán'}>Villagrán</MenuItem>
                      <MenuItem value={'Xichú'}>Xichú</MenuItem>
                      <MenuItem value={'Yuriria'}>Yuriria</MenuItem>
                  </Select>}
                  {this.state.estados === 'Ciudad de México' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Azcapotzalco'}>Azcapotzalco</MenuItem>
                      <MenuItem value={'Coyoacán'}>Coyoacán</MenuItem>
                      <MenuItem value={'Cuajimalpa de Morelos'}>Cuajimalpa de Morelos</MenuItem>
                      <MenuItem value={'Gustavo A. Madero'}>Gustavo A. Madero</MenuItem>
                      <MenuItem value={'Iztacalco'}>Iztacalco</MenuItem>
                      <MenuItem value={'Iztapalapa'}>Iztapalapa</MenuItem>
                      <MenuItem value={'La Magdalena Contreras'}>La Magdalena Contreras</MenuItem>
                      <MenuItem value={'Milpa Alta'}>Milpa Alta</MenuItem>
                      <MenuItem value={'Álvaro Obregón'}>Álvaro Obregón</MenuItem>
                      <MenuItem value={'Tláhuac'}>Tláhuac</MenuItem>
                      <MenuItem value={'Tlalpan'}>Tlalpan</MenuItem>
                      <MenuItem value={'Xochimilco'}>Xochimilco</MenuItem>
                      <MenuItem value={'Benito Juárez'}>Benito Juárez</MenuItem>
                      <MenuItem value={'Cuauhtémoc'}>Cuauhtémoc</MenuItem>
                      <MenuItem value={'Miguel Hidalgo'}>Miguel Hidalgo</MenuItem>
                      <MenuItem value={'Venustiano Carranza'}>Venustiano Carranza</MenuItem>
                  </Select>}
                  {this.state.estados === 'Chihuahua' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Ahumada'}>Ahumada</MenuItem>
                      <MenuItem value={'Aldama'}>Aldama</MenuItem>
                      <MenuItem value={'Allende'}>Allende</MenuItem>
                      <MenuItem value={'Aquiles Serdán'}>Aquiles Serdán</MenuItem>
                      <MenuItem value={'Ascensión'}>Ascensión</MenuItem>
                      <MenuItem value={'Bachíniva'}>Bachíniva</MenuItem>
                      <MenuItem value={'Balleza'}>Balleza</MenuItem>
                      <MenuItem value={'Batopilas'}>Batopilas</MenuItem>
                      <MenuItem value={'Bocoyna'}>Bocoyna</MenuItem>
                      <MenuItem value={'Buenaventura'}>Buenaventura</MenuItem>
                      <MenuItem value={'Camargo'}>Camargo</MenuItem>
                      <MenuItem value={'Carichí'}>Carichí</MenuItem>
                      <MenuItem value={'Casas Grandes'}>Casas Grandes</MenuItem>
                      <MenuItem value={'Coronado'}>Coronado</MenuItem>
                      <MenuItem value={'Coyame del Sotol'}>Coyame del Sotol</MenuItem>
                      <MenuItem value={'La Cruz'}>La Cruz</MenuItem>
                      <MenuItem value={'Cuauhtémoc'}>Cuauhtémoc</MenuItem>
                      <MenuItem value={'Cusihuiriachi'}>Cusihuiriachi</MenuItem>
                      <MenuItem value={'Chihuahua'}>Chihuahua</MenuItem>
                      <MenuItem value={'Chínipas'}>Chínipas</MenuItem>
                      <MenuItem value={'Delicias'}>Delicias</MenuItem>
                      <MenuItem value={'Dr. Belisario Domínguez'}>Dr. Belisario Domínguez</MenuItem>
                      <MenuItem value={'Galeana'}>Galeana</MenuItem>
                      <MenuItem value={'Santa Isabel'}>Santa Isabel</MenuItem>
                      <MenuItem value={'Gómez Farías'}>Gómez Farías</MenuItem>
                      <MenuItem value={'Gran Morelos'}>Gran Morelos</MenuItem>
                      <MenuItem value={'Guachochi'}>Guachochi</MenuItem>
                      <MenuItem value={'Guadalupe'}>Guadalupe</MenuItem>
                      <MenuItem value={'Guadalupe y Calvo'}>Guadalupe y Calvo</MenuItem>
                      <MenuItem value={'Guazapares'}>Guazapares</MenuItem>
                      <MenuItem value={'Guerrero'}>Guerrero</MenuItem>
                      <MenuItem value={'Hidalgo del Parral'}>Hidalgo del Parral</MenuItem>
                      <MenuItem value={'Huejotitán'}>Huejotitán</MenuItem>
                      <MenuItem value={'Ignacio Zaragoza'}>Ignacio Zaragoza</MenuItem>
                      <MenuItem value={'Janos'}>Janos</MenuItem>
                      <MenuItem value={'Jiménez'}>Jiménez</MenuItem>
                      <MenuItem value={'Juárez'}>Juárez</MenuItem>
                      <MenuItem value={'Matachí'}>Matachí</MenuItem>
                      <MenuItem value={'Matamoros'}>Matamoros</MenuItem>
                      <MenuItem value={'Meoqui'}>Meoqui</MenuItem>
                      <MenuItem value={'Morelos'}>Morelos</MenuItem>
                      <MenuItem value={'Moris'}>Moris</MenuItem>
                      <MenuItem value={'Namiquipa'}>Namiquipa</MenuItem>
                  </Select>}
                  {this.state.estados === 'Chiapas' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Acacoyagua'}>Acacoyagua</MenuItem>
                      <MenuItem value={'Acala'}>Acala</MenuItem>
                      <MenuItem value={'Acapetahua'}>Acapetahua</MenuItem>
                      <MenuItem value={'Altamirano'}>Altamirano</MenuItem>
                      <MenuItem value={'Amatán'}>Amatán</MenuItem>
                      <MenuItem value={'Amatenango de la Frontera'}>Amatenango de la Frontera</MenuItem>
                      <MenuItem value={'Amatenango del Valle'}>Amatenango del Valle</MenuItem>
                      <MenuItem value={'Angel Albino Corzo'}>Angel Albino Corzo</MenuItem>
                      <MenuItem value={'Arriaga'}>Arriaga</MenuItem>
                      <MenuItem value={'Bejucal de Ocampo'}>Bejucal de Ocampo</MenuItem>
                      <MenuItem value={'Bella Vista'}>Bella Vista</MenuItem>
                      <MenuItem value={'Berriozábal'}>Berriozábal</MenuItem>
                      <MenuItem value={'Bochil'}>Bochil</MenuItem>
                      <MenuItem value={'El Bosque'}>El Bosque</MenuItem>
                      <MenuItem value={'Cacahoatán'}>Cacahoatán</MenuItem>
                      <MenuItem value={'Catazajá'}>Catazajá</MenuItem>
                      <MenuItem value={'Cintalapa'}>Cintalapa</MenuItem>
                      <MenuItem value={'Coapilla'}>Coapilla</MenuItem>
                      <MenuItem value={'Comitán de Domínguez'}>Comitán de Domínguez</MenuItem>
                      <MenuItem value={'La Concordia'}>La Concordia</MenuItem>
                      <MenuItem value={'Copainalá'}>Copainalá</MenuItem>
                      <MenuItem value={'Chalchihuitán'}>Chalchihuitán</MenuItem>
                      <MenuItem value={'Chamula'}>Chamula</MenuItem>
                      <MenuItem value={'Chanal'}>Chanal</MenuItem>
                      <MenuItem value={'Chapultenango'}>Chapultenango</MenuItem>
                      <MenuItem value={'Chenalhó'}>Chenalhó</MenuItem>
                      <MenuItem value={'Chiapa de Corzo'}>Chiapa de Corzo</MenuItem>
                      <MenuItem value={'Chiapilla'}>Chiapilla</MenuItem>
                      <MenuItem value={'Chicoasén'}>Chicoasén</MenuItem>
                      <MenuItem value={'Chicomuselo'}>Chicomuselo</MenuItem>
                      <MenuItem value={'Chilón'}>Chilón</MenuItem>
                      <MenuItem value={'Escuintla'}>Escuintla</MenuItem>
                      <MenuItem value={'Francisco León'}>Francisco León</MenuItem>
                      <MenuItem value={'Frontera Comalapa'}>Frontera Comalapa</MenuItem>
                      <MenuItem value={'Frontera Hidalgo'}>Frontera Hidalgo</MenuItem>
                      <MenuItem value={'La Grandeza'}>La Grandeza</MenuItem>
                      <MenuItem value={'Huehuetán'}>Huehuetán</MenuItem>
                      <MenuItem value={'Ixtacomitán'}>Ixtacomitán</MenuItem>
                      <MenuItem value={'Ixtapa'}>Ixtapa</MenuItem>
                      <MenuItem value={'Ixtapangajoya'}>Ixtapangajoya</MenuItem>
                      <MenuItem value={'Jiquipilas'}>Jiquipilas</MenuItem>
                      <MenuItem value={'Jitotol'}>Jitotol</MenuItem>
                      <MenuItem value={'Juárez'}>Juárez</MenuItem>
                  </Select>}
                  {this.state.estados === 'Colima' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Armería'}>Armería</MenuItem>
                      <MenuItem value={'Colima'}>Colima</MenuItem>
                      <MenuItem value={'Comala'}>Comala</MenuItem>
                      <MenuItem value={'Coquimatlán'}>Coquimatlán</MenuItem>
                      <MenuItem value={'Cuauhtémoc'}>Cuauhtémoc</MenuItem>
                      <MenuItem value={'Ixtlahuacán'}>Ixtlahuacán</MenuItem>
                      <MenuItem value={'Manzanillo'}>Manzanillo</MenuItem>
                      <MenuItem value={'Minatitlán'}>Minatitlán</MenuItem>
                      <MenuItem value={'Tecomán'}>Tecomán</MenuItem>
                      <MenuItem value={'Villa de Álvarez'}>Villa de Álvarez</MenuItem>
                  </Select>}
                  {this.state.estados === 'Coahuila' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Abasolo'}>Abasolo</MenuItem>
                      <MenuItem value={'Acuña'}>Acuña</MenuItem>
                      <MenuItem value={'Allende'}>Allende</MenuItem>
                      <MenuItem value={'Arteaga'}>Arteaga</MenuItem>
                      <MenuItem value={'Candela'}>Candela</MenuItem>
                      <MenuItem value={'Castaños'}>Castaños</MenuItem>
                      <MenuItem value={'Cuatro Ciénegas'}>Cuatro Ciénegas</MenuItem>
                      <MenuItem value={'Escobedo'}>Escobedo</MenuItem>
                      <MenuItem value={'Francisco I. Madero'}>Francisco I. Madero</MenuItem>
                      <MenuItem value={'Frontera'}>Frontera</MenuItem>
                      <MenuItem value={'General Cepeda'}>General Cepeda</MenuItem>
                      <MenuItem value={'Guerrero'}>Guerrero</MenuItem>
                      <MenuItem value={'Hidalgo'}>Hidalgo</MenuItem>
                      <MenuItem value={'Jiménez'}>Jiménez</MenuItem>
                      <MenuItem value={'Juárez'}>Juárez</MenuItem>
                      <MenuItem value={'Lamadrid'}>Lamadrid</MenuItem>
                      <MenuItem value={'Matamoros'}>Matamoros</MenuItem>
                      <MenuItem value={'Monclova'}>Monclova</MenuItem>
                      <MenuItem value={'Morelos'}>Morelos</MenuItem>
                      <MenuItem value={'Múzquiz'}>Múzquiz</MenuItem>
                      <MenuItem value={'Nadadores'}>Nadadores</MenuItem>
                      <MenuItem value={'Nava'}>Nava</MenuItem>
                      <MenuItem value={'Ocampo'}>Ocampo</MenuItem>
                      <MenuItem value={'Parras'}>Parras</MenuItem>
                      <MenuItem value={'Piedras Negras'}>Piedras Negras</MenuItem>
                      <MenuItem value={'Progreso'}>Progreso</MenuItem>
                      <MenuItem value={'Ramos Arizpe'}>Ramos Arizpe</MenuItem>
                      <MenuItem value={'Sabinas'}>Sabinas</MenuItem>
                      <MenuItem value={'Sacramento'}>Sacramento</MenuItem>
                      <MenuItem value={'Saltillo'}>Saltillo</MenuItem>
                      <MenuItem value={'San Buenaventura'}>San Buenaventura</MenuItem>
                      <MenuItem value={'San Juan de Sabinas'}>San Juan de Sabinas</MenuItem>
                      <MenuItem value={'San Pedro'}>San Pedro</MenuItem>
                      <MenuItem value={'Sierra Mojada'}>Sierra Mojada</MenuItem>
                      <MenuItem value={'Torreón'}>Torreón</MenuItem>
                      <MenuItem value={'Viesca'}>Viesca</MenuItem>
                      <MenuItem value={'Villa Unión'}>Villa Unión</MenuItem>
                  </Select>}
                  {this.state.estados === 'Campeche' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Calkiní'}>Calkiní</MenuItem>
                      <MenuItem value={'Campeche'}>Campeche</MenuItem>
                      <MenuItem value={'Carmen'}>Carmen</MenuItem>
                      <MenuItem value={'Champotón'}>Champotón</MenuItem>
                      <MenuItem value={'Hecelchakán'}>Hecelchakán</MenuItem>
                      <MenuItem value={'Hopelchén'}>Hopelchén</MenuItem>
                      <MenuItem value={'Palizada'}>Palizada</MenuItem>
                      <MenuItem value={'Tenabo'}>Tenabo</MenuItem>
                      <MenuItem value={'Escárcega'}>Escárcega</MenuItem>
                      <MenuItem value={'Calakmul'}>Calakmul</MenuItem>
                      <MenuItem value={'Candelaria'}>Candelaria</MenuItem>
                  </Select>}
                  {this.state.estados === 'Baja California Sur' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Comondú'}>Comondú</MenuItem>
                      <MenuItem value={'Mulegé'}>Mulegé</MenuItem>
                      <MenuItem value={'La Paz'}>La Paz</MenuItem>
                      <MenuItem value={'Los Cabos'}>Los Cabos</MenuItem>
                      <MenuItem value={'Loreto'}>Loreto</MenuItem>
                  </Select>}
                  {this.state.estados === 'Baja California' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Ensenada'}>Ensenada</MenuItem>
                      <MenuItem value={'Mexicali'}>Mexicali</MenuItem>
                      <MenuItem value={'Tecate'}>Tecate</MenuItem>
                      <MenuItem value={'Tijuana'}>Tijuana</MenuItem>
                      <MenuItem value={'Playas de Rosarito'}>Playas de Rosarito</MenuItem>
                  </Select>}
                  {this.state.estados === 'Aguascalientes' &&
                    <Select
                      label='Municipios'
                      name='municipios'
                      onChange={this.onChange}
                      required
                    >
                      <MenuItem value={'Aguascalientes'}>Aguascalientes</MenuItem>
                      <MenuItem value={'Asientos'}>Asientos</MenuItem>
                      <MenuItem value={'Calvillo'}>Calvillo</MenuItem>
                      <MenuItem value={'Cosío'}>Cosío</MenuItem>
                      <MenuItem value={'Jesús María'}>Jesús María</MenuItem>
                      <MenuItem value={'Pabellón de Arteaga'}>Pabellón de Arteaga</MenuItem>
                      <MenuItem value={'Rincón de Romos'}>Rincón de Romos</MenuItem>
                      <MenuItem value={'San José de Gracia'}>San José de Gracia</MenuItem>
                      <MenuItem value={'Tepezalá'}>Tepezalá</MenuItem>
                      <MenuItem value={'El Llano'}>El Llano</MenuItem>
                      <MenuItem value={'San Francisco de los Romo'}>San Francisco de los Romo</MenuItem>
                  </Select>}
                </FormControl>
              </div>
              <TextField
                label='Lugar Especifico'
                style={{ marginTop: '15px', width: '100%' }}
                name='lugar'
                onChange={this.onChange}
                required
              />
              <FormControl style={{ marginTop: '15px', width: '100%' }}>
                <InputLabel>Responsable de Actividad</InputLabel>
                <Select
                  label='Responsable'
                  name='responsable'
                  onChange={this.onChange}
                  required
                >
                  <MenuItem value={'Raúl ARROYO'}>Raúl ARROYO</MenuItem>
                  <MenuItem value={'Arturo Flores Molina'}>Arturo Flores Molina</MenuItem>
                  <MenuItem value={'Diana Corona Meneses'}>Diana Corona Meneses</MenuItem>
                  <MenuItem value={'Eder Arteaga Tavera'}>Eder Arteaga Tavera</MenuItem>
                  <MenuItem value={'Eduardo González Mata'}>Eduardo González Mata</MenuItem>
                  <MenuItem value={'Edwin Hernández Garrido'}>Edwin Hernández Garrido</MenuItem>
                  <MenuItem value={'Gerardo Flores Álvarez'}>Gerardo Flores Álvarez</MenuItem>
                  <MenuItem value={'Gilberto Ramírez Rico'}>Gilberto Ramírez Rico</MenuItem>
                  <MenuItem value={'Humberto Vieyra Alamilla'}>Humberto Vieyra Alamilla</MenuItem>
                  <MenuItem value={'Jacob Alejandro Tolentino Habib'}>Jacob Alejandro Tolentino Habib</MenuItem>
                  <MenuItem value={'José Manning Ramírez'}>José Manning Ramírez</MenuItem>
                  <MenuItem value={'Laura Isabel Torres Villegas'}>Laura Isabel Torres Villegas</MenuItem>
                  <MenuItem value={'León Maximiliano Hernández Valdés'}>León Maximiliano Hernández Valdés</MenuItem>
                  <MenuItem value={'Lourdes Herrera Fragoso'}>Lourdes Herrera Fragoso</MenuItem>
                  <MenuItem value={'Lucio Rosas Braco'}>Lucio Rosas Braco</MenuItem>
                  <MenuItem value={'Luz María Ramírez Pérez'}>Luz María Ramírez Pérez</MenuItem>
                  <MenuItem value={'Manuel García Guzmán'}>Manuel García Guzmán</MenuItem>
                  <MenuItem value={'Mercedes Citlali Mendoza Meza'}>Mercedes Citlali Mendoza Meza</MenuItem>
                  <MenuItem value={'Michel Izguerra'}>Michel Izguerra</MenuItem>
                  <MenuItem value={'Ricardo César Gonzáles Baños'}>Ricardo César Gonzáles Baños</MenuItem>
                  <MenuItem value={'Sergio Zúñiga Hernández'}>Sergio Zúñiga Hernández</MenuItem>
                  <MenuItem value={'Sissi Anette Rodríguez Fernández'}>Sissi Anette Rodríguez Fernández</MenuItem>
                  <MenuItem value={'Sonia Esmeralda Mejía González'}>Sonia Esmeralda Mejía González</MenuItem>
                  <MenuItem value={'Víctor Ariel Pérez Benítez'}>Víctor Ariel Pérez Benítez</MenuItem>
                  <MenuItem value={'Víctor Austria Mercado'}></MenuItem>
                  <MenuItem value={'Vladimir Andrade Soto'}>Vladimir Andrade Soto</MenuItem>
                  <MenuItem value={'Yolanda Samperio Delgadillo'}>Yolanda Samperio Delgadillo</MenuItem>

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
              <div className='save-btr'>
                <Fab color='primary' aria-label='add' style={{ background: 'red' }} onClick={this.handleBack.bind(this)}>
                  <CloseIcon />
                </Fab>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
