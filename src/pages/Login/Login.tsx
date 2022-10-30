import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPasssword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }

  return (
    <form>
      <h1>Login</h1>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" id="Email" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <div>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            name="Pasword"
            id="Password"
          />
          <button aria-label="toogle password" onClick={showPasssword}>
            {isPasswordShown ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <button type="submit">Login</button>

      <p>
        Do not have an account yet? <Link to="/register">Sign up.</Link>
      </p>
    </form>
  )
}
