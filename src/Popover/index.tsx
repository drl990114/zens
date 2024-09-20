// @ts-nocheck
import type { PopoverProps as AkPopoverProps, PopoverProviderProps, PopoverStore } from '@ariakit/react';
import { PopoverDisclosure, PopoverProvider, usePopoverStore } from '@ariakit/react';
import { Box } from '../Box';
import { PopoverArrow, PopoverHeading, PopoverWrapper } from './styles';
import { useEffect } from 'react';

export type { PopoverStore } from '@ariakit/react';
export { usePopoverStore } from '@ariakit/react';

type PopoverOptions = Pick<PopoverProviderProps, 'placement' | 'open'> &
  Pick<AkPopoverProps, 'onClose'>;

interface PopoverProps extends BaseComponentProps, PopoverOptions {
  arrow?: boolean;
  title?: string;
  customContent?: React.ReactNode;
  toggleOnClick?: boolean;
  placement?: PopoverProviderProps['placement'];
  children?: BaseComponentProps['children'];
  onStoreChange?: (store: PopoverStore) => void;
}

const Popover: React.FC<PopoverProps> = (props) => {
  const {
    arrow = true,
    title,
    toggleOnClick = true,
    children,
    customContent,
    placement,
    onStoreChange,
    ...rest
  } = props;
  const store = usePopoverStore();

  useEffect(() => {
    if (onStoreChange) {
      onStoreChange(store)
    }
  }, [store, onStoreChange])

  return (
    <PopoverProvider store={store} placement={placement}>
      <PopoverDisclosure
        toggleOnClick={toggleOnClick}
        render={(p) => <Box style={{ display: 'inline-block' }} {...p} />}
      >
        {children}
      </PopoverDisclosure>
      {!customContent && !title ? null : (
        <PopoverWrapper render={(p) => <Box {...p} />} {...rest}>
          {arrow ? <PopoverArrow /> : null}
          {title ? <PopoverHeading>{title}</PopoverHeading> : null}
          {customContent}
        </PopoverWrapper>
      )}
    </PopoverProvider>
  );
};

export default Popover;
