import React, { useRef, useEffect, useState } from 'react';
import { ReactComponent as Whatsapp } from './icons8-whatsapp.svg';
import myImg from './my-img.webp';
import arrow from './icons8-down-arrow-32.png';

// const LogoLight = () => {
//     return <>
//         <svg width="81" height="55" viewBox="0 0 81 55" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M15.6445 35.0625L26.2266 0.960938H33.1875L17.9297 44.8711C17.5781 45.8086 17.1094 46.8164 16.5234 47.8945C15.9609 48.9961 15.2344 50.0391 14.3438 51.0234C13.4531 52.0078 12.375 52.8047 11.1094 53.4141C9.86719 54.0469 8.37891 54.3633 6.64453 54.3633C6.12891 54.3633 5.47266 54.293 4.67578 54.1523C3.87891 54.0117 3.31641 53.8945 2.98828 53.8008L2.95312 48.5273C3.14062 48.5508 3.43359 48.5742 3.83203 48.5977C4.25391 48.6445 4.54688 48.668 4.71094 48.668C6.1875 48.668 7.44141 48.4688 8.47266 48.0703C9.50391 47.6953 10.3711 47.0508 11.0742 46.1367C11.8008 45.2461 12.4219 44.0156 12.9375 42.4453L15.6445 35.0625ZM7.875 0.960938L17.7539 30.4922L19.4414 37.3477L14.7656 39.7383L0.773438 0.960938H7.875Z" fill="#03D36B"/>
//         <path d="M21 54L36.4576 8L49.5 35.2427L62.5424 8L78 54" stroke="#1E1E1E" strokeWidth="5"/>
//         </svg>
//     </>
// }

const LogoDark = () => {
    return <>
    <svg width="81" height="55" viewBox="0 0 81 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6445 35.0625L26.2266 0.960938H33.1875L17.9297 44.8711C17.5781 45.8086 17.1094 46.8164 16.5234 47.8945C15.9609 48.9961 15.2344 50.0391 14.3438 51.0234C13.4531 52.0078 12.375 52.8047 11.1094 53.4141C9.86719 54.0469 8.37891 54.3633 6.64453 54.3633C6.12891 54.3633 5.47266 54.293 4.67578 54.1523C3.87891 54.0117 3.31641 53.8945 2.98828 53.8008L2.95312 48.5273C3.14062 48.5508 3.43359 48.5742 3.83203 48.5977C4.25391 48.6445 4.54688 48.668 4.71094 48.668C6.1875 48.668 7.44141 48.4688 8.47266 48.0703C9.50391 47.6953 10.3711 47.0508 11.0742 46.1367C11.8008 45.2461 12.4219 44.0156 12.9375 42.4453L15.6445 35.0625ZM7.875 0.960938L17.7539 30.4922L19.4414 37.3477L14.7656 39.7383L0.773438 0.960938H7.875Z" fill="#03D36B"/>
    <path d="M21 54L36.4576 8L49.5 35.2427L62.5424 8L78 54" stroke="white" strokeWidth="5"/>
    </svg>
    </>
}

const Ham = () => {
    return <>
        <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3H49" stroke="white" strokeWidth="5"/>
        <path d="M0 19H49" stroke="white" strokeWidth="5"/>
        <path d="M0 33H49" stroke="white" strokeWidth="5"/>
        </svg>

    </>
}

// const DownloadSign = () => {
//     return <>
//     <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M24 0.5V30" stroke="#181818" strokeWidth="7"/>
//     <path d="M23.5591 36.9134L10.9574 22.0481L36.0721 21.9733L23.5591 36.9134Z" fill="#181818"/>
//     <rect y="40" width="48" height="11" rx="3" fill="#181818"/>
//     </svg>

//     </>
// }

const Menu = ({ open , toAbout, toProjects, toContact}) => {
    return <>
        <div className={`d-${open ? "flex":"none"} menu flex-wrap`}>
            <button onClick={() => window.scrollTo(0, 0)} className='my-4 w-100 text-white px-4 text-start'>Home</button>
            <button onClick={() => toAbout()} className='my-4 w-100 text-white px-4 text-start'>About</button>
            <button onClick={() => toProjects()} className='my-4 w-100 text-white px-4 text-start'>Projects</button>
            <a href="/blog" className='my-4 w-100 text-white px-4 text-start'>Blog</a>
            <button onClick={() => toContact()} className='my-4 w-100 text-white px-4 text-start'>Contact</button>
        </div>
    </>
}

const Nav = () => {
    const [open, setOpen] = useState(false);
    window.onresize = () => {
        if (window.innerWidth > 769) {
            setOpen(false);
        }
    }

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

    return (<>
        <nav className='nav'>
            <div className="container">
                <div className="row align-items-center py-1">

            <div className='logo col-lg-1 col-md-2 col-10'>
                <LogoDark/>
            </div>
            <div className='col-lg-11 col-md-9 d-md-flex d-none'>
                <button onClick={() => window.scrollTo(0, 0)} className='px-3 py-2 mx-2 text-white nav-links'>Home</button>
                <button onClick={() => toAbout()} className='px-3 py-2 mx-2 text-white nav-links'>About</button>
                <button onClick={() => toProjects()} className='px-3 py-2 mx-2 text-white nav-links'>Projects</button>
                <a href="/blog" className='px-3 py-2 mx-2 text-white nav-links'>Blog</a>
                <button onClick={() => toContact()} className='px-3 py-2 mx-2 text-white nav-links'>Contact</button>
            </div>
            <div className='col-2 d-flex justify-content-center align-items-center d-md-none d-flex'>
                <button className='ham' onClick={() => setOpen(!open)} aria-label="menu">
                    <Ham/>
                </button>
                </div>
            </div>
            </div>
        </nav>
        <Menu open={open} toAbout={toAbout} toProjects={toProjects} toContact={toContact}></Menu>
    </>);
}

const WhatsappChat = () => {
    return <>
        <a aria-label='whats app' href='https://wa.me/201097741207' target="_blank" rel='noreferrer' className='whatsapp-btn d-flex justify-content-center align-items-center p-2'>
            <Whatsapp/>
        </a>
    </>
}

const Header = () => {
    const header = useRef(null);
    useEffect(() => {
        header.current.style.height =`${window.innerHeight}px`;
    }, []); 

    function toContact() {
        let scrolled = window.scrollY;
        let about = document.getElementById("contact").getBoundingClientRect().y;
        window.scrollTo(0, scrolled + about - 70);
    }

    return (<>
        <header className='container' ref={header} id="header">
            <section className='row h-75 flex-wrap-reverse align-items-center top-63'>
                <div className='col-lg-7 col-md-6 d-flex justify-content-md-start justify-content-center align-content-center flex-wrap'>
                    <small className='w-100 fs-3 text-md-start text-center g'>Hi, I’m Yahia,</small>
                    <h1 className='text-white w-100 text-md-start text-center px-md-0 px-3'>Full-Stack Developer</h1>
                    <button onClick={() => toContact()} className='download-btn fs-5 px-3 py-2 mt-2'>Contact Me</button>
                </div>
                <div className='col-lg-5 col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='my-img'>
                        <img src={myImg} alt="my-img"></img>
                    </div>
                </div>
            </section>
            <div className="d-flex justify-content-center align-items-center flex-wrap scroll-down">
                <small className="text-white w-100 text-center pb-2">scroll down</small>
                <img src={arrow} alt="arrow" className='arrow'/>
            </div>
        </header>
        <WhatsappChat/>
    </>);
}

export { Header , Nav };

