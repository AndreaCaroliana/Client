import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home(){
    
    const [listOfProps, setListOfProps] = useState([]);
    useEffect(() => {
    axios.get("http://localhost:3001/api/user").then((res) =>{
    setListOfProps(res.data);
  });
}, []);
    return(
        <div className="Home">
            {listOfProps.map((value , key) => {
             return <div className = "post"> 
                <div className= "title">{value.username}</div> 
                <div className= "body">{value.role}</div>    
            </div>;
        })}
        </div>
    )
}

export default Home;