// @ts-nocheck
import type { PopoverProps as AkPopoverProps, PopoverProviderProps } from '@ariakit/react';
import { PopoverDisclosure, PopoverProvider } from '@ariakit/react';
import { Box } from '../Box';
import { PopoverArrow, PopoverHeading, PopoverWrapper } from './styles';

type PopoverOptions = Pick<PopoverProviderProps, 'placement' | 'open'> &
  Pick<AkPopoverProps, 'onClose'>;

interface PopoverProps extends BaseComponentProps, PopoverOptions {
  arrow?: boolean;
  title?: string;
  customContent?: React.ReactNode;
  toggleOnClick?: boolean;
  placement?: PopoverProviderProps['placement'];
  children?: BaseComponentProps['children'];
}

const Popover: React.FC<PopoverProps> = (props) => {
  const {
    arrow = true,
    title,
    toggleOnClick = true,
    children,
    customContent,
    placement,
    ...rest
  } = props;

  return (
    <PopoverProvider placement={placement}>
      <PopoverDisclosure
        toggleOnClick={toggleOnClick}
        render={(p) => <Box style={{ display: 'inline-block' }} {...p} />}
      >
        {children}
      </PopoverDisclosure>
      <PopoverWrapper render={<Box />} {...rest}>
        {arrow ? (
          <PopoverArrow />
        ) : null}
        {title ? <PopoverHeading>{title}</PopoverHeading> : null}
        {customContent}
      </PopoverWrapper>
    </PopoverProvider>
  );
};

export default Popover;
