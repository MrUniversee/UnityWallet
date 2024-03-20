import Title from './Title'
import AbstractImg from '../assets/Images/landing_manage_4.png'
import { useFetchContent } from '../Hooks/useFetchContent'
import React from 'react'
import { Suspense } from 'react'
import { NavLink } from 'react-router-dom'
const MgtCard = React.lazy(() => import('./MgtCards'))
const Management = () => {
  const { features } = useFetchContent()
  console.log(features)
  return (
    <div className="py-8 mb-4">
      <Title
        title={'Next Level of Wallet Management'}
        text={
          'Manage multiple accounts with unique security settings and batch transaction capabilities. Say goodbye to multiple wallets and hello to convenience and flexibility.'
        }
      />
      <div className="p-8 bg-white rounded-md flex gap-8 flex-col sm:flex-row justify-between items-center ">
        <div>
          <span
            className="btn inline-block bg-purple-300 mb-4"
            aria-disabled="true"
          >
            Coming soon
          </span>
          <h3 className="text-2xl md:4xl font-medium mb-4 tracking-wide">
            Abstraction <br /> Account Wallet
          </h3>
          <p className="text-slate-600 mb-4">
            Manage multiple accounts with unique security settings and gas less
            transactions.
          </p>
          <NavLink to={'wallet'} className="btn">
            Launch App
          </NavLink>
        </div>
        <div>
          <img src={AbstractImg} alt="" className="w-full" />
        </div>
      </div>
      <div className="mgt-cards-grid grid-cols-12 gap-4 mt-4">
        {features.map((item) => {
          return (
            <Suspense key={item.id} fallback={<div>Loading...</div>}>
              <MgtCard key={item.id} {...item} />
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}
export default Management
