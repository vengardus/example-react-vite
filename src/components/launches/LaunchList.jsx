import {
  Box,
  Image,
  Heading,
} from '@chakra-ui/react'
import logo from "../../assets/img/logo.png"
import { LaunchItem } from "./LaunchItem";
import { useFetch } from "../../hooks/useFetch";


const API_URL = 'https://api.spacexdata.com/v3/launches'

export const LaunchList = () => {
  const [ launches, loading ] = useFetch(API_URL)

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
            ( loading )?
              <div>Loading...</div>
              :
              // flight_number is not unique
              launches?.map(launch => (
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