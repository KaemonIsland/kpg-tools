import React from 'react'
import Flippy, { BackSide } from 'react-flippy'
import styled from 'styled-components'
import CardImgFront from './CardImgFront'
import CardInfoFront from './CardInfoFront'

const CardContainer = styled.div`
    cursor: pointer;
`



const Card = ({ imageUrl, name, ...rest}) => {
    let cardFront = () => {
        if (!imageUrl) {
            return <CardInfoFront name={name} {...rest} />
        } else {
            return <CardImgFront image={imageUrl} name={name} />
        }
    }


    return (
        <CardContainer>
            <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            >
                {cardFront()}
                <BackSide style={{ backgroundColor: 'purple'}}>
                    MTG CARD BACK
                </BackSide>
            </Flippy>
        </CardContainer>
    )
}

export default Card