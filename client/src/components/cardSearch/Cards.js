import React, { useContext } from 'react'
import Card from './Card'
import styled from 'styled-components'
import CardsContext from '../../context/cards-context'
import Loader from '../layout/Loader'

const CardsContainer = styled.div`
    margin: 0 auto;
    padding: 2rem 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minMax(16rem, 1fr));
    gird-auto-rows: 20rem;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    justify-items: center;
`

const Cards = () => {

    const { cards, loading } = useContext(CardsContext)

    return (
        <>
        {loading ? <Loader /> : null }
        <CardsContainer>
        {
            cards.map(card => {
                if (card.number.includes('★') || card.setName.includes('Promos')) {
                    return null
                }
                return <Card key={card.id} {...card} />
            })
        }
        </CardsContainer>
        </>
    )
}

export default Cards