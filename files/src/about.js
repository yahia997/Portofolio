import React from 'react';
import shape1 from "./Untitled@1-1366x625.png";
import shape2 from "./Untitled@1-1366x625 (1).png";
import shape4 from "./Untitled@1-1366x625 (2).png";
import shape3 from "./Untitled@1-1366x625 (3).png";
import shape5 from "./Untitled@1-1366x625 (4).png";


const About = () => {
    return <>
        <span className="d3 shape1">
            <img src={shape1} alt="shape1"/>
        </span>
        <span className="d3 shape2">
            <img src={shape2} alt="shape2"/>
        </span>
        <span className="d3 shape3">
            <img src={shape3} alt="shape3"/>
        </span>
        <span className="d3 shape4">
            <img src={shape4} alt="shape4"/>
        </span>
        <span className="d3 shape5">
            <img src={shape5} alt="shape5"/>
        </span>
        <section className='container pb-5' id="about">
            <div className='row px-md-3 px-4 py-4'>
                <h2 className='g'>My portofolio</h2>
                <p className='w-100 ff-2 fs-5 mb-5 text-white py-3'>
                    This is my modest portofolio, It contains some of my best projects chosen by me,
                    some information about me and small blog.
                </p>
                <h2 className='g'>About me</h2>
                <p className='w-100  ff-2 fs-5 text-white py-3'>My name is yahia mahmoud, My age is 16 and I live in Alexandria in Egypt
                    and I speak Arabic and English fluently and I know a bit about Italian as it is my second language in
                    secondary school.</p>
                <h6 className='g fs-5'>my study</h6>
                <p className='w-100 ff-2 fs-5 text-white py-3'>I studied primary and prep in a private school in Egypt, I applied for stem schools and I
                    was accepted in stem hurghada but I did not go because of long distance and I joined ordinary high school instead 
                    and now I am in second year secondary,I have started learning programming at the end of 2020.
                </p>
                <h6 className='g fs-5'>my hobbies</h6>
                <p className='w-100 ff-2 fs-5 text-white py-3'>I love programming,mathematics and cycling, I
                am used to getting up early at 5 AM even in holidays.</p>
            </div>
        </section>
    </>
}

export { About };