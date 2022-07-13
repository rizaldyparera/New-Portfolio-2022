import { Element } from "react-scroll";

function About () {
    return (
    <>
    <Element id="about" name="about">
        <section id='about' className='pt-24'>
            <div className='container'>
                <div className='lg:columns-2 lg:w-full'>
                    <div className='flex flex-wrap'>
                        <div className='px-4 self-center mx-auto w-full'>
                            <h1 className='text-xl font-bold font-inter mb-5'>Anything About Me</h1>
                            <p className="text-base font-roboto w-full text-justify mb-11">My name is Rizaldy Parera, You can call me Rizal or MARS. I'm from Maluku, one of the cities in eastern Indonesia. I really like coding, you could say coding is my hobby. I also have a dream, which I want to create great digital talent that will later be useful to others. So, Nice to meet you, Thank you very much.</p>
                            <a href="#" className="text-sm text-light-mode bg-button-color py-3 px-5 rounded-lg hover:bg-button-hover-color transition duration-300 ease-in-out cursor-pointer hover:shadow">Download CV <i className='bx bx-download text-xl relative top-[2.8px] left-1'></i></a>
                        </div>
                    </div>
                    <div className="px-2 bg-light-mode lg:mt-11">
                        <div className="m-auto max-w-default">
                            <div className="mt-10 lg:mt-64">
                                <div className="md:max-w-3xl">         
                                    <details className="border-b-2">
                                        <summary className="p-4 text-dark-mode font-bold cursor-pointer pt-5 mb-1 text-sm focus:text-secondary-color font-inter">
                                            How long have you studied HTML, CSS & JavaScript ?
                                        </summary>
                                        <p className="py-2 px-3 text-gray-600 font-roboto">I've been studying it since 2 years ago</p>
                                    </details>
                                    <details className="border-b-2">
                                        <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-sm focus:text-secondary-color font-inter">
                                            What css framework can you use?
                                        </summary>
                                        <p className="py-2 px-3 text-gray-600 font-roboto">I can use bootstrap and tailwind</p>
                                    </details>
                                    <details className="border-b-2">
                                        <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-sm focus:text-secondary-color font-inter">
                                            What JavaScript framework can you use?
                                        </summary>
                                        <p className="py-2 px-3 text-gray-600 font-roboto">I'm using vanilla Javascript and I'm currently learning React</p>
                                    </details>
                                    <details className="border-b-2">
                                        <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-sm focus:text-secondary-color font-inter">
                                            How long have you worked as a Front-End Web Dev
                                        </summary>
                                        <p className="py-2 px-3 text-gray-600 font-roboto">I have worked as a front-end web developer for 1 year</p>
                                    </details>
                                    <details className="border-b-2">
                                        <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-sm focus:text-secondary-color font-inter">
                                            Do you open a website creation service?
                                        </summary>
                                        <p className="py-2 px-3 text-gray-600 font-roboto">Of course, please contact me via the <a href="#" className="italic text-button-color hover:text-button-hover-color">form</a> below.</p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 h-36 sm:h-48 md:h-64 lg:h-80">
                <img className="w-full" src="/assets/skillslg.png" alt="Skills" />
            </div>
        </section>
    </Element>
    </>
    
        
    )
}
export default About;