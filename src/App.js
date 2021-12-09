import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Banner from './pages/Banner/Banner';
import Navigation from './pages/Navigation/Navigation';

function App() {
  return (
    <div >
      <Navigation></Navigation>
      <Banner></Banner>
      <Home></Home>
    </div>
  );
}

export default App;
