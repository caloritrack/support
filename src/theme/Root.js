// Nombre del archivo: src/theme/Root.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-15
// Versión: 1.4
// Descripción: Modal de contacto dinámico. Se añadió la detección del idioma (inglés/español) para cambiar dinámicamente la URL del iframe de contacto y los textos de la cabecera del modal, mejorando la UX internacional.

import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({children}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Detectamos el idioma mediante la ruta (Docusaurus usa /en/ para inglés)
  const isEnglish = location.pathname.startsWith('/en');

  // Detectamos si estamos en el Home (soporta raíz y versión en inglés)
  const isHomePage = location.pathname === '/' || location.pathname === '/en' || location.pathname === '/en/';

  useEffect(() => {
    // 1. Gestión de clase para ocultar buscador en el Header
    if (isHomePage) {
      document.body.classList.add('is-home-page');
    } else {
      document.body.classList.remove('is-home-page');
    }

    // 2. Interceptor de clics para el Modal de Contacto
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href') === '#contacto') {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.body.classList.remove('is-home-page'); // Limpieza al desmontar
    };
  }, [isHomePage]);

  const closeModal = () => setIsModalOpen(false);

  // Configuración dinámica por idioma para el Modal
  const iframeUrl = isEnglish 
    ? "https://caloritrack.com/en/contacto-soporte-iframe-2/" 
    : "https://caloritrack.com/contacto-soporte-iframe";
    
  const modalTitle = isEnglish 
    ? "How can we help you?" 
    : "¿En qué podemos ayudarte?";
    
  const modalDescription = isEnglish 
    ? "Tell us what's happening. Our team will review your message and reply as soon as possible so you can continue empowering your well-being." 
    : "Cuéntanos qué sucede. Nuestro equipo revisará tu mensaje y te responderá lo más pronto posible para que sigas potenciando tu bienestar.";

  return (
    <>
      {children}

      {isModalOpen && (
        <div className="contact-modal-overlay" onClick={closeModal}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="contact-modal-close" 
              onClick={closeModal} 
              aria-label={isEnglish ? "Close modal" : "Cerrar modal"}
            >
              &times;
            </button>
            
            <div className="contact-modal-header">
              <h2>{modalTitle}</h2>
              <p>{modalDescription}</p>
            </div>
            
            <iframe 
              src={iframeUrl} 
              title={isEnglish ? "CaloriTrack Contact Form" : "Formulario de Contacto Caloritrack"}
              className="contact-modal-iframe"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}