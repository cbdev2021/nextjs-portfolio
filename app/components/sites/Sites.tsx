'use client';
import styles from './Sites.module.css';

type Language = 'ES' | 'EN';

interface Translation {
  projectsTitle: string;
}

interface SiteItem {
  name: Record<Language, string>;
  desc: Record<Language, string>;
  image: string;
  url: string;
}

interface SitesProps {
  language: Language;
  currentTranslation?: Translation; // Si lo querés opcional
}

export default function Sites({ language }: SitesProps) {
  const sitesList: SiteItem[] = [
    {
      name: {
        ES: "Mi Blog Personal",
        EN: "Personal Blog"
      },
      desc: {
        ES: "Blog sobre desarrollo y tecnología.",
        EN: "Blog about development and technology."
      },
      image: "https://via.placeholder.com/300x200?text=Blog",
      url: "https://mi-blog.com"
    },
    {
      name: {
        ES: "Tienda Online",
        EN: "Online Store"
      },
      desc: {
        ES: "E-commerce con React y Node.js.",
        EN: "E-commerce with React and Node.js."
      },
      image: "https://via.placeholder.com/300x200?text=Tienda",
      url: "https://mi-tienda.com"
    },
    {
      name: {
        ES: "Landing Page",
        EN: "Landing Page"
      },
      desc: {
        ES: "Página promocional para producto.",
        EN: "Promotional page for product."
      },
      image: "https://via.placeholder.com/300x200?text=Landing",
      url: "https://landing.com"
    },
    {
      name: {
        ES: "Dashboard",
        EN: "Dashboard"
      },
      desc: {
        ES: "Dashboard interactivo con gráficos.",
        EN: "Interactive dashboard with charts."
      },
      image: "https://via.placeholder.com/300x200?text=Dashboard",
      url: "#"
    },
    {
      name: {
        ES: "Landing Page",
        EN: "Landing Page"
      },
      desc: {
        ES: "Página promocional para producto.",
        EN: "Promotional page for product."
      },
      image: "https://via.placeholder.com/300x200?text=Landing",
      url: "https://landing.com"
    },
    {
      name: {
        ES: "Dashboard",
        EN: "Dashboard"
      },
      desc: {
        ES: "Dashboard interactivo con gráficos.",
        EN: "Interactive dashboard with charts."
      },
      image: "https://via.placeholder.com/300x200?text=Dashboard",
      url: "#"
    }
  ];

  const sectionTitle: Record<Language, string> = {
    ES: "Mis Proyectos",
    EN: "My Projects"
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{sectionTitle[language]}</h1>
      <div className={styles.grid}>
        {sitesList.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={site.image} alt={site.name[language]} />
            </div>
            <div className={styles.info}>
              <h2>{site.name[language]}</h2>
              <p>{site.desc[language]}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// 'use client';
// import styles from './Sites.module.css';

// type Language = 'ES' | 'EN';

// interface State {
//   language: Language;
//   // ...otros campos
// }



// export default function Sites({ currentTranslation, language }: any) {
// // export default function Sites({ currentTranslation = {}, language = 'ES' }: any) {

//     const sitesList = [
//         {
//             name: {
//                 ES: "Mi Blog Personal",
//                 EN: "Personal Blog"
//             },
//             desc: {
//                 ES: "Blog sobre desarrollo y tecnología.",
//                 EN: "Blog about development and technology."
//             },
//             image: "https://via.placeholder.com/300x200?text=Blog",
//             url: "https://mi-blog.com"
//         },
//         {
//             name: {
//                 ES: "Tienda Online",
//                 EN: "Online Store"
//             },
//             desc: {
//                 ES: "E-commerce con React y Node.js.",
//                 EN: "E-commerce with React and Node.js."
//             },
//             image: "https://via.placeholder.com/300x200?text=Tienda",
//             url: "https://mi-tienda.com"
//         },
//         {
//             name: {
//                 ES: "Landing Page",
//                 EN: "Landing Page"
//             },
//             desc: {
//                 ES: "Página promocional para producto.",
//                 EN: "Promotional page for product."
//             },
//             image: "https://via.placeholder.com/300x200?text=Landing",
//             url: "https://landing.com"
//         },
//         {
//             name: {
//                 ES: "Dashboard",
//                 EN: "Dashboard"
//             },
//             desc: {
//                 ES: "Dashboard interactivo con gráficos.",
//                 EN: "Interactive dashboard with charts."
//             },
//             image: "https://via.placeholder.com/300x200?text=Dashboard",
//             url: "#"
//         },
//         {
//             name: {
//                 ES: "Landing Page",
//                 EN: "Landing Page"
//             },
//             desc: {
//                 ES: "Página promocional para producto.",
//                 EN: "Promotional page for product."
//             },
//             image: "https://via.placeholder.com/300x200?text=Landing",
//             url: "https://landing.com"
//         },
//         {
//             name: {
//                 ES: "Dashboard",
//                 EN: "Dashboard"
//             },
//             desc: {
//                 ES: "Dashboard interactivo con gráficos.",
//                 EN: "Interactive dashboard with charts."
//             },
//             image: "https://via.placeholder.com/300x200?text=Dashboard",
//             url: "#"
//         }
//     ];

//     const sectionTitle = {
//         ES: "Mis Proyectos",
//         EN: "My Projects"
//       };

//     return (
//         <section className={styles.container}>
//             {/* <h1 className={styles.title}>{currentTranslation.projectsTitle}</h1> */}
//             <h1 className={styles.title}>{sectionTitle[language]}</h1>

//             <div className={styles.grid}>
//                 {sitesList.map((site, index) => (
//                     <a
//                         key={index}
//                         href={site.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={styles.card}
//                     >
//                         <div className={styles.imageWrapper}>
//                             <img src={site.image} alt={site.name[language]} />
//                         </div>
//                         <div className={styles.info}>
//                             <h2>{site.name[language]}</h2>
//                             <p>{site.desc[language]}</p>
//                         </div>
//                     </a>
//                 ))}
//             </div>
//         </section>
//     );
// }


// import styles from './Sites.module.css';

// export default function Sites() {
//     const sitesList = [
//         {
//             name: "Mi Blog Personal",
//             desc: "Blog sobre desarrollo y tecnología.",
//             image: "https://via.placeholder.com/300x200?text=Blog",
//             url: "https://mi-blog.com"
//         },
//         {
//             name: "Tienda Online",
//             desc: "E-commerce con React y Node.js.",
//             image: "https://via.placeholder.com/300x200?text=Tienda",
//             url: "https://mi-tienda.com"
//         },
//         {
//             name: "Landing Page",
//             desc: "Página promocional para producto.",
//             image: "https://via.placeholder.com/300x200?text=Landing",
//             url: "https://landing.com"
//         },
//         {
//             name: "Dashboard",
//             desc: "Dashboard interactivo con gráficos.",
//             image: "https://via.placeholder.com/300x200?text=Dashboard",
//             url: "#"
//         },
        
//         {
//             name: "Landing Page",
//             desc: "Página promocional para producto.",
//             image: "https://via.placeholder.com/300x200?text=Landing",
//             url: "https://landing.com"
//         },
//         {
//             name: "Dashboard",
//             desc: "Dashboard interactivo con gráficos.",
//             image: "https://via.placeholder.com/300x200?text=Dashboard",
//             url: "#"
//         },
//     ];

//     return (
//         <section className={styles.container}>
//             <h1 className={styles.title}>Mis Proyectos</h1>
//             <div className={styles.grid}>
//                 {sitesList.map((site, index) => (
//                     <a
//                         key={index}
//                         href={site.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={styles.card}
//                     >
//                         <div className={styles.imageWrapper}>
//                             <img src={site.image} alt={site.name} />
//                         </div>
//                         <div className={styles.info}>
//                             <h2>{site.name}</h2>
//                             <p>{site.desc}</p>
//                         </div>
//                     </a>
//                 ))}
//             </div>
//         </section>
//     );
// }



// export default function Sites() {

//     const iconStack =
//         [
//             { name: "Flexbox", icon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-images-collage-modern-design-template-grids-layout-grid-filled-tal-revivo.png" },
//             { name: "Bootstrap", icon: "https://img.icons8.com/ios-filled/50/bootstrap.png" },
//             { name: "Material UI", icon: "https://img.icons8.com/color/48/material-ui.png" },
//             { name: "Responsive", icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-responsive-design-new-media-flaticons-lineal-color-flat-icons-2.png" },
//             { name: "SEO", icon: "https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/66/external-SEO-seo-and-development-smashingstocks-outline-color-smashing-stocks-2.png" },
//             { name: "Analytics", icon: "https://img.icons8.com/color/48/google-analytics.png" },

//             { name: "HTML", icon: "https://img.icons8.com/plasticine/100/html-5.png" },
//             { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
//             { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
//             { name: "React", icon: "https://img.icons8.com/officel/80/react.png" },
//             { name: "Angular", icon: "https://img.icons8.com/fluency/48/angularjs.png" },
//             { name: "JWT ", icon: "https://img.icons8.com/color/48/java-web-token.png" },

//             { name: "Node", icon: "https://img.icons8.com/color/48/nodejs.png" },
//             { name: "Spring Boot", icon: "https://img.icons8.com/officel/80/spring-logo.png" },
//             { name: "Java EE", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
//             { name: "REST", icon: "https://img.icons8.com/water-color/100/api-settings.png" },
//             { name: "express", icon: "https://img.icons8.com/fluency/48/mysql-logo.png" },

//             { name: "MySql", icon: "https://img.icons8.com/fluency/48/mysql-logo.png" },
//             { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
//             { name: "PostgreSQL", icon: "https://img.icons8.com/ios/50/postgreesql.png" },
//             { name: "Oracle", icon: "https://img.icons8.com/ios/50/oracle-logo.png" },
//             { name: "PL/SQL", icon: "https://img.icons8.com/plasticine/100/oracle-pl-sql--v3.png" },
//             { name: "mongoose", icon: "https://img.icons8.com/color/48/mongoose.png" },
//             { name: "Hibernate", icon: "https://cdn.worldvectorlogo.com/logos/hibernate.svg" },

//             { name: "Git", icon: " https://img.icons8.com/plasticine/100/github.png" },
//             { name: "GitLab", icon: "https://img.icons8.com/color/48/gitlab.png" },
//             { name: "Bitbucket", icon: "https://img.icons8.com/color/48/bitbucket.png" },
//             { name: "Jenkins", icon: "https://img.icons8.com/color/48/jenkins.png" },
//             { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
//             { name: "Kubernetes ", icon: "https://img.icons8.com/color/48/kubernetes.png" },
//             { name: "Jira", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-jira-a-proprietary-issue-tracking-product-developed-by-atlassian-that-allows-bug-tracking-logo-shadow-tal-revivo.png" },

//             { name: "Postman", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
//             { name: "Json", icon: "https://img.icons8.com/stickers/100/placeholder-thumbnail-json-1.png" },
//             { name: "XML", icon: "https://img.icons8.com/external-fauzidea-flat-fauzidea/64/external-xml-file-file-extension-fauzidea-flat-fauzidea.png" },
//             { name: "Testing", icon: "https://img.icons8.com/arcade/64/test.png" },
//             { name: "Planning", icon: "https://img.icons8.com/color/48/strategy-board.png" },

//             { name: "VS Code", icon: "https://img.icons8.com/plasticine/100/visual-studio-code-2019.png" },
//             { name: "IntelliJ", icon: "https://img.icons8.com/color/48/intellij-idea.png" },
//             { name: "eclipse ", icon: "https://img.icons8.com/ios-filled/50/java-eclipse.png" },
//             { name: "DBeaver ", icon: "https://img.icons8.com/dusk/64/dbeaver.png" },
//             { name: "Oracle PL", icon: "https://img.icons8.com/plasticine/100/oracle-pl-sql--v3.png" },
//             { name: "MyBatis", icon: " https://img.icons8.com/ultraviolet/40/mybatis.png" }
//     ];

//     const sitesList = [
//         { name: "", desc: "" },
//         { name: "", desc: "" },
//         { name: "", desc: "" },
//         { name: "", desc: "" },
//         { name: "", desc: "" },
//         { name: "", desc: "" },
//     ];

//     return (
//         <div>
//             <h1>Sites</h1>
//         </div>

//     );
// };