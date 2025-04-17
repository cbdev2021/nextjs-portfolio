// Tools.tsx
import styles from './Tools.module.css';
import { useState, useEffect, useRef } from 'react';

const titles = [
  "Lenguajes",
  "Frameworks",
  "Frontend",
  "Backend",
  "Bases de datos",
  "Móvil",
  "Herramientas"
];

const contents = [
  ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  ["React", "Next", "Solid", "Astro", "Nest", "Express"],
  [
    "Tailwind", "Material UI", "Chakra UI", "Radix UI", "Tanstack Query",
    "React Hook Form", "Zustand", "Framer Motion", "NextAuth", "React Router",
    "Redux", "Socket.io"
  ],
  [
    "NodeJS", "Docker", "Prisma", "TypeORM", "tRPC", "Nats",
    "Supabase", "Firebase", "Linux", "Vercel", "Railway"
  ],
  ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"],
  ["React Native", "Expo", "React Native Paper", "UI Kitten", "NativeWind"],
  ["Figma", "Git", "GitHub", "VSCode", "Jest", "Playwright", "Zod"]
];

export default function Tools() {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);

  const updateStack = () => {
    const cards = stackRef.current?.children;
    if (!cards) return;

    const total = contents.length;

    Array.from(cards).forEach((card, index) => {
      let y = 0;
      let z = 0;
      let width = 100;
      let left = 0;

      if (!hovering) {
        if (index === current) {
          y = 0;
          z = 100;
          width = 100;
          left = 0;
        } else {
          width = 90;
          left = (100 - width) / 2;
        }
      } else {
        if (index === current) {
          y = 80;
          z = 100;
          width = 100;
          left = 0;
        } else {
          const relIndex = index > current ? index - current : total - current + index;
          y = 80 - relIndex * 10;
          width = 100 * Math.pow(0.9, relIndex);
          left = (100 - width) / 2;
          z = 100 - relIndex;
        }
      }

      (card as HTMLElement).style.transform = `translateY(${y}px)`;
      (card as HTMLElement).style.zIndex = z.toString();
      (card as HTMLElement).style.width = `${width}%`;
      (card as HTMLElement).style.left = `${left}%`;
      (card as HTMLElement).style.opacity = '1';
    });
  };

  useEffect(() => {
    updateStack();
  }, [current, hovering]);

  // const levelColors = [
  //   'var(--level-3)',
  //   'var(--level-4)',
  //   'var(--level-5)',
  //   'var(--level-6)',
  //   'var(--level-7)',
  //   'var(--level-8)',
  //   'var(--level-9)',
  // ];

  // const levelColors = [
  //   '#007BFF', // Azul (azul clásico tipo Bootstrap)
  //   '#DC3545', // Rojo (rojo Bootstrap)
  //   '#28A745', // Verde
  //   '#FFC107', // Amarillo dorado
  //   '#17A2B8', // Cian / celeste
  //   '#6F42C1', // Púrpura medio
  //   '#FD7E14', // Naranja intenso
  // ];

  const levelColors = [
    'hsl(210, 100%, 40%)', // Azul oscuro
    'hsl(220, 100%, 40%)', // Azul medio
    'hsl(230, 100%, 40%)', // Azul-violeta
    'hsl(240, 100%, 40%)', // Púrpura
    'hsl(250, 100%, 40%)', // Violeta intenso
    '#DC3545',             // Rojo clásico (Bootstrap red)
    '#007BFF',             // Azul brillante (Bootstrap blue)
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.tabs}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {titles.map((title, index) => (
          <button
            key={index}
            className={current === index ? styles.active : ''}
            onClick={() => setCurrent(index)}
          >
            {title}
          </button>
        ))}
      </div>

      <div className={styles.stackContainer} ref={stackRef}>
        {contents.map((content, index) => (
          <div
            className={styles.card}
            key={index}
            // style={{ background: `hsl(${210 + index * 10}, 100%, 40%)` }}
            style={{ background: levelColors[index % 7], color: 'var(--level-11)' }}


          >
            <h2>{titles[index]}</h2>
            <ul>
              {content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
