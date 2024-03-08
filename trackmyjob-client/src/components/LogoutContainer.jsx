/* eslint-disable no-unused-vars */
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/LogoutContainer'
import { useState } from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user, logoutUser } = useDashboardContext()

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div
        className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}
        onClick={logoutUser}
      >
        <button type="button" className="dropdown-btn">
          Logout
        </button>
      </div>
    </Wrapper>
  )
}
export default LogoutContainer
