import './App.css';
import React from 'react';
import Home from './views/home/Home';
import PostsListe from './views/posts/PostsListe';
import PostPage from './views/posts/PostPage';
import {BrowserRouter,Routes, Route} from 'react-router-dom';



function App() {
  return (
        <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<PostsListe />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Routes>  
          </BrowserRouter>
        </div>
  );
}

export default App;
