import { useState } from 'react'
import Modal from '../Components/Modal'
import { wallets } from '../data'
const Wallets = () => {
  const [isMounted, setIsMounted] = useState(false)
  const ToggleModal = (e) => {
    const btn = e.currentTarget.classList.contains('modal-btn')
    if (!btn) {
      setIsMounted(false)
    }
    setIsMounted(true)
  }
  return (
    <div className="h-screen grid sm:grid-cols-12 gap-3 mt-4">
      {wallets.map((item) => {
        const { id, name, logo } = item
        return (
          <button
            key={id}
            className="flex items-center gap-3 modal-btn text-lg px-4 py-2 bg-white  text-slate-700 rounded-sm shadow-sm duration-300 col-span-4 hover:scale-95"
            onClick={(e) => ToggleModal(e)}
          >
            <img src={logo} alt="" className="w-16 h-16" />
            <span className="capitalize text-sm tracking-wide font-medium">
              {name}
            </span>
          </button>
        )
      })}
      {/* <button
        className=" modal-btn text-lg px-4 py-2 bg-blue-500  text-white rounded-sm hover:bg-blue-600 duration-300"
        onClick={(e) => ToggleModal(e)}
      >
        Trust Wallet
      </button> */}
      {isMounted && <Modal setIsMounted={setIsMounted} />}
    </div>
  )
}
export default Wallets
