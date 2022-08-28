import React from 'react'
import './journey.css'
import { Box, Container, Grid, Stack } from '@mui/material'
import { Item } from '../Item'
import Flowchart from '../../assets/home/Flow Chart.png'


export const Journey = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs='auto' pb={8}>
                    <h2>Your Journey with Freedom <br/> For Life </h2>
                </Grid>
            </Grid> 
            <Grid container justifyContent='center' pb={12}>
                <Grid item xs='auto'>
                    <img alt='Freedom For Life Journey' src={Flowchart} />
                </Grid>
            </Grid>
        </Container>
    )
}
 