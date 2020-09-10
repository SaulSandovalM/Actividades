import React from 'react'
import { bool, func } from 'prop-types'
import { StyledBurger } from './Burger.styled'

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <StyledBurger>
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger
