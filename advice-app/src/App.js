import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import AdviceGenerator from './components/AdviceGenerator/AdviceGenerator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEditAdvice from './pages/AddEditAdvice';
import ShowAdvice from './pages/ShowAdvice';
import View from './pages/View';

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
          <Route path="/add">
            <AddEditAdvice />
          </Route>
          <Route path="/update/:id">
            <AddEditAdvice />
          </Route>
          <Route path="/view/:id">
            <View />
          </Route>
          <Route path="/show">
            <ShowAdvice />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
