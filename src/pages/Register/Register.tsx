import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import {
  Button,
  Container,
  Flex,
  Form,
  Info,
  Input,
  Label,
  Title,
  Toggle,
  Wrapper,
} from './style'

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPasssword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }
  return (
    <Container>
      <Form>
        <Title>Register</Title>
        <Flex>
          <Label htmlFor="Name">Name</Label>
          <Input type="text" name="Name" id="Name" placeholder="Name" />
          <Label htmlFor="Email">Email</Label>
          <Input type="text" name="Email" id="Email" placeholder="Email" />
        </Flex>
        <div>
          <Wrapper>
            <Label htmlFor="Password">Password</Label>
            <Input
              type={isPasswordShown ? 'text' : 'password'}
              name="Pasword"
              id="Password"
              placeholder="Passsword"
            />
            <Toggle aria-label="toogle password" onClick={showPasssword}>
              {isPasswordShown ? <FaEyeSlash /> : <FaEye />}
            </Toggle>
          </Wrapper>
          <div>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type={isPasswordShown ? 'text' : 'password'}
              name="Pasword"
              id="confirm-password"
              placeholder="Confirm passsword"
            />
          </div>
        </div>
        <Button type="submit">Register</Button>

        <Info>
          Already have an account? <Link to="/login">Sign in.</Link>
        </Info>
      </Form>
    </Container>
  )
}
