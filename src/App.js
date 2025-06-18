import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Navbar from './components/UI/Navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
 const [isLoading, setLoading] = useState(true);

  useEffect(() => {
if (localStorage.getItem('auth')) {
  setIsAuth(true)
}
setLoading(false);
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
       <BrowserRouter>
      <Navbar />
      <AppRouter/>
        
    </BrowserRouter>
  
    </AuthContext.Provider>
  ); 
}

export default App;



