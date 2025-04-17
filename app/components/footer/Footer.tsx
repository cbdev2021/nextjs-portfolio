
import styles from './Footer.module.css';

export default function Footer({ language }: { language: string }) {
  // Traducciones para los diferentes idiomas
  const translations = {
    EN: {
      aboutUs: "About Us",
      contact: "Contact",
      terms: "Terms",
      serviceTerms: "Service Terms",
      privacyPolicy: "Privacy Policy",
      cookiePolicy: "Cookie Policy",
      resources: "Resources",
      frequentAsk: "Frequent Ask",
      otherServices: "Other Services",
      followUs: "Follow us",
      copyright: "© codes FS 2025 | All rights reserved"
    },
    ES: {
      aboutUs: "Nosotros",
      contact: "Contacto",
      terms: "Términos",
      serviceTerms: "Términos de servicio",
      privacyPolicy: "Política de privacidad",
      cookiePolicy: "Política de cookies",
      resources: "Recursos",
      frequentAsk: "Preguntas frecuentes",
      otherServices: "Otros servicios",
      followUs: "Síguenos",
      copyright: "© M&C 2025 | Todos los derechos reservados"
    }
  };

  const currentTranslation = translations[language as 'EN' | 'ES'];

  return (
    <div className={styles['footer-container']}>
      <div className={styles['boxes-container']}>
        <div className={styles['footer-box']}>
          <h3 className={styles['tittle']}>{currentTranslation.aboutUs}</h3>
          <p>{currentTranslation.aboutUs}</p>
          <p>{currentTranslation.contact}</p>
        </div>

        <div className={styles['footer-box']}>
          <h3 className={styles['tittle']}>{currentTranslation.terms}</h3>
          <p>{currentTranslation.serviceTerms}</p>
          <p>{currentTranslation.privacyPolicy}</p>
          <p>{currentTranslation.cookiePolicy}</p>
        </div>

        <div className={styles['footer-box']}>
          <h3 className={styles['tittle']}>{currentTranslation.resources}</h3>
          <p>{currentTranslation.frequentAsk}</p>
          <p>{currentTranslation.otherServices}</p>
        </div>

        <div className={`${styles['footer-box']} ${styles['follow']}`}>
          <h3 className={styles['tittle']}>{currentTranslation.followUs}</h3>
          <div className={styles['icons']}>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-twitter"></i>
          </div>
        </div>
        <span className={styles['divider']}></span>
      </div>

      <div className={styles['year-message']}>
        <p>{currentTranslation.copyright}</p>
      </div>
    </div>
  );
}

 