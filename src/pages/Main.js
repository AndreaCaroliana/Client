import React, { useEffect, useState } from "react";
import Axios from "axios";

import Asistente from "../components/Asistente";
import Invitado from "../components/Invitado";
import Admin from "../components/Admin";
import Super from "../components/Super";


export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      {role === "Admin" && <Admin />}
      {role === "Asistente" && <Asistente />}
      {role === "Invitado" && <Invitado />}
      {role === "Super" && <Super />}
    </div>
  );
}