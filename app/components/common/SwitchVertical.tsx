interface SwitchVerticalProps {
  isChecked: boolean;  // Este es el tipo adecuado para `isChecked`, que debe ser un booleano
  handleToggle: () => void;  // Tipo para la función que maneja el toggle
  type: 'color' | 'language';  // `type` puede ser solo 'color' o 'language'
  mode: 'light' | 'dark' | null;  // `mode` puede ser 'light' o 'dark'
  language: 'EN' | 'ES' | null;  // `language` puede ser 'EN', 'ES' o `null`
}

// const SwitchVertical = ({ isChecked: any, handleToggle, type, mode, language }) => {

const SwitchVertical: React.FC<SwitchVerticalProps> = ({ isChecked, handleToggle, type, mode, language }) => {

  // Determinar el color del switch según el tipo (modo de color o idioma)
  const backgroundColor = isChecked
    ? (type === 'color' ? '#F0B1DC' : '#F1BF00') // Modo oscuro (🌣) o Español (Rojo)
    : (type === 'color' ? '#00C058' : '#0000ff'); // Modo claro (☾) o Inglés (Azul claro)

  // Determinar qué ícono o texto mostrar en función del `mode` o `language`
  // const switchLabel = type === 'color'
  //   ? (mode === 'light' ? '🌣' : '☾')  // Modo de color, muestra 🌣 o ☾
  //   : (language === 'EN' ? 'en' : 'es'); // Modo de idioma, muestra EN o ES

  // const switchLabel = type === 'color'
  //   ? (mode === 'light'
  //     ? <img src="https://img.icons8.com/carbon-copy/100/summer.png" alt="sun icon" style={{ width: '20px', height: '20px' }} />
  //     : <img src="https://img.icons8.com/carbon-copy/100/crescent-moon.png" alt="moon icon" style={{ width: '20px', height: '20px' }} />
  //   )  // Modo de color, muestra el ícono de sol o luna
  //   : (language === 'EN' ? 'EN' : 'ES'); // Modo de idioma, muestra EN o ES

  // const switchLabel = type === 'color'
  //   ? (mode === 'light' 
  //       ? <img src="https://img.icons8.com/ios-filled/100/ffffff/summer.png" alt="sun icon" style={{ width: '15px', height: '15px' }} />
  //       : <img src="https://img.icons8.com/ios-filled/100/ffffff/crescent-moon.png" alt="moon icon" style={{ width: '15px', height: '15px' }} />
  //     )  // Modo de color, muestra el ícono de sol o luna en blanco
  //   : (language === 'EN' ? 'EN' : 'ES'); // Modo de idioma, muestra EN o ES

  const switchLabel = type === 'color'
    ? (mode === 'light'
      ? <img src="https://img.icons8.com/ios-filled/100/ffffff/summer.png" alt="sun icon" style={{ width: '15px', height: '15px' }} />
      : <img src="https://img.icons8.com/ios-filled/100/ffffff/crescent-moon.png" alt="moon icon" style={{ width: '15px', height: '15px' }} />
    )  // Modo de color, muestra el ícono de sol o luna en blanco
    : (language === 'EN'
      ? <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>EN</span>
      : <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>ES</span>
    );  // Modo de idioma, muestra EN o ES en blanco


  return (
    <div>
      <div
        onClick={handleToggle}
        style={{
          width: '12px',
          height: '45px',
          borderRadius: '30px',
          background: backgroundColor,
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'rotate(0deg)',
        }}
      >
        {/* Pelotita con el valor dentro */}
        <div
          style={{
            width: '19px', // Un tamaño mayor para que el texto encaje dentro de la pelota
            height: '19px',
            borderRadius: '50%',
            background: 'slategray',
            position: 'absolute',
            top: isChecked ? 'calc(100% - 23px)' : '2px', // Asegurarnos de que esté dentro de la pelota
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px', // Tamaño del texto dentro de la pelota
            transition: 'top 0.1s',
            fontWeight: 'bold',
          }}
        >
          {switchLabel}
        </div>
      </div>
    </div>
  );
};

export default SwitchVertical;
