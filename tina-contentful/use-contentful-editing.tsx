import React from 'react'

import { TinaContentfulEditingContext } from './tina-contentful-editing-context'

export function useContentfulEditing() {
  return React.useContext(TinaContentfulEditingContext)
}
