
import './App.css';
import Header from './Component/Header/Header';
import Presentation from './Component/Presentation/Presentation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Skills from './Component/Skills/Skills';
import Project from './Component/Project/Project';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import TextShpere from './Component/Skills/Skills';

export const ThemeContext = createContext(null);


function App() {

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr ==="light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme }}>
      <div className="App" id={theme}>
          <Header/>
          <div className='switch'>
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked= {theme === "dark"}/>
          </div>
          <Presentation />
          <TextShpere/>
          <Project />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
