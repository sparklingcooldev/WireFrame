import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const Topbar: React.FC = () => {
    return (
        <StyledContainer>
            <TopMenuItem>Our Story</TopMenuItem>
            <TopMenuItem>Utility</TopMenuItem>
            <TopMenuItem>Roadmap</TopMenuItem>
            <TopMenuItem>Contact</TopMenuItem>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    position : absolute;
    display : flex;
    width : 100%;
    height : calc(100vw / 1400 * 85);
`
const TopMenuItem = styled(Box)`
    width : 25%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 40px;
`
export default Topbar;