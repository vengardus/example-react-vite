import logo from "../../assets/img/logo.png"
import { LaunchItem } from "./LaunchItem";
import { useFetch } from "../../hooks/useFetch";


const API_URL = 'https://api.spacexdata.com/v3/launches'

export const LaunchList = () => {
  const [launches, loading] = useFetch(API_URL)

  return (
    <>
      <section className='flex flex-col space-y-4'>
        <figure className='flex'>
          <img
            src={logo}
            className="object-fill h-20 w-auto 0 bg-gray-300"
          />
        </figure>

        <div className='text-3xl font-bold'>
          All Launches
        </div>
      </section>

      <section className="pt-4">
        {
          (loading) ?
            <div>Loading...</div>
            :
            // flight_number is not unique
            launches?.map(launch => (
              <LaunchItem
                key={launch.flight_number + launch.mission_name}
                {...launch}>
              </LaunchItem>
            ))
        }
      </section>
    </>
  )
}