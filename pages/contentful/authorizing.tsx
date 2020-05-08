import { useContentfulAuthReadirect } from '../../tina-contentful/useContentfulAuthRedirect'

export default function Authorizing() {
  useContentfulAuthReadirect()
  return <h2>Authorizing with Contentful, Please wait...</h2>
}
