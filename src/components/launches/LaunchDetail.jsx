import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import { useFetch } from "../../hooks/useFetch"


const API_URL = 'https://api.spacexdata.com/v3/launches'


export const LaunchDetail = ({ id }) => {
  // llama al Hook
  const [launch, loading] = useFetch(`${API_URL}/${id}`)

  return (
    <div className="bg-gray-100 rounded-xl p-4">
      <div className="text-3xl font-bold pb-2">Launch Detail</div>
      {
        (loading)
          ? <div>Loading...</div>
          :
          <section className="flex flex-col space-y-3">
            <div>
              Mission <strong >{launch.mission_name}</strong> ( {launch.launch_year} )
            </div>

            <ReactPlayer
              url={launch.links.video_link}
              playing={false}
              volume={0.5}
              controls={true}
            />

            <Link to="/Launches">
              <button className="bg-orange-500 text-white py-2 px-5" >
                Back
              </button>
            </Link>
          </section>
      }
    </div>

  )
}