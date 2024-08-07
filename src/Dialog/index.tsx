import type { DialogProps as AkDialogProps } from '@ariakit/react'
import { DialogDismiss, Dialog as AkDialog } from '@ariakit/react'
import React from 'react'
import { DialogWrapper, DialogBackdrop } from './styles'
import Space from '../Space'
import clsx from 'clsx'

export interface DialogProps extends AkDialogProps {
  title?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  containerClass?: string
  width?: string
}

const Dialog = (props: DialogProps) => {
  const { title, footer, containerClass, children, width, ...rest } = props

  return (
    <AkDialog
      render={(dialogProps) => (
        <DialogBackdrop hidden={!rest.open}>
          <DialogWrapper {...dialogProps} width={width} />
        </DialogBackdrop>
      )}
      {...rest}
      backdrop={false}
    >
      {title ? (
        <div className="mf-dialog__heading">
          <div className="mf-dialog__heading__title">{title}</div>
          <DialogDismiss className="mf-dialog__dismiss" />
        </div>
      ) : null}
      <div className={clsx("mf-dialog__main", containerClass)}>{children}</div>
      {footer ? <Space className="mf-dialog__footer">{footer}</Space> : null}
    </AkDialog>
  )
}

export default Dialog
