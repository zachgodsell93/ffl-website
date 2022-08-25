import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import './navigation.css'
import { Container, Grid, Stack, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import FflLogo from '../assets/FFLLogo.png'
import { Item } from './Item'

export const Navigation = ({children}) => {

    const [path, setPath] = useState(null)
    const [windowChange, setWindowChange] = useState(false)

    const pageChange = () => {
        windowChange === false ? setWindowChange(true) : setWindowChange(false)
    }
    
    useEffect(() => {
        const pathname = window.location.pathname 
        setPath(pathname)
    },[windowChange])

    return (
        <>
            <Grid container pb={6}>
                <Grid item md={6} pl={5} pt={2}>
                    <img alt='Freedom For Life Logo' src={FflLogo} style={{maxHeight: '80px'}}/>
                </Grid>
                <Grid item md={6} pt={2}>
                    <Stack direction='row' pr={6} spacing={12} justifyContent='end'>
                        <Link to='/' onClick={pageChange} style={{
                            textDecoration: path === '/' ? 'underline #FFD600 solid 4px' : 'none', 
                            textUnderlineOffset: '16px'
                        }}>
                            <Item>
                                <h5>Home</h5>
                            </Item>
                        </Link>
                        <Link to='/services' onClick={pageChange} style={{
                            textDecoration: path === '/services' ? 'underline #FFD600 solid 4px' : 'none', 
                            textUnderlineOffset: '16px'
                        }}>
                            <Item>
                                <h5>Services</h5>
                            </Item>
                        </Link>
                        <Link to='/pricing' onClick={pageChange} style={{
                            textDecoration: path === '/pricing' ? 'underline #FFD600 solid 4px' : 'none', 
                            textUnderlineOffset: '16px'
                        }}>
                            <Item>
                                <h5>Pricing</h5>
                            </Item>
                        </Link>
                        <Link to='/about' onClick={pageChange} style={{
                            textDecoration: path === '/about' ? 'underline #FFD600 solid 4px' : 'none', 
                            textUnderlineOffset: '16px'
                        }}>
                            <Item>
                                <h5>About</h5>
                            </Item>
                        </Link>
                        <Link to='/contact' onClick={pageChange} style={{
                            textDecoration: path === '/contact' ? 'underline #FFD600 solid 4px' : 'none', 
                            textUnderlineOffset: '16px'
                        }}>
                            <Item>
                                <h5>Contact</h5>
                            </Item>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
            {children}
        </>
    )
}


