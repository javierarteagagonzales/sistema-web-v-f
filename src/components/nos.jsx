import React from 'react';
import "../estilos/home.css";
const Nos = () => {
  return (
    <div className='nos-container'>
    <h2>Nosotros</h2>
      <section>
        <h3>Nuestra Misión</h3>
        <p>
          En Vitex nos dedicamos apasionadamente a la confección de prendas de la más alta calidad, destinadas a mercados exigentes a nivel internacional.
        </p>
      </section>
      <section>
        <h3>Nuestra Visión</h3>
        <p>
          En un plazo de cinco años, Vitex se visualiza como el líder indiscutible en la mente de nuestros compradores...
        </p>
      </section>
      <section>
        <a href="https://www.vircatex.com/" target="_blank" rel="noopener noreferrer">
          Visita nuestro sitio web.
        </a>
      </section>
    </div>
  );
}

export default Nos;
