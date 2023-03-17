const API_URL = 'https://api.spacexdata.com/v3'

export const getAllLaunches = async () => {
    try {
        const response = await fetch(`${API_URL}/launches`)
        const data = await response.json()
        return data
    }
    catch( error ) {
        console.log(error)
    }
    
}

export const getLaunchByFlightNumber = async (id) => {
    try {
        const api = `${API_URL}/launches/${id}`
        const response = await fetch(api)
        const data = await response.json()
        return data
    }
    catch( error ) {
        console.log(error)
    }
    
}