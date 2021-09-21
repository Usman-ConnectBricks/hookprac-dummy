// import { useHistory, withRouter } from "react-router-dom";

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }
// export default HomeButton;



// import { useRef } from "react";

// function LogButtonClicks() {
//   const countRef = useRef(0);

//   const handle = () => {
//     countRef.current++;
//     console.log(`Clicked ${countRef.current} times`);
//   };

//   console.log("I rendered!");

//   return <button onClick={handle}>Click me</button>;
// }
// export default LogButtonClicks






// import React, {useContext} from 'react';

// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee",
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222",
//   },
// };

// const ThemeContext = React.createContext(themes.light);

// function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       I am styled by theme context!
//     </button>
//   );
// }

// export default App;





// import {
//   Route,
//   BrowserRouter as Router,
//   Link,
//   useRouteMatch,
// } from 'react-router-dom';

// function Profile() {
//   const match = useRouteMatch('/profile/:name');

//   return match ? <p>{match.params.name}'s Profile</p> : <p>My own profile</p>;
// }

// export default function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/profile">My Profile</Link>
//         <br />
//         <Link to={`/profile/ann`}>Ann's Profile</Link>
//       </nav>
//       <Route path="/profile">
//         <Profile />
//       </Route>
//     </Router>
//   );
// }


// import React from "react";
// import { v4 as uuidv4 } from "uuid";

// const App = () => {
//   const [users, setUsers] = React.useState([
//     { id: "a", name: "Robin" },
//     { id: "b", name: "Dennis" },
//   ]);

//   const [text, setText] = React.useState("");

//   const handleText = (event) => {
//     setText(event.target.value);
//   };

//   const handleAddUser = () => {
//     setUsers(users.concat({ id: uuidv4(), name: text }));
//   };

//   const handleRemove = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleText} />
//       <button type="button" onClick={handleAddUser}>
//         Add User
//       </button>

//       <List list={users} onRemove={handleRemove} />
//     </div>
//   );
// };

// const List = ({ list, onRemove }) => {
//   return (
//     <ul>
//       {list.map((item) => (
//         <ListItem key={item.id} item={item} onRemove={onRemove} />
//       ))}
//     </ul>
//   );
// };

// const ListItem = ({ item, onRemove }) => {
//   return (
//     <li>
//       {item.name}
//       <button type="button" onClick={() => onRemove(item.id)}>
//         Remove
//       </button>
//     </li>
//   );
// };

// export default App;



import react, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.tyicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetching;