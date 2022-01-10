// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './Admin/Admin';
function App() {
  return (
    <Router>
      <Switch>
        <Admin/>
      </Switch>
    </Router>
  );
}

export default App;
