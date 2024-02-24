import { Menu as AkMenu } from '@ariakit/react'
import { darken } from '@markflowy/theme'
import type { IStyledComponent } from 'styled-components';
import styled from 'styled-components'

export const MenuWrapper: IStyledComponent<'web', typeof AkMenu> = styled(AkMenu)`
  position: relative;
  display: flex;
  min-width: 130px;
  flex-direction: column;
  overscroll-behavior: contain;
  border-radius: ${(props) => props.theme.smallBorderRadius};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.contextMenuBgColor};
  padding: ${(props) => props.theme.spaceXs};
  color: ${(props) => props.theme.primaryFontColor};
  font-size: ${(props) => props.theme.fontXs};
  outline: none;
  overflow: visible;

  .separator {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    height: 0px;
    width: 100%;
    border-top-width: 1px;
    border-color: ${(props) => props.theme.borderColor};
  }

  .menu-item {
    display: flex;
    cursor: default;
    align-items: center;
    border-radius: ${(props) => props.theme.smallBorderRadius};
    padding: ${(props) => props.theme.spaceXs};
    outline: none !important;

    &__checkicon {
      width: 14px;
      line-height: 14px;
      font-weight: bold;
    }
  }

  .menu-item[aria-disabled='true'] {
    opacity: 0.25;
  }

  .menu-item[data-active-item] {
    background-color: ${(props) => props.theme.blue};
    color: hsl(204 20% 100%);
  }

  .menu-item:active,
  .menu-item[data-active] {
    background-color: ${(props) => darken(props.theme.blue, 0.2)};
  }

  .menu-label {
    flex: 1 1 0%;
  }
`
