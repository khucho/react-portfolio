import logo from '../assets/mmp_logo1.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaViber } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
        <nav className='mb-20 flex items-center justify-between'>
            <div className='flex flex-shrink-0 items-center'>
                {/* <img src={logo} alt="Logo" /> */}
                <p className='text-white mx-10 text-3xl'>MMP</p>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <SiGmail />
                <FaViber />
            </div>
        </nav>
    </>
  )
}
