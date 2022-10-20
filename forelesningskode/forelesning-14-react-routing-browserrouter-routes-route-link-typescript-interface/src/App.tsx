import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, ContactPage, VehiclesPage } from './pages';

function App() {
  return (
    <div>

      { 
        /* 
          Konfigurasjonen består av BrowserRouter som inneholder:
          - navigasjonslenker med Link
          - Routes-komponent som inneholder 1 Route per page ("nettside")          
        */ 
      }

      <BrowserRouter>

        <nav>
          <ul>
            <li><Link to="/">Hjem</Link></li>
            <li><Link to="contact">Kontakt oss</Link></li>
            <li><Link to="vehicles">Kjøretøy</Link></li>
            <li><Link to="people">Personer</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='contact' element={<ContactPage/>}></Route>
          <Route path='vehicles' element={<VehiclesPage/>}></Route>
          <Route path='*' element={<p>Side ikke funnet! <Link to="/">Tilbake til hjemmesiden</Link></p>}></Route>
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;