import React from "react";
import "../assets/App.css";

export default function Navegador(){
  return ( 
  <nav className="nav">
      <a href="/" >Home</a>
      <ul>
        <li>
          <a href="/register" >Registrar</a>
        </li>
        <li>
          <a href="/login"    >Login</a>
        </li>
      </ul>
    </nav>
  )
};