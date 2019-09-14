import React, { useState } from 'react'
import Input from '../layout/Input'
import styled from 'styled-components'
import { authenticate } from '../util/authActions';

const LoginSectionContainer = styled.section`
    margin: 3rem auto;
    width: 50%;
`

const loginFormConfig = {
    email: {
        elementType: 'input',
        config: {
            type: 'email',
            name: 'email',
            required: true,
        },
        value: ''
    },
    password: {
        elementType: 'input',
        config: {
            type: 'password',
            name: 'password',
            required: true
        },
        value: ''
    }
}

const Login = ({ dispatch }) => {

    const [formInput, setFormInput] = useState(loginFormConfig)

    

    const handleChange = e => {
        const {name, value} = e.target
        setFormInput({
            ...formInput,
            [name]: {
                ...formInput[name],
                value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const {email, password} = formInput
        authenticate(dispatch, { email: email.value, password: password.value })
        setFormInput(loginFormConfig)
    }

    return (
        <LoginSectionContainer className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {
                    Object.values(formInput).map((input, i) => (
                        <Input 
                            key={i}
                            {...input}
                            value={input.value}
                            change={handleChange}
                        />
                    ))
                }
                <button className="btn btn-primary">Login</button>
            </form>
        </LoginSectionContainer>
    )
}

export default Login