import { useUser, RedirectToSignIn } from '@clerk/clerk-react'
import SignUpPage from '../Page/SignUpPage'

const RequireAuth = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return <div>Loading...</div>

  if (!isSignedIn) return <SignUpPage/>

  return children
}

export default RequireAuth
