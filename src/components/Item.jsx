import React from 'react'
import { Paper } from '@mui/material'
import styled from '@emotion/styled'

export const Item = ({children}) => {
  return (
    <It>{children}</It>
  )
}

const It = styled(Paper)`
    border-width: 0px;
    box-shadow: none;
    padding: 0.25rem;
    text-decoration: none;

`
