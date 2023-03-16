import { useState } from 'react'
import PropTypes from 'prop-types'



export const CounterApp = ( { value }) => {
    const [ counter, setCounter] = useState(value)
    
    const handleEvent = (opcion) => {
        switch ( opcion ) {
            case 'add' :
                setCounter( counter + 1)
                break
            case 'sub' :
                setCounter( counter - 1)
                break
            case 'reset' :
                setCounter( value )
                break
        }
    } 

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ () => handleEvent('add') }>
                +1
            </button>
            <button onClick={ () => handleEvent('sub') }>
                -1
            </button>
            <button onClick={ () => handleEvent('reset') }>
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}