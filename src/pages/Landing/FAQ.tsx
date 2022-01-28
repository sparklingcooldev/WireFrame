import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import { title } from 'process'

const titles = [
    "What will be the price of a RoC NFT?",
    "How many RoC NFTS will be minted?",
    "When is the mint date?",
    "Where will the mint be sold?"
]

const details = [
    "TBA",
    "The total supply is 10,000 NFTs",
    "The mint date is not yet announced",
    "RoC NFTs will be sold directly on our website https://reelsofchange.com"
]

const FAQ: React.FC = () => {

    return (
        <StyledContainer>
            <Box mb={"48px"} fontSize={"50px"} fontFamily={"MontserratExtraBold"} px={"40px"}>FAQ</Box>
            {titles.map((data, i) => {
                return <Box
                    key={data}
                    mt={"28px"}
                    borderBottom={i < titles.length - 1 ? "1px solid #FFFFFF" : "none"}
                    px={"40px"}
                >
                    <Box fontFamily={"MontserratBold"}>{titles[i]}</Box>
                    <Box mt={"16px"} mb={"30px"}>{details[i]}</Box>
                </Box>
            })}
        </StyledContainer >
    )
}
const StyledContainer = styled(Box)`
    font-size : 21px;
    padding : 68px 0px 48px 0px;
    max-width : 1350px;
    margin-left : auto;
    margin-right : auto;
`

export default FAQ