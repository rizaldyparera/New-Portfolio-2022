import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <section id="main" className="container lg:container-md xl:container-lg lg:pt-48 xl:pt-48 pt-48 mx-auto" data-aos="fade-up">
                <div className="flex flex-wrap justify-center">
                    <h1 className="uppercase font-bold text-[20px] sm:text-[25px] md:text-[32px] lg:text-[36px] xl:text-[46px] font-inter">Hi, I'm MARS Parera.</h1>
                    <h1 className="uppercase font-bold text-[20px] sm:text-[25px] md:text-[32px] lg:text-[36px] xl:text-[46px] font-inter text-secondary-color">A Creative Web Developer</h1>
                    <h1 className="uppercase font-bold text-[20px] sm:text-[25px] md:text-[32px] lg:text-[36px] xl:text-[46px] font-inter mb-6">Based In Ambon</h1>
                </div>
                <div className="flex mx-auto justify-center">
                    <Link href="/contact">                 
                        <a className="px-8 py-4 rounded-lg font-semibold font-inter bg-primary-color hover:bg-hover-color text-light-mode">Got a Project ?</a>
                    </Link>    
                </div>
            </section>
            <div className="flex" data-aos="zoom-in">  
                <div className="mt-48 grid gap-11 grid-cols-2 justify-center md:grid-cols-6 mx-auto">
                    <i className="bx bxl-html5 text-[72px] px-2 md:px-2 lg:px-11 xl:px-16 tooltip hover:text-[#FF5733]"><span className="tooltiptext text-sm text-third-color">I have studied HTML for 2 years.</span></i>
                    <i className="bx bxl-css3 text-[72px] px-2 md:px-2 lg:px-11 xl:px-16 tooltip hover:text-[#2196F3]"><span className="tooltiptext text-sm text-third-color">I have studied CSS for 2 years.</span></i>
                    <i className="bx bxl-javascript text-[72px] px-2 md:px-2 lg:px-11 xl:px-16 tooltip hover:text-[#F7DF1E]"><span className="tooltiptext text-sm text-third-color">I have studied JavaScript for 2 years.</span></i>
                    <i className="bx bxl-bootstrap text-[72px] px-2 md:px-2 lg:px-11 xl:px-16 tooltip hover:text-[#5E3B7F]"><span className="tooltiptext text-sm text-third-color">I have studied Bootstrap for 1.5 years.</span></i>
                    <i className="bx bxl-tailwind-css text-[72px] px-2 md:px-2 lg:px-11 xl:px-16 tooltip hover:text-[#44A8B3]"><span className="tooltiptext text-sm text-third-color">I have studied Tailwind for 1 years.</span></i>
                    <i className="bx bxl-react text-[72px] px-2 md:px-2 lg:px-11 xl:px-16 tooltip hover:text-[#61DBFB]"><span className="tooltiptext text-sm text-third-color">I have studied ReactJS and also NextJS for 4 Months.</span> </i>
                </div>
            </div>
        </>
    )
}
export default Hero;