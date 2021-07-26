import React from "react";
import {
  FaAngleDoubleRight,
  FaUserFriends,
  FaShoppingCart,
} from "react-icons/fa";
import "./App.css";
import axios from "axios";

function App() {
  let nomeCliente: string = '';
  let cep: string = '';
  async function carregarCEP():Promise<any> {
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((retorno:any) => { console.log(retorno)});
  }
  function cadastrarCliente(){
    const regexCEP = /^[0-9]{8}$/;
    if(regexCEP.test(cep)){
      let valores = Promise.resolve(carregarCEP());
      let Clientes = localStorage.getItem("clientes");
      console.log(valores,Clientes, nomeCliente);
    }
  }

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="/#" className="nav-link">
              <FaAngleDoubleRight />
              <span className="logo-text">Menu</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              <FaUserFriends></FaUserFriends>
              <span className="link-text">Clientes</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              <FaShoppingCart></FaShoppingCart>
              <span className="link-text">Produtos</span>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <input onChange={(e) => (nomeCliente = e.target.value)} type="text" placeholder="Nome do cliente"></input>
        <input onChange={(e) => (cep = e.target.value)} type="text" placeholder="CEP do cliente"></input>
        <button type="button"
						onClick={cadastrarCliente}>Cadastrar!</button>
      </main>
    </>
  );
}

export default App;
