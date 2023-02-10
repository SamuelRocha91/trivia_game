import { Route, Switch } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/game" component={ Game } />
    </Switch>
  );
}

export default App;
