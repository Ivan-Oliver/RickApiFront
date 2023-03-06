import { FC } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate} from "react-router-dom";
import { getToken } from "../../services/storage";
import Welcome from "../../views/Welcome";
import LoginForm from "../../views/Auth/Login";
import SignupForm from "../../views/Auth/Signup";
import Characters from "../../views/Characters";
import Episodes from "../../views/Episodes";
import Locations from "../../views/Locations";
import Categories from "../../views/Categories";
import CreateForm from "../../views/CreateForm";
import CharactersDetails from "../../views/CharactersDetails";
import Profile from "../../views/Profile";

const Router: FC = () => {
  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (!token || token === null) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
    return children;
  };
  const HandleSession = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (token) {
      if (
        location.pathname === "/signup" ||
        location.pathname === "/login" ||
        location.pathname === "/"
      ) {
        return <Navigate to="/welcome" replace state={{ from: location }} />;
      }
    }
    return children;
  };
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/CreateForm" element={<ProtectedRoutes><CreateForm /></ProtectedRoutes>}></Route>
        <Route path="/" element={<HandleSession><Welcome /></HandleSession>}></Route>
        <Route path="/login" element={<HandleSession><LoginForm /></HandleSession>}></Route>
        <Route path="/signup" element={<HandleSession><SignupForm /></HandleSession>}></Route>
        <Route path="/characters" element={<ProtectedRoutes><Characters /></ProtectedRoutes>}></Route>
        <Route path="/episodes" element={<ProtectedRoutes><Episodes /></ProtectedRoutes>}></Route>
        <Route path="/locations" element={<ProtectedRoutes><Locations /></ProtectedRoutes>}></Route>
        <Route path="/categories" element={<ProtectedRoutes><Categories /></ProtectedRoutes>}></Route>
        <Route path="/welcome" element={<HandleSession><Welcome /></HandleSession>}></Route>
        <Route path="/characterdetails/:characterId" element={<ProtectedRoutes><CharactersDetails/></ProtectedRoutes>}></Route>
        <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>}></Route>







      </Routes>
    </BrowserRouter>
  );
};
export default Router;
