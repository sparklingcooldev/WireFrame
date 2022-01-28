import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const Team: React.FC = () => {

    return (
        <StyledContainer>
            <Box fontSize={"50px"} fontFamily={"MontserratExtraBold"} textAlign={"center"}>
                Team
            </Box>
            <TeamGroup>
                <Box>
                    <img src='/images/landingpage/wallframe/bot1.png' alt="bot1.png" />
                    <Box mt={"10px"}>MARK</Box>
                    <Box mt={"8px"}>[ Insert text here ]</Box>
                </Box>
                <Box>
                    <img src='/images/landingpage/wallframe/bot2.png' alt="bot2.png" />
                    <Box mt={"10px"}>ANTHONY</Box>
                    <Box mt={"8px"}>[ Insert text here ]</Box>
                </Box>
                <Box>
                    <img src='/images/landingpage/wallframe/bot3.png' alt="bot3.png" />
                    <Box mt={"10px"}>FRANCY</Box>
                    <Box mt={"8px"}>[ Insert text here ]</Box>
                </Box >
            </TeamGroup>
            <TeamGroup>
                <Box>
                    <img src='/images/landingpage/wallframe/bot1.png' alt="bot1.png" />
                    <Box mt={"10px"}>BRUNO</Box>
                    <Box mt={"8px"}>[ Insert text here ]</Box>
                </Box>
                <Box>
                    <img src='/images/landingpage/wallframe/bot2.png' alt="bot2.png" />
                    <Box mt={"10px"}>SERGE</Box>
                    <Box mt={"8px"}>[ Insert text here ]</Box>
                </Box>
                <Box>
                    <img src='/images/landingpage/wallframe/bot3.png' alt="bot3.png" />
                    <Box mt={"10px"}>N/A</Box>
                    <Box mt={"8px"}>[ Insert text here ]</Box>
                </Box >
            </TeamGroup>
        </StyledContainer >
    )
}

const TeamGroup = styled(Box)`
    display : flex;
    justify-content : space-between;
    margin-top : 45px;
    fontSize : 21px;
    text-align : center;
    >div>img{
        max-width : 250px;
    }
    >div>div:nth-child(2){
        font-family : "MontserratBold";
    }
`;

const StyledContainer = styled(Box)`
    max-width : 1120px;
    margin-left : auto;
    margin-right : auto;
    padding : 90px 0px;
`
export default Team