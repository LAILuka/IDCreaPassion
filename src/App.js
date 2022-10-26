import './App.css';
import React from 'react';
import Home from './components/Home';
import PostsListe from './components/PostsListe';
import PostPage from './components/PostPage';
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
