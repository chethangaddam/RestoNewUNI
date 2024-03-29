// ApiDataContext.js
import {createContext, useContext, useState, useEffect} from 'react'

const ApiDataContext = createContext()

export function ApiDataProvider({children}) {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
        )

        if (!response.ok) {
          throw new Error('Failed to fetch API data')
        }

        const data = await response.json()
        setApiData(data)
      } catch (error) {
        console.error('Error fetching API data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <ApiDataContext.Provider value={apiData}>
      {children}
    </ApiDataContext.Provider>
  )
}

export const useApiDataContext = () => useContext(ApiDataContext)
