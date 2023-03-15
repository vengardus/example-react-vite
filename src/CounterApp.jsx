import PropTypes from 'prop-types'


const handleEvent = (event) => {
    console.log(event)
} 

export const CounterApp = ( { value }) => {

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>

            <button onClick={ handleEvent }>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}