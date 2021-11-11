import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import Login from 'features/Auth/Login/Login';

let isLogin = false

function App() {

  if (localStorage.getItem('USER')) {
    isLogin = true
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/auth/login" component={Login} />
        {isLogin && <Route path="/" component={Layout} />}
        {isLogin || <Redirect to="/auth/login" />}
      </Switch>
    </div>
  );
}

export default App;
