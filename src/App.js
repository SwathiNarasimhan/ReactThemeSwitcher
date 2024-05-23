import React from 'react';
import { Page } from './Component/Page';
import { ThemeSwitcher } from './Component/ThemeSwitcher';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <Page />
    </ThemeProvider>
    
  );
}

export default App;
