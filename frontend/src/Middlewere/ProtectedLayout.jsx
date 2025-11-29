import { Outlet } from 'react-router-dom'
import RequireAuth from './RequireAuth'

const ProtectedLayout = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  )
}

export default ProtectedLayout
