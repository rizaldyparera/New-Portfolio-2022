import { useState } from 'react';
import Link from 'next/link';
import Darkmode from './Darkmode';

function Navbar () {
    const [colorTheme, setTheme] = Darkmode();
    const [ isOpen, setIsOpen ] = useState(false)
    return(
        <div className='fixed w-full z-50 md:container-sm'>
            <div className="bg-primary-color md:bg-transparent rounded-lg mx-4 md:mx-0 mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row">
                    <div className="flex justify-between items-center px-4 py-4 md:py-0 border-b md:border-b-0 border-hover-color">
                        <div className='w-full'>
                            <Link href="/">
                                <a className="font-roboto font-semibold text-2xl text-light-mode md:text-current">MARS</a>
                            </Link>                         
                        </div>
                        <div>
                            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-light-mode block md:hidden">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path className={!isOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path className={isOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={`${ isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row  w-full py-4 md:py-0 items-center`}>
                        <div className="flex flex-col md:flex-row justify-center w-full">
                            <Link href="/projects">                           
                                <a className="block px-4 py-2 md:py-5 hover:text-secondary-color text-light-mode md:text-current">Projects</a>
                            </Link>
                            <Link href="/resume">                            
                                <a className="block px-4 py-2 md:py-5 hover:text-secondary-color text-light-mode md:text-current">Resume</a>
                            </Link>
                            <Link href="/blog">                            
                                <a className="block px-4 py-2 md:py-5 hover:text-secondary-color text-light-mode md:text-current">Blog</a>
                            </Link>
                            <Link href="/contact">                          
                                <a className="block px-4 py-2 md:py-5 hover:text-secondary-color text-light-mode md:text-current">Contact</a>
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row px-4">
                            <div className="cursor-pointer">
                                {colorTheme === "light" ? (
                                    <svg
                                    onClick={() => setTheme("light")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-secondary-color"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                    </svg>
                                ) : (
                                    <svg
                                    onClick={() => setTheme("dark")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-secondary-color"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar;