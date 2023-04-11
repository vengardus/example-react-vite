import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { HiCalendar } from 'react-icons/hi'

export const LaunchItem = (launch) => {
  return (
    <div className='flex bg-gray-100 mb-4 py-3 rounded-xl px-3'>

      <div className='flex flex-col basis-4/5  space-y-2'>
        <div className='text-2xl'>
          Mission <strong>{launch.mission_name}</strong> ( {launch.launch_year} )
        </div>

        <div className='flex flex-row'>
          <HiCalendar className='text-red-500 mr-3' />
          <div className='text-gray-500'>
            {
              dayjs(launch.launch_date_local)
                .locale('es')
                .format('D MMMM, YYYY')
            }
          </div>
        </div>

        <Link to={`/launch/${launch.flight_number}`}>
          <button className='bg-orange-500 text-white py-1 px-2'>
            More details
          </button>
        </Link>

      </div>

      <div className='flex basis-1/5 justify-end items-center'>
        <div
          className={`text-white w-32 h-16 flex items-center justify-center 
            ${launch.launch_success ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {launch.launch_success ? 'Success' : 'Failure'}
        </div>
      </div>

    </div>
  )
}
