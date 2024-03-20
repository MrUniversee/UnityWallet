import { useState } from 'react'

const Tabs = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(children[0].props.label)
  const handleClick = (e, label) => {
    e.preventDefault()
    setCurrentTab(label)
  }
  return (
    <section className="tabs max-w-md mx-auto">
      <div>
        <ul className="border-b-2 border-b-green-500 flex  gap-x-2 mt-4">
          {children.map((tab) => {
            return (
              <li
                className={
                  tab.props.label === currentTab
                    ? 'recovery-links current'
                    : 'recovery-links'
                }
                key={tab.props.label}
                onClick={(e) => handleClick(e, tab.props.label)}
              >
                {tab.props.label}
                {/* <a href="#">
                  {' '}
                </a> */}
              </li>
            )
          })}
          {/* <li className="current recovery-links">Phrase</li>
          <li className="recovery-links">Keystore JSON</li>
          <li className="recovery-links">Private key</li> */}
        </ul>
      </div>
      {children.map((child) => {
        if (child.props.label === currentTab)
          return (
            <div className="content" key={child.props.label}>
              {child.props.children}
            </div>
          )
      })}
    </section>
  )
}
export default Tabs
