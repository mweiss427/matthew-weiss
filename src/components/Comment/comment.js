

function Comment(props) {
  return (
    <div className="Comment">
    <h2>Comments from the Developer</h2>
    <UserInfo user={props.author} />
    <div className="Comment-text">
      {props.text}
    </div>
  </div>
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
    <Avatar user={props.user}/> - {props.user.name}
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

export default Comment