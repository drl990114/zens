import React from 'react'

export interface BoxProps extends BaseComponentProps {
  ref?: React.Ref<any>
}

export const Box = (props: BoxProps) => {
  return <div {...props} />
}
