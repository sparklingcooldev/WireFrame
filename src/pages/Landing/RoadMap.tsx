import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const img_url = "/images/landingpage/roadmap/";

const RoadMap: React.FC = () => {

    return (
        <StyledContainer>
            <Box width={"42%"} maxWidth={"553px"}>
                <img src={`${img_url}bot.png`} alt="bot" width={"100%"} />
            </Box>
            <Box width={"58%"} display={"flex"}>
                <Box width={"10%"} fontSize={"21px"} fontFamily={"MontserratBold"} display={"flex"} alignItems={"end"} flexDirection={"column"}>
                    <Box mt={"2395px"}>
                        Q1<br />
                        2022
                    </Box>
                    <Box mt={"280px"}>
                        Q2<br />
                        2022
                    </Box>
                    <Box mt={"280px"}>
                        Q3+<br />
                        2022
                    </Box>
                </Box>
                <Box width={"90%"} position={"relative"}>
                    <Box maxWidth={"280px"}>
                        <img src={`${img_url}title.png`} alt="title" width={"100%"} />
                    </Box>
                    <RoadPercent >
                        <Box position={"relative"}>
                            <Box position={"relative"} zIndex={10} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                <Box mt={"85px"}><img src={`${img_url}25.png`} alt="25" /></Box>
                                <Box mt={"382px"}><img src={`${img_url}50.png`} alt="50" /></Box>
                                <Box mt={"382px"}><img src={`${img_url}75.png`} alt="75" /></Box>
                                <Box mt={"382px"}><img src={`${img_url}100.png`} alt="100" /></Box>
                                <RedCircle mt={"440px"} />
                                <RedCircle mt={"260px"} />
                                <RedCircle mt={"260px"} />
                            </Box>
                            <NeonLine>
                                <img src={`${img_url}Neon Strip.png`} alt="Neon Strip" />
                            </NeonLine>
                        </Box>

                    </RoadPercent>

                    <Box ml={"160px"} fontSize={"21px"}>
                        <Box mt={"315px"}>
                            <Box fontFamily={"MontserratBold"}>High Rollers’ Lounge</Box>
                            <Box maxWidth={"505px"} mt="33px">
                                RoC NFT holders
                                will be able to enjoy the High Rollers’
                                Lounge, a member exclusive VIP area
                                on the RoC website. We’re counting on
                                you to foster an amusing and gallant
                                community.
                            </Box>
                        </Box>

                        <Box mt={"329px"}>
                            <Box fontFamily={"MontserratBold"}>Monthly Giveaway Draw</Box>
                            <Box maxWidth={"505px"} mt="33px">
                                Ding Ding Ding.
                                RoC NFT holders are summoned on a
                                monthly basis to participate in the RoC
                                giveaway draw. 15% of all resale profits will
                                be added to the prize pool with a cap of 5
                                ETH per month for sustainability purposes.
                            </Box>
                        </Box>

                        <Box mt={"300px"}>
                            <Box fontFamily={"MontserratBold"}>Metaverse Lottery</Box>
                            <Box maxWidth={"505px"} mt="33px">
                                Wonder what's missing
                                in the Metaverse? We’ve set our sights on
                                building the largest decentralized recurring
                                lottery on the Ethereum blockchain, sold and
                                hosted in the Metaverse. We aim to grow the
                                prize pool to millions of dollars to be won on
                                a biweekly basis.
                            </Box>
                        </Box>

                        <Box mt={"270px"}>
                            <Box fontFamily={"MontserratBold"}>The OnlyWhales Warehouse</Box>
                            <Box maxWidth={"505px"} mt="33px">
                                We will
                                open our warehouse for everyone to enjoy
                                a plethora of entertaining games that will
                                require skill, luck, and MATIC wrapped ETH.
                                Additionally, Genesis NFT holders will be
                                able to play our games for free while
                                earning real money.
                            </Box>
                        </Box>

                        <Box mt={"125px"}>
                            <Box maxWidth={"505px"} mt="33px">
                                ∙ NFT Reveal Giveaway<br />
                                ∙ Inaugurate the High Rollers’ Lounge<br />
                                ∙ Launch the Monthly Giveaway Draw<br />
                            </Box>
                        </Box>

                        <Box mt={"236px"}>
                            <Box maxWidth={"505px"} mt="33px">
                                ∙ Release the first set of games<br />
                                ∙ Launch the Spins NFT (Gen 2)<br />
                                ∙ Commence the Play to Earn reward system<br />
                                ∙ Launch the Metaverse Lottery<br />
                            </Box>
                        </Box>

                        <Box mt={"250px"}>
                            <Box maxWidth={"505px"} mt="33px">
                                ∙ Release the second set of games<br />
                                ∙ Launch the first PvP Game<br />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </StyledContainer >
    )
}

const NeonLine = styled(Box)`
    position : absolute;
    top : 0;
    display : flex;
    justify-content : center;
    width : 100%;
    padding-top : 205px;
    height : calc(100% - 20px);
`;
const RedCircle = styled(Box)`
    background-color : #AB2425;
    width : 85px;
    height : 85px;
    border: 4px solid #FFFFFF;
    box-sizing: border-box;
    border-radius : 50%;
`;

const RoadPercent = styled(Box)`
    position : absolute;
    margin-left : 20px;
    >div>img{
        width : 120px;
        height : 120px;
    }
`
const StyledContainer = styled(Box)`
    padding : 100px 0px 120px 0px;
    max-width : 1300px;
    width : 100%;
    margin-left : auto;
    margin-right : auto;
    transform: translateX(-30px);
    display : flex;
    justify-content : space-between;
`

export default RoadMap