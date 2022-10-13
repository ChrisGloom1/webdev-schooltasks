import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, ContactPage, VehiclesPage } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>

        <nav>
          <ul>
            <li><Link to={"/"}>Jemm</Link></li>
            <li><Link to={"contact"}>Konntaktktt</Link></li>
            <li><Link to={"vehicles"}>Brom-brommer</Link></li>
            <li><Link to={"peepl"}>Peepl</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="vehicles" element={<VehiclesPage />}></Route>
          <Route path="*" element={<p>Fant ikke noe, brushhh</p>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
