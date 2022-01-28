import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'


const AboutProject: React.FC = () => {

    return (
        <StyledContainer>
            <Box maxWidth={"540px"} ml={"-15px"}>
                <img src="/images/landingpage/aboutproject/title.png" alt="title" width={"100%"} height={"100%"} />
            </Box>
            <Section mt={"20px"}>
                <Box fontSize={"36px"} maxWidth={"626px"}>
                    Discover a new way of creating your own
                    luck with Reels of Change, a collection of
                    10,000 unique NFTs that reside on the
                    Ethereum Blockchain.
                    <br /><br />
                    Joining this
                    exclusive gambler’s club enables NFT
                    holders to earn Loyalty tokens by playing
                    in the OnlyWhales WareHouse, an
                    adjusted gambling club specially tailored
                    to optimize the player experience.
                </Box>

                <IconGroup>
                    <Box>
                        <Box >
                            <img src="/images/landingpage/aboutproject/icon1.png" alt="icon1" />
                            <Box textAlign={"center"} fontSize={"20px"} mt={"8px"}>Free Monthly Giveaways</Box>
                        </Box>
                        <Box  >
                            <img src="/images/landingpage/aboutproject/icon2.png" alt="icon2" />
                            <Box textAlign={"center"} fontSize={"20px"} mt={"8px"}>Play To Earn</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box minWidth={"200px"}>
                            <img src="/images/landingpage/aboutproject/icon3.png" alt="icon3" />
                            <Box textAlign={"center"} fontSize={"20px"} mt={"8px"}>New, Immersive Gambling Arcade</Box>
                        </Box>
                        <Box >
                            <img src="/images/landingpage/aboutproject/icon4.png" alt="icon4" />
                            <Box textAlign={"center"} fontSize={"20px"} mt={"8px"}>Biggest lottery in the Metaverse</Box>
                        </Box>
                    </Box>
                </IconGroup>
            </Section>
        </StyledContainer >
    )
}

const IconGroup = styled(Box)`
    display : flex;
    flex-wrap : wrap;
    width : 100%;
    max-width : 500px;
    >div{
        display : flex;
        justify-content : space-between;
        width : 100%;
    }
    >div>div{
        display : flex;
        align-items: center;
        max-width : 175px;
        flex-direction : column;
        >img{
            width : 175px;
            height : 175px;
        }
    }
`;

const StyledContainer = styled(Box)`
    padding : 50px 0px 90px 0px;
    margin-left : auto;
    margin-right : auto;
    max-width : 1260px;
`

const Section = styled(Box)`
    justify-content : space-between;
    display : flex;
    width : 100%;
`
export default AboutProject