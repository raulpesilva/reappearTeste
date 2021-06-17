import React, { CSSProperties } from 'react'
import * as modalOptions from '../web/components/modals'
import * as toastOptions from '../web/components/modals'
import * as popupOptions from '../web/components/modals'

export type OptionsModal = keyof typeof modalOptions
export type OptionsToast = keyof typeof toastOptions
export type OptionsPopup = keyof typeof popupOptions

export type ReAppearName = string | number

type ComponentType = React.ElementType

type BaseProps = {
  name: ReAppearName
  component: ComponentType
}

interface ConfigProps {
  containerStyle?: CSSProperties
  contentStyle?: CSSProperties
  config?: { containerStyle?: CSSProperties; contentStyle?: CSSProperties; preventCancel?: boolean }
}

export interface AppearProps<T> extends ConfigProps, Pick<BaseProps, 'name'> {
  type?: T
  id: string
}

export interface AppearSend<T> extends Pick<BaseProps, 'name'>, ConfigProps {
  type?: T
  [key: string]: any
}

export type ContainerProps<P = {}> = P &
  ConfigProps & {
    close: () => void
  }

export interface ModalProps extends ConfigProps, Pick<BaseProps, 'component'> {
  type?: OptionsModal
}

export interface ToastProps extends ConfigProps, Pick<BaseProps, 'component'> {
  duration?: number
  type?: OptionsToast
}

export interface popupProps extends ConfigProps, Pick<BaseProps, 'component'> {
  type?: OptionsPopup
}

export type AppearList<T> = { [key: string]: T }
export type SetList<T> = React.Dispatch<React.SetStateAction<AppearProps<T>[]>>

export interface ReAppearProviderProps {
  children: React.ReactNode
  modals?: { [key: string]: ModalProps }
  toasts?: { [key: string]: ToastProps }
  popups?: { [key: string]: popupProps }
}

export interface ReAppearContextProps {
  modals?: { [key: string]: ModalProps }
  toasts?: { [key: string]: ToastProps }
  popups?: { [key: string]: popupProps }
  setModalsList: SetList<OptionsModal>
  setToastsList: SetList<OptionsToast>
  setPopupsList: SetList<OptionsPopup>
}
