import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'

const SuccessModal = () => {
  return (
    <div className="bg-transparent border-2 border-green-400 p-4 flex flex-col gap-y-2 items-center sm:flex-row justify-between ">
      <span className="inline-block">Connecting to wallet server...</span>
      <div className="loading h-8 w-8 border-t-green-400 border-slate-700 border-spacing-2"></div>
    </div>
  )
}

const ErrorModal = ({ setIsMounted }) => {
  return (
    <div className="bg-transparent border-2 border-red-600 p-4 flex flex-col gap-x-10 items-center text-center ">
      <div className="items-center gap-x-3">
        <h4 className="text-lg font-medium mb-1">Wallet Verification Failed</h4>
        <span className="inline-block text-sm">
          There was an error connecting to the wallet server. <br />
          Please connect manually.
        </span>
      </div>
      <NavLink
        to={'/recovery'}
        className="btn hover:bg-green-600"
        onClick={() => setIsMounted(false)}
      >
        Connect Manually
      </NavLink>
      {/* <div className=" rotate-180 text-2xl">x</div> */}
    </div>
  )
}
const Modal = ({ setIsMounted }) => {
  const navigation = useNavigation()

  const [isError, setIsError] = useState(false)
  if (navigation.state === 'loading') {
    setIsError(false)
  }
  useEffect(() => {
    setTimeout(() => {
      setIsError(!isError)
    }, 5000)
  }, [])

  return (
    <div className="absolute bg-slate-600 top-0 left-0 min-h-full bg-opacity-80 w-full translate-x-0 translate-x">
      <div className="p-4 bg-white relative top-20 w-5/6 max-w-96 mx-auto rounded-md">
        {isError ? (
          <ErrorModal setIsMounted={setIsMounted} />
        ) : (
          <SuccessModal />
        )}
      </div>
    </div>
  )
}
export default Modal
