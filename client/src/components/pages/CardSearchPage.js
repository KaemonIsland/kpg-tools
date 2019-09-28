import React, { useState, useContext, useReducer } from 'react'
import CardsContext from '../../context/cards-context'
import CardSearchForm from '../cardSearch/CardSearchForm'
import Cards from '../cardSearch/Cards'
import Button from '../layout/Button'
import { cardReducer } from '../../reducers/cards'
import LazyLoad from 'react-lazyload'
import { getAllCards } from '../util/MtgApi'

const CardSearchPage = ({ jwt }) => {
    const initialState = useContext(CardsContext)
    const [{cards, loading}, dispatch] = useReducer(cardReducer, initialState)

    const [page, setPage] = useState(1)

    const nextPage = () => setPage(page + 1)

    return (
      <CardsContext.Provider value={{ cards, loading, dispatch }}>
        <button onClick={() => getAllCards(jwt)}>Get All Cards!</button>
        <div className="container-fluid">
          <h1>Card Search</h1>
          <CardSearchForm page={page} setPage={setPage} />
          <hr />
          <LazyLoad>
            <Cards loading={loading} />
          </LazyLoad>
          {
            (page * 100) > cards.length ? 
            null : 
            <Button 
            callback={nextPage}
            styleType='primary btn-block'
            label="Load More"
            />
          }
          </div>
        </CardsContext.Provider>
    )
}

export default CardSearchPage