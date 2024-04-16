import type { IStyledComponent } from 'styled-components';
import styled from 'styled-components';

import type { ButtonProps as AkButtonProps } from '@ariakit/react';
import { Button as AkButton } from '@ariakit/react';
import { darken } from '../Theme';

type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps extends AkButtonProps {
  btnType?: 'primary';
  size?: ButtonSize;
}

const sizeSpaceMap: Record<
  ButtonSize,
  {
    paddingHorizontal: string;
    paddingVertical: string;
  }
> = {
  small: {
    paddingHorizontal: 'spaceXs',
    paddingVertical: 'spaceXs',
  },
  medium: {
    paddingHorizontal: 'spaceL',
    paddingVertical: 'spaceSm',
  },
  large: {
    paddingHorizontal: 'spaceXl',
    paddingVertical: 'spaceXl',
  },
};

const Button: IStyledComponent<'web', ButtonProps> = styled(AkButton).attrs<ButtonProps>(
  (props) => ({
    ...props,
  }),
).withConfig({
  shouldForwardProp: (propName: string) => propName !== 'btnType' && propName !== 'size',
})`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  white-space: nowrap;
  border-radius: ${(props) => props.theme.smallBorderRadius};
  border: 1px solid
    ${(props) => (props.btnType === 'primary' ? props.theme.accentColor : props.theme.borderColor)};
  background-color: ${(props) =>
    props.btnType === 'primary' ? props.theme.accentColor : props.theme.buttonBgColor};
  color: ${(props) =>
    props.btnType === 'primary' ? props.theme.white : props.theme.primaryFontColor};
  padding-left: ${(props) => props.theme[sizeSpaceMap[props.size!].paddingHorizontal]};
  padding-right: ${(props) => props.theme[sizeSpaceMap[props.size!].paddingHorizontal]};
  padding-top: ${(props) => props.theme[sizeSpaceMap[props.size!].paddingVertical]};
  padding-bottom: ${(props) => props.theme[sizeSpaceMap[props.size!].paddingVertical]};
  text-decoration-line: none;

  &:hover {
    background-color: ${(props) =>
      darken(
        props.btnType === 'primary' ? props.theme.accentColor : props.theme.buttonBgColor,
        0.1,
      )};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
  }

  &[aria-expanded='true'] {
    background-color: ${(props) =>
      darken(
        props.btnType === 'primary' ? props.theme.accentColor : props.theme.buttonBgColor,
        0.1,
      )};
  }

  &[data-focus-visible] {
    outline-style: solid;
  }
`;

Button.defaultProps = {
  size: 'medium',
}

export default Button;
