import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPasssword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }
  return (
    <form>
      <h1>Register</h1>
      <div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" id="Email" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" id="Email" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            name="Pasword"
            id="Password"
          />
          <button aria-label="toogle password" onClick={showPasssword}>
            {isPasswordShown ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            name="Pasword"
            id="confirm-password"
          />
        </div>
      </div>
      <button type="submit">Register</button>

      <p>
        Already have an account? <Link to="/login">Sign in.</Link>
      </p>
    </form>
  )
}
