// Footer.jsx
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
          <a href="#privacy">Política de Privacidade</a>
          <a href="#terms">Termos de Serviço</a>
        </div>
        <p className="footer-copy">© 2024 J.E Treinamentos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
