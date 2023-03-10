import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import "./login.scss"

const Login = () => {

  const {login}=useContext(AuthContext);
  const handleLogin=()=>{
      login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem Accusantium temporibus consequatur quam esse quibusdam, hic sequi quidem cupiditate possimus dignissimos vitae ea sunt, placeat molestiae beatae nemo?
          </p>
          <span>Dont you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/login">
            <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login