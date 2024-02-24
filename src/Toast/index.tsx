import { memo, useContext } from 'react'
import { ToastBar, Toaster, toast } from 'react-hot-toast'
import styled, { ThemeContext } from 'styled-components'

export { toast } from 'react-hot-toast'

export type Variant = 'default' | 'error' | 'warning' | 'info' | 'success'

const ToastIcon = styled.div`
  padding-top: ${({ theme }) => theme?.spaceXs};
`

const ToastDismiss = styled.div`
  padding: ${({ theme }) => theme?.spaceXs} ${({ theme }) => theme?.spaceSm};
  border-radius: ${({ theme }) => theme?.smallBorderRadius};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme?.white};
    background: ${({ theme }) => theme?.accentColor};
  }
`

export const Notifications = memo(() => {
  const context = useContext(ThemeContext)

  return (
    <Toaster
      toastOptions={{
        className: 'mf-toast',
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          border: `1px solid ${context?.borderColor}`,
          borderRadius: context?.smallBorderRadius,
          color: context?.primaryFontColor,
          background: context?.bgColor,
        },
        duration: 5000,
        position: 'bottom-center',
        custom: {},
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              <ToastIcon>{icon}</ToastIcon>
              {message}
              {t.type !== 'loading' && (
                <ToastDismiss className="mf-toast__dismiss" onClick={() => toast.dismiss(t.id)}>
                  x
                </ToastDismiss>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
})
