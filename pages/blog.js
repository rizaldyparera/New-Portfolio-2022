import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Blog() {
    return (
        <>
            <Navbar />
            <div className="pt-32" data-aos="fade-up">
                <div className="flex flex-wrap justify-center">
                    <div className="mx-auto">
                        <h1 className="font-inter text-2xl font-bold text-center">My Articles</h1>
                        <h4 className="font-roboto w-11/12 mx-auto sm:w-full text-center">Just sharing a knowledge about technology, programming and business</h4>
                    </div>
                </div>
                        <div className="flex justify-center mx-auto">
                            <div className="auto-grid grid lg:grid-cols-3 gap-4 pt-20">
                            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in">
                                <a href="#">
                                    <img className="rounded-t-lg" src="/assets/articles/articles1.jpg" alt="Dampak Teknologi Bagi Kehidupan" />
                                </a>
                                <div className="p-5">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Dampak Teknologi Bagi Kehidupan</h5>                          
                                    <p className="font-normal text-gray-700 mb-11 dark:text-gray-400">Teknologi telah terintegrasi dengan kehidupan sehari-hari, sehingga tidak hanya mengubah kehidupan tetapi juga cara bekerja manusia itu sendiri. Perkembangan perangkat digital ini mempermudah manusia melakukan segala macam akt.....</p>
                                    <Link href="/articles/dampak-teknologi-bagi-kehidupan">                                  
                                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in">
                                <a href="#">
                                    <img className="rounded-t-lg" src="/assets/articles/articles2.jpg" alt="Dampak Teknologi Bagi Kehidupan" />
                                </a>
                                <div className="p-5">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Digital Divide: Gap Dalam Masyarakat.</h5>                          
                                    <p className="font-normal text-gray-700 mb-11 dark:text-gray-400">Kemajuan di bidang teknologi ini semakin mempercepat terjadinya perubahan dalam cara bertukar informasi. Namun, digital divide atau kesenjangan digital tidak bisa di hindari. Secara umum, digital divide adalah tentang adanya keti....</p>
                                    <Link href="/articles/digital-divide-gap-dalam-masyarakat">                                  
                                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in">
                                <a href="#">
                                    <img className="rounded-t-lg h-[180px] w-full" src="/assets/articles/articles3.jpg" alt="Dampak Teknologi Bagi Kehidupan" />
                                </a>
                                <div className="p-5">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Teknologi Dan Masa Depan Pendidikan</h5>                          
                                    <p className="font-normal text-gray-700 mb-11 dark:text-gray-400">Tuntutan global menuntut dunia Pendidikan untuk selalu dan senantiasa menyesuaikan perkembangan teknologi terhadap usaha dalam peningkatan mutu Pendidikan, terutama penyesuaian penggunaan teknologi inf...</p>
                                    <Link href="/articles/teknologi-dan-masa-depan-pendidikan">                                  
                                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </>
    );
}
