import Head from 'next/head';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Navbar from '../components/Navbar';
function contact () {
    const [alreadyCopy, setAlreadyCopy] = useState('copy');

    function actionCopy () {
        setAlreadyCopy("copied");

        setTimeout(function() {
            setAlreadyCopy("copy");
        }, 1000);
    }
    return(
        <>
            <Head>
                <title>MARS Parera - A Front-End Web Developer</title>
                <meta name="description" content="Who is passionate about creating elegant, clean and professional products." />
                <link rel="icon" href="/assets/logo.png" />
            </Head>
            <Navbar />
            <div className='w-full' data-aos="fade-up">
                <div className="container mb-20">
                    <h1 className="text-xl font-bold font-inter lg:text-2xl pt-32">Want to get in touch ?</h1>
                    <p className="text-base font-roboto mb-11 sm:mb-5 sm:text-base">Let's talk about everything</p>
                </div>
                <div className='flex justify-center mb-24'>
                    <div className='grid md:grid-cols-2 gap-24'>                 
                        <div className='bg-primary-color w-80 px-4 py-3 shadow-[10px_10px] shadow-hover-color' data-aos="zoom-in">
                            <div className='flex items-center'>
                            <i className='bx bx-envelope text-xl h-[24px] text-light-mode'></i>
                            <h1 className='text-xl text-light-mode'>Email</h1>
                            </div>
                            <div className='w-full mb-4'>
                                <p className='py-3 italic font-inter text-light-mode'>xxmarsparera@gmail.com</p>
                                <CopyToClipboard text='xxmarsparera@gmail.com'>
                                    <a className='btn-copy rounded-lg text-light-mode border py-2 px-4 text-sm items-center mx-auto font-inter hover:bg-hover-color cursor-pointer' onClick={actionCopy}>{alreadyCopy}<i class='bx bx-copy relative top-[4px] left-1' ></i></a>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className='bg-primary-color w-80 px-4 py-3 shadow-[10px_10px] shadow-hover-color' data-aos="zoom-in">
                            <div className='flex items-center'>
                            <i className='bx bxl-github text-xl h-[24px] text-light-mode'></i>
                            <h1 className='text-xl text-light-mode'>GitHub</h1>
                            </div>
                            <div className='w-full mb-4'>
                                <p className='py-3 italic font-inter text-light-mode'>rizaldyparera</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/rizaldyparera" className='border py-2 rounded-lg text-light-mode bg-hover-color hover:bg-primary-color text-sm px-4 items-center'>Visit <i class='bx bx-send relative top-[1.5px] left-1'></i></a>
                            </div>
                        </div>
                        <div className='bg-primary-color w-80 px-4 py-3 shadow-[10px_10px] shadow-hover-color' data-aos="zoom-in">
                            <div className='flex items-center'>
                            <i className='bx bxl-instagram text-xl h-[23px] text-light-mode'></i>
                            <h1 className='text-xl text-light-mode'>Instagram</h1>
                            </div>
                            <div className='w-full mb-4'>
                                <p className='py-3 italic font-inter text-light-mode'>rizaldyparera</p>
                                <a target="-blank" rel="noreferrer" href="https://www.instagram.com/rizaldyparera/" className='border py-2 rounded-lg text-light-mode bg-hover-color hover:bg-primary-color text-sm px-4'>Visit <i class='bx bx-send relative top-[1.5px] left-1'></i></a>
                            </div>
                        </div>
                        <div className='bg-primary-color w-80 px-4 py-3 shadow-[10px_10px] shadow-hover-color' data-aos="zoom-in">
                            <div className='flex items-center'>
                            <i className='bx bxl-linkedin text-xl h-[25px] text-light-mode'></i>
                            <h1 className='text-xl text-light-mode'>LinkedIn</h1>
                            </div>
                            <div className='w-full mb-4'>
                                <p className='py-3 italic font-inter text-light-mode'>Rizaldy Parera</p>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rizaldy-parera-343a6020a/" className='border py-2 rounded-lg text-light-mode bg-hover-color hover:bg-primary-color text-sm px-4'>Visit <i class='bx bx-send relative top-[1.5px] left-1'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default contact;