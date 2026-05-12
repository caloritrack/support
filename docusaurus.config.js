// Nombre del archivo: docusaurus.config.js
// Autor: Arturo Enriquez Betancourt con Jarvis
// Fecha: 2026-05-11
// Versión: 1.3
// Descripción: Archivo principal de configuración. Se actualizó el pie de página (footer) para eliminar el enlace roto hacia /docs/intro tras la limpieza de la arquitectura y se adaptó al ecosistema Caloritrack.

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

  /* Reglas estrictas de calidad (¡Las que causaron tu error anterior, pero protegen tu SEO!) */
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internacionalización base
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg', 
      
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, 
        respectPrefersColorScheme: false, 
      },

      navbar: {
        title: 'CaloriTrack',
        logo: {
          alt: 'CaloriTrack Logo',
          src: 'img/logo.png', 
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
            label: 'Web Oficial',
            position: 'right',
          },
        ],
      },
      
      /* --- FOOTER CORREGIDO --- */
      footer: {
        style: 'dark', 
        links: [
          {
            title: 'Soporte',
            items: [
              {
                label: 'Inicio del Centro de Ayuda',
                to: '/', // Apunta a la raíz, eliminando el error de /docs/intro
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