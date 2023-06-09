//import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/navbar/NavBar";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Login from "./pages/login/Login";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { DarkModeContext } from "./context/darkmodeContext";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";



function App() {
  const {currentUser}=useContext(AuthContext);
  const {darkMode}=useContext(DarkModeContext);
  const Layout=()=>{
    return(
      <div className={`theme-${darkMode ? "dark":"light"}`}>
        <NavBar/>
        <div style={{display:"flex"}}>
        <LeftBar/>
        <div style={{flex:6}}>
        <Outlet/> 
        </div>
        <RightBar/>
        </div>
      </div>
    );
  };

    const ProtectedRoute=({children})=>{
      if(!currentUser){
        return <Navigate to="/login"/>
      }
      return children;
    };

  const router = createBrowserRouter([
    {
      path: "/",
      element:(
      <ProtectedRoute>
      <Layout/>
      </ProtectedRoute>),
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
