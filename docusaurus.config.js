// Nombre del archivo: docusaurus.config.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-12
// Versión: 1.6
// Descripción: Actualización de la configuración del navbar para ocultar el texto junto al logo (title vacío) y aplicar cache-busting al logo para forzar su actualización visual. Se documenta la ubicación para futuros cambios de nombre de archivo.

import {themes as prismThemes} from 'prism-react-renderer';

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

  // --- NUEVA CONFIGURACIÓN DEL BUSCADOR LOCAL ---
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["es", "en"], // Activamos indexación para español e inglés
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
        // Al dejar el title vacío (''), Docusaurus ocultará el texto y dejará solo el logo.
        title: '',
        logo: {
          alt: 'CaloriTrack Logo',
          // AQUÍ CAMBIAS EL NOMBRE DEL ARCHIVO DEL LOGO.
          // El ?v=2 es un "cache buster" para obligar al navegador a recargar la nueva imagen.
          src: 'img/logo-caloritrack.png', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Centro de Ayuda',
          },
          {to: '/blog', label: 'Novedades de la App', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right', 
          },
          {
            href: 'https://caloritrack.com',
            label: 'Sitio Web Principal',
            position: 'right',
          },
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
                label: 'Sitio Web Principal',
                href: 'https://caloritrack.com',
              },
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