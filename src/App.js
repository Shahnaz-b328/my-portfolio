import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/project/:title">
          <ProjectDetail />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
   
  );
}

export default App;
