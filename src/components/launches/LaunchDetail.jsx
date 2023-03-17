import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import {
  Button,
  Box,
  Heading,
  Text
} from "@chakra-ui/react"
import { useFetch } from "../../hooks/useFetch"


const API_URL = 'https://api.spacexdata.com/v3/launches'

export const LaunchDetail = () => {
  // Obtiene el parámetro enviado por el route
  const { id } = useParams()
  // llama al Hook
  const [ launch, loading ] = useFetch( `${API_URL}/${id}` )

  return (
    <Box
      bg="gray.100"
      m="4"
      p="4"
      borderRadius="lg"
    >
      <Heading>Launch Detail</Heading>
      {
        ( loading )?
          <div>Loading...</div>
        :
          <section>
            <Text fontSize="xl" py="0.5rem">
              Mission <strong >{launch.mission_name}</strong> ( {launch.launch_year} )
            </Text>

            <Link to="/">
              <Button
                mt="2"
                colorScheme="orange"
              >
                Back
              </Button>
            </Link>
          </section>
      }
    </Box>

  )
}