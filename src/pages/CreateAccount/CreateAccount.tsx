import { Navigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ChangeEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Title,
  AddImage,
  ImageResult,
} from './style'

import { IoCameraOutline } from 'react-icons/io5'

export default function CreateAccount() {
  const filePickerRef = useRef<any>(null)
  const [selectedFile, setSelectedFile] = useState<any>(null)

  const navigate = useNavigate()

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

  const handleSubmit = () => {
    navigate('/create/account')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Create Account</Title>

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

        <div>
          <Label htmlFor="Name">Name</Label>
          <Input type="text" name="Name" id="Name" placeholder="Name" />
        </div>

        <Button type="submit">Done</Button>
      </Form>
    </Container>
  )
}
