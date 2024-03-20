import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center">
      <div className="nav-center align-center items-center flex justify-between py-4">
        <div className="logo">
          <NavLink
            to="/"
            className="text-3xl sm:text-4xl font-semibold cursor-pointer"
          >
            <span className="text-green-500">Unity</span>Wallet
          </NavLink>
        </div>
        <NavLink
          to={'wallet'}
          className="font-medium leading-loose bg-green-500 hover:bg-green-600  text-white border border-gray-200 duration-300 rounded-sm text-center px-4 py-1"
        >
          Get Started
        </NavLink>
        <div className="links hidden "></div>
      </div>
    </nav>
  )
}
export default Navbar
