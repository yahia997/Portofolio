import React from 'react';
import { ReactComponent as Facebook } from './icons8-facebook.svg';
import { ReactComponent as WhatsApp } from './icons8-whatsapp-2.svg';
import { ReactComponent as GitHub } from './gitHub.svg';
import { ReactComponent as LinkedIn } from './linkedIn.svg';

const Footer = () => {
    function toAbout() {
        if (window.location.pathname === "/") {
            let scrolled = window.scrollY;
            let about = document.getElementById("about").getBoundingClientRect().y;
            window.scrollTo(0, scrolled + about - 70);
        } else {
            window.location.pathname = "/";
        }
    }
    function toProjects() {
        if (window.location.pathname === "/") {
            let scrolled = window.scrollY;
            let about = document.getElementById("projects").getBoundingClientRect().y;
            window.scrollTo(0, scrolled + about - 70);
        }   else {
            window.location.pathname = "/";
        }
    }
    function toContact() {
        if (window.location.pathname === "/") {
            let scrolled = window.scrollY;
            let about = document.getElementById("contact").getBoundingClientRect().y;
            window.scrollTo(0, scrolled + about - 70);
        } else {
            window.location.pathname = "/";
        }
    }
    
    return <>
            <div className='start text-white d-flex justify-content-center align-items-center container-fluid'>
            <h2 className='w-100 text-center'>Start Build Your First Website.</h2>
        </div>
        <footer className='container-fluid p-4'>
            <div className="container">
            <div className='row px-0'>
                <div className='col-md-8 col-12 text-white d-flex justify-content-center align-content-center flex-wrap'>
                    <div className='w-100 d-flex justify-content-center align-items-center'>
                    <svg width="81" height="55" viewBox="0 0 81 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6445 35.0625L26.2266 0.960938H33.1875L17.9297 44.8711C17.5781 45.8086 17.1094 46.8164 16.5234 47.8945C15.9609 48.9961 15.2344 50.0391 14.3438 51.0234C13.4531 52.0078 12.375 52.8047 11.1094 53.4141C9.86719 54.0469 8.37891 54.3633 6.64453 54.3633C6.12891 54.3633 5.47266 54.293 4.67578 54.1523C3.87891 54.0117 3.31641 53.8945 2.98828 53.8008L2.95312 48.5273C3.14062 48.5508 3.43359 48.5742 3.83203 48.5977C4.25391 48.6445 4.54688 48.668 4.71094 48.668C6.1875 48.668 7.44141 48.4688 8.47266 48.0703C9.50391 47.6953 10.3711 47.0508 11.0742 46.1367C11.8008 45.2461 12.4219 44.0156 12.9375 42.4453L15.6445 35.0625ZM7.875 0.960938L17.7539 30.4922L19.4414 37.3477L14.7656 39.7383L0.773438 0.960938H7.875Z" fill="#03D36B"/>
                            <path d="M21 54L36.4576 8L49.5 35.2427L62.5424 8L78 54" stroke="white" strokeWidth="5"/>
                    </svg>
                    </div>
                    Yahia Mahmoud
                </div>
                <div className='col-md-4 col-12 d-flex flex-wrap'>
                    <button onClick={() => window.scrollTo(0, 0)} className='py-3  text-white text-md-start text-center px-3'>Home</button>
                    <button onClick={() => toAbout()} className='py-3  text-white text-md-start text-center px-3'>About</button>
                    <button onClick={() => toProjects()} className='py-3  text-white text-md-start text-center px-3'>Projects</button>
                    <a href="/blog" className='py-3  text-white text-md-start text-center px-3 d-block fit-content'>Blog</a>
                    <button onClick={() => toContact()} className='py-3  text-white text-md-start text-center px-3'>Contact</button>
                    {/* <a href='/' className='py-3  text-white text-md-start text-center'>Home</a>
                    <a href='/about' className='py-3  text-white text-md-start text-center'>About</a>
                    <a href='/projects' className='py-3  text-white text-md-start text-center'>Projects</a>
                    <a href='/blog' className='py-3  text-white text-md-start text-center'>Blog</a>
                    <a href='/contact' className='py-3  text-white text-md-start text-center'>Contact</a> */}
                </div>
            </div>
            </div>
        </footer>
    </>
}

const Contact = () => {
    return <>
        <section className='container py-5' id="contact">
            <div className='row px-md-3 px-4 contact'>
                <h2 className='g w-100'>Contact me</h2>
                <p className='w-100 ff-2 fs-5 text-white py-3'>
                    Yo can contact me by any of these social media platforms, I am interested in new ideas and opportunities.
                </p>
                <strong className='w-100 text-center text-white fs-2'>
                    <mark className='bg-transparent p-0 m-0 px-2'>+20</mark>1097741207</strong>
                <strong className='w-100 text-center text-white fs-lg-3 fs-md-4 fs-6'>Yahiamahmoood333@gmail.com</strong>
                <div className='d-flex justify-content-center aling-items-center text-white fs-1 my-3'>
                    <a href="https://www.facebook.com/yahia.mahmood.33" className='mx-3' aria-label='faceBook'>
                        <Facebook/>
                    </a>
                    |
                    <a href="https://wa.me/201097741207" className='mx-3' aria-label='whats app'>
                        <WhatsApp/>
                    </a>
                    |
                    <a href="https://github.com/yahia997" className='mx-3' aria-label='gitHub'>
                        <GitHub/>
                    </a>
                    |
                    <a href="https://www.linkedin.com/in/yahia-mahmoud-82419621a/" className='mx-3' aria-label='linked in'>
                        <LinkedIn/>
                    </a>
                </div>
            </div>
        </section>
    </>
}

export { Contact , Footer };