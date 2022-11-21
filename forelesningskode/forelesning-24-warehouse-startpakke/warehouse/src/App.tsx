import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPageHeader from './components/shared/MainPageHeader';
import { HomePage, DeleteOrderPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <MainPageHeader/>
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/delete-orders" element={<DeleteOrderPage/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
