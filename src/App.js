import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'

import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '.';
import Loading from './components/Loading';


function App() {

  const {auth} = useContext(Context)
  const [user,loading] = useAuthState(auth)

  if(loading) {
    return <Loading/>
  }

  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
