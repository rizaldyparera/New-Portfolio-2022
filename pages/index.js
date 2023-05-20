import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>MARS Parera - A Front-End Web Developer</title>
        <meta name="description" content="Who is passionate about creating elegant, clean and professional products." />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>

  )
}