// Nombre del archivo: src/pages/index.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-11
// Versión: 1.10
// Descripción: Página principal del Centro de Ayuda. El contenedor del buscador se ha simplificado al máximo para delegar el control de tamaño estricto (450px) al archivo CSS global, logrando una proporción visual elegante sin arriesgar la estabilidad del componente React de búsqueda local.

import React from 'react';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar'; 

export default function Home() {
  return (
    <Layout
      title={`Centro de Ayuda`}
      description="Soporte y base de conocimiento de CaloriTrack">
      
      {/* SECCIÓN PRINCIPAL (HERO) */}
      <header style={{ backgroundColor: '#FFFFFF', padding: '6rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: '#111111', fontSize: '3.2rem', fontWeight: '800', marginBottom: '1.2rem' }}>
            ¿Cómo podemos ayudarte hoy?
          </h1>
          <p style={{ color: '#A9A9A9', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            Encuentra guías, respuestas y recursos para potenciar tu vida y entender a fondo tu cuerpo con CaloriTrack.
          </p>

          {/* CONTENEDOR DEL BUSCADOR (Centrado puro) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
            <div className="hero-search-wrapper">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>

      {/* SECCIÓN DE TARJETAS */}
      <main style={{ backgroundColor: '#FFFFFF', paddingBottom: '7rem' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            
            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%', borderRadius: '16px', padding: '1rem' }}>
                <div className="card__header" style={{ borderBottom: 'none' }}>
                  <h3 style={{ color: '#374151', fontSize: '1.4rem', fontWeight: '700' }}>🌿 Salud y Bioanálisis</h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>Entiende tu dashboard central, métricas de VFC, sueño y ritmo circadiano.</p>
                </div>
              </div>
            </div>

            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%', borderRadius: '16px', padding: '1rem' }}>
                <div className="card__header" style={{ borderBottom: 'none' }}>
                  <h3 style={{ color: '#374151', fontSize: '1.4rem', fontWeight: '700' }}>🥗 Nutrición</h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>Guías sobre registro de alimentos naturales y gestión de antinutrientes.</p>
                </div>
              </div>
            </div>

            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%', borderRadius: '16px', padding: '1rem' }}>
                <div className="card__header" style={{ borderBottom: 'none' }}>
                  <h3 style={{ color: '#374151', fontSize: '1.4rem', fontWeight: '700' }}>🤖 kAI Coach</h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>Descubre cómo interactuar con tu guía personal basado en sabiduría estoica.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}