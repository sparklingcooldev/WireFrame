import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { VscGlobe } from 'react-icons/vsc';

const JoinMovement: React.FC = () => {

    return (
        <StyledContainer>
            <Box fontFamily={"MontserratExtraBold"} fontSize={"50px"} textAlign={"center"}>
                Join The Movement
            </Box>
            <Box mt={"110px"} display={"flex"} justifyContent={"space-between"} textAlign={"center"} fontSize={"21px"}>
                <Box>
                    <FaTwitter fontSize={"100px"} />
                    <Box mt={"20px"}>Twitter</Box>
                </Box>
                <Box>
                    <FaDiscord fontSize={"100px"} />
                    <Box mt={"20px"}>Discord</Box>
                </Box>
                <Box>
                    <VscGlobe fontSize={"100px"} />
                    <Box mt={"20px"}>Website</Box>
                </Box>
            </Box>
        </StyledContainer >
    )
}
const StyledContainer = styled(Box)`
    padding : 72px 0px 90px 0px;
    margin-left : auto;
    margin-right : auto;
    max-width : 940px;
`

export default JoinMovement