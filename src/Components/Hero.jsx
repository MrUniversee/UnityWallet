import { NavLink } from 'react-router-dom'
import heroImg from '../assets/Images/hero-img.svg'
const Hero = () => {
  return (
    <section className="pt-12 mb-8 md:py-16">
      <div className="hero-center grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 text-center sm:text-left">
          <h1 className="text-4xl md:text-6xl capitalize font-semibold  max-w-md mx-auto md:mx-0 mb-4">
            <span className="text-green-500">All</span> crypto currency wallets
            in one place
          </h1>
          <p className="leading-6 max-w-lg font-medium sm:text-lg text-slate-700 -tracking-tighter mb-4">
            Take your Crypto portfolio management to the next level with Unity
            Wallet's vast collection of wallet connect. Gain access to your
            cryptocurrency portfolio data insights and manage your assets from a
            single place.
          </p>
          <NavLink to={'/wallet'} className="btn duration-300">
            Get Started
          </NavLink>
        </div>
        <div className="bg-green-500 rounded-lg hidden md:col-span-6 md:block">
          <img src={heroImg} alt="" className="w-full" />
        </div>
      </div>
    </section>
  )
}
export default Hero
