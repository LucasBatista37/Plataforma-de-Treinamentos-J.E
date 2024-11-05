import React from 'react';
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">J.E TREINAMENTOS</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#profile">Perfil</a>
        <button className="btn-signup">Inscreva-se gratuitamente</button>
        <button className="btn-signin">Entrar</button>
      </nav>
    </header>
  );
}

export default Header;
