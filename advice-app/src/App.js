import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import AdviceGenerator from './components/AdviceGenerator/AdviceGenerator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <ToastContainer position="top-center" />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/advice">
            <AdviceGenerator />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
