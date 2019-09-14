import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
`

const Button = ({ styleType, callback, label}) => 
    <ButtonContainer 
        type="button" 
        className={`btn btn-${styleType}`} 
        onClick={callback}>
            {label}
        </ButtonContainer>

export default Button;