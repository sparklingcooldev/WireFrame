import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const WallFrame: React.FC = () => {

    return (
        <StyledContainer>
            <Box>
                <img src='/images/landingpage/wallframe/bot1.png' alt="bot1.png" />
            </Box>
            <Box>
                <img src='/images/landingpage/wallframe/bot2.png' alt="bot2.png" />
            </Box>
            <Box>
                <img src='/images/landingpage/wallframe/bot3.png' alt="bot3.png" />
            </Box >
        </StyledContainer >
    )
}


const StyledContainer = styled(Box)`
    height : calc(100vw / 1440 * 807);
    width : 100%;
    background-image : url('/images/landingpage/wallframe/back.png');
    background-size : 100% 100%;
    display : flex;
    justify-contnet : space-between;
    >div{
        width : calc(100% / 3);
        display : flex;
        justify-content : center;
        padding-top : calc(100vw / 1440 * 300);
        >img{
            width : calc(100vw / 1440 * 375);
            height : calc(100vw / 1440 * 375);
        }
    }
`

export default WallFrame