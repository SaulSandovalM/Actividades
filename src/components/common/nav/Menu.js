import React from 'react'
import { bool } from 'prop-types'
import Nav from './Nav'
import { StyledMenu } from './Menu.styled'
import firebase from '../../../Firebase'

const Menu = ({ open, ...props }) => {
var user = firebase.auth().currentUser
var email

if (user != null) {
email = user.email
}

let admin
if (email === 'procuadmin@gmail.com') {
      admin = 'ADMIN'
    } else if  (email === 'sderechos@procu.gob.mx') {
      admin = 'Derechos Humanos'
    } else if  (email === 'subponiente@procu.gob.mx') {
      admin = 'Sub Poniente'
    }  else if  (email === 'delitosaltoi@procu.gob.mx') {
      admin = 'Delitos'
    } else if  (email === 'institutofp@procu.gob.mx') {
      admin = 'IFP'
    } else if  (email === 'cirvr@prou.gob.mx') {
      admin = 'CIRVR'
    } else if  (email === 'mandamientosj@procu.gob.mx') {
      admin = 'Mandamientos Judiciales'
    } else if  (email === 'dgjuridica@procu.gob.mx') {
      admin = 'Juridico'
    } else if  (email === 'fcorrupcion@procu.gob.mx') {
      admin = 'fcorrupcion'
    } else if  (email === 'felectorales@procu.gob.mx') {
      admin = 'Electorales'
    } else if  (email === 'relacionesni@procu.gob.mx') {
      admin = 'R. Internacionales'
    } else if  (email === 'suboriente@procu.gob.mx') {
      admin = 'Oriente'
    } else if  (email === 'coe@procu.gob.mx') {
      admin = 'COE'
    } else if  (email === 'dprevencion@procu.gob.mx') {
      admin = 'Prevencion'
    } else if  (email === 'dgfinanzas@procu.gob.mx') {
      admin = 'Finanzas'
    } else if  (email === 'justiciar@procu.gob.mx') {
      admin = 'Justicia R.'
    } else if  (email === 'dgpoliciai@procu.gob.mx') {
      admin = 'DGPI'
    } else if  (email === 'combatesecuestro@procu.gob.mx') {
      admin = 'Secuentro'
    } else if  (email === 'inteligenciap@procu.gob.mx') {
      admin = 'Inteligencia'
    } else if  (email === 'ccomunicacion@procu.gob.mx') {
      admin = 'Comunicacion'
    } else if  (email === 'visitaduriag@procu.gob.mx') {
      admin = 'Visitaduria'
    } else if  (email === 'dgpericiales@procu.gob.mx') {
      admin = 'DGP'
    } else if  (email === 'fer@procu.gob.mx') {
      admin = 'FERA'
    } else if  (email === 'diana.pgjh@procu.gob.mx') {
      admin = 'Diana'
    } else if  (email === 'ruth.pgjh@hidalgo.gob.mx') {
      admin = 'Ruth'
    } else if  (email === 'eloisa.pgjh@procu.gob.mx') {
      admin = 'Elo'
    } else if  (email === 'mariam.pgjh@procu.gob.mx') {
      admin = 'Mariam'
    } else if  (email === 'jalfredo.pgjh@procu.gob.mx'){
      admin = 'Jose Alfredo'
    } else if  (email === 'nadia.pgjh@procu.gob.mx') {
      admin = 'Nad'
    }

  const isHidden = open !== false


  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>


    { admin === 'Derechos Humanos'  &&  <Nav />}
    { admin === 'ADMIN'  &&  <Nav />}
    { admin === 'Sub Poniente'  &&  <Nav />}
    { admin === 'Delitos'  &&  <Nav />}
    { admin === 'IFP'  &&  <Nav />}
    { admin === 'CIRVR'  &&  <Nav />}
    { admin === 'Mandamientos Judiciales'  &&  <Nav />}
    { admin === 'Juridico'  &&  <Nav />}
    { admin === 'fcorrupcion'  &&  <Nav />}
    { admin === 'Electorales'  &&  <Nav />}
    { admin === 'R. Internacionales'  &&  <Nav />}
    { admin === 'Oriente'  &&  <Nav />}
    { admin === 'COE'  &&  <Nav />}
    { admin === 'Prevencion'  &&  <Nav />}
    { admin === 'Finanzas'  &&  <Nav />}
    { admin === 'Justicia R'  &&  <Nav />}
    { admin === 'DGPI'  &&  <Nav />}
    { admin === 'Secuentro'  &&  <Nav />}
    { admin === 'Inteligencia'  &&  <Nav />}
    { admin === 'Comunicacion'  &&  <Nav />}
    { admin === 'Visitaduria'  &&  <Nav />}
    { admin === 'DGP'  &&  <Nav />}
    { admin === 'FERA'  &&  <Nav />}
    { admin === 'Diana'  &&  <Nav />}
    { admin === 'Ruth'  &&  <Nav />}
    { admin === 'Elo'  &&  <Nav />}
    { admin === 'Mariam'  &&  <Nav />}
    { admin === 'Jose Alfredo'  &&  <Nav />}
    { admin === 'Nad ' && <Nav />}
    <Nav />

    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
