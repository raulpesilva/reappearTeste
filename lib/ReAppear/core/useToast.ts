import { useCallback } from 'react'
import { AppearSend, OptionsToast } from './types'
import { useReAppearContext } from './useReAppearContext'

export const useToast = () => {
  const { toasts, setToastsList } = useReAppearContext()

  const sendToast = useCallback(
    (options: AppearSend<OptionsToast>) => {
      if (!toasts?.[options.name]) return console.log('toast inexistente')
      setToastsList((prevList) => [...prevList, { ...options, id: `toast-${Math.floor(Math.random() * 999)}` }])
    },
    [toasts, setToastsList]
  )

  return { sendToast }
}
