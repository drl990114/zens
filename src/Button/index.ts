import type { IStyledComponent } from 'styled-components';
import styled, { css } from 'styled-components';

import type { ButtonProps as AkButtonProps } from '@ariakit/react';
import { Button as AkButton } from '@ariakit/react';

import { darken } from '../Theme';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link';
type ButtonShape = 'default' | 'rect';

export interface ButtonProps extends AkButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  btnType?: ButtonType;

  /**
   * 按钮尺寸
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * 按钮形状
   * @default 'default'
   */
  shape?: ButtonShape;

  /**
   * 是否为危险按钮
   * @default false
   */
  danger?: boolean;

  /**
   * 是否为幽灵按钮（背景透明）
   * @default false
   */
  ghost?: boolean;

  /**
   * 是否为块级元素（宽度撑满父元素）
   * @default false
   */
  block?: boolean;
}

const sizeSpaceMap: Record<
  ButtonSize,
  {
    paddingHorizontal: string;
    paddingVertical: string;
    fontSize: string;
    borderRadius: string;
  }
> = {
  small: {
    paddingHorizontal: 'spaceXs',
    paddingVertical: 'spaceXs',
    fontSize: 'fontXs',
    borderRadius: 'smallBorderRadius',
  },
  medium: {
    paddingHorizontal: 'spaceBase',
    paddingVertical: 'spaceSm',
    fontSize: 'fontXs',
    borderRadius: 'smallBorderRadius',
  },
  large: {
    paddingHorizontal: 'spaceL',
    paddingVertical: 'spaceBase',
    fontSize: 'fontBase',
    borderRadius: 'smallBorderRadius',
  },
};

const defaultProps: ButtonProps = {
  size: 'medium',
  btnType: 'default',
  shape: 'default',
  danger: false,
  ghost: false,
  block: false,
};

// 获取按钮类型对应的背景色和文字颜色
const getButtonTypeStyles = (props: ButtonProps & { theme: any }) => {
  const { btnType, danger, ghost, theme } = props;
  const btnTypeValue: ButtonType = (btnType as ButtonType) || 'default';
  const dangerValue: boolean = danger || false;
  const ghostValue: boolean = ghost || false;

  // 危险按钮样式
  if (dangerValue) {
    return css`
      border-color: ${theme.dangerColor};
      background-color: ${ghostValue ? 'transparent' : theme.dangerColor};
      color: ${ghostValue ? theme.dangerColor : theme.white};

      &:hover, &:focus {
        background-color: ${ghostValue ? 'rgba(220, 38, 38, 0.1)' : darken(theme.dangerColor, 0.1)};
        border-color: ${darken(theme.dangerColor, 0.1)};
      }
    `;
  }

  // 根据按钮类型返回不同样式
  switch (btnType) {
    case 'primary':
      return css`
        border-color: ${theme.accentColor};
        background-color: ${ghost ? 'transparent' : theme.accentColor};
        color: ${ghost ? theme.accentColor : theme.white};

        &:hover, &:focus {
          background-color: ${ghost ? 'rgba(0, 122, 204, 0.1)' : darken(theme.accentColor, 0.1)};
          border-color: ${darken(theme.accentColor, 0.1)};
        }
      `;
    case 'dashed':
      return css`
        border-style: dashed;
        border-color: ${theme.borderColor};
        background-color: ${ghost ? 'transparent' : theme.buttonBgColor};
        color: ${theme.primaryFontColor};

        &:hover, &:focus {
          border-color: ${theme.accentColor};
          color: ${theme.accentColor};
        }
      `;
    case 'text':
      return css`
        border-color: transparent;
        background-color: transparent;
        color: ${theme.primaryFontColor};

        &:hover, &:focus {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `;
    case 'link':
      return css`
        border-color: transparent;
        background-color: transparent;
        color: ${theme.accentColor};

        &:hover, &:focus {
          color: ${darken(theme.accentColor, 0.1)};
          text-decoration: underline;
        }
      `;
    default: // default 类型
      return css`
        border-color: ${theme.borderColor};
        background-color: ${ghost ? 'transparent' : theme.buttonBgColor};
        color: ${theme.primaryFontColor};

        &:hover, &:focus {
          border-color: ${theme.accentColor};
          color: ${theme.accentColor};
        }
      `;
  }
};

// 获取按钮形状对应的样式
const getButtonShapeStyles = (props: ButtonProps & { theme: any }) => {
  const { shape, size, theme } = props;
  // 确保size有一个默认值，避免TypeScript错误
  const sizeKey: ButtonSize = (size as ButtonSize) || 'medium';
  const borderRadius = theme[sizeSpaceMap[sizeKey].borderRadius];

  switch (shape) {
    case 'rect':
      return css`
        border-radius: none;
      `;
    default:
      return css`
        border-radius: ${borderRadius};
      `;
  }
};

const Button: IStyledComponent<'web', ButtonProps> = styled(AkButton)
  .attrs<ButtonProps>((props) => ({
    ...defaultProps,
    ...props,
  }))
  .withConfig({
    shouldForwardProp: (propName: string) =>
      !['btnType', 'size', 'shape', 'danger', 'ghost', 'block'].includes(propName),
  })`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  white-space: nowrap;
  font-weight: 400;
  font-size: ${(props) => {
    const sizeKey = props.size as ButtonSize || 'medium';
    return props.theme[sizeSpaceMap[sizeKey].fontSize];
  }};
  padding-left: ${(props) => {
    const sizeKey = props.size as ButtonSize || 'medium';
    return props.theme[sizeSpaceMap[sizeKey].paddingHorizontal];
  }};
  padding-right: ${(props) => {
    const sizeKey = props.size as ButtonSize || 'medium';
    return props.theme[sizeSpaceMap[sizeKey].paddingHorizontal];
  }};
  padding-top: ${(props) => {
    const sizeKey = props.size as ButtonSize || 'medium';
    return props.theme[sizeSpaceMap[sizeKey].paddingVertical];
  }};
  padding-bottom: ${(props) => {
    const sizeKey = props.size as ButtonSize || 'medium';
    return props.theme[sizeSpaceMap[sizeKey].paddingVertical];
  }};
  text-decoration-line: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
  width: ${(props) => (props.block ? '100%' : 'auto')};
  cursor: pointer;

  ${getButtonTypeStyles}
  ${getButtonShapeStyles}

  &:active {
    transform: translateY(1px);
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
    box-shadow: none;
  }

  &[aria-expanded='true'] {
    background-color: ${(props) => {
      const btnTypeValue = props.btnType as ButtonType || 'default';
      return darken(
        btnTypeValue === 'primary' ? props.theme.accentColor : props.theme.buttonBgColor,
        0.1,
      );
    }};
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => {
      const btnTypeValue = props.btnType as ButtonType || 'default';
      const dangerValue = props.danger as boolean || false;
      return btnTypeValue === 'primary'
        ? 'rgba(0, 122, 204, 0.2)'
        : dangerValue
          ? 'rgba(220, 38, 38, 0.2)'
          : 'rgba(0, 0, 0, 0.1)';
    }};
  }
`;

export default Button;
