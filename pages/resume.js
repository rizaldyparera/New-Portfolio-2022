import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export default function Resume () {
    return(
        <>
           <Head>
				<title>MARS Parera - A Front-End Web Developer</title>
				<meta name="description" content="Who is passionate about creating elegant, clean and professional products." />
				<link rel="icon" href="/assets/logo.png" />
			</Head>
			<Navbar />
            <div className="pt-32">
            <div className="flex flex-wrap justify-center" data-aos="fade-up">
                <div className="mx-auto">
                    <h1 className="font-inter text-2xl font-bold text-center">My Journey</h1>
                    <h4 className="font-roboto text-center">Some of my career journey summarized</h4>
                </div>
            </div>
            <div className="px-4 sm:flex pt-20 lg:mb-60">
                <div className="sm:grid-cols-2 lg:grid-cols-3 sm:grid sm:gap-x-10 md:gap-x-48 justify-center mx-auto self-center">
					<div class="relative top-[50px] rounded shadow-dark padding-30 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                        <i class='bx bxs-graduation text-2xl absolute left-1 top-0 z-10' ></i>
                        <div class="timeline-container pl-[50px] mb-[50px] relative w-full wow fadeInUp">
							<div class="relative">
								<span class="text-sm">2016 - 2019</span>
								<h3 class="text-lg font-bold">Science Major</h3>
								<p className="m-0">Siwalima Senior High School</p>
							</div>
						</div>
						<div class="timeline-container pl-[50px] mb-[50px] relative w-full wow fadeInUp" data-wow-delay="0.2s">
							<div class="relative">
								<span class="text-sm">2021 - Now</span>
								<h3 class="text-lg font-bold">Digital Business</h3>
								<p className="m-0">ITB-STIKOM Ambon</p>
							</div>
						</div>
						<span class="bg-secondary-color absolute w-[1px] top-[30px] bottom-[30px] left-[34px]"></span>
					</div>

					<div class="relative top-[50px] rounded shadow-dark padding-30 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                        <i class='bx bxs-briefcase text-2xl absolute left-1 top-0 z-10' ></i>
                        <div class="timeline-container pl-[50px] mb-[50px] relative w-full wow fadeInUp">
							<div class="relative">
								<span class="text-sm">2020 - Now</span>
								<h3 class="text-lg font-bold">Front-End Web Developer</h3>
								<p className="m-0">PT. Hahour Adeka Group</p>
							</div>
						</div>
						<span class="bg-secondary-color absolute w-[1px] top-[30px] bottom-[30px] left-[34px]"></span>
					</div>

					<div class="relative top-[50px] rounded shadow-dark padding-30 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                        <i class='bx bxs-award text-2xl absolute left-1 top-0 z-10' ></i>
                        <div class="timeline-container pl-[50px] mb-[50px] relative w-full wow fadeInUp">
							<div class="relative">
								<span class="text-sm">May 2021</span>
								<h3 class="text-lg font-bold">Full-Stack Web Designer</h3>
								<p className="m-0">BuildWith Angga</p>
							</div>
						</div>
						<div class="timeline-container pl-[50px] mb-[50px] relative w-full wow fadeInUp" data-wow-delay="0.2s">
							<div class="relative">
								<span class="text-sm">June 2021</span>
								<h3 class="text-lg font-bold">JavaScript OOP</h3>
								<p className="m-0">Codepolitan</p>
							</div>
						</div>
						<span class="bg-secondary-color absolute w-[1px] top-[30px] bottom-[30px] left-[34px]"></span>
					</div>
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}