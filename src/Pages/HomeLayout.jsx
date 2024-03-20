import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <>
      <Navbar />
      <div className="w-4/5 max-w-5xl mx-auto">
        {isPageLoading ? <h2>Loading...</h2> : <Outlet />}
      </div>
    </>
  )
}
export default HomeLayout
