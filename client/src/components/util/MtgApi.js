import mtg from 'mtgsdk'

export const mtgSearch = (searchParams, callback) => {
    console.log(searchParams)
mtg.card.where(searchParams)
        .then(res => callback(res))
}

const orderCardsNumerical = cards => (
    cards.sort((card1, card2) => card2.multiverseid - card1.multiverseid)
)