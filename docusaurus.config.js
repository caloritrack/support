// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CaloriTrack Support',
  tagline: 'Controla tu bienestar, potencia tu vida. Tu salud integral, en una sola app.',
  favicon: 'img/favicon.ico', // Recuerda reemplazar este archivo con tu icono en la carpeta static/img/

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://support.caloritrack.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'caloritrack', // Nombre de la organización
  projectName: 'support-site', // Nombre del proyecto

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Configuración de Internacionalización (i18n) para soportar ES y EN
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
          // Removí el 'editUrl' de GitHub ya que tu ecosistema está en Hostinger VPS 
          // y los usuarios no necesitan editar el código fuente.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Útil si decides publicar notas de actualización de la App (Release notes)
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
      // Reemplaza esto con una imagen de marca para cuando compartan un link de soporte
      image: 'img/docusaurus-social-card.jpg', 
      colorMode: {
        respectPrefersColorScheme: true, // Cambia automáticamente a modo oscuro si el usuario lo usa en su sistema
      },
      navbar: {
        title: 'CaloriTrack',
        logo: {
          alt: 'CaloriTrack Logo',
          src: 'img/logo.svg', // Asegúrate de subir el logo oficial en vector a static/img/
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Centro de Ayuda', // Cambiado de 'Tutorial' a un término más amigable
          },
          {to: '/blog', label: 'Novedades de la App', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right', // Agrega el selector de idioma (Español / Inglés)
          },
          {
            href: 'https://caloritrack.com',
            label: 'Web Oficial',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light', // Usamos 'light' para mantener la limpieza (Fondo Blanco Puro) del Brief
        links: [
          {
            title: 'Soporte',
            items: [
              {
                label: 'Guías de Inicio',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Ecosistema CaloriTrack',
            items: [
              {
                label: 'Sitio Web Principal',
                href: 'https://caloritrack.com',
              },
              {
                label: 'Gestión de Cuenta',
                href: 'https://accounts.caloritrack.com',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Novedades',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CaloriTrack. Tu salud integral, en una sola app.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;