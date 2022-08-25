import React from 'react'
import { Container } from '@mui/material'
import { HeroSection } from '../components/home/HeroSection'
import { PageDivider } from '../components/PageDivider'



export const Home = () => {
    return (
        <Container fluid maxWidth='xl'>
            <HeroSection />
            <PageDivider />
        </Container>
    )
}
