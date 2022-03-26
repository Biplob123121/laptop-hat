import './App.css';
import Faq from './components/Faq/Faq';
import Header from './components/Header/Header';
import Laptops from './components/Laptops/Laptops';

function App() {

  return (
    <div className="container">
      <Header></Header>
      <Laptops></Laptops>
      <Faq></Faq>
    </div>
  );
}

export default App;
