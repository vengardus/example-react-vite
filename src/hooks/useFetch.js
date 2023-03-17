import { useState, useEffect } from "react";


const getFetch = async ( url ) => {
    let response = {
        data: null,
        status: 0,
        error: null
    }

    try {
        const resp = await fetch(url)
        response.data = await resp.json()
        response.status = resp.status
    }
    catch ( error ) {
        console.log( 'Error:', error )
        response.error = error
    }

    return response
}

export const useFetch = ( url ) => {
    const [ data, setData ] = useState( null )
    const [ loading, setLoading ] = useState( true )

    // useEffect no debe ser async
    useEffect( () => {
        getFetch( url )
            .then( data => {
                if ( data.status !== 0 ) {
                    setData( data.data )
                    setLoading( false )
                }
            }) 
    }, [ url ])

    return [ data, loading ]
}