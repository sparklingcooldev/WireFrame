import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const img_url = "/images/landingpage/rockutility/";

const RockUtility: React.FC = () => {

    return (
        <StyledContainer>
            <Box width={"100%"} maxWidth={"350px"} mx={"auto"} mt={"30px"}>
                <img src={`${img_url}title.png`} alt="title" width={"100%"} height={"100%"} />
            </Box>
            <Box mt={"60px"}>
                <Box mt={"20px"} display={"flex"} alignItems={"center"}>
                    <Box><img src={`${img_url}icon2.png`} alt="icon2" width={225} height={225} /></Box>
                    <Box ml={"70px"} maxWidth={"644px"} >
                        <Box maxWidth={"250px"} ml={"-10px"}>
                            <img src={`${img_url}Play To Earn.png`} alt="title" width={"100%"} height={"100%"} />
                        </Box>
                        <Box mt={"20px"} fontSize={"21px"}>
                            Reels of change is a platform where RoC genesis NFT holders can earn
                            real money by playing our games for free. Everyone will be able to pay
                            to play our games, however only RoC holders will be rewarded with
                            our native $Loyalty token doing so.
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box mt={"80px"}>
                <Box mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"end"}>
                    <Box maxWidth={"605px"} >
                        <Box display={"flex"} justifyContent={"end"}>
                            <Box maxWidth={"370px"} >
                                <img src={`${img_url}Immersive Gaming.png`} alt="title" width={"100%"} height={"100%"} />
                            </Box>
                        </Box>
                        <Box mt={"20px"} fontSize={"21px"} textAlign={"right"}>
                            We believe gambling games are monotonous and outdated, merely any
                            innovation has been applied in this space. Therefore, we plan on creating
                            the next era of gambling games being both immersive and social, and
                            require skill.
                        </Box>
                    </Box>
                    <Box ml={"30px"}><img src={`${img_url}icon3.png`} alt="icon3" width={225} height={225} /></Box>
                </Box>
            </Box>

            <Box mt={"80px"}>
                <Box mt={"20px"} display={"flex"} alignItems={"center"}>
                    <Box><img src={`${img_url}icon1.png`} alt="icon1" width={225} height={225} /></Box>
                    <Box ml={"70px"} maxWidth={"600px"} >
                        <Box maxWidth={"250px"} ml={"-10px"}>
                            <img src={`${img_url}Play To Earn.png`} alt="title" width={"100%"} height={"100%"} />
                        </Box>
                        <Box mt={"20px"} fontSize={"21px"}>
                            We plan on giving back to our community through a monthly giveaway
                            that will be presented as a draw. Unlike most lotteries, this one will have
                            guaranteed winners every month and is free to enter, provided you hold a
                            RoC NFT.
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box mt={"80px"}>
                <Box mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"end"}>
                    <Box maxWidth={"724px"} >
                        <Box display={"flex"} justifyContent={"end"}>
                            <Box maxWidth={"370px"} >
                                <img src={`${img_url}Metaverse Lottery.png`} alt="title" width={"100%"} height={"100%"} />
                            </Box>
                        </Box>
                        <Box mt={"20px"} fontSize={"21px"} textAlign={"right"}>
                            We’ve noticed that there is no serious recurring lottery that uses
                            Blockchain technology, and we decided to act upon it.
                            This Lottery will be hosted on a biweekly basis, people who decide to
                            participate will be able to purchase tickets in the Metaverse. We will
                            partner up with entities all over the Metaverse (Sandbox, Decentraland…).
                        </Box>
                    </Box>
                    <Box ml={"30px"}><img src={`${img_url}icon3.png`} alt="icon3" width={225} height={225} /></Box>
                </Box>
            </Box>

            <Box mt={"80px"}>
                <Box mt={"20px"} display={"flex"} alignItems={"center"}>
                    <Box><img src={`${img_url}icon1.png`} alt="icon1" width={225} height={225} /></Box>
                    <Box ml={"70px"} maxWidth={"1000px"} >
                        <Box maxWidth={"390px"} ml={"-10px"}>
                            <img src={`${img_url}High-Rollers Lounge.png`} alt="title" width={"100%"} height={"100%"} />
                        </Box>
                        <Box mt={"20px"} fontSize={"21px"}>
                            Reels of Change brings you the High Rollers Lounge, a premiere social and
                            entertainment destination that blends a nostalgic Casino vibe with world
                            class design and an enlightening schedule.
                            <br /><br />
                            With one common interest at heart, our schedule will revolve around
                            elevating our community’s financial status. The High Rollers Lounge will
                            feature weekly webinars discussing market trends, hot NFTs, low cap gems
                            while enjoying signature game nights and RoC monthly giveaways.
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box mt={"80px"}>
                <Box mt={"20px"} display={"flex"} alignItems={"center"} justifyContent={"end"}>
                    <Box maxWidth={"915px"} >
                        <Box display={"flex"} justifyContent={"end"}>
                            <Box maxWidth={"200px"} >
                                <img src={`${img_url}Spins NFT.png`} alt="title" width={"100%"} height={"100%"} />
                            </Box>
                        </Box>
                        <Box mt={"20px"} fontSize={"21px"} textAlign={"right"}>
                            Spins are going to be the second generation NFTs which will aim to
                            upgrade a RoC NFT. Once merged together, the icons on the robot’s reels
                            will reshuffle giving the holder another chance to obtain a more favorable
                            outcome.
                            <br/><br/>
                            Increasing your tier will grant you up to 80% rakeback and 2x Loyalty
                            token multiplier, earning higher income playing our games and redeeming
                            a portion of your losses.
                        </Box>
                    </Box>
                    <Box ml={"30px"}><img src={`${img_url}icon4.png`} alt="icon4" width={225} height={225} /></Box>
                </Box>
            </Box>

        </StyledContainer >
    )
}


const StyledContainer = styled(Box)`
    max-width : 1320px;
    width : 100%;
    padding-top : 30px;
    padding-bottom : 75px;
    margin-left : auto;
    margin-right : auto;
`

export default RockUtility