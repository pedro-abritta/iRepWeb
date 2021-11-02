import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <form action="/addlogin" method="POST">
      <div className="login">
        <div className="login-title">
          <h1>iRep</h1>

          <div className="login-InputEmail">
            <MdEmail />
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-InputPassword">
            <MdLock />
            <input
              type={show ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-eye">
              {show ? (
                <HiEye size={20} onClick={handleClick} />
              ) : (
                <HiEyeOff size={20} onClick={handleClick} />
              )}
            </div>
          </div>

          <button className="button-entrar" type="submit">Entrar</button>

          <h4>Não possui conta? </h4>
          <Link to="/cadastroAluno">Cadastro</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
