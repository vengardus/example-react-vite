import { Link } from 'react-router-dom'
import { options } from '../../data/options'

export const Home = () => {
  const title = 'Aplicativos desarrollados en ReactJs'

  return (
    <section className='flex flex-col pt-3 space-y-4'>

      <div className='flex text-3xl font-bold justify-center'>{title}</div>

      <div className='flex flex-wrap flex-col md:flex-row space-y-3 md:space-y-0'>

        {
          options.map(option => (
            <div key={option.name} className='flex-none w-full md:w-1/2'>
              <Link to={option.href}>
                <div className='flex flex-col p-3 md:p-4 border-2 my-2 mx-3 border-gray-500 rounded-xl bg-gray-200 hover:bg-gray-100 space-y-2'>
                  <div className='text-2xl font-bold'>App: <strong className='underline underline-offset-4'>{option.title}</strong></div>
                  <div className='text-xl font-bold'>Descripción:</div>
                  <div className='pl-4 font-bold'>{option.description}</div>
                  <div className='text-xl font-bold'>Detalle:</div>
                  <div className='pl-4 font-bold'>{option.detail}</div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>

    </section>
  )
}
