import { Element } from "react-scroll";

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
                            <a href="https://www.instagram.com/p/CaWHuJWBhCT/?utm_source=ig_web_copy_link" target="_blank" className="projects">
                                <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Mangente UI</h2>
                                <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">24-02-2022</p>
                                <img alt="Project 3" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/Mangente.png" />
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/p/CYoDPfDBr2Z/?utm_source=ig_web_copy_link" target="_blank" className="projects">
                                <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Top Football UI</h2>
                                <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">21-02-2022</p>
                                <img alt="Project 3" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/Top Football.png" />
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/p/CYnYbw2hvUl/?utm_source=ig_web_copy_link" target="_blank" className="projects">
                                <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Pulih UI</h2>
                                <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8 ">22-01-2022</p>
                                <img alt="Project 2" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/Pulih.png" />
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/p/CYnaizMh7sL/?utm_source=ig_web_copy_link" target="_blank" className="projects">
                                <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Dr Job UI</h2>
                                <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">11-01-2022</p>
                                <img alt="Project 1" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/dr.job.png" />
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