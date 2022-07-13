import '../styles/globals.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script id="show-banner" strategy="lazyOnload">
      {`const navToggle = document.querySelector(".nav-toggle");
        const navLinks = document.querySelectorAll(".nav__link");

        navToggle.addEventListener("click", () => {
            document.body.classList.toggle("nav-open");
        });
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                document.body.classList.remove("nav-open");
            });
        });`}
    </Script>
    <Component {...pageProps} />
    </>
  ); 
}

export default MyApp
