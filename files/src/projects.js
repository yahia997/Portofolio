import React, { useEffect, useRef} from 'react';

// year experience
// import { ReactComponent as Years } from './year-experience.svg';
// import { ReactComponent as ProjectsDone } from './projects-done.svg';
// import { ReactComponent as Right } from './right.svg';

const Skill = ({ skill, progress , id}) => {
    return <>
        <div className='row px-4 d-flex justify-content-center align-items-center my-3'>
            <small className='text-white col-lg-2 col-md-3 col-12 px-0'>{skill}</small>
            <span className={`col-lg-9 col-md-8 col-10 progress p-0`} id={id}></span>
            <small className='text-white col-md-1 col-2 text-center'>{ progress }%</small>
        </div>
    </>
}

const Project = ({name, gitHubLink, link, img}) => {
    return <>
        <div className='project'>
            <a href={link} className='d-flex justify-content-center img p-0 m-0'>
                <img src={require(`./${img}`)} alt={name} loading="lazy" />
            </a>
            <div className='w-100 d-flex justify-content-center align-items-center flex-wrap p-3'>
                <p className='w-100 pb-2 text-white m-0'>{name}</p>
                {gitHubLink !== "" ? 
                <a className='w-100 text-end' href={gitHubLink}>Source Code</a>
                    :
                <span className="w-100 text-end text-secondary">No Source Code</span>    
            }
            </div>
        </div>
    </>
}

// const Certifications = () => {
//     const [index, setIndex] = useState(0);
//     const certifications = [
//         "freeCodeCamp-js-certification.png",
//     ]
//     return <>
//         <h2 className='g px-md-3 px-4'>Certifications</h2>
//         <div className="row justify-content-center my-4">
//             <div className='certification-p d-flex px-3'>
//                 <img src={require(`./${certifications[index]}`)}
//                     alt="certification"
//                     className='certification'/>
//             </div>
//             <div className="w-100 d-flex justify-content-center my-3">
//                 <button className="text-white left mx-3 d-flex justify-content-center align-items-center"
//                     onClick={() => certifications[index - 1] !== undefined ? setIndex(index - 1): null}
//                 >
//                     <Right/>
//                 </button>
//                 <button className="text-white right mx-3 d-flex justify-content-center align-items-center"
//                     onClick={() => certifications[index + 1] !== undefined ? setIndex(index + 1): null}
//                 >
//                     <Right/>
//                 </button>
//             </div>
//         </div>
//     </>
// }

const Projects = () => {
    const projectsSection = useRef(null);
    const mySkills = [
        {name: "React", progress: 90},
        {name: "Javascript/Node", progress: 85},
        {name: "Css/Css3", progress: 80},
        {name: "Bootstrap5", progress: 80},
        {name: "Html/Html5", progress: 75 },
        {name: "Express", progress: 75 },
        {name: "MongoDB", progress: 70 },
        {name: "Sass", progress: 40 },
    ]
    const projects = [
        {name: "Audiophile e-commerce website", gitHubLink: "", link: "https://e-comm-p1.netlify.app/", img: "Screenshot (22).png"},
        {name: "Memorize new words", gitHubLink: "", link: "https://new-word.herokuapp.com/", img: "Screenshot (23).png"},
        {name: "Problem solving platform", gitHubLink: "https://github.com/yahia997/arabExpert", link: "https://arab-expert.herokuapp.com/", img: "Screenshot (74).png"},
        {name: "Stark", gitHubLink: "", link: "https://stark-copy.netlify.app/", img: "Screenshot (100).png"},
        {name: "Chat App", gitHubLink: "", link: "https://sime-chat-app.herokuapp.com/", img: "Screenshot (110).png"},
        {name: "Easybank landing page", gitHubLink: "", link: "https://theme-bootstrap-5.netlify.app/", img: "Screenshot (101).png"},
        {name: "Pomodoro app", gitHubLink: "", link: "https://promodoro-app.netlify.app/", img: "Screenshot (102).png"},
        {name: "Books store", gitHubLink: "", link: "https://books-store-project.netlify.app/", img: "Screenshot (103).png"},
        {name: "Simple photo editor", gitHubLink: "", link: "https://simple-photo-shop.netlify.app/", img: "Screenshot (104).png"},
        {name: "calculator", gitHubLink: "", link: "https://calc-yahia.netlify.app/", img: "Screenshot (105).png"},
    ]
    function trake() {
        // animate svg
        var start = projectsSection.current.getBoundingClientRect().y;

        if (-50 < start &&  start <= 70) {
            mySkills.forEach((obj, i) => {
                document.getElementById(`${i}`).classList.add(`progress-${obj.progress}`);
                document.getElementById(`${i}`).classList.add(`animate-${i + 1}`);
            });
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => trake());

        return _ => {
            window.removeEventListener('scroll', () => trake());
        }
    });

    const currentYear = new Date().getFullYear();

    return <>
        <section className='container my-5' ref={projectsSection} id="projects">
            <div className='row px-md-3 px-4'>
                <h2 className='g'>Projects and skills</h2>
                <p className='w-100 x ff-2 fs-5 text-white py-3'>This is some of my main
                    skills that I have learned and I built some great projects with it.</p>
            </div>
            {mySkills.map((obj, index) => {
                return <Skill skill={obj.name} progress={obj.progress} key={index} id={`${index}`}/>
            })}
            <div className='row py-5'>
                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center flex-wrap'>
                    <p className='grad mb-0' id="year-ex">
                        +{Math.floor(currentYear - 2021)}
                    </p>
                    <p className='w-100 fs-3 text-white text-center'>Year experiecnce</p>
                </div>
                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center flex-wrap'>
                    <p className='grad mb-0' id="projects-done">
                        {projects.length}
                    </p>
                    <p className='w-100 fs-3 text-white text-center'>Projects done</p>
                </div>
            </div>
            <p className='w-100 ff-2 fs-5 px-3 text-white text-center'>This some of my projects which I built.</p>
            <div className='projects-grid py-5'>
                {projects.map((obj, index) => {
                    return <Project key={index} name={obj.name} img={obj.img} link={obj.link} gitHubLink={obj.gitHubLink}/>
                })}
            </div>
        </section>
    </>
}

export { Projects };