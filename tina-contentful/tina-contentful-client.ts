import Cookies from 'js-cookie'
import popupWindow from './popupWindow'

export const CONTENTFUL_AUTH_KEY = 'contentful_auth_key'

export interface TinaContentfulClientOptions {
  clientId: string
}

export class TinaContentfulClient {
  clientId: string
  constructor({ clientId }: TinaContentfulClientOptions) {
    this.clientId = clientId
  }

  authenticate() {
    const redirect_uri = 'https://localhost:3000/contentful/authorizing'
    const url = `https://be.contentful.com/oauth/authorize?response_type=token&client_id=${this.clientId}&redirect_uri=${redirect_uri}&scope=content_management_manage`

    let authTab: Window | undefined
    // add an event listener to the window which will look for changes in localStorage, when we detect that change
    // we can set a cookie and close the auth window
    window.addEventListener('storage', (e: StorageEvent) => {
      if (e.key == CONTENTFUL_AUTH_KEY) {
        console.log('WE SET THEM COOK')
        Cookies.set(CONTENTFUL_AUTH_KEY, e.newValue, { sameSite: 'strict ' })
        authTab.close()
      }
    })

    authTab = popupWindow(url, '_blank', window, 1000, 700)
  }

  isAuthenticated() {}
}
