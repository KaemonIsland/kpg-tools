import React, { useState } from 'react'
import Input from '../layout/Input'
import styled from 'styled-components'
import { registerUser } from '../util/authActions';

const RegisterSectionContainer = styled.section`
    margin: 3rem auto;
    width: 50%;
`

const registerFormConfig = {
    name: {
        elementType: 'input',
        config: {
            type: 'text',
            name: 'name',
            required: true
        },
        value: ''
    },
    email: {
        elementType: 'input',
        config: {
            type: 'email',
            name: 'email',
            required: true
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
    },
    password_confirmation: {
        elementType: 'input',
        config: {
            type: 'password',
            name: 'password_confirmation',
            required: true
        },
        value: ''
    }
}

const Register = ({ dispatch }) => {

    const [formInput, setFormInput] = useState(registerFormConfig)

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
        const {name, email, password, password_confirmation} = formInput
        registerUser(dispatch, {
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value
        })
        setFormInput(registerFormConfig)
    }

    return (
        <RegisterSectionContainer className="container">
            <h1>Register</h1>
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
                <button className="btn btn-primary">Register</button>
            </form>
        </RegisterSectionContainer>
    )
}

export default Register