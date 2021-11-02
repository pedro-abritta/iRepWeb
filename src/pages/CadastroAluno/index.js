import React, { useState } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";

import { MdOutlineMailOutline } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { IoMdCalendar } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { RiMapPinTimeLine, RiLockPasswordLine } from "react-icons/ri";
import { BsTelephone, BsHouseDoor, BsArrowLeftSquare, BsApp} from "react-icons/bs";


const CadastroAluno = () => {
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");  
  const [faculdade, setFaculdade] = useState("");  
  const [periodo, setPeriodo] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); 
    setShow(!show);
  };

  //<script src="post.js"></script>
  return (
    <form action="/addaluno" method="POST">
      <div className="cadastro">
        <div className="cadastro-title">
          <center>
            <h1>
              CADASTRO ALUNO
            </h1>
          </center>

          <div className="cadastro-Voltar">
            <Link to="/"><BsArrowLeftSquare size={25}/></Link>
          </div>

          <div >
            <select value={tipo} id="tipo" className="cadastro-InputTipo" onChange={(e) => setTipo(e.target.value)}>
              <option value="aluno">Aluno</option>
              <option value="republica">República</option>
            </select>
          </div>

          <div className="cadastro-InputNome">
            <AiOutlineUser />
            <input
              type="text"
              id = "nome"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="cadastro-InputData">
            <IoMdCalendar />
            <input className="cadastro-InputData"
              type="date"
              id = "data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className="cadastro-InputFaculdade">
            <IoSchoolOutline />
            <input
              type="text"
              id = "curso"
              placeholder="Curso"
              value={faculdade}
              onChange={(e) => setFaculdade(e.target.value)}
            />
          </div>

          <div className="cadastro-InputPeriodo">
            <RiMapPinTimeLine />
            <input
              type="number" min="1" max="10"
              id = "periodo"
              placeholder="Período da graduação"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            />
          </div>

          <div className="cadastro-InputCidade">
            <BsHouseDoor />
            <input
              type="text"
              id = "cidade"
              placeholder="Cidade natal"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>

          <div className="cadastro-InputTelefone">
            <BsTelephone />
            <input
              type="tel"
              id = "telefone"
              placeholder="Telefone para contato"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="cadastro-InputEmail">
            <MdOutlineMailOutline />
            <input
              type="email"
              id = "email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="cadastro-InputPassword">
            <RiLockPasswordLine />
            <input
              type={show ? "text" : "password"}
              id = "senha"
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

          <div>        
            <textarea id="info" placeholder="Conte-nos um pouco sobre você..."  className="cadastro-InputInfo" value={info} onChange={(e) => setInfo(e.target.value)}>
              
            </textarea>
          </div>

          <button type="submit">Cadastrar</button>
        </div>
      </div>
    </form>
  );
}

export default CadastroAluno;

