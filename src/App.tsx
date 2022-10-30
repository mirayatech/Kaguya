import { onAuthStateChanged } from 'firebase/auth'
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingSpinner, Navbar } from './Components'
import { firebaseAuth, useUserStore } from './library'

export function App() {
  const Login = lazy(() => import('./pages/Login/Login'))

  // const currentUser = useUserStore((state) => state.currentUser)
  const setCurrentUser = useUserStore((state) => state.setCurrentUser)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user)
        console.log('User:', user)
      }
    })
  }, [])

  // if (typeof currentUser === 'undefined') return <LoadingSpinner />
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}
