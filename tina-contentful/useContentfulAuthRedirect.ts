import { useEffect } from 'react'
import { CONTENTFUL_AUTH_KEY } from './tina-contentful-client'

export const useContentfulAuthReadirect = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash)
    console.log(urlParams.toString())

    const code = urlParams.get('#access_token')
    localStorage[CONTENTFUL_AUTH_KEY] = code
  }, [])
}
