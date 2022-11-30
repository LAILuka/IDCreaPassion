import './App.css';
import React from 'react';
import PostsListe from './views/posts/PostsListe';
import PostPage from './views/posts/PostPage';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Contact from './views/contact/Contact'; 


function App() {
  return (
        <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PostsListe />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>  
          </BrowserRouter>
        </div>
  );
}

export default App;
