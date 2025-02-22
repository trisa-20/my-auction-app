import logo from './logo.svg';
import './App.css';

import LoginSignUp from './components/login-signup/login-signup';
import Landing from './components/login-signup/landing-page';

function App() {
  return (
    <div>
       <Landing></Landing>
       <LoginSignUp></LoginSignUp>
    </div>
  );
}

export default App;
