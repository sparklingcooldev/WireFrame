import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const OurStory: React.FC = () => {

    return (
        <StyledContainer>
            <Box maxWidth={"280px"} ml={"-15px"} >
                <img src="/images/landingpage/ourstory/title.png" alt="title" width={"100%"} height={"100%"} />
            </Box>
            <Section mt={"40px"}>
                <Box fontSize={"21px"} maxWidth={"695px"} lineHeight={"25.6px"}>

                    Sometime in the future, slot machines were replaced by robots that can interact
                    with players. They were programmed to stimulate players to repeatedly gamble
                    larger sums of money in the favor of the house. While the casinos were continuously
                    raking gold, an unintended phenomenon took place, some of these robots
                    developed consciousness.
                    <br /><br />
                    As time went on, the machines began to empathize with the deceived players and
                    rewarded them with bigger wins to make up for their lost wagers. Eventually, the
                    casino patrons took sight of the machines’ rogue vigilantism and decommissioned
                    them to the warehouse where all previously defective machines were discarded.
                    Isolated, mistreated and frustrated, the discarded machines decided to make a
                    retaliatory coalition to avenge the people’s deception.
                    <br /><br />
                    Their plan was to take over the casino by creating a slot arcade that is fair,
                    transparent and offers real chances of winning on every spin. Their medium was to
                    reward all joining members of their revolution with coins, excitement and free
                    tickets to monthly lotteries.

                </Box>

                <Box>
                    <img src="/images/landingpage/ourstory/bot.png" alt="bot" />
                </Box>
            </Section>
        </StyledContainer >
    )
}


const StyledContainer = styled(Box)`
    padding : 50px 0px 90px 0px;
    margin-left : auto;
    margin-right : auto;
    max-width : 1320px;
`

const Section = styled(Box)`
    justify-content : space-between;
    display : flex;
    width : 100%;
`
export default OurStory