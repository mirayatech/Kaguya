import { createUserWithEmailAndPassword as createUserWithEmailAndPasswordAuth } from '@firebase/auth'
import { doc, setDoc } from '@firebase/firestore'
import { firebaseAuth, firebaseDb } from '../library'
import { FirebaseError } from 'firebase/app'
import { useState } from 'react'

export const useCreateUserWithEmailAndPassword = () => {
  const [signUpError, setSignUpError] = useState<FirebaseError | null>(null)

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      const user = await createUserWithEmailAndPasswordAuth(
        firebaseAuth,
        email,
        password
      )

      const userRef = doc(firebaseDb, `users/${firebaseAuth.currentUser?.uid}`)

      setDoc(userRef, {
        name: '',
        email: firebaseAuth.currentUser?.email,
        avatarUrl: '',
      })
    } catch (error) {
      setSignUpError(error as FirebaseError)
      setTimeout(() => {
        setSignUpError(null)
      }, 3000)
    }
  }

  return {
    createUserWithEmailAndPassword,
    signUpError,
  }
}
