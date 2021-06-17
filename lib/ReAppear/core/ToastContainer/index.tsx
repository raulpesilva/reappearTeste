import React from 'react'
import { AppearList, AppearProps, OptionsToast, SetList, ToastProps } from '../types'

interface ToastContainerProps {
  toasts: AppearList<ToastProps>
  setToastsList: SetList<OptionsToast>
  toastsList: AppearProps<OptionsToast>[]
}

export const ToastContainer = ({ toasts, toastsList, setToastsList }: ToastContainerProps) => {
  const Fragment = ({ children }: { children: React.ReactNode }) => <>{children}</>
  const Wrapper = toasts?.Container?.component ?? Fragment
  const WrapperConfig = toasts?.Container?.config ?? {}
  return (
    <Wrapper {...WrapperConfig}>
      {toastsList.map(({ name, id, ...rest }) => {
        console.log('chamou', name)

        const Toast = toasts[name].component
        const config = toasts[name].config
        const handleClose = () => setToastsList((prev) => prev.filter(({ id: toastId }) => toastId !== id))
        return <Toast key={id} close={handleClose} {...rest} config={config} />
      })}
    </Wrapper>
  )
}
