import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomePage, MusiciansPage } from './pages';

/*
 * createContext og useContext
 * Context, Provider
 * Interface, for Context
 * 
 * Context:
 * - Pages
 * - Components
 * - Interfaces
 * - Contexts
 */

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="container-fluid">
        <nav>
          <ul>
            <li><Link to="/">Hjem</Link></li>
            <li><Link to="musikere">Musikere</Link></li>
          </ul>
        </nav>
      </div>
      
      <div className="container">

        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path='musikere' element={<MusiciansPage/>}></Route>
          </Routes>
        </main>

      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
