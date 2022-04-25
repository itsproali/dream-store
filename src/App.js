import './App.css';
import Home from './Components/Home/Home';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <h1 className="heading">Dream Store</h1>
      <Home></Home>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
