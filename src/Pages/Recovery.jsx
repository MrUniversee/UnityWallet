import Tabs from '../Components/Tabs'
const Recovery = () => {
  return (
    <div>
      <Tabs>
        <div label="Phrase">
          <textarea
            className="w-full p-1 focus:outline-none"
            name=""
            id=""
            placeholder="Phrase"
            cols="30"
            rows="10"
          ></textarea>
          <p className="text-gray-500">
            Typically 12 (sometimes 24) words separated by a single space
          </p>
          <button className="btn font-medium w-full">Import Wallet</button>
        </div>
        <div label="Keystore JSON">
          <textarea
            className="w-full p-1 focus:outline-none"
            name=""
            id=""
            placeholder="Keystore JSON"
            cols="30"
            rows="7"
          ></textarea>
          <p className="text-gray-500">
            Several lines of text beginning with (...) plus the password you
            used to encrypt it.
          </p>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2"
          />
          <button className="btn font-medium w-full">Import Wallet</button>
        </div>
        <div label="Private-key">
          <input type="text" className="w-full p-2" placeholder="Private Key" />
          <p className="text-gray-500">
            Typically 12 (sometimes 24) words separated by a single space
          </p>
          <button className="btn font-medium w-full">Import Wallet</button>
        </div>
      </Tabs>
    </div>
  )
}
export default Recovery
