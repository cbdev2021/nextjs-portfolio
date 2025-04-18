'use client'
import React, { useReducer } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel"; 
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer"; 
import Tools from "./components/tools/Tools";

// Definimos el reducer y el estado aquí en el archivo principal.
const initialState = {
  mode: 'light', // 'light' o 'dark'
  language: 'EN', // 'EN' o 'ES'
  isCheckedMode: false, // Estado para el switch de modo
  isCheckedLanguage: false, // Estado para el switch de idioma
};

// Reducer que maneja el estado de modo, idioma y los switches
function themeReducer(state: { mode: string; isCheckedMode: any; language: string; isCheckedLanguage: any; }, action: { type: any; }) {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light',
        isCheckedMode: !state.isCheckedMode,
      };
    case 'TOGGLE_LANGUAGE':
      return {
        ...state,
        language: state.language === 'EN' ? 'ES' : 'EN',
        isCheckedLanguage: !state.isCheckedLanguage,
      };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Traducciones en inglés y español
  const translations = {
    EN: {
      home: 'Home',
      aboutUs: 'About Us',
      services: 'Services',
      clients: 'Clients',
      contact: 'Contact',
      colorMode: 'Color Mode',
      language: 'Language',
    },
    ES: {
      home: 'Inicio',
      aboutUs: 'Nosotros',
      services: 'Servicios',
      clients: 'Clientes',
      contact: 'Contacto',
      colorMode: 'Modo de Color',
      language: 'Idioma',
    },
  };

  // Obtenemos las traducciones basadas en el idioma actual
  const currentTranslation = translations[state.language as 'EN' | 'ES'];

  return (
    <div>
      <Header
        state={state}
        dispatch={dispatch}
        currentTranslation={currentTranslation}
      />
      <div id="home">
        <Carousel />
      </div> 
      <div id="ourbusiness">
        <Tools  />
      </div>  
  
      <div id="contact">
        <Contact />
      </div>
      {/* <Footer /> */}
      <Footer language={state.language} />

    </div>
  );
}