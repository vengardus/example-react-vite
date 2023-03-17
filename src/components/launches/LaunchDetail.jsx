import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLaunchByFlightNumber } from "../../services/launches"


export const LaunchDetail = () => {
    const { id } = useParams()
    const [ launch, setLaunch ] = useState({})

    useEffect( () => {
        getLaunchByFlightNumber( id ).then( data => setLaunch(data) )
    }, [] )


    return (
        <>
            <h1>LaunchDetail: { launch.flight_number } { launch.mission_name }</h1>
        </>
    )
}