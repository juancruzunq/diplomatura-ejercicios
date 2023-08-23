import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import PublicarPage from './pages/PublicarPage';
import HomePage from './pages/HomePage';
import AdoptarPage from './pages/AdoptarPage';
import FavoritosPage from './pages/FavoritosPage';
import PublicadosPage from './pages/PublicadosPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con encabezado, navegación y pie de página */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="adoptar" element={<Layout><AdoptarPage /></Layout>} />
        <Route path="publicar" element={<Layout><PublicarPage /></Layout>} />
        <Route path="favoritos" element={<Layout><FavoritosPage /></Layout>} />
        <Route path="publicadas" element={<Layout><PublicadosPage /></Layout>} />
        {/* Ruta sin encabezado, navegación ni pie de página */}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}



// Componente Login
function Login() {
  return <LoginPage />;
}

// Componente que agrega encabezado, navegación y pie de página
function Layout({ children }) {
  const location = useLocation();

  if (location.pathname === '/login') {
    return children;
  }

  return (
    <React.Fragment>
      <Header />     
      <Nav />
      {children}
      <Footer />
    </React.Fragment>
  );
}
document.body.style.margin = 0;
export default App;
