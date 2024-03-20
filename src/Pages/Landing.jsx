import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Management from '../Components/Management'
import Footer from '../Components/Footer'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const spaceId = 'm98p92hh6brc'
const environmentId = 'master'
const accessToken = import.meta.env.VITE_API_KEY
const url = 'https://cdn.contentful.com/spaces'

const searchMgtQuery = () => {
  return {
    queryKey: ['img'],
    queryFn: async () => {
      const response = await axios(
        `${url}/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=management`
      )

      return response.data
    },
  }
}

const Landing = () => {
  const { data } = useQuery(searchMgtQuery())
  if (!data) {
    return (
      <div className="loading border-green-500 border-t-gray-400 mt-4"></div>
    )
  }
  console.log(data)
  // const response = data.slice(0, 3)
  // const mgtData = response.map((item) => {
  //   const { id } = item.sys
  //   const { title, text, img } = item.fields
  //   const image = img.map((item) => {
  //     const { url } = item.fields.file
  //     return url
  //   })
  //   return { id, title, text, img }
  // })

  return (
    <>
      <Hero />
      <Features />
      <Management />
      <Footer />
    </>
  )
}
export default Landing
