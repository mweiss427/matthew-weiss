import './App.css';
import Button from './components/Button/button';
import Comment from './components/Comment/comment'


function Welcome(props){
  return <h1> Hello, I'm {props.name} welcome to my home.</h1>;
}

function Bio(props) {
  return <div> enter your bio here</div>
}

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Future Me',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function App(){
  return (
    <div>
      <Welcome name="Matthew"/>
      <Button label="Click me."></Button>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
    </div>
  );
  }


export default App;
