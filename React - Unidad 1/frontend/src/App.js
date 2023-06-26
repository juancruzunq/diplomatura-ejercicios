import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import PublicarPage from "./pages/PublicarPage";
import HomePage from "./pages/HomePage";
import AdoptarPage from "./pages/AdoptarPage";
import ContactoPage from "./pages/ContactoPage";


function App() {
  return (
    <div>
      <Header/>      
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>}> </Route>
          <Route path="adoptar" element={<AdoptarPage/>}> </Route>
          <Route path="publicar" element={<PublicarPage/>}> </Route>
          <Route path="contacto" element={<ContactoPage/>}> </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
document.body.style.margin = 0;
export default App;
