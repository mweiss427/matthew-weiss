
import React from 'react';
import Blog from "../components/blog/Blog"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Manatee from '../components/Animals/Manatee';
import Narwhal from '../components/Animals/Narwhal';
import Whale from '../components/Animals/Whale';

function Home(){
    return (
      <div>
        <Blog/>
        <h1> Marine Mammals </h1>
        <nav>
          <ul>
            <li><a href="/manatee">Manatee</a></li>
            <li><a href="/narwhal">Narwhal</a></li>
            <li><a href="/whale">Whale</a></li>
        </ul>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/manatee" element={<Manatee/>} />
            <Route path="/narwhal" element={<Narwhal/>} />
            <Route path="/whale" element={<Whale/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
    }

export default Home;