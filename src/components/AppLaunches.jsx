import { useState, useEffect } from "react"
import { getAllLaunches } from "../services/launches"
import logo from "../assets/img/logo.png"


export const AppLaunches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        getAllLaunches().then(data => setLaunches(data))
    }, [])

    return (
        <>
            <img src={logo} width={200}></img>
            <h1>All Launches</h1>
            <ul>
                {
                    // flight_number is not unique
                    launches.map(launche => (
                        <li key={ launche.flight_number+launche.mission_name }>
                            { launche.mission_name }  ( { launche.launch_year } )
                        </li>
                    ))
                }
            </ul>
        </>
    )
}