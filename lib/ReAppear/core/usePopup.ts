import { useCallback } from 'react'
import { AppearSend, OptionsPopup } from './types'
import { useReAppearContext } from './useReAppearContext'

export const usePopup = () => {
  const { popups, setPopupsList } = useReAppearContext()

  const sendPopup = useCallback(
    (options: AppearSend<OptionsPopup>) => {
      if (!popups?.[options.name]) return console.log('modal inexistente')
      setPopupsList((prevList) => [...prevList, { ...options, id: `popup-${Math.floor(Math.random() * 999)}` }])
    },
    [popups, setPopupsList]
  )

  return { sendPopup }
}
