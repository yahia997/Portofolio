import React, {useState, useEffect} from 'react';


const Article = ({ title, description, id, subject}) => {
    function to(id) {
        window.location.pathname = `/blog/${id}`;
    }
    return <>
        <div className={`article p-3 my-4 ${subject} g rtl`} onClick={() => to(id)}>
            <strong className="w-100 ff-3 fs-5 ltr">{ subject }</strong>
            <h3 className="text-white fw-bold text-end ff-3">{ title }</h3>
            <p className="text-end ff-3">{ description }</p>
    </div>
    </>
}


const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("/articles")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return <>
    <section className="container">
        {data.map((obj, i) => {
            return <Article title={obj.title} description={ obj.description} id={obj._id} key={i} subject={obj.subject}/>
        })}
    </section>
    </>
}

export { Blog };