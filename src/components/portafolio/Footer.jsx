import { HiCalendar } from "react-icons/hi";
import { SlSocialTwitter } from 'react-icons/sl'
import { AiFillGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'


export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-50 py-4">
      <div className="container mx-auto text-center">
        <p>Contáctame en redes sociales:</p>
        <ul className="flex justify-center mt-2">
          <li className="mx-2">
            <a href="/" className="hover:text-red-500">
              <SlSocialTwitter className=""/>
            </a>
          </li>
          <li className="mx-2">
            <a href="/" className="hover:text-red-500">
              <AiFillGithub className=""/>
            </a>
          </li>
          <li className="mx-2">
            <a href="/" className="hover:text-red-500">
              <CiLinkedin className=""/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};


