import './App.css';
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({children}){
  const [theme, setTheme] = useState('light');  

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeToggleButton(){
  const {theme, toggleTheme} = useTheme();

  return(
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        border: 'none',
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}
function App() {
  const {theme} = useTheme();

  return(
    <div
      style={{
        background: theme === 'light' ? '#f0f0f0' : '#121212',
        color: theme === 'light' ? '#000' : '#fff',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <ThemeToggleButton />
    </div>
  )
}

function Root(){
  return(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default Root;
