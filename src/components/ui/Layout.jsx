import { Footer } from '../portafolio/Footer'
import { Navbar } from '../portafolio/Navbar'

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col bg-gray-300'>

      <Navbar className='bg-gray-800' />

      <main className='bg-gray-300 py-auto px-4'>
        {children}
      </main>

      <Footer />
    </div>
  )
}
