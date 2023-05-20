import React from "react";
import Head from 'next/head';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Projects () {
    return (
        <>
           <Head>
                <title>MARS Parera - A Front-End Web Developer</title>
                <meta name="description" content="Who is passionate about creating elegant, clean and professional products." />
                <link rel="icon" href="/assets/logo.png" />
            </Head>
                <Navbar />
                <div className="pt-32" data-aos="fade-up">
                <div className="flex flex-wrap justify-center">
                    <div className="mx-auto">
                        <h1 className="text-center font-bold font-inter text-2xl">All Projects</h1>
                        <h4 className="font-roboto text-center w-11/12 mx-auto sm:w-full">These are all my projects;<span className="italic font-bold"> Works, Personal and freelance </span>project list.</h4>
                    </div>
                </div>
                <div className="flex justify-center mx-auto mt-20">
                    <article className="mt-4 w-11/12 mx-auto lg:w-7/12">
                        <ul className="auto-grid grid lg:grid-cols-3 gap-4 p-0 md:grid-cols-2 sm:grid-cols-2" role="list">
                            <li data-aos="zoom-in">
                            <a href="https://www.digitaldreamer.id" target="_blank" rel="noreferrer" className="projects">
                                <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Digital Dreamer Indonesia</h2>
                                <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8 ">04-04-2023</p>
                                <img alt="Project 2" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/digitaldreamer.png" />
                            </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://www.trixvisual.com/" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Trixviz Portfolio</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">25-10-2022</p>
                                    <img alt="Project 4" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/trixviz-portfolio.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://mangente-rizaldyparera.vercel.app/" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Mangente</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">11-08-2022</p>
                                    <img alt="Project 4" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/mangente-v2.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://gudang-game.vercel.app/" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">GudangGame</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">01-08-2022</p>
                                    <img alt="Project 4" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/gudanggame.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://www.instagram.com/p/CaWHuJWBhCT/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Mangente UI</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">24-02-2022</p>
                                    <img alt="Project 4" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/Mangente.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://www.instagram.com/p/CYoDPfDBr2Z/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Top Football UI</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">21-02-2022</p>
                                    <img alt="Project 3" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/Top Football.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://www.instagram.com/p/CYnYbw2hvUl/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Pulih UI</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8 ">22-01-2022</p>
                                    <img alt="Project 2" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/Pulih.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://www.instagram.com/p/CYnaizMh7sL/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Dr Job UI</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">11-11-2021</p>
                                    <img alt="Project 1" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/dr.job.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://hahouradeka.com/" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Hahour Adeka Group</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">22-06-2021</p>
                                    <img alt="Project 1" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/Hahour.png" />
                                </a>
                            </li>
                            <li data-aos="zoom-in">
                                <a href="https://web-portfolio-2021.vercel.app/" target="_blank" rel="noreferrer" className="projects">
                                    <h2 className="font-inter font-bold leading-4 text-lg duration-300 transform ease-in translate-y-8">Website Portfolio 2021</h2>
                                    <p className="text-sm font-roboto opacity-0 duration-300 ease-linear transform translate-y-8">04-04-2021</p>
                                    <img alt="Project 1" className="w-full h-full absolute top-0 left-0 m-0 -z-10 object-cover" src="/assets/project6.png" />
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
            <Footer />
        </>
    )

}