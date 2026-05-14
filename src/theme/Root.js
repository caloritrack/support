// Nombre del archivo: src/theme/Root.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-13
// Versión: 1.3
// Descripción: Componente Root devuelto de forma íntegra basado en tu versión proporcionada. Mantiene la lógica impecable de visibilidad del buscador (oculto en Home mediante 'is-home-page') y el modal de contacto. No requiere cambios lógicos adicionales para el centrado del buscador.

import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({children}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

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

  return (
    <>
      {children}

      {isModalOpen && (
        <div className="contact-modal-overlay" onClick={closeModal}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={closeModal} aria-label="Cerrar modal">&times;</button>
            
            <div className="contact-modal-header">
              <h2>¿En qué podemos ayudarte?</h2>
              <p>Cuéntanos qué sucede. Nuestro equipo revisará tu mensaje y te responderá lo más pronto posible para que sigas potenciando tu bienestar.</p>
            </div>
            
            <iframe 
              src="https://caloritrack.com/contacto-soporte-iframe" 
              title="Formulario de Contacto Caloritrack"
              className="contact-modal-iframe"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}