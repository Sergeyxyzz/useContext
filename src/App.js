import React, { useLayoutEffect, useMemo, useRef, useEffect, useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import './App.css';
import { ThemeProvider } from './ThemeContext';

export const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}

export default App;
