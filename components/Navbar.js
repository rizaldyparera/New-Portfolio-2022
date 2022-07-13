import React from "react";
import Image from 'next/image';
import NavLogo from '../public/assets/logo.png';
export default function Navbar() {
    return (    
            <>

    <div className='mx-auto'>
        <div className='flex items-center mt-5'>
            <div className='w-3/12 fixed mt-11 md:mt-8 sm:container'>
                <Image 
                    src={NavLogo}
                    alt="/"
                    width="48"
                    height="48"
                />
            </div>
            <button className="nav-toggle hidden">
                <span className="hamburger"></span>
            </button>
            <div className="w-full">     
                <nav className="nav w-full fixed justify-center flex " id="navbar">
                    <ul className='nav__list list-none flex fixed md:space-x-11' id="navlinkitems">
                        <li className="nav__item ">
                            <a href="#about" className="nav__link no-underline relative     font-normal text-dark-mode text-sm font-inter
                                    before:block before:absolute before:bottom-[-10px] before:left-0 before:h-[3px] before:w-full before:bg-secondary-color before:origin-top-right before:scale-x-0 scale-y-100 hover:text-secondary-color">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link no-underline relative font-normal text-dark-mode text-sm font-inter
                                    before:block before:absolute before:bottom-[-10px] before:left-0 before:h-[3px] before:w-full before:bg-secondary-color before:origin-top-right before:scale-x-0 scale-y-100 hover:text-secondary-color">Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link no-underline relative font-normal text-dark-mode text-sm font-inter
                                    before:block before:absolute before:bottom-[-10px] before:left-0 before:h-[3px] before:w-full before:bg-secondary-color before:origin-top-right before:scale-x-0 scale-y-100 hover:text-secondary-color">Contact</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link no-underline relative font-normal text-dark-mode text-sm font-inter
                                    before:block before:absolute before:bottom-[-10px] before:left-0 before:h-[3px] before:w-full before:bg-secondary-color before:origin-top-right before:scale-x-0 scale-y-100 hover:text-secondary-color">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
            
            
            </>

        
    );
}