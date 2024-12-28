export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  featured?: boolean;
  media?: MediaItem[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: true,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: true,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: true,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: true,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: true,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: true,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: false,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: false,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: false,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: false,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: false,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },

  {
    id: "Place Holder 1",
    title: "Place Holder 1",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
    featured: false,
    longDescription: `SOME MORE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS FOR YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:
- AAA
- BBB
- CCC
- DDD
- EEE`,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        caption: "XD",
      },
      {
        type: "video",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Totally not a rickroll",
      },
    ],
    technologies: ["Blood", "Sweat", "Tears", "cum¿¿¿"],
    /*demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",*/
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
