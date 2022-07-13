import React from "react";
import { Element } from "react-scroll";
function Hero () {
    return (
    <Element id="home" name="home">
        <section id='home' className='h-screen min-h-screen pt-56'>
            <div className='container mx-auto'>
                <div className="w-full md:text-center  md:items-center md:justify-center md:top-[250px]"> 
                    <h4 className="lg:text-2xl font-inter text-xl font-bold text-secondary-color">Hi There!</h4>
                    <h1 className="lg:text-5xl text-4xl font-semibold font-inter text-dark-mode mb-2">I'm a Front-End Web Developer</h1>
                    <span className="inline-block font-bold text-secondary-color md:hidden mt-4">-</span>
                    <div className="justify-center hidden md:flex md:mb-10">
                            <a className="inline-block bg-dark-mode text-light-mode leading-4 px-2 py-1.5 mr-1 rounded-full items-center w-8 h-8 duration-300" href="https://www.instagram.com/rizaldyparera/"><i className='bx bxl-instagram-alt  hover:instagram-color hover:text-gradient'></i></a>
                            <a className="inline-block bg-dark-mode text-light-mode leading-4 px-2 py-1.5 mr-1 rounded-full items-center w-8 h-8 duration-300 hover:text-[#0072b1]" href="https://www.linkedin.com/in/rizaldy-parera-343a6020a/"><i className='bx bxl-linkedin'></i></a>
                            <a className="inline-block bg-dark-mode text-light-mode leading-4 px-2 py-1.5 mr-1 rounded-full items-center w-8 h-8 duration-300 hover:text-[#DE463B]" href="https://www.youtube.com/rizaldyparera"><i className="bx bxl-youtube"></i></a>
                    </div>
                    <p className="text-dark-mode text-sm sm:text-base lg:text-xl sm:w-3/5 w-3/4 leading-relaxed mb-5 ml-4 font-roboto -mt-8 md:w-full md:mx-auto">Who is passionate about creating 
                    <span className="text-secondary-color italic font-semibold"> elegant</span>, 
                    <span className="text-secondary-color italic font-semibold"> clean</span> and 
                    <span className="text-secondary-color italic font-semibold"> professional</span> products</p>

                    <a href="#contact" className="text-sm text-light-mode bg-button-color py-3 px-5 rounded-lg hover:bg-button-hover-color transition duration-300 ease-in-out cursor-pointer hover:shadow-lg lg:ml-0 lg:text-sm">Contact Me <i className="bx bx-mail-send text-xl relative top-[4.4px] left-1" ></i></a>
                </div>
            </div>
        </section>
    </Element>
    )
}

export default Hero;