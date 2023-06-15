import React, { useState } from "react";
import "../stylesheets/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  localStorage.removeItem("token") //eliminar el item que se encuentra almacenado en localStore

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "manumont" && password === "Atenea23") {
      navigate("/Listado");
    } else {
      alert("Favor ingrese correctamente el usuario");
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <section className="Form-Register">
          Usuario:
          <label>
            <input
              className="Controls"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br></br>
          Contraseña:
          <label>
            <input
              className="controls"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="boton-login">
            <button type="submit">Iniciar sesión</button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Login;
