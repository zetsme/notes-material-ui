import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateNote from './pages/CreateNote';
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create' component={CreateNote} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
