import React, { useState, useEffect, useRef} from "react";
import { useParams } from "react-router-dom";

import { Nav } from "./home";
import { Footer } from "./contact";

import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

import copy from "./icons8-copy-64.png";


// image
const Image = ({base64, caption}) => {
  return  <figure className='w-100 blog-img d-flex justify-content-center my-4 flex-wrap'>
    <img src={base64} alt={caption || "img"} />
    {caption !== undefined ? 
      <figcaption className="w-100 py-3 text-center text-light ff-3 fs-6">
        {caption}
      </figcaption>
      : 
      null
    }
  </figure>
}


// paragraph
const Paragraph = ({text}) => {
  const p = useRef(null);
  useEffect(() => {
    const myText = text
      .replace(/<b>(.+)<\/b>/gi, "<strong>$1</strong>")
      .replace(/<hl>(.+)<\/hl>/gi, "<mark>$1</mark>")
      .replace(/<a href='(.+)'>(.+)<\/a>/gi, "<a href='$1'>$2</a>")
      .replace(/<i>(.+)<\/i>/gi, "<i>$1</i>")
      .replace(/\n/gi, "<br>")
      .replace(/<li>(.+)<\/li>/gi, "<li class='w-100'>$1</li>");
    
      p.current.innerHTML = myText;
  }, []);
  return <p className="text-white w-100 my-4 text-end ff-3 fs-5" ref={p}>{ text }</p>
}

// code
const Code = ({code, i, lang}) => {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(code);
    document.getElementById(`copied-${i}`).classList.remove("invisible");

    setTimeout(() => {
      document.getElementById(`copied-${i}`).classList.add("invisible");
    }, 1500);
  }

  return <div className="code w-100 my-5 overflow-hidden" key={i}>
    <div className={`d-flex ${lang} lang position-absolute`}>
      <span className="py-2 px-3 text-white bg-dark">{ lang }</span>
      <button className="p-2 text-white" aria-label="copy" onClick={() => copyToClipBoard()}>
        <img src={copy} alt="copy" width="24"/>
        <div className="copied rounded text-light position-absolute px-2 py-1 invisible" id={`copied-${i}`}>copied</div>
      </button>
    </div>
    <code>
    <Highlight {...defaultProps} code={code} language={lang} theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={`${className} p-3 m-0 pt-4`} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
  </code>
  </div>
}

const Article = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/articles/${id}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [id]);

  return <>
    <div className="container">
      <Nav />
      <div className={`p-0 m-0 rtl px-md-3 px-2 py-3 my-4 border border-1 border-secondary ${`${data.subject}-art` || ""}`}>
        <div className="ltr my-4">
          <a href="/blog" className='download-btn fs-5 px-2 py-1'>go back</a>
        </div>
      {data.title ? <h2 className="text-white w-100 my-4 text-end ff-3">{data.title}</h2> : null}
      
      {data.body ? data.body.map((obj, i) => {
        if(obj.type === "p") {
          return < Paragraph text={obj.data} />
        } else if (obj.type === "link") {
          return <a href={obj.data} target="_blank" rel="noreferrer" className="my-4 text-end" key={i}>{obj.data}</a>
        }else if (obj.type === "code") {
          return <Code code={obj.data} key={i} i={i} lang={ obj.lang } />
        } else if (obj.type === "title") {
          return <h4 className="w-100 my-4 text-end ff-3 fw-bold g" key={i}>{obj.data}</h4>
        } else if (obj.type === "img") {
          return <Image base64={obj.data} caption={obj.caption} />
        }
        return null
      }) : "عفوا لا يوجد مقالات"}
      <hr/>
      {data.createdAt ? <p className="text-white w-100 my-4 text-end ff-3 fs-5">كتب في: {data.createdAt}</p> : null}
      {data.updatedAt ? <p className="text-white w-100 my-4 text-end ff-3 fs-5">آخر تعديل في: {data.updatedAt}</p> : null}
        <div className="ltr my-2">
          <a href="/blog" className='download-btn fs-5 px-2 py-1'>go back</a>
        </div>
    </div>
    </div>
    <Footer/>
  </>
}

export { Article };