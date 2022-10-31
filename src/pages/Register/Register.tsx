import { Link, Navigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ChangeEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Info,
  Input,
  Label,
  Title,
  Toggle,
  Wrapper,
} from './style'

import { IoCameraOutline } from 'react-icons/io5'

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const navigate = useNavigate()
  const showPasssword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }

  const handleSubmit = () => {
    navigate('/create/account')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>

        <Wrapper>
          <Label htmlFor="Email">Email</Label>
          <Input type="text" name="Email" id="Email" placeholder="Email" />
        </Wrapper>
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
