import React from 'react'
import styled from 'styled-components'
import './herosection.css'
import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import HeroImage from '../../assets/home/Hero Image.png'
import { Item } from '../Item'
import { Button } from '@mui/material'
import { ButtonUnstyled } from '@mui/base'

export const HeroSection = () => {
 
    return (
        <Grid container>
            <Grid item md={5} pl={1}>
                <Stack direction='column'>
                    <Item>
                        <h2>Sharing the <br/>Attitude for <br/>Gratitude</h2>
                    </Item>
                    <Item>
                        <h6 style={{marginTop: '-15px'}}>Book in to see one of our specialist and <br/>find out what we can do for you</h6>
                    </Item>
                    <Item>
                        <ContactButton>Contact Us</ContactButton>
                    </Item>
                </Stack>
            </Grid>
            <Grid item md={7}>
                <img alt='We support the NDIS Hero' src={HeroImage} style={{maxWidth: '100%'}} />
            </Grid>

        </Grid>
  )
}

const ContactButton = styled(ButtonUnstyled)`
    background-color: rgba(255, 233, 0, 0.63);
    color: black;
    padding: 0.75rem 3rem;
    border-radius: 15px;
    font-family: 'Poppins';
    border: 0px;
    :hover {
        background-color: rgba(255, 233, 0, 1);
        cursor: pointer;
    }
`