import React from 'react';

const Avatar = props => <img src={props.user.avatar} alt={props.user.name} />;
const UserName = props => <p> {props.user.name}</p>;

const User = props => {
  return (
   <div className="user-item">
     <Avatar user={props.user}/>
     <UserName user={props.user}/>
  </div>
  )
};

const user =[
  {
    name : 'Angel',
    avatar : 'https://avatars1.githubusercontent.com/u/13841014?s=460&v=4'
    },
  {
    name : 'Marino',
    avatar : 'https://vignette.wikia.nocookie.net/sonic/images/b/be/Tails_63.png/revision/latest?cb=20090730053359'
    }
];

const UserList = props => {
const userList =  props.list.map((user,i)=> <User user={user} key={i} />);
return (
  <div className="user-item">
   {userList}
  </div>
)
};

const elemento = <UserList list={user}/>;


function App() {
return elemento 
};

export default App;