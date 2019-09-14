import React from 'react'
import styled, { keyframes } from 'styled-components'

const swappingSquaresAnimationChild1 = keyframes`
    50% {
        transform: translate(150%,150%) scale(2,2);
    }
`
const swappingSquaresAnimationChild2 = keyframes`
    50% {
        transform: translate(-150%,150%) scale(2,2);
    }
`
const swappingSquaresAnimationChild3 = keyframes`
    50% {
        transform: translate(-150%,-150%) scale(2,2);
    }
`
const swappingSquaresAnimationChild4 = keyframes`
    50% {
        transform: translate(150%,-150%) scale(2,2);
    }
`

const SwappingSquaresSpinner = styled.div`
    margin: 0 auto;
    height: 130px;
    width: 130px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & div {
        height: calc(130px * 0.25 / 1.3);
        width: calc(130px * 0.25 / 1.3);
        animation-duration: 1000ms;
        border: calc(130px * 0.04 / 1.3) solid #ff1d5e;
        margin-right: auto;
        margin-left: auto;
        position: absolute;
        animation-iteration-count: infinite;
    }

    & div:nth-child(1) {
        animation-name: ${swappingSquaresAnimationChild1};
        animation-delay: 500ms;
    }

    & div:nth-child(2) {
        animation-name: ${swappingSquaresAnimationChild2};
        animation-delay: 0ms;
    }

    & div:nth-child(3) {
        animation-name: ${swappingSquaresAnimationChild3};
        animation-delay: 500ms;
    }

    & div:nth-child(4) {
        animation-name: ${swappingSquaresAnimationChild4};
        animation-delay: 0ms;
    }

    & * {
        box-sizing: border-box;
    }
`

const LoaderContainer = styled.div`
display: fixed;
position: sticky;
top: 45vh;
z-index: 100;
`

const Square = styled.div`

`

const Loader = () => (
    <LoaderContainer>

        <SwappingSquaresSpinner>
            <Square />
            <Square />
            <Square />
            <Square />
        </SwappingSquaresSpinner>
    </LoaderContainer>
)

export default Loader;