import { Link } from "react-router-dom";
import dayjs from 'dayjs'
import { HiCalendar } from "react-icons/hi";
import {
  Box,
  Tag,
  Flex,
  Text,
  Spacer,
  Icon,
  Button
} from '@chakra-ui/react'

export const LaunchItem = ( launch ) => {
  return (
    <Box
      bg="gray.100"
      m="4"
      p="4"
      borderRadius="lg"
    >
      <Flex px="1rem">
        <Text fontSize="xl" py="0.5rem">
          Mission <strong >{launch.mission_name}</strong> ( {launch.launch_year} )
        </Text>

        <Spacer />

        <Tag
          colorScheme={launch.launch_success ? 'green' : 'red'}
          px="5"
          py="1"
        >
          {launch.launch_success ? 'Success' : 'Failure'}
        </Tag>
      </Flex>

      <Flex align="center" ml="1rem">
        <Icon as={HiCalendar} color="gray.500" fontSize="sm" />
        <Text 
          size="sm" 
          ml="0.5rem"
          color="gray.500">
          {
            dayjs(launch.launch_date_local)
              .locale('es')
              .format('D MMMM, YYYY')
          } 
        </Text>
      </Flex>

      <Link to={`/launch/${launch.flight_number}`}>
        <Button
          colorScheme="purple"
          mt="2"
          ml="4"
          >
          More details
        </Button>
      </Link>

    </Box>
  )
}