import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRout from "./components/ProtectedRout";

function App() {
    return (
        <>
            <AuthContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/Netflix-Clone-React/"
                            element={<Home />}
                        />
                        <Route
                            path="/Netflix-Clone-React/login"
                            element={<Login />}
                        />
                        <Route
                            path="/Netflix-Clone-React/signup"
                            element={<Signup />}
                        />
                        <Route
                            path="/Netflix-Clone-React/account"
                            element={
                                <ProtectedRout>
                                    <Account />
                                </ProtectedRout>
                            }
                        />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Router>
            </AuthContextProvider>
        </>
    );
}

export default App;
