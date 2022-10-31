import { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import { useCreateUserWithEmailAndPassword, useFormState } from '../../hooks/'
import { useStore } from '../../library'
import {
  Alert,
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

export default function Signp() {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isEmailTaken, setIsEmailTaken] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)

  const { createUserWithEmailAndPassword, signUpError } =
    useCreateUserWithEmailAndPassword()

  const navigate = useNavigate()
  const { setStatus } = useStore()

  const togglePassword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setPasswordShown(!passwordShown)
  }

  const {
    handleChange,
    formState: { password, confirmPassword, email },
  } = useFormState({
    password: '',
    confirmPassword: '',
    email: '',
  })

  const isAnyFieldEmpty =
    !password.length || !confirmPassword.length || !email.length

  const canUserSignUp = () => {
    const isPasswordTooShort = password.length < 6
    if (isPasswordTooShort) {
      setIsPasswordError(true)
      return setTimeout(() => {
        setIsPasswordError(false)
      }, 3000)
    }

    const isPasswordNotMatching = password !== confirmPassword
    if (isPasswordNotMatching) {
      setIsConfirmPasswordError(true)
      return setTimeout(() => {
        setIsConfirmPasswordError(false)
      }, 3000)
    }

    if (isEmailInvalid) {
      setIsEmailError(true)
      return setTimeout(() => {
        setIsEmailError(false)
      }, 3000)
    }
    navigate('/create/account')
    return true
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    setStatus('loading')
    event.preventDefault()
    setIsEmailTaken(false)
    setIsEmailError(false)

    if (canUserSignUp() === true) {
      createUserWithEmailAndPassword(email, password)
    }
    setStatus('success')
  }

  useEffect(() => {
    if (signUpError && signUpError.code === 'auth/email-already-in-use') {
      setIsEmailError(false)
      setIsEmailTaken(true)
      setTimeout(() => {
        setIsEmailTaken(false)
      }, 3000)
    }
  }, [signUpError])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>

        <Wrapper>
          <Label htmlFor="Email">Email</Label>
          <Input
            id="Email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => {
              handleChange(event)
              setIsEmailInvalid(!event.target.validity.valid)
            }}
            aria-invalid={isEmailError ? 'true' : 'false'}
            aria-required="true"
            placeholder="Email"
          />
        </Wrapper>

        <Wrapper>
          <Label htmlFor="Password">Password</Label>
          <Input
            id="Password"
            name="password"
            type={passwordShown ? 'text' : 'password'}
            value={password}
            placeholder="Password"
            onChange={handleChange}
            aria-invalid={isPasswordError ? 'true' : 'false'}
            aria-required="true"
          />

          <Toggle onClick={togglePassword}>
            {passwordShown ? <FaEyeSlash /> : <FaEye />}
          </Toggle>
        </Wrapper>

        <Wrapper>
          <Label htmlFor="Confirm password">Confirm Password</Label>
          <Input
            id="Confirm password"
            name="confirmPassword"
            type={passwordShown ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            aria-invalid={isConfirmPasswordError ? 'true' : 'false'}
            aria-required="true"
          />
        </Wrapper>
        <Button type="submit" disabled={isAnyFieldEmpty}>
          Sign up
        </Button>
        <Info>
          Already have an account?
          <Link to="/login">Login</Link>
        </Info>
      </Form>

      {isEmailError && <Alert role="alert">Email is not valid</Alert>}
      {isEmailTaken && <Alert role="alert">Email is already taken</Alert>}
      {isPasswordError && (
        <Alert role="alert">Password must be at least 6 characters</Alert>
      )}
      {isConfirmPasswordError && (
        <Alert role="alert">Passwords do not match</Alert>
      )}
    </Container>
  )
}
