import React from 'react'
import { Container } from '@mui/material'
import { HeroSection } from '../components/home/HeroSection'
import { PageDivider } from '../components/PageDivider'
import { Journey } from '../components/home/Journey'
import { InfoSection } from '../components/home/InfoSection'



export const Home = () => {
    return (
        <Container fluid maxWidth='xl'>
            <HeroSection />
            <PageDivider />
            <Journey />
            <PageDivider />
            <InfoSection />
        </Container>
    )
}
