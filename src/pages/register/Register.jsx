import "./register.scss"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="register">
    <div className="card">
      <div className="left">
        <h1>Be Social</h1>
        <p>Lorem Accusantium temporibus consequatur quam esse quibusdam, hic sequi quidem cupiditate possimus dignissimos vitae ea sunt, placeat molestiae beatae nemo?
        </p>
        <span>Dont you have an account?</span>
        <Link to={"/login" }>
        <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <Link to="/register">
            <button>Register</button>
            </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register