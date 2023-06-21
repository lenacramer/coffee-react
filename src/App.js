import './App.css';
import Header from './home/Header'
import ShopPreview from './home/ShopPreview';
import AboutUs from './home/AboutUs'; 
import VisitUs from './home/VisitUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShopPreview/>
      <AboutUs/>
      <VisitUs/>
    </div>
  );
}

export default App;
