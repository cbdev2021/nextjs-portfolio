'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import 'font-awesome/css/font-awesome.min.css';
import SwitchVertical from '../common/SwitchVertical';

export default function Header({ state, dispatch, currentTranslation }: any) {
  const [open, setOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  const displayMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setOpen(false); // Cerrar menú si se hace clic fuera
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setScrollingDown(true); // Detectar scroll hacia abajo
        if (open) {
          setOpen(false); // Cerrar el menú solo si está abierto
        }
      } else {
        setScrollingDown(false); // Detectar scroll hacia arriba
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, open]);

  // Función para hacer scroll hacia una sección y cerrar el menú
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        // top: element.offsetTop - 60,
        top: element.offsetTop - 30,
        behavior: 'smooth',
      });
      setOpen(false); // Cerrar el menú después de hacer clic en un ítem
    }
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', state.mode);
  }, [state.mode]);

  return (
    <div className={`${styles['header-container']} ${scrollingDown ? styles.hidden : ''}`}>
      <h3 className={styles['logo']} onClick={() => scrollToSection('home')}>⧉codesFS</h3>

      <div className={styles['switches']}>
        <div className={styles['switch-mode']}>
          <SwitchVertical
            isChecked={state.isCheckedMode}
            handleToggle={() => dispatch({ type: 'TOGGLE_MODE' })}
            type="color"
            mode={state.mode as 'light' | 'dark' | null}
            language={null}
          />
        </div>

        <div className={styles['switch-language']}>
          <SwitchVertical
            isChecked={state.isCheckedLanguage}
            handleToggle={() => dispatch({ type: 'TOGGLE_LANGUAGE' })}
            type="language"
            language={state.language as "EN" | "ES"}
            mode={null}
          />
        </div>
      </div>

      <nav className={styles['nav']}>
        <div className={styles['ul-list']}>
          <div className={styles['a-item']} onClick={() => scrollToSection('home')}>
            {currentTranslation.home}
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('ourbusiness')}>
            {currentTranslation.aboutUs}
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('services')}>
            {currentTranslation.services}
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('clients')}>
            {currentTranslation.clients}
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('contact')}>
            {currentTranslation.contact}
          </div>
        </div>
      </nav>

      <div className={styles['hamburger']}>
        <i
          ref={menuRef}
          className="fa fa-bars"
          style={{ fontSize: '30px', cursor: 'pointer' }}
          onClick={displayMenu}
        ></i>
      </div>

      {open && (
        <div ref={drawerRef} className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}>
          <div className={styles['item-menu']} onClick={() => scrollToSection('home')}>
            <p className={styles['texto-mobile']}>{currentTranslation.home}</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('ourbusiness')}>
            <p className={styles['texto-mobile']}>{currentTranslation.aboutUs}</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('services')}>
            <p className={styles['texto-mobile']}>{currentTranslation.services}</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('clients')}>
            <p className={styles['texto-mobile']}>{currentTranslation.clients}</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('contact')}>
            <p className={styles['texto-mobile']}>{currentTranslation.contact}</p>
          </div>
        </div>
      )}
    </div>
  );
}
 