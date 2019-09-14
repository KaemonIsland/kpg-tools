import React from 'react'

/*

let exampleConfig = {
    name: {
        elementType: 'input, textarea, select, etc',
        config: {
            type: 'text, password, email, etc',
            name: 'elements name'
            required: true
        },
        value
    },
}

Example Input:
    <Input key={i} {...config} change={handleChange} value={value} />

*/

const Input = ({elementType, config, change, value}) => {
    let formElement = null

    switch(elementType) {
        case "input":
            formElement = (
                <input 
                    {...config}
                    className='form-control'
                    onChange={(e) => change(e)}
                    value={value}
                />
            )
            break;
        default:
            return 'Something went wrong'
    }

    const createLabel = () => (
        config.name.charAt(0).toUpperCase() + config.name.slice(1)
    )

    return (
        <div className="form-group" >
            <label>{createLabel()}:</label>
            {formElement}
        </div>
    )
}

export default Input