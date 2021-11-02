import React, { useState } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";

import { MdOutlineMailOutline } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { IoMdCalendar } from "react-icons/io";
import { AiOutlineUser, AiOutlineDollarCircle } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { RiMapPinTimeLine, RiLockPasswordLine } from "react-icons/ri";
import { BsTelephone, BsArrowLeftSquare} from "react-icons/bs";

const CadastroRepublica = () => {
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");  
  const [localizacao, setLocalizacao] = useState("");  
  const [capacidade, setCapacidade] = useState("");
  const [custo, setCusto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <form action="/addrepublica" method="POST">
      <div className="cadastro">
        <div className="cadastro-title">
          <center>
            <h1>
              CADASTRO REPÚBLICA
            </h1>
          </center>
          <div className="cadastro-Voltar">
            <Link to="/"><BsArrowLeftSquare size={25}/></Link>
          </div>
          <div >
            <select value={tipo} className="cadastro-InputTipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="aluno">Aluno</option>
              <option value="republica">República</option>
            </select>
          </div>

          <div className="cadastro-InputNome">
            <AiOutlineUser />
            <input
              type="text"
              placeholder="Digite o nome da república"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="cadastro-InputData">
            <IoMdCalendar />
            <input className="cadastro-InputData"
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className="cadastro-InputLocalizacao">
            <IoSchoolOutline />
            <input
              type="text"
              placeholder="Localização"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
          </div>

          <div className="cadastro-InputCapacidade">
            <RiMapPinTimeLine />
            <input
              type="number"
              placeholder="Capacidade de moradores"
              value={capacidade}
              onChange={(e) => setCapacidade(e.target.value)}
            />
          </div>

          <div className="cadastro-InputCustoMedio">
            <AiOutlineDollarCircle />
            <input 
              type="text"    
              placeholder="Custo médio mensal (R$)"       
              value={custo}
              onChange={(e) => setCusto(e.target.value)}
            />
          </div>

          <div className="cadastro-InputTelefone">
            <BsTelephone />
            <input
              type="text"
              placeholder="Telefone para contato"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="cadastro-InputEmail">
            <MdOutlineMailOutline />
            <input
              type="tel"
              placeholder="Email da república"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="cadastro-InputPassword">
            <RiLockPasswordLine />
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

          <div>        
            <textarea  placeholder="Fale um pouco sobre a república..."  className="cadastro-InputInfo" value={info} onChange={(e) => setInfo(e.target.value)}>
              
            </textarea>
          </div>

          <button type="submit">Cadastrar</button>
        </div>
      </div>
    </form>
  );
}

export default CadastroRepublica;