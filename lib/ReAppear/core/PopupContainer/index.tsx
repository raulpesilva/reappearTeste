import React from 'react'
import { AppearList, AppearProps, OptionsPopup, popupProps, SetList } from '../types'

interface PopupContainerProps {
  popups: AppearList<popupProps>
  setPopupsList: SetList<OptionsPopup>
  popupsList: AppearProps<OptionsPopup>[]
}

export const PopupContainer = ({ popups, setPopupsList, popupsList }: PopupContainerProps) => {
  return (
    <>
      {popupsList.map(({ name, id, ...rest }) => {
        const Popup = popups[name].component
        const config = popups[name].config
        const handleClose = () => setPopupsList((prev) => prev.filter(({ id: modalId }) => modalId !== id))
        return <Popup key={id} close={handleClose} {...rest} config={config} />
      })}
    </>
  )
}
