/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDashboardContext } from '../pages/DashboardLayout'
import links from '../utils/Links'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext()

  return (
    <div className="nav-links">
      {links.map((link, index) => {
        const { text, path, icon } = link
        return (
          <NavLink
            to={path}
            key={index}
            onClick={isBigSidebar ? null : toggleSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
