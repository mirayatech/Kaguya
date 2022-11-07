import toast from 'react-hot-toast'

import { ChangeEvent, useRef, useState } from 'react'

import { updateDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

import { useNavigate } from 'react-router-dom'
import { IoCameraOutline } from 'react-icons/io5'

import { firebaseDb, firebaseStorage, useStore } from '../../library'
import { useAuthContext } from '../../context'
import {
  AddImage,
  Button,
  Container,
  Form,
  ImageResult,
  Input,
  Label,
  Title,
} from './style'

export default function CreateProfile() {
  const filePickerRef = useRef<any>(null)
  const [isNameInputField, setIsNameInputField] = useState('')
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const { setStatus } = useStore()

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setStatus('loading')

    if (loading) return setLoading(true)

    const imageReference = ref(firebaseStorage, `avatars/${user?.uid}/image`)

    await uploadString(imageReference, selectedFile, 'data_url').then(
      async () => {
        const downloadURL = await getDownloadURL(imageReference)

        await updateDoc(doc(firebaseDb, `users/${user?.uid}`), {
          name: isNameInputField,
          avatarUrl: downloadURL,
        })
      }
    )

    setLoading(false)
    setSelectedFile(null)
    setStatus('success')
    navigate(`/`)
    toast('Your account has been successfully created.', {
      icon: '🎉',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
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
      <Form onSubmit={handleSubmit}>
        <Title tabIndex={0}>Create your account</Title>
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
            tabIndex={0}
            role="input"
            aria-label="Select your profile picture"
            onClick={() => filePickerRef.current.click()}
          >
            <label htmlFor="fileupload">
              <IoCameraOutline tabIndex={-1} />
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

        <>
          <Label htmlFor="Full Name">Full Name *</Label>
          <Input
            type="text"
            name="name"
            id="Full Name"
            onChange={(event) => setIsNameInputField(event.target.value)}
            placeholder="Name"
          />
        </>

        <Button
          type="submit"
          aria-label="Done"
          tabIndex={0}
          onClick={handleSubmit}
        >
          {loading ? 'Done...' : 'Done'}
        </Button>
      </Form>
    </Container>
  )
}
