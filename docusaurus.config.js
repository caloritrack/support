// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CaloriTrack Support',
  tagline: 'Controla tu bienestar, potencia tu vida. Tu salud integral, en una sola app.',
  
  /* --- Favicon de la pestaña del navegador --- */
  favicon: 'img/favicon.ico', 

  future: {
    v4: true,
  },

  url: 'https://support.caloritrack.com',
  baseUrl: '/',
  organizationName: 'caloritrack', 
  projectName: 'support-site', 

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
      
      /* --- Desactivar Modo Oscuro (Requerimiento del proyecto) --- */
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // Quita el botón de sol/luna
        respectPrefersColorScheme: false, // Ignora si la PC del usuario está en modo oscuro
      },

      navbar: {
        title: 'CaloriTrack',
        logo: {
          alt: 'CaloriTrack Logo',
          /* --- Logo principal del header --- */
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
            label: 'Web Oficial Caloritrack',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light', 
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
        copyright: `© ${new Date().getFullYear()} CaloriTrack ®, Todos los Derechos Reservados`,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;