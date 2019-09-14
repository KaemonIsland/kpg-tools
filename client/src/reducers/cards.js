const FETCHING_CARDS_PENDING = 'FETCHING_CARDS_PENDING'
const FETCHING_CARDS_SUCCESS = 'FETCHING_CARDS_SUCCESS'
const FETCHING_CARDS_FAILURE = 'FETCHING_CARDS_FAILURE'
const FETCHING_NEXT_PAGE = 'FETCHING_NEXT_PAGE'

export const fetchingCardsPending = () => ({
    type: FETCHING_CARDS_PENDING
})

export const fetchingCardsSuccess = cards => ({
    type: FETCHING_CARDS_SUCCESS,
    cards
})

export const fetchingNextPage = cards => ({
    type: FETCHING_NEXT_PAGE,
    cards
})

const initialState = {
    cards: [],
    loading: false,
}

export const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_CARDS_PENDING:
            return { ...state, loading: true }
        case FETCHING_CARDS_SUCCESS:
            return { loading: false, cards: action.cards };
        case FETCHING_NEXT_PAGE:
            return { loading: false, cards: [...state.cards, ...action.cards] }
        default:
            return state;
    }
}