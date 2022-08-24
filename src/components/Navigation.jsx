import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import './navigation.css'
import { Container, Grid, Stack, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import FflLogo from '../assets/FFLLogo.png'

export const Navigation = () => {

    const [path, setPath] = useState(null)
    
    useEffect(() => {
        const pathname = window.location.pathname 
        setPath(pathname)
    },[])

    return (
            <Grid container>
                <Grid item md={6} pl={5} pt={2}>
                    <img alt='Freedom For Life Logo' src={FflLogo} style={{maxHeight: '80px'}}/>
                </Grid>
                <Grid item md={6} pt={2}>
                    <Stack direction='row' pr={6} spacing={12} justifyContent='end'>
                        <Link to='/'  style={{textDecoration: path === '/' ? 'underline' : 'none'}}>
                            <Item>
                                <h5>Home</h5>
                            </Item>
                        </Link>
                        <Link to='/services' style={{textDecoration: path === '/services' ? 'underline' : 'none'}}>
                            <Item>
                                <h5>Services</h5>
                            </Item>
                        </Link>
                        <Link to='/pricing' style={{textDecoration: path === '/pricing' ? 'underline' : 'none'}}>
                            <Item>
                                <h5>Pricing</h5>
                            </Item>
                        </Link>
                        <Link to='/about' style={{textDecoration: path === '/about' ? 'underline' : 'none'}}>
                            <Item>
                                <h5>About</h5>
                            </Item>
                        </Link>
                        <Link to='/contact' style={{textDecoration: path === '/contact' ? 'underline' : 'none'}}>
                            <Item>
                                <h5>Contact</h5>
                            </Item>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
    )
}

const Item = styled(Paper)`
    text-align: center;
    border-width: 0px;
    box-shadow: none;
    padding: 0.25rem;
    text-decoration: none;

`
