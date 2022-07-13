import { Element } from "react-scroll";
import Image from 'next/image';
import Project1 from '../public/assets/dr.job.png';
import Project2 from '../public/assets/Pulih.png';
import Project3 from '../public/assets/Top Football.png';
import Project4 from '../public/assets/Mangente.png'

function Projects () {
    return (
        <>
        <Element id="projects" name="projects">
            <section id="projects" className="pt-24">
                <div className="container">
                        <h1 className="text-xl font-bold font-inter mb-2 lg:text-2xl px-4">Latest Projects</h1>
                        <p className="text-sm font-roboto mb-11 sm:mb-5 sm:text-base px-4">Some of the projects I have worked on. <a className="text-secondary-color hover:text-button-hover-color" href="#">Show More</a></p>
                </div>
                    <article className="mt-4 w-11/12 mx-auto lg:w-5/6 container">
                        <ul className="auto-grid grid lg:grid-cols-3 gap-4 p-0 md:grid-cols-2 sm:grid-cols-2" role="list">
                            <li>
                            <a href="https://www.instagram.com/p/CaWHuJWBhCT/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                <div className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover">
                                    <Image alt="Project 3" src={ Project4 } />
                                </div>  
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/p/CYoDPfDBr2Z/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                <div className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover">    
                                    <Image alt="Project 3"  src={ Project3 } />
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/p/CYnYbw2hvUl/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                <div className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover">    
                                    <Image alt="Project 2"  src={ Project2 } />
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/p/CYnaizMh7sL/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                <div className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover">    
                                    <Image alt="Project 1"  src={ Project1 } />
                                </div>
                            </a>
                            </li>
                        </ul>
                    </article>
            </section>
        </Element>
    </>
    )
}

export default Projects;