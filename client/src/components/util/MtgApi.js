import mtg from 'mtgsdk'
import axios from 'axios'

export const mtgSearch = (searchParams, callback) => {
    console.log(searchParams)
mtg.card.where(searchParams)
        .then(res => callback(res))
}

export const getAllCards = async (JWT) => {
    console.log("This is gonna take a while!")
    const allCards = await axios.get('https://www.mtgjson.com/json/AllSets.json')
    for (let [key, value] of Object.entries(allCards.data)) {
        const setParams = buildSetParams(value);

        ['cards', 'tokens'].forEach(async (type) => {
            for (let [key, cardValue] of Object.entries(value[type])) {
                const cardParams = {...setParams, ...buildCardParams(cardValue)}
                await axios.post('/api/v1/cards', 
                    {card: { ...cardParams }},
                    {headers: { 'Authorization': `Bearer ${JWT}`}}
                )
            }
        })
    }
    console.log("All done!")
}

let blockedParams = ['edhrecRank', 'foreignData', 'hand', 'hasNoDeckLimit', 'mtgoFoilId', 'mtgoId', 'boosterV3', 'isFoilOnly', 'isOnlineOnly', 'translations', 'cards', 'tokens', 'isForeignOnly', 'codeV3', 'count', 'duelDeck', 'hasFoil', 'hasNonFoil', 'isMtgo', 'isOversized', 'isPaper', 'isStarter', 'isStorySpotlight', 'isTextless', 'isTimeshifted']

const buildSetParams = (set) => {
    let params = {}
    for (let [key, value] of Object.entries(set)) {
        if (blockedParams.includes(key)) {
            continue
        } else if (typeof value === "object") {
            params[key] = JSON.stringify(value)
        } else if (key === 'name') {
            params['setName'] = value
        } else if (key === 'type') {
            params['setType'] = value
        } else if (key === 'mcmId') {
            params['setMcmId'] = value
        } else {
            params[key] = value
        }
    }
    return params
}

const buildCardParams = (card) => {
    let params = {}
    for (let [key, value] of Object.entries(card)) {
        if (blockedParams.includes(key)) {
            continue
        } else if (key === 'type') {
            params['cardType'] = value
        } else if (Array.isArray(value)) {
            params[key] = value.join(', ')
        } else if (typeof value === "object") {
            params[key] = JSON.stringify(value)
        } else {
            params[key] = value
        }
    }
    return params
}