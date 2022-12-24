import React from 'react';
import {
  BrowserRouter as Router,Routes,
Route} from "react-router-dom";

import { Header, Nav } from "./home";
import { About } from './about';
import { Projects } from './projects';
import { Contact, Footer } from './contact';
import { Blog } from './blog';
import { Form } from './form';
import { Article } from './singleArticle';

const All = () => {
  return <>
    <Header></Header>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
  </>
}

const Error = () => {
  return <>
    <h1 className="text-center text-white my-5 py-5">404 Page Not Found</h1>
    <a href="/" className="w-100 text-center fs-2 d-block">Back to Home Page</a>
  </>
}

function App() {
  return (<>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<Article/>}/>
        <Route path="/gtav5532759/add" element={<Form addOrUpdate="add" />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>);
}

export default App;
