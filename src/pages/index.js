// Nombre del archivo: src/pages/index.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-12
// Versión: 1.12
// Descripción: Corrección de error de compilación (ReferenceError: translate is not defined). Se importó explícitamente la función `translate` desde '@docusaurus/Translate' para permitir la internacionalización del título en la pestaña del navegador (Layout), manteniendo la estructura de la v1.11.

import React from 'react';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar'; 
import Translate, { translate } from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout
      title={translate({message: 'Centro de Ayuda', id: 'homepage.title.tag'})}
      description="Soporte y base de conocimiento de CaloriTrack">
      
      {/* SECCIÓN PRINCIPAL (HERO) */}
      <header style={{ backgroundColor: '#FFFFFF', padding: '6rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: '#111111', fontSize: '3.2rem', fontWeight: '800', marginBottom: '1.2rem' }}>
            <Translate id="homepage.hero.title">¿Cómo podemos ayudarte hoy?</Translate>
          </h1>
          <p style={{ color: '#A9A9A9', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            <Translate id="homepage.hero.subtitle">
              Encuentra guías, respuestas y recursos para potenciar tu vida y entender a fondo tu cuerpo con CaloriTrack.
            </Translate>
          </p>

          {/* CONTENEDOR DEL BUSCADOR (Centrado puro - Lógica v1.10 preservada) */}
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
            
            {/* Tarjeta: Salud */}
            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%', borderRadius: '16px', padding: '1rem' }}>
                <div className="card__header" style={{ borderBottom: 'none' }}>
                  <h3 style={{ color: '#374151', fontSize: '1.4rem', fontWeight: '700' }}>
                    <Translate id="homepage.card.health.title">🌿 Salud y Bioanálisis</Translate>
                  </h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>
                    <Translate id="homepage.card.health.description">
                      Entiende tu dashboard central, métricas de VFC, sueño y ritmo circadiano.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta: Nutrición */}
            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%', borderRadius: '16px', padding: '1rem' }}>
                <div className="card__header" style={{ borderBottom: 'none' }}>
                  <h3 style={{ color: '#374151', fontSize: '1.4rem', fontWeight: '700' }}>
                    <Translate id="homepage.card.nutrition.title">🥗 Nutrición</Translate>
                  </h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>
                    <Translate id="homepage.card.nutrition.description">
                      Guías sobre registro de alimentos naturales y gestión de antinutrientes.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta: kAI Coach */}
            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%', borderRadius: '16px', padding: '1rem' }}>
                <div className="card__header" style={{ borderBottom: 'none' }}>
                  <h3 style={{ color: '#374151', fontSize: '1.4rem', fontWeight: '700' }}>
                    <Translate id="homepage.card.kai.title">🤖 kAI Coach</Translate>
                  </h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>
                    <Translate id="homepage.card.kai.description">
                      Descubre cómo interactuar con tu guía personal basado en sabiduría estoica.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}