import { NavLink } from 'react-router-dom'
import { BsFacebook, BsReddit, BsTwitter } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className="bg-white p-6 w-full">
      <div className="align-center flex flex-col items-center">
        <div className="logo">
          <NavLink to="/" className="text-sm font-semibold cursor-pointer">
            © 2021-2024
            <span className="text-green-500 ml-2">Unity</span>Wallet
          </NavLink>
        </div>
{/*         <div className="links flex text-2xl gap-4 mt-2 ">
          <BsTwitter />
          <BsFacebook />
          <BsReddit />
        </div> */}
      </div>
    </footer>
  )
}
export default Footer
