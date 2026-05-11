import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title={`Centro de Ayuda`}
      description="Soporte y base de conocimiento de CaloriTrack">
      
      {/* SECCIÓN PRINCIPAL (HERO) - Totalmente blanca */}
      <header style={{ backgroundColor: '#FFFFFF', padding: '6rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: '#111111', fontSize: '3rem', fontWeight: 'bold' }}>
            ¿Cómo podemos ayudarte hoy?
          </h1>
          <p style={{ color: '#A9A9A9', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Encuentra guías, respuestas y recursos para potenciar tu vida y entender a fondo tu cuerpo con CaloriTrack.
          </p>
        </div>
      </header>

      {/* SECCIÓN DE TARJETAS DE AYUDA (Tus 6 Pilares) */}
      <main style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="row" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            
            {/* Tarjeta 1: Salud */}
            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%' }}>
                <div className="card__header">
                  <h3 style={{ color: '#4a4a4a' }}>🌿 Salud y Bioanálisis</h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#A9A9A9' }}>Entiende tu dashboard central, métricas de VFC, sueño y ritmo circadiano.</p>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Nutrición */}
            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%' }}>
                <div className="card__header">
                  <h3 style={{ color: '#4a4a4a' }}>🥗 Nutrición</h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#A9A9A9' }}>Guías sobre registro de alimentos naturales y gestión de antinutrientes.</p>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: kAI Coach */}
            <div className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none', height: '100%' }}>
                <div className="card__header">
                  <h3 style={{ color: '#4a4a4a' }}>🤖 kAI Coach</h3>
                </div>
                <div className="card__body">
                  <p style={{ color: '#A9A9A9' }}>Descubre cómo interactuar con tu guía personal basado en sabiduría estoica.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}