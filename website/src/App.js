import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from './pages/Home';
import './styles/App.css';
import { useState } from 'react';
import { AuthContext } from './services/AuthContext';
import { PrivateRoute } from './services/PrivateRoute';
import { useEffect } from 'react';



import Entry from "./pages/Entry";

function App() {

  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLogin(localStorage.getItem("login"));
    setLoading(false);
  }, [])

  if(loading) {
    return <></>
  }

  return (
    <AuthContext.Provider value={{login, setLogin}}>
      <Router>
        <Routes>
          <Route path="/entry" element = {<Entry />} />
          <Route path="/home" element = {<PrivateRoute />} >
            <Route path="/home" element = {<Home />} />
          </Route>
          <Route path="*" element= { <Navigate to={ login ? "/home" : "/entry"} />}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
