import { useEffect, useState } from 'react';
import './App.css';
import Home from "../pages/Home"
import { BrowserRouter, useLocation } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'

const sections = [
  { title: 'Technology', url: '/technology' },
  { title: 'Books', url: '/books' },
  { title: 'Health', url: '/health'},
  { title: 'Curling', url: '/curling'},
  { title: 'DevOps', url: '/devops'}
];

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (location.pathname === '/technology') {
      setTheme('technology');
    } else {
      setTheme('');
    }
  }, [location.pathname]);

  return (
    <div>
      <Header title="Matthew E Weiss" sections={sections} theme={theme} />
      <Home />
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
