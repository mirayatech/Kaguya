import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ChangeEvent, useRef, useState } from 'react'
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
  AddImage,
  ImageResult,
} from './style'

import { IoCameraOutline } from 'react-icons/io5'

export default function Register() {
  const filePickerRef = useRef<any>(null)
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPasssword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }

  const addImageToPost = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()

    const file = event.target.files?.[0]
    if (file) {
      reader.readAsDataURL(file)
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target?.result)
    }
  }

  return (
    <Container>
      <Form>
        <Title>Register</Title>

        {selectedFile ? (
          <ImageResult
            tabIndex={0}
            aria-label="Change your profile picture"
            onClick={() => setSelectedFile(null)}
          >
            <img src={selectedFile} />
          </ImageResult>
        ) : (
          <AddImage
            role="input"
            aria-label="Select your profile picture"
            onClick={() => filePickerRef.current.click()}
          >
            <label htmlFor="fileupload">
              <IoCameraOutline />
            </label>

            <input
              type="file"
              name="file"
              id="fileupload"
              ref={filePickerRef}
              accept="image/jpeg, image/png"
              aria-label="Choose File"
              onChange={addImageToPost}
              hidden
            />
          </AddImage>
        )}

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
