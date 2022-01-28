import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import LogoSection from 'pages/Landing/LogoSection'
import AboutProject from 'pages/Landing/AboutProject'
import OurStory from 'pages/Landing/OurStory'
import WallFrame from 'pages/Landing/WallFrame'
import RockUtility from 'pages/Landing/RockUtility'
import RoadMap from './RoadMap'
import Team from 'pages/Landing/Team'
import FAQ from 'pages/Landing/FAQ'
import JoinMovement from 'pages/Landing/JoinMovement'

const Landing: React.FC = () => {

    return (
        <StyledContainer>
            <LogoSection />
            <AboutProject />
            <Divider />
            <OurStory />
            <WallFrame />
            <RockUtility />
            <Divider />
            <Box position={"relative"}>
                <GradientBackground />
                <Box position={"relative"} zIndex={10}>
                    <RoadMap />
                    <Divider />
                    <Team />
                    <Divider />
                    <FAQ />
                    <Divider />
                    <JoinMovement />
                </Box>
            </Box>
        </StyledContainer >
    )
}

const StyledContainer = styled(Box)`
    background-color: #1A1B1B;
`
const Divider = styled.div`
    border-bottom : 4px solid white;
    max-width : 1350px;
    margin-left : auto;
    margin-right : auto;
`

const GradientBackground = styled(Box)`
    background: linear-gradient(180deg, #1A1B1B 0%, #562100 46.35%, #E87630 100%);
    width : 100%;
    height : calc(100% - 600px);
    position : absolute;
    top : 600px;
`
export default Landing