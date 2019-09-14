import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    text-align: center;
    margin: 4rem auto;
`

const Home = () => {
    return (
        <HomeContainer className="container">
            <h1>Welcome to <strong>Mana Flood</strong>!</h1>
            <p>This application is dedicated to solving the problem of building decks for Magic the Gathering. It features a full Card Search, Saved Decks, and a Collection that saves all of your owned cards.</p>

        </HomeContainer>
    )
}

export default Home;