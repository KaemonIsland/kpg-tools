import React from 'react'
import { FrontSide } from 'react-flippy'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 225px;
    height: 20rem;
    ${props => `background: ${props.color}`};
    color: ${props => props.color === 'black' ? 'white' : 'black'};
    border-radius: 10px;
    border: 4px solid black;
    overflow: hidden;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & div {
        height: auto;
        padding: .5rem 0;
    }
`

const CardInfoFront = ({ cmc, colorIdentity, artist, colors, flavor, id, layout, manaCost, multiverseid, name, number, originalText, originalType, rarity, set, setName, subtypes, supertypes, text, type, types, power, toughness }) => {

    let getColors = () => {
        let colors = []
        colorIdentity.forEach(color => {
            let colorItem;
            switch(color) {
                case 'B':
                    colorItem = 'black'
                    break;
                case 'U':
                    colorItem = 'blue'
                    break;
                case 'W':
                    colorItem = 'white'
                    break;
                case 'G':
                    colorItem = 'green'
                    break;
                case 'R':
                    colorItem = 'red'
                    break;
                default:
                    colorItem = 'orange'
                    break;
            }
            colors.push(colorItem)
        })
        if (colorIdentity.length > 1) {
            return `linear-gradient(${colors.join(', ')})`
        } else if (colorIdentity.length === 1) {
            return `${colors.join('')}`
        } else {
            return `grey`
        }
    }
    return (
        <FrontSide style={{padding: 0}}>
            <CardContainer color={getColors()}>
                <div>
                    <strong>{name}</strong>
                    <hr />
                </div>
                <div>{manaCost}</div>
                <div>{type}</div>
                <div>
                <i className={`ss ss-grad ss-${set.toLowerCase()} ss-2x ss-${rarity.toLowerCase()}`}></i>
                -{setName}
                </div>
                {power && toughness ? <strong>{power}/{toughness}</strong> : null}
            </CardContainer>
        </FrontSide>
    )
}

export default CardInfoFront