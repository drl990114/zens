import * as Ariakit from '@ariakit/react';
import { darken } from '../Theme';
import styled from 'styled-components';

export const MenuItem = styled(Ariakit.MenuItem)`
  display: flex;
  cursor: default;
  align-items: center;
  border-radius: ${(props) => props.theme.smallBorderRadius};
  padding: ${(props) => props.theme.spaceXs};
  outline: none !important;

  &__checkicon {
    width: 14px;
    font-weight: bold;
    line-height: 14px;
  }

  &[aria-disabled='true'] {
    opacity: 0.25;
  }

  &[data-active-item] {
    color: hsl(204 20% 100%);
    background-color: ${(props) => props.theme.contextMenuBgColorHover};
  }

  &:active,
  &[data-active] {
    background-color: ${(props) => darken(props.theme.contextMenuBgColorHover, 0.2)};
  }
`;

export const MenuWrapper = styled(Ariakit.Menu)`
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

  .menu-label {
    flex: 1 1 0%;
  }
`

