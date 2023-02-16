import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from "./layouts/AdminPage/Admin";

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Admin/>
    </div>
  );
}

export default App;
