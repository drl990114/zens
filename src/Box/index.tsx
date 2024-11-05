import React, { forwardRef, memo } from 'react'

export interface BoxProps extends BaseComponentProps {
  ref?: React.Ref<any>
}

export const Box = memo(forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <div ref={ref} {...props} />
})
)
