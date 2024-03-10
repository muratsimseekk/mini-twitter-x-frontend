
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./pages/Signup.tsx"
import Login from "./pages/Login.tsx";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/signup"} element={<Signup />} />
        </Routes>
          <Routes>
              <Route path={"/login"} element={<Login />}/>
          </Routes>

      </BrowserRouter>

  )
}

export default App
