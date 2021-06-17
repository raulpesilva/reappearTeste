import { useContext } from 'react'
import { ReAppearContext } from './ReAppearContext'

export const useReAppearContext = () => {
  const reAppear = useContext(ReAppearContext)

  if (reAppear === undefined) {
    throw new Error('não foi possível achar o objeto de reAppear. seu componente está dentro de um reAppear provider?')
  }
  return reAppear
}
