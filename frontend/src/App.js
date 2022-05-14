import Home from "./Home";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import Login from "./Login";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute"
import AdminPortal from "./AdminPortal";
import ForgotPassword from "./ForgotPassword";

function App () {
  return (
    <BrowserRouter>
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path= "/admin" element={<Login />}/>
          <Route path="/adminPortal" element={
              <PrivateRoute>
                <AdminPortal />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </AuthProvider>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
