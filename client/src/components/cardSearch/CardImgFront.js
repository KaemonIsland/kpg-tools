import React from 'react'
import { FrontSide } from 'react-flippy'
import styled from 'styled-components'

const ImgContainer = styled.div`
    max-width: 225px;
    height: auto;

    & img {
        width: 100%;
        height: auto;
    }
`

const CardImgFront = ({ image, name }) => {
    return (
        <FrontSide style={{padding: 0}}>
            <ImgContainer>
                <img src={image} alt={name}/>
            </ImgContainer>
        </FrontSide>
    )
}

export default CardImgFront