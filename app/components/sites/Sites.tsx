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
//   currentTranslation?: Translation; 
}

export default function Sites({ language }: SitesProps) {
  const sitesList: SiteItem[] = [
    {
        "name": {
          "ES": "TemperatureIn",
          "EN": "TemperatureIn"
        },
        "desc": {
          "ES": "Aplicación web desarrollada con React.js que muestra integración avanzada con APIs externas. Presenta información meteorológica en tiempo real, incluyendo temperatura, humedad y pronóstico extendido. Al cargar el sitio desde la ruta raíz, se detecta el país y región del usuario mediante el uso de APIs, ofreciendo la interfaz y los datos en español para países hispanohablantes y en inglés para el resto del mundo. Cuenta con un menú desplegable para continente, país y sus ciudades. Se integran diversas herramientas de optimización SEO como React Helmet para la gestión de metadatos y keywords, Google Analytics para seguimiento de tráfico, Google Search Console para indexación y Google reCAPTCHA para seguridad en formularios. Además, cuenta con una sección de contacto conectada a un correo corporativo (temperaturein@temperaturein.com), así como páginas de políticas de privacidad y términos de uso.",
          "EN": "Web application developed with React.js showcasing advanced integration with external APIs. It displays real-time weather information, including temperature, humidity, and extended forecasts. When the site is accessed from the root path, it detects the user's country and region using APIs, presenting the interface and data in Spanish for Spanish-speaking countries and in English for the rest of the world. It features a dropdown menu for continent, country, and corresponding cities. Several SEO optimization tools are integrated, such as React Helmet for metadata and keyword management, Google Analytics for traffic tracking, Google Search Console for indexing, and Google reCAPTCHA for form security. Additionally, it includes a contact section connected to a corporate email (temperaturein@temperaturein.com), as well as pages for Privacy Policy and Terms of Use."
        },
        "image": "/pic01.jpg",
        "url": "https://temperaturein.com"
      },
      {
        "name": {
          "ES": "M&C",
          "EN": "M&C"
        },
        "desc": {
          "ES": "Sitio web estático diseñado para una consultora ficticia del sector tecnológico. Desarrollado utilizando HTML5, CSS3 y JavaScript, con enfoque en diseño responsivo y experiencia de usuario fluida mediante efecto de smooth scrolling. Incluye secciones institucionales típicas como 'About Us', 'Services', 'Clients' y 'Contact', presentadas bajo un diseño limpio, profesional y adaptado a distintos dispositivos. Esta demo ilustra cómo presentar contenido corporativo de forma eficiente y visualmente atractiva.",
          "EN": "Static website designed for a fictional tech consulting firm. Developed using HTML5, CSS3, and JavaScript, with a focus on responsive design and smooth user experience through smooth scrolling effects. It includes typical institutional sections such as 'About Us', 'Services', 'Clients', and 'Contact', all presented with a clean, professional layout adapted to various devices. This demo illustrates how to present corporate content effectively and in a visually appealing manner."
        },
        "image": "/pic02.jpg",
        "url": "https://nextjsstaticsite.vercel.app/"
      },      
      {
        "name": {
          "ES": "ECM",
          "EN": "ECM"
        },
        "desc": {
          "ES": "Aplicación web desarrollada para simular un proceso de compra completo en una tienda online, desde la selección del producto hasta la confirmación del pedido. Implementada como una solución Full Stack utilizando React.js para el frontend y consumo de APIs externas para obtener un catálogo de productos dinámico desde el backend. El flujo de compra incluye: selección de producto, asignación de cantidad, inicio del proceso de compra con stepper que guía al usuario por las etapas de registro, entrega, pago y generación de número de orden. Esta demo demuestra un flujo funcional común en plataformas e-commerce modernas.",
          "EN": "Web application developed to simulate a complete purchasing process in an online store, from product selection to order confirmation. Implemented as a Full Stack solution using React.js for the frontend and external API consumption for a dynamic product catalog from the backend. The purchase flow includes: product selection, quantity assignment, and a checkout process guided by a stepper interface through the stages of registration, delivery, payment, and order number generation. This demo showcases a functional flow commonly found in modern e-commerce platforms."
        },
        "image": "/pic03.jpg",
        "url": "https://ecm-f1.vercel.app/"
      }
      ,
      {
        "name": {
          "ES": "INV",
          "EN": "INV"
        },
        "desc": {
          "ES": "Aplicación web genérica para gestión de inventarios en pymes. Frontend en React y backend principal en NodeJS/MongoDB. También incluye versiones backend con SpringBoot/MongoDB y NodeJS/MySQL (disponibles en GitHub). Funcionalidades generales: registro de productos, control de stock, reportes en tiempo real. Usuarios: registro, login, logout y edición de usuario con JWT. Reportes: resumen de ganancias y ventas por año (en Home), gráficos mensuales de compras, ventas y ganancias por producto. Inventario: registro, edición y eliminación por producto. Facturación: registro, lectura, edición, emisión y eliminación de facturas. Campos: idFactura, fecha, proveedor/consumidor, forma de pago, búsqueda y lista de productos (editable antes de emisión).",
          "EN": "Generic web application for inventory management in small and medium-sized businesses. Frontend built with React, and main backend in NodeJS/MongoDB. Also includes backend versions with SpringBoot/MongoDB and NodeJS/MySQL (available on GitHub). General features: product registration, stock control, and real-time reports. Users: registration, login, logout, and user editing with JWT. Reports: annual summary of profits and sales (on Home), monthly charts of purchases, sales, and profits by product. Inventory: registration, editing, and deletion by product. Billing: registration, viewing, editing, issuance, and deletion of invoices. Fields: invoice ID, date, supplier/customer, payment method, product search and list (editable before issuance)."
        },
        "image": "/pic04.jpg",
        "url": "https://inv-f1.vercel.app/login"
      }      
  ];

  const sectionTitle: Record<Language, string> = {
    ES: "Proyectos",
    EN: "Projects"
  };


  const contents = [
    [ // UX/UI
      { name: "Flexbox", icon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-images-collage-modern-design-template-grids-layout-grid-filled-tal-revivo.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/ios-filled/50/bootstrap.png" },
      { name: "Material UI", icon: "https://img.icons8.com/color/48/material-ui.png" },
      // { name: "Responsive", icon: "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/50/external-responsive-web-hosting-xnimrodx-lineal-xnimrodx.png" },
  
      { name: "Responsive", icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-responsive-design-new-media-flaticons-lineal-color-flat-icons-2.png" },
  
  
      // { name: "SEO", icon: "https://img.icons8.com/external-line-vectorslab/68/external-Seo-Analysis-web-and-seo-line-vectorslab-2.png" },
  
      { name: "SEO", icon: "https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/66/external-SEO-seo-and-development-smashingstocks-outline-color-smashing-stocks-2.png" },
  
      { name: "Analytics", icon: "https://img.icons8.com/color/48/google-analytics.png" },
      // { name: "", icon: "" },
      // { name: "", icon: "" },
  
    ],
    [ // Frontend
      { name: "HTML", icon: "https://img.icons8.com/plasticine/48/html-5.png" },
      { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
      { name: "React", icon: "https://img.icons8.com/officel/48/react.png" },
      { name: "Angular", icon: "https://img.icons8.com/fluency/48/angularjs.png" },
      { name: "JWT ", icon: "https://img.icons8.com/color/48/java-web-token.png" },

      { name: "vite", icon: "https://img.icons8.com/color/48/vite.png" },
      { name: "Nextjs", icon: "https://img.icons8.com/color/48/nextjs.png" },
      { name: "Typescript", icon: "https://img.icons8.com/color/48/typescript.png" },
      { name: "Redux", icon: "https://img.icons8.com/ios/48/redux.png" },


        { name: "vertical-line", icon: "https://img.icons8.com/ios/50/vertical-line.png" },
      // { name: "", icon: "" },
      // { name: "", icon: "" },
      // { name: "", icon: "" },
      // { name: "", icon: "" },
  
    ],
    [ // Backend
      { name: "Node", icon: "https://img.icons8.com/color/48/nodejs.png" },
      { name: "Spring Boot", icon: "https://img.icons8.com/officel/48/spring-logo.png" },
      { name: "Java EE", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
      // { name: "REST", icon: "https://img.icons8.com/ios/48/api-settings.png" },    
      { name: "REST", icon: "https://img.icons8.com/water-color/48/api-settings.png" },
  
      // { name: "express", icon: "https://img.icons8.com/ios/48/express-js.png" },
      { name: "express", icon: "https://img.icons8.com/officel/48/express-js.png" },
  
    ],
    [ // Data Base
      // { name: "MySql", icon: "https://img.icons8.com/ios/48/mysql-logo.png" },es 
      { name: "MySql", icon: "https://img.icons8.com/fluency/48/mysql-logo.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
      { name: "PostgreSQL", icon: "https://img.icons8.com/ios/48/postgreesql.png" },
      { name: "Oracle", icon: "https://img.icons8.com/ios/48/oracle-logo.png" },
      { name: "PL/SQL", icon: "https://img.icons8.com/plasticine/48/oracle-pl-sql--v3.png" },
      { name: "mongoose", icon: "https://img.icons8.com/color/48/mongoose.png" },
      { name: "Hibernate", icon: "https://cdn.worldvectorlogo.com/logos/hibernate.svg" },
    ],
    [ // DevOps & Workflow
      // { name: "Git", icon: "https://img.icons8.com/ios-filled/50/github.png" },
  
      { name: "Git", icon: " https://img.icons8.com/plasticine/48/github.png" },
  
      { name: "GitLab", icon: "https://img.icons8.com/color/48/gitlab.png" },
      { name: "Bitbucket", icon: "https://img.icons8.com/color/48/bitbucket.png" },
      // { name: "Jenkins", icon: "https://img.icons8.com/ios-filled/48/jenkins.png" },
  
      { name: "Jenkins", icon: "https://img.icons8.com/color/48/jenkins.png" },
  
      { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Kubernetes ", icon: "https://img.icons8.com/color/48/kubernetes.png" },
      { name: "Jira", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-jira-a-proprietary-issue-tracking-product-developed-by-atlassian-that-allows-bug-tracking-logo-shadow-tal-revivo.png" },
      // { name: "", icon: "" },
    ],
    [ // Testing & QA
      { name: "Postman", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
      // { name: "Json", icon: "https://img.icons8.com/ios/48/json.png" },
  
      { name: "Json", icon: "https://img.icons8.com/stickers/48/placeholder-thumbnail-json-1.png" },
  
      // { name: "XML", icon: "https://img.icons8.com/external-bearicons-detailed-outline-bearicons/48/external-XML-file-extension-bearicons-detailed-outline-bearicons.png" },
  
      { name: "XML", icon: "https://img.icons8.com/external-fauzidea-flat-fauzidea/64/external-xml-file-file-extension-fauzidea-flat-fauzidea.png" },
  
      // { name: "Testing", icon: "https://img.icons8.com/dotty/48/test.png" }, 
      { name: "Testing", icon: "https://img.icons8.com/arcade/48/test.png" },
  
      // { name: "Planning", icon: "https://img.icons8.com/ios/48/strategy-board.png" },
  
      { name: "Planning", icon: "https://img.icons8.com/color/48/strategy-board.png" },
    ],
    [ // Herramientas
  
      { name: "VS Code", icon: "https://img.icons8.com/plasticine/48/visual-studio-code-2019.png" },
      { name: "IntelliJ", icon: "https://img.icons8.com/color/48/intellij-idea.png" },
      { name: "eclipse ", icon: "https://img.icons8.com/ios-filled/48/java-eclipse.png" },
      { name: "DBeaver ", icon: "https://img.icons8.com/dusk/48/dbeaver.png" },
      { name: "Oracle PL", icon: "https://img.icons8.com/plasticine/48/oracle-pl-sql--v3.png" },
      // { name: "MyBatis", icon: "https://img.icons8.com/ios/48/mybatis.png" },
      { name: "MyBatis", icon: " https://img.icons8.com/ultraviolet/48/mybatis.png" },
  
  
    ]
  ];

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

            <div  >
                {index === 0 ? 
                        <div className={styles.iconsList}>
                             <img src={contents[1][0].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][1].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][2].icon}  className={styles.iconImage} /> 
                             <img src={contents[0][2].icon}  className={styles.iconImage} />

                             <img src={contents[1][6].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][3].icon}  className={styles.iconImage} />   
                             
                             <img src={contents[1][8].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][9].icon}  className={styles.iconImage} /> 
                        </div>
                    : " "
                }  


                {index === 1 ? 
                        <div className={styles.iconsList}>
                             <img src={contents[1][0].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][1].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][2].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][3].icon}  className={styles.iconImage} />   
                             {/* <img src={contents[1][6].icon}  className={styles.iconImage} />  */}
                             <img src={contents[1][7].icon}  className={styles.iconImage} /> 
                        </div>
                    : " "}    

                {index === 2 ? 
                        <div className={styles.iconsList}>
                             <img src={contents[1][0].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][1].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][2].icon}  className={styles.iconImage} /> 
                             <img src={contents[0][2].icon}  className={styles.iconImage} />
                             
                             <img src={contents[1][6].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][3].icon}  className={styles.iconImage} />   
                             
                             <img src={contents[1][8].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][9].icon}  className={styles.iconImage} /> 
                        </div>
                    : " "
                }  

                {index === 3 ? 
                        <div className={styles.iconsList}>
                             <img src={contents[1][0].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][1].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][2].icon}  className={styles.iconImage} /> 
                             <img src={contents[0][2].icon}  className={styles.iconImage} />                             
                             <img src={contents[1][6].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][3].icon}  className={styles.iconImage} /> 
                             <img src={contents[1][8].icon}  className={styles.iconImage} /> 
                             {/* <img src={contents[1][9].icon}  className={styles.iconImage} />  */}

                            {/* <img src={contents[2][3].icon}  className={styles.iconImage} />  */}
                            <img src={contents[1][10].icon}  className={styles.iconImage} /> 
 
                            <img src={contents[2][0].icon}  className={styles.iconImage} />  
                            <img src={contents[3][1].icon}  className={styles.iconImage} /> 
                            <img src={contents[1][5].icon}  className={styles.iconImage} />
                            <img src={contents[3][5].icon}  className={styles.iconImage} />
                            <img src={contents[2][4].icon}  className={styles.iconImage} />

                        
                            {/* <img src={contents[2][1].icon}  className={styles.iconImage} />  
                            <img src={contents[3][1].icon}  className={styles.iconImage} /> 

                            <img src={contents[2][0].icon}  className={styles.iconImage} />  
                            <img src={contents[3][0].icon}  className={styles.iconImage} />  */}
     
                        </div>
                    : " "
                }  

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