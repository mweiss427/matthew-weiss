import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './App';
import Comment from './components/Comment/comment';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}. The clock is ticking.</h2>;
}


const comment = {
  date: new Date(),
  text: 'This is Under construction!',
  author: {
    name: 'Matthew',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function App() {
  return(
    <div>
      <Header />
      <Clock/>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

