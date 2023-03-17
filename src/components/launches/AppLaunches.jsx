import { useState, useEffect } from "react"
import {
  Box,
  Image,
  Heading,
} from '@chakra-ui/react'
import { getAllLaunches } from "../../services/launches"
import logo from "../../assets/img/logo.png"
import { LaunchItem } from "./LaunchItem";


export const AppLaunches = () => {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    getAllLaunches().then(data => setLaunches(data))
  }, [])

  return (
    <>
      <Box mx="4rem">
        <Image
          src={logo}
          boxSize="150px"
        />

        <Heading
          size="lg"
          mb="1rem"
        >
          All Launches
        </Heading>

        <section pt="1rem">
          {
            // flight_number is not unique
            launches.map(launch => (
              <LaunchItem 
                key={ launch.flight_number + launch.mission_name } 
                { ...launch }>
              </LaunchItem>
            ))
          }
        </section>
      </Box>
    </>
  )
}