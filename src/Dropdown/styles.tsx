import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  .dropdown-icon {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
  }

  .dropdown-text {
    display: inline-flex;
    align-items: center;
  }
`;

export const DropdownArrow = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  font-size: 12px;
  transition: transform 0.3s;

  [aria-expanded='true'] & {
    transform: rotate(180deg);
  }
`;

export const DropdownOverlay = styled.div`
  position: relative;
  z-index: 1050;
`;
