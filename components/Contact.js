import { Element } from "react-scroll";

function Contact () {
    return (
        <>
        <Element id="contact" name="contact">
            <section id="contact" className="h-screen">
                <div className="container">
                    <h1 className="text-xl font-bold font-inter lg:text-2xl pt-20 px-4">Want to get in touch ?</h1>
                    <p className="text-base font-roboto mb-11 sm:mb-5 sm:text-base px-4">Let's talk about everything</p>
                </div>
                    <div className="mx-auto w-11/12 lg:w-9/12">
                        <form  className="container">
                                <div className="grid grid-cols-2 gap-2 mb-0">
                                    <label htmlFor="name">
                                        <span className="font-semibold text-sm">Your Name</span>
                                        <input type="text" name="name" id="name" placeholder="MARS" className="w-full italic rounded-md placeholder-slate-400 focus:bg-white p-2 text-sm bg-gray-color focus:outline-none ring-1 ring-slate-300 
                                        focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                                    </label>
                                    <label htmlFor="email">
                                        <span className="font-semibold text-sm">Your Email</span>
                                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full italic rounded-md placeholder-slate-400 focus:bg-white p-2 text-sm bg-gray-color focus:outline-none ring-1 ring-slate-300 
                                        focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer" />
                                        <p className="text-xs peer-invalid:visible text-pink-600 invisible mt-1">Please provide a valid email address</p>
                                    </label>
                                </div>
                                <label htmlFor="subject" className="block mb-5">
                                    <span className="font-semibold text-sm">Subject</span>
                                    <input type="text" name="subject" id="subject" placeholder="Enter your subject!" className="w-full italic rounded-md placeholder-slate-400 focus:bg-white p-2 text-sm bg-gray-color focus:outline-none ring-1 ring-slate-300 
                                    focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                                </label>
                                <label htmlFor="message" className="block">
                                    <span className="font-semibold text-sm">Your Message</span>
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Write us something...." className="w-full italic rounded-md placeholder-slate-400 focus:bg-white p-2 text-sm bg-gray-color focus:outline-none ring-1 ring-slate-300 
                                    focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-5"></textarea>
                                </label>
                                <label htmlFor="submit" className="block">
                                    <button type="submit" className="px-5 py-2 bg-button-color hover:bg-button-hover-color duration-400 ease-in rounded-md text-light-mode text-xs">Send Your Message!</button>
                                </label>
                        </form>
                    </div>
            </section>
        </Element>
        </>
    )
}
export default Contact;