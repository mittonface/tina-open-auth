import React from 'react'

export interface TinaContentfulEditingProps {
  editMode: boolean
  enterEditMode: () => void
  exitEditMode: () => void
}

export const TinaContentfulEditingContext = React.createContext<TinaContentfulEditingProps | null>(
  null
)
