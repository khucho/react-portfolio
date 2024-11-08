import logo from '../assets/mmp_logo1.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaViber } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
        <nav className='mb-10 flex items-center justify-between'>
            <div className='flex flex-shrink-0 items-center'>
                {/* <img src={logo} alt="Logo" /> */}
                <p className='text-white mx-10 text-3xl'>MMP</p>
                {/* <div className="flex items-center justify-center gap-4">
                  <a href="/" className="block rounded-md bg-neutral-950 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
                  <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                  <a href="/technologies" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Technologies</a>
                  <a href="/experiences" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experiences</a>
                  <a href="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                  <a href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
                </div> */}
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/may-myo-pwint-84b654303" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-white cursor-pointer" />
                </a>
                <a href="https://github.com/khucho" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-white cursor-pointer" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maymyopwint825@gmail.com" target="_blank" rel="noopener noreferrer">
                  <SiGmail className="hover:text-white cursor-pointer" />
                </a>
                <a href="viber://chat?number=09251900929" target="_blank" rel="noopener noreferrer">
                  <FaViber className="hover:text-white cursor-pointer" />
                </a>
            </div>
        </nav>
    </>
  )
}
