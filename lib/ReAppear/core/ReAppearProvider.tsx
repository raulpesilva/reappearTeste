import React, { useState } from 'react'
import { ReAppearProviderProps, AppearProps, OptionsModal, OptionsToast, OptionsPopup } from './types'
import { ReAppearContext } from './ReAppearContext'
import { ModalContainer, ToastContainer, PopupContainer } from '../web/components'

export const ReAppearProvider = ({ children, modals = {}, toasts = {}, popups = {} }: ReAppearProviderProps) => {
  const [modalsList, setModalsList] = useState<AppearProps<OptionsModal>[]>([])
  const [toastsList, setToastsList] = useState<AppearProps<OptionsToast>[]>([])
  const [popupsList, setPopupsList] = useState<AppearProps<OptionsPopup>[]>([])
  return (
    <ReAppearContext.Provider value={{ modals, toasts, popups, setModalsList, setPopupsList, setToastsList }}>
      {children}
      {!!toastsList.length && <ToastContainer toasts={toasts} toastsList={toastsList} setToastsList={setToastsList} />}
      {!!popupsList.length && <PopupContainer popups={popups} popupsList={popupsList} setPopupsList={setPopupsList} />}
      {!!modalsList.length && <ModalContainer modals={modals} modalsList={modalsList} setModalsList={setModalsList} />}
    </ReAppearContext.Provider>
  )
}
