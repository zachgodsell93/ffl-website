import React from 'react'
import './infosection.css'
import { Grid, Stack } from '@mui/material'
import { Container } from '@mui/system'
import Smile from '../../assets/home/smile1.png'
import Phone from '../../assets/home/telephone1.png'
import Verified from '../../assets/home/verify1.png'
import { Item } from '../Item'

export const InfoSection = () => {
    return (
        <Container>
            <Grid container py={8}>
                <Grid item md={4}>
                    <Grid container sx={{maxHeight: '80px'}} alignContent='center'>
                        <Grid item pr={2}>
                            <img alt='smile' src={Verified} />
                        </Grid>
                        <Grid item alignContent='center'>
                            <Stack  direction='column'>
                                <h6>Verifeyed Workers</h6>
                                <p>Sublime text goes here</p>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4}>
                    <Grid container sx={{maxHeight: '80px'}} alignContent='center'>
                        <Grid item pr={2}>
                            <img alt='smile' src={Phone} />
                        </Grid>
                        <Grid item alignContent='center'>
                            <Stack  direction='column'>
                                <h6>Amazing Support</h6>
                                <p>Sublime text goes here</p>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4}>
                    <Grid container sx={{maxHeight: '80px'}} alignContent='center'>
                        <Grid item pr={2}>
                            <img alt='smile' src={Smile} />
                        </Grid>
                        <Grid item alignContent='center'>
                            <Stack  direction='column'>
                                <h6>Guarenteed Good Times</h6>
                                <p>Sublime text goes here</p>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container py={2}>
                <Grid item md={6}>
                    <Stack>
                        <Item>
                            <h2>
                                The future of NDIS Support
                            </h2>
                        </Item>
                        <Item>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing<br /> 
                            and typesetting industry. Scrambled it to make a<br/> 
                            type specimen book
                            </p>
                        </Item>
                        <Item>
                            
                        </Item>
                    </Stack>
                </Grid>
                <Grid item md={6}>

                </Grid>
            </Grid>
        </Container>
    )
}
