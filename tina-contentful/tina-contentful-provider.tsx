import { TinaContentfulEditingContext } from './tina-contentful-editing-context'
import { ContentfulAuthModal } from './contentful-auth-modal'
import React from 'react'

interface ProviderProps {
  children: any
  editMode: boolean
  enterEditMode: () => void
  exitEditMode: () => void
}
export const TinaContentfulProvider = ({
  children,
  editMode,
  enterEditMode,
  exitEditMode,
}: ProviderProps) => {
  let showAuth = false
  const beginAuth = async () => {
    showAuth = true
  }

  return (
    <TinaContentfulEditingContext.Provider
      value={{ editMode, enterEditMode: beginAuth, exitEditMode }}
    >
      <ContentfulAuthModal />
      {children}
    </TinaContentfulEditingContext.Provider>
  )
}
