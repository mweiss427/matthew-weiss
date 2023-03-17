import './App.css';
import Home from "../pages/Home"
import { BrowserRouter} from 'react-router-dom';
import Footer from '../components/blog/Footer'
import Header from '../components/blog/Header'

const sections = [
  { title: 'Technology', url: '/technology' },
  { title: 'Books', url: '/books' },
  { title: 'Health', url: '/health'},
  { title: 'Curling', url: '/curling'},
  { title: 'DevOps', url: '/devops'}
];

function App() {
  return(
    <div>
     <BrowserRouter>
        <Header title="Matthew E Weiss" sections={sections} />
        <Home /> 
        <Footer
          title="Thank you"
          description="I hope you found value in my site.  Thank you for your time."
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

