import './App.css';
import Comment from './components/Comment/comment'


function Welcome(props){
  return <h1> Hello, I'm {props.name} and this is my site.</h1>;
}

function Bio(props) {
  return <div> {props.bio} </div>
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Header(){
  return (
    <div>
      <Welcome name="Matthew"/>
      <Bio bio="This is where my bio goes"></Bio>
    </div>
  );
  }


export default Header;
