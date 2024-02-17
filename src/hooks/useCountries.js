import { useState, useEffect } from 'react'

export function useCountries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        setCountries(data)
      } finally {
        setLoading(false)
      }
    }
    if (!countries.length) {
      fetchData()
    }
  }, [countries])

  return { countries, loading }
}
