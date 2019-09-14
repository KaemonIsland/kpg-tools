import React, { useState, useContext, useEffect } from 'react'
import { fetchingCardsSuccess, fetchingCardsPending, fetchingNextPage } from '../../reducers/cards'
import CardsContext from '../../context/cards-context'
import { mtgSearch } from '../util/MtgApi'
import Input from '../layout/Input'

const inputConfig = {
    name: {
        elementType: 'input',
        config: {
            name: 'name',
            placeholder: 'Search by name',
            type: 'text',
            data: 'name'
        },
        value: ''
    },
    type: {
        elementType: 'input',
        config: {
            name: 'type',
            placeholder: 'Search by type',
            type: 'text',
        },
        value: ''
    },
    subtypes: {
        elementType: 'input',
        config: {
            name: 'subtypes',
            placeholder: 'Search by Subtype',
            type: 'text',
        },
        value: ''
    },
    setName: {
        elementType: 'input',
        config: {
            name: 'setName',
            placeholder: 'search by Set Name',
            type: 'text'
        },
        value: ''
    }
}


const CardSearchForm = ({ page, setPage }) => {
    let defaultSearchParams = {
        page,
        pageSize: 100
    }

    const {dispatch} = useContext(CardsContext)
    const [inputValue, setInputValue] = useState(inputConfig)
    const [searchParams, setSearchParams] = useState(defaultSearchParams)



    const handleChange = e => {
        const { name, value } = e.target
        setInputValue({
            ...inputValue,
            [name]: {
                ...inputValue[name],
                value
            }
        })
    }

    const buildSearchParams = (params, page) => {
        let newParams = { ...params, page }
        Object.entries(inputValue).forEach(input => {
            if (input[1].value !== '') {
                newParams[input[0]] = input[1].value
            }
        })
        setSearchParams(newParams)
        return newParams
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchingCardsPending())
        setPage(1)
        mtgSearch(buildSearchParams(defaultSearchParams, 1), (cards) => dispatch(fetchingCardsSuccess(cards)))
        setInputValue(inputConfig)
    }

    useEffect(() => {
        if (page !== 1) {
            dispatch(fetchingCardsPending())
            mtgSearch({...searchParams, page}, (cards) => dispatch(fetchingNextPage(cards)))
        }
    }, [page])

    return (
        <>
        <form onSubmit={handleSubmit} className="container">
            {
                Object.values(inputValue).map((input, i) => 
                    <Input 
                        key={i}
                        {...input}
                        value={input.value}
                        change={handleChange}
                    />
                )
            }
            <button type='submit' className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}

export default CardSearchForm