import { signInWithEmailAndPassword as signInWithEmailAndPasswordAuth } from '@firebase/auth'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { firebaseAuth, useStore } from '../library'

export const useSignInWithEmailAndPassword = () => {
  const [isSignInError, setIsSignInError] = useState(false)

  const navigate = useNavigate()
  const { setStatus } = useStore()

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    setStatus('loading')
    try {
      await signInWithEmailAndPasswordAuth(firebaseAuth, email, password)

      navigate('/')
      toast('You have successfully signed in.', {
        icon: '🚀',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      setStatus('success')
    } catch (error) {
      setIsSignInError(true)
      setStatus('error')
      setTimeout(() => {
        setIsSignInError(false)
      }, 3000)
    }
  }

  return {
    signInWithEmailAndPassword,
    isSignInError,
  }
}
