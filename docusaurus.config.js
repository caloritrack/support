// Nombre del archivo: docusaurus.config.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-15
// Versión: 1.13
// Descripción: Ajuste en la estructura del footer. Se agregó un separador minimalista y se integró el disclaimer en la sección superior (menos negra) debajo de los enlaces, dejando únicamente los derechos reservados en la pleca negra inferior.

import {themes as prismThemes} from 'prism-react-renderer';

// Capturamos el idioma que Docusaurus está compilando en este momento
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'es';

// --- CONFIGURACIÓN DINÁMICA DE TEXTOS DEL FOOTER (DISCLAIMER Y COPYRIGHT) ---
const footerDisclaimer = currentLocale === 'en'
  ? '<strong>Medical Disclaimer:</strong> The content, metrics, and tools provided by Caloritrack (operated by KAI STUDIOS, S.A.S.) are strictly for informational, educational, and general wellness purposes. Caloritrack is not a healthcare provider or a clinical medical device. No information, support content, AI Coach suggestion, or displayed data is intended to substitute professional medical advice, diagnosis, treatment, or prevention. Always consult your physician or a qualified healthcare professional before making any changes to your diet, fasting routines, exercise, or lifestyle.'
  : '<strong>Descargo de Responsabilidad Médica:</strong> El contenido, las métricas y las herramientas proporcionadas por Caloritrack (operado por KAI STUDIOS, S.A.S.) son estrictamente para fines informativos, educativos y de bienestar general. Caloritrack no es un proveedor de atención médica ni un dispositivo clínico. Ninguna información, contenido de soporte, sugerencia de nuestro AI Coach o dato mostrado debe interpretarse como un sustituto del diagnóstico, tratamiento, prevención o consejo médico profesional. Consulta siempre a tu médico o especialista calificado antes de realizar cualquier cambio en tu dieta, rutinas de ayuno, ejercicio o estilo de vida.';

const footerCopyrightText = currentLocale === 'en'
  ? `© ${new Date().getFullYear()} CaloriTrack ™. All Rights Reserved`
  : `© ${new Date().getFullYear()} CaloriTrack ™, Todos los Derechos Reservados`;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CaloriTrack Support',
  tagline: 'Controla tu bienestar, potencia tu vida. Tu salud integral, en una sola app.',
  
  /* --- REPARACIÓN DE FAVICON (Cache Busting) --- */
  favicon: 'img/favicon.ico?v=2', 

  future: {
    v4: true,
  },

  url: 'https://support.caloritrack.com',
  baseUrl: '/',
  organizationName: 'caloritrack', 
  projectName: 'support-site', 

  /* Reglas estrictas de calidad */
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internacionalización base (Español e Inglés)
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: { label: 'Español' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // --- CONFIGURACIÓN DEL BUSCADOR LOCAL ---
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["es", "en"], 
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg', 
      
      // REQUERIMIENTO CRÍTICO: Bloqueo de Modo Oscuro (Solo Light Mode)
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, 
        respectPrefersColorScheme: false, 
      },

      navbar: {
        title: '',
        logo: {
          alt: 'CaloriTrack Logo',
          src: 'img/logo-caloritrack.png', 
        },
        items: [
          /* --- ELEMENTOS A LA IZQUIERDA --- */
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Centro de Ayuda',
          },
          {to: '/blog', label: 'Novedades de la App', position: 'left'},
          
          /* --- ELEMENTOS A LA DERECHA (EN ESTRICTO ORDEN VISUAL) --- */
          // 1. Selector de Idioma
          {
            type: 'localeDropdown',
            position: 'right', 
          },
          // 2. Regresar a CaloriTrack
          {
            href: 'https://caloritrack.com',
            label: currentLocale === 'en' ? 'Back to CaloriTrack' : 'Regresar a CaloriTrack',
            position: 'right',
          },
          // 3. Botón de Contacto (Destacado)
          {
            to: '#contacto',
            label: currentLocale === 'en' ? 'Contact the team' : 'Contactar al equipo',
            position: 'right',
            className: 'nav-contact-btn', // Clase estilizada en custom.css
          },
          // 4. El Buscador se agrega automáticamente aquí por el plugin de búsqueda
        ],
      },
      
      footer: {
        style: 'dark', 
        links: [
          {
            title: 'Soporte',
            items: [
              {
                label: 'Centro de Ayuda',
                to: '/', 
              },
              {
                label: 'Novedades y Actualizaciones',
                to: '/blog',
              },
            ],
          },
          {
            title: 'CaloriTrack',
            items: [
              {
                label: currentLocale === 'en' ? 'Main Website' : 'Sitio Web Principal',
                href: currentLocale === 'en' ? 'https://caloritrack.com/en/' : 'https://caloritrack.com',
              },
              {
                label: currentLocale === 'en' ? 'Terms and Conditions' : 'Términos y Condiciones',
                href: currentLocale === 'en' ? 'https://caloritrack.com/en/terms-and-conditions-of-use/' : 'https://caloritrack.com/terminos-y-condiciones-de-uso-de-caloritrack/',
              },
              {
                label: currentLocale === 'en' ? 'Privacy Policy' : 'Políticas de Privacidad',
                href: currentLocale === 'en' ? 'https://caloritrack.com/en/privacy-policy/' : 'https://caloritrack.com/politica-de-privacidad/',
              }
            ],
          },
        ],
        // Inyectamos el disclaimer y el copyright a través de un template literal con HTML
        copyright: `
          <div class="footer__divider"></div>
          <div class="footer__disclaimer">
            ${footerDisclaimer}
          </div>
          <div class="footer__rights">
            ${footerCopyrightText}
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;