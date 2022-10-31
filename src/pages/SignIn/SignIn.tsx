/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useFormState, useSignInWithEmailAndPassword } from '../../hooks'
import { Alert } from '../SignUp/style'
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

export default function Signin() {
  const [passwordShown, setPasswordShown] = useState(false)

  const { isSignInError, signInWithEmailAndPassword } =
    useSignInWithEmailAndPassword()

  const {
    handleChange,
    formState: { password, email },
  } = useFormState({
    password: '',
    email: '',
  })

  const togglePassword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setPasswordShown(!passwordShown)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    signInWithEmailAndPassword(email, password)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign in</Title>
        <Wrapper>
          <Label htmlFor="email">Email</Label>

          <Input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            aria-required="true"
            value={email}
            placeholder="Email"
          />
        </Wrapper>

        <Wrapper>
          <Label htmlFor="Password">Password</Label>
          <Wrapper>
            <Input
              type={passwordShown ? 'text' : 'password'}
              name="password"
              id="Password"
              onChange={handleChange}
              aria-required="true"
              value={password}
              placeholder="Password"
            />
            <Toggle onClick={togglePassword}>
              {passwordShown ? <FaEyeSlash /> : <FaEye />}
            </Toggle>
          </Wrapper>
        </Wrapper>

        <Button type="submit">Sign in</Button>

        <Info>
          Do not have an account yet?
          <Link to="/signup">Sign up.</Link>
        </Info>
      </Form>
      {isSignInError && (
        <Alert role="alert">Password or email is invalid.</Alert>
      )}
    </Container>
  )
}
