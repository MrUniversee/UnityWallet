import { FeaturesData } from '../data'
import FeaturesCard from './FeaturesCard'
import Title from './Title'

const Features = () => {
  return (
    <section className="features py-14 md:py-24 ">
      <div>
        <Title
          title={'Optimize your portfolio'}
          text={
            'Manage all your wallets in one place and stay informed with real-time performance analytics.'
          }
        />
        <div
          className="grid 
         gap-4 grid-cols-6 sm:grid-cols-12 "
        >
          {FeaturesData.map((item) => (
            <FeaturesCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features
