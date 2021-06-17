import React from 'react'
import { AppearList, AppearProps, ModalProps, OptionsModal, SetList } from '../types'
import { mergeObject } from '../utils'

interface ModalContainerProps {
  modals: AppearList<ModalProps>
  setModalsList: SetList<OptionsModal>
  modalsList: AppearProps<OptionsModal>[]
}

export const ModalContainer = ({ modals, modalsList, setModalsList }: ModalContainerProps) => {
  return (
    <>
      {modalsList.map(({ name, id, ...rest }) => {
        const Modal = modals[name].component
        const config = mergeObject(modals[name].config, rest.config)
        // const type = rest?.type ?? 'Default'

        const handleClose = () => {
          setModalsList((prev) => prev.filter(({ id: modalId }) => modalId !== id))
        }
        return <Modal key={id} {...rest} close={handleClose} config={config} />
      })}
    </>
  )
}
