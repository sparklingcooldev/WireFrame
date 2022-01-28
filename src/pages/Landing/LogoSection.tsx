import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const LogoSection: React.FC = () => {

    return (
        <StyledContainer>
            <LogoImage />
            <Title>REELS OF CHANCE</Title>
            <Detail>Be part of our journey for change.</Detail>
            <JoinButton mt={"25px"} mb={"70px"}>Join the movement</JoinButton>
        </StyledContainer >
    )
}
const StyledContainer = styled(Box)`
    min-height : calc(100vw / 1440 * 810);
    width : 100%;
    background-image : url('/images/landingpage/logo/back.png');
    background-size : 100% 100%;
    font-weight : 500;
    padding-top : calc(100vw / 1440 * 160);
    display : flex;
    align-items : center;
    flex-direction : column;
    padding-right : 2%;
`
const JoinButton = styled(Box)`
    width : 100%;
    max-width : 464px;
    height : 82px;
    font-size : 35px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #1A1B1B;
    border-radius : 50px;
    cursor : pointer;
`
const LogoImage = styled(Box)`
    background-image : url('/images/landingpage/logo/logo.png');
    background-size : 100% 100%;
    width : calc(100% / 1440 * 426);
    height : calc(100vw / 1440 * 230);
`;

const Title = styled(Box)`
    font-size : 90px;
    font-weight : black;
    font-family : MontserratExtraBold;
    lineHeight : 85px;
`;

const Detail = styled(Box)`
    max-width : 640px;
    font-size : 50px;
    text-align : center;
    font-family : MontserratBold;
`
export default LogoSection