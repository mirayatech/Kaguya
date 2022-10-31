import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  Container,
  Form,
  Title,
  Label,
  Input,
  Wrapper,
  Toggle,
  Info,
  Button,
} from './style'

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPasssword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <div>
          <Label htmlFor="Email">Email</Label>
          <Input type="text" name="Email" id="Email" placeholder="Email" />
        </div>
        <Wrapper>
          <Label htmlFor="Password">Password</Label>
          <Input
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
            name="Pasword"
            id="Password"
          />
          <Toggle aria-label="toogle password" onClick={showPasssword}>
            {isPasswordShown ? <FaEyeSlash /> : <FaEye />}
          </Toggle>
        </Wrapper>

        <Button type="submit">Login</Button>

        <Info>
          Do not have an account yet? <Link to="/register">Sign up.</Link>
        </Info>
      </Form>
    </Container>
  )
}
