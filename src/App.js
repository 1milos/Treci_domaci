import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserContext } from './context';

axios.defaults.baseURL = 'http://localhost:8000/api'
function App() {
  const [user, setUser] = useState(undefined);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          user,
          setUser
        }}
      >
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
