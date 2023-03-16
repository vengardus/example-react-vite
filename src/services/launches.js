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