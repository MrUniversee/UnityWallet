import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: 'm98p92hh6brc',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})
export const useFetchContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [features, setFeatures] = useState([])
  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'management',
      })

      const data = response.items.map((item) => {
        const { id } = item.sys
        const { title, desc, image } = item.fields
        const { url } = image.fields.file
        return { id, title, desc, url }
      })
      console.log(data)
      setFeatures(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { features, isLoading }
}
