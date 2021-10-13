import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="container">
      <Router>
        <nav>
          <Navbar />
        </nav>
        {/* <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
