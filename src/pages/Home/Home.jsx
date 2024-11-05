import React from 'react';
import './home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Aprenda sem Limites</h1>
          <p>Inicie, troque ou avance em sua carreira com cursos de alta qualidade e certificações de nível mundial.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Inscreva-se gratuitamente</button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses">
        <h2>Cursos Avaliados</h2>
        <div className="course-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="course-card" key={index}>
              <img
                src={`https://via.placeholder.com/300x150`}
                alt="Course Thumbnail"
                className="course-thumbnail"
              />
              <div className="course-details">
                <h3>Titulo do Curso {index + 1}</h3>
                <p>Instrutor: João</p>
                <p className="rating">★★★★☆</p>
                <p>Descrição do Curso</p>
                <button className="btn-details">Detalhes</button>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Footer */}
       <Footer />

    </div>
  );
}

export default App;
