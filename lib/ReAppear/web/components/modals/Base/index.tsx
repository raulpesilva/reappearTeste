import React, { useCallback, useMemo } from 'react'
import { ContainerProps } from '../../../../core/types'
import { mergeObject } from '../../../../core/utils'
import s from './styles.module.css'

interface BaseProps extends ContainerProps<{ title: string }> {
  children: React.ReactNode
}

export const BaseModal = ({ close, containerStyle, contentStyle, children, config }: BaseProps) => {
  const mergedContainer = useMemo(() => mergeObject(containerStyle && config?.containerStyle), [config, containerStyle])
  const mergedContent = useMemo(() => mergeObject(contentStyle, config?.contentStyle), [config, contentStyle])

  const handleStopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const handleClose = useCallback(() => {
    if (config?.preventCancel) return
    close()
  }, [close, config])

  return (
    <div className={s.container} style={mergedContainer} onClick={handleClose}>
      <div className={s.content} style={mergedContent} onClick={handleStopPropagation}>
        {children}
      </div>
    </div>
  )
}
