import React, { useCallback, useMemo } from 'react'
import { ContainerProps } from '../../../../core/types'
import { mergeObject } from '../../../../core/utils'
import s from './styles.module.css'

interface ContainerToastProps extends ContainerProps<{ title: string }> {
  children: React.ReactNode
}

export const ContainerToast = ({ contentStyle, children, config }: ContainerToastProps) => {
  const mergedContent = useMemo(() => mergeObject(contentStyle, config?.contentStyle), [config, contentStyle])

  const handleStopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  return (
    <div className={s.content} style={mergedContent} onClick={handleStopPropagation}>
      {children}
    </div>
  )
}
