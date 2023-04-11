import { SlSocialTwitter } from 'react-icons/sl'
import { AiFillGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'

export const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-50'>
      <div className='flex flex-col container mx-auto text-center'>
        <p>@ismytv 2023-2024</p>
        <p>Contáctame en redes sociales:</p>
        <ul className='flex justify-center mt-2'>
          <li className='mx-2'>
            <a href='/' className='hover:text-red-500'>
              <SlSocialTwitter className='' />
            </a>
          </li>
          <li className='mx-2'>
            <a href='/' className='hover:text-red-500'>
              <AiFillGithub className='' />
            </a>
          </li>
          <li className='mx-2'>
            <a href='/' className='hover:text-red-500'>
              <CiLinkedin className='' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
