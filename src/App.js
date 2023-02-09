import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
    </Switch>
  );
}
export default App;
