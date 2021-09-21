import  { useState , useEffect} from 'react';
import axios from 'axios'
import './App.css'

function DataFetching(){

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios
          .get(" https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            console.log(res);
            setPosts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
       
    },[])
    return(
        <div className="App">
            <ul>
                {
                    posts.map(post => (
                        <li key ={post.id}> {post.title}</li>
                    ))}
            </ul>
        </div>
    )
}
export default DataFetching;