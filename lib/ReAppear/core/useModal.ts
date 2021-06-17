import { useCallback } from 'react'
import { AppearSend, OptionsModal } from './types'
import { useReAppearContext } from './useReAppearContext'

export const useModal = () => {
  const { modals, setModalsList } = useReAppearContext()

  const sendModal = useCallback(
    (options: AppearSend<OptionsModal>) => {
      if (!modals?.[options.name]) return console.log('modal inexistente')
      setModalsList((prevList) => [...prevList, { ...options, id: `modal-${Math.floor(Math.random() * 999)}` }])
    },
    [modals, setModalsList]
  )

  return { sendModal }
}
