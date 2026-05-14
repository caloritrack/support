// Nombre del archivo: docusaurus.config.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-13
// Versión: 1.11
// Descripción: Ajuste en el texto y orden del menú de navegación superior (navbar). Se renombraron las etiquetas a "Contactar al equipo" y "Regresar a CaloriTrack", y se reordenaron los elementos a la derecha: Selector de Idioma -> Regresar a CaloriTrack -> Contactar al equipo -> (Buscador insertado automáticamente al final).

import {themes as prismThemes} from 'prism-react-renderer';

// Capturamos el idioma que Docusaurus está compilando en este momento
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'es';

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
        copyright: `© ${new Date().getFullYear()} CaloriTrack ®, Todos los Derechos Reservados`,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;