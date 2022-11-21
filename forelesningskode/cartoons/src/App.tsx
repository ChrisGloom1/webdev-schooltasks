import CartoonList from './components/cartoons/CartoonList';
import EditCartoon from './components/cartoons/EditCartoon';

function App() {
  return (
    <>
    <header>
      <h1>Tegnefilmeses med kule ting osv</h1>
    </header>
    <EditCartoon/>
    <CartoonList/>
    </>
  );
}

export default App;
