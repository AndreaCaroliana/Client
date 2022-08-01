import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home(){

    const [listOfPopts, setListOfPosts] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:3001/api/user").then((res) =>{
        setListOfPosts(res.data);
    });
}, []);


    return(
        <div className="Home">
            {listOfPopts.map((value , key) => {
             return <div className = "post"> 
                <div className= "title">{value.username}</div> 
                <div className= "body">{value.role}</div>    
            </div>;
        })}
        </div>
    )
}

export default Home;