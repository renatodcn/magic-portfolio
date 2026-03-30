import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Renato",
  lastName: "Nara",
  name: `Renato Nara`,
  role: "Desenvolvedor Web",
  avatar: "/images/avatar.jpg",
  email: "contato@renatonara.com.br",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Assine a Newsletter de {person.firstName}</>,
  description: <>Novidades sobre desenvolvimento web e tecnologia</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/5517997096099",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Portfólio`,
  description: `Portfólio de projetos web desenvolvidos por ${person.name}`,
  headline: <>Transformando ideias em experiências digitais</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Impulso Social</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projeto em destaque
        </Text>
      </Row>
    ),
    href: "/work/impulso-social",
  },
  subline: (
    <>
    Sou Renato Nara, desenvolvedor web especializado em criar sites modernos, <br /> responsivos e de alta performance para empresas e projetos.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Renato Nara é um desenvolvedor web brasileiro com paixão por transformar ideias em
        experiências digitais de alta qualidade. Seu trabalho abrange criação de sites institucionais,
        e-commerces e plataformas web, sempre com foco em performance, design moderno e resultados.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projetos",
    experiences: [
      {
        company: "Impulso Social",
        timeframe: "2024",
        role: "Desenvolvimento Web",
        achievements: [
          <>
            Desenvolvimento do site institucional para a Impulso Social, com foco em apresentação
            clara dos serviços e engajamento do público-alvo.
          </>,
        ],
        images: [],
      },
      {
        company: "Connect Internet",
        timeframe: "2024",
        role: "Desenvolvimento Web",
        achievements: [
          <>
            Criação do site para provedor de internet Connect, com design moderno e informações
            de planos e cobertura.
          </>,
        ],
        images: [],
      },
      {
        company: "Maxxcom Distribuidora",
        timeframe: "2024",
        role: "Desenvolvimento Web",
        achievements: [
          <>
            Desenvolvimento do site institucional da Maxxcom Distribuidora, com catálogo de produtos
            e informações corporativas.
          </>,
        ],
        images: [],
      },
      {
        company: "iBruno Imports",
        timeframe: "2024",
        role: "Desenvolvimento Web",
        achievements: [
          <>
            Criação do site para a iBruno Imports, voltado para apresentação de produtos importados
            e experiência de compra do usuário.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Formação",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Desenvolvimento Web",
        description: (
          <>Criação de sites responsivos e modernos com as melhores tecnologias do mercado.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Artigos sobre desenvolvimento web...",
  description: `Leia o que ${person.name} tem publicado recentemente`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de desenvolvimento web por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria – ${person.name}`,
  description: `Galeria de projetos por ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
