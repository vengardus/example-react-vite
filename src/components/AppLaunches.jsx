import { useState, useEffect } from "react"
import { getAllLaunches } from "../services/launches"
import logo from "../assets/img/logo.png"
import { 
  Box, 
  Image, 
  Heading, 
  Tag, 
  Flex, 
  Text, 
  Spacer } from '@chakra-ui/react'


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
              <Box
                key={launch.flight_number + launch.mission_name}
                bg="gray.100"
                mb="0.5rem"
              >
                <Flex px="1rem">
                  <Text fontSize="xl" py="1rem">
                    Mission <strong >{launch.mission_name}</strong> ( {launch.launch_year} )
                  </Text>

                  <Spacer />

                  <Tag 
                    colorScheme={ launch.launch_success? 'green' : 'red' } 
                    boxSize="4rem"
                    px="0.5rem"
                  >
                    { launch.launch_success? 'Success' : 'Failed' }
                  </Tag>
                </Flex>

              </Box>
            ))
          }
        </section>
      </Box>
    </>
  )
}