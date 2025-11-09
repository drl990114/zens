import styled from 'styled-components';

export const CommandDialogWrapper = styled.div.attrs<{ width?: string }>((props) => ({
  ...props,
}))`
  .mf-command-dialog__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }

  .mf-command-dialog__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    padding: 0;
  }

  .mf-command-dialog__dismiss {
    display: flex;
    padding: 6px;
    outline: none;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border-style: none;
    background-color: transparent;
    font-size: 1rem;
    color: ${(props) => props.theme.secondaryFontColor};
    background-color: ${(props) => props.theme.hoverColor};
    font-weight: 500;
    margin-right: 0.75rem;
    flex-shrink: 0;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.accentColor};
      color: ${(props) => props.theme.white};
    }
  }

  .mf-command-dialog__list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0.5rem 0;
  }
`;

export const CommandDialogBackdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  z-index: 50;
  overflow: auto;
  background-color: ${(props) => props.theme.dialogBackdropColor || 'rgba(0, 0, 0, 0.8)'};
`;

export const CommandInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 1rem;
  padding: 6px 12px;
  min-height: 40px;

  &::placeholder {
    color: ${(props) => props.theme.secondaryFontColor};
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const CommandList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.borderColor};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.secondaryFontColor};
  }
`;

export const CommandItem = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0.5rem;
  font-size: 0.875rem;
  outline: none;
  color: ${(props) => props.theme.primaryFontColor};
  transition: all 0.15s ease;

  &:hover,
  &[aria-selected='true'],
  &[data-active-item] {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.white};
  }

  &.mf-command-dialog__item--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .mf-command-dialog__item-content {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.75rem;
  }

  .mf-command-dialog__item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    font-size: 1rem;
  }

  .mf-command-dialog__item-text {
    flex: 1;
    min-width: 0;
  }

  .mf-command-dialog__item-label {
    font-weight: 500;
    line-height: 1.25;
  }

  .mf-command-dialog__item-description {
    font-size: 0.75rem;
    opacity: 0.8;
    line-height: 1.25;
    margin-top: 0.125rem;
  }

  .mf-command-dialog__item-shortcut {
    font-size: 0.75rem;
    opacity: 0.8;
    background-color: ${(props) => props.theme.tipsBgColor || 'rgba(255, 255, 255, 0.1)'};
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.borderColor};
    flex-shrink: 0;
  }

  &:hover .mf-command-dialog__item-shortcut,
  &[aria-selected='true'] .mf-command-dialog__item-shortcut,
  &[data-active-item] .mf-command-dialog__item-shortcut {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const CommandEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.secondaryFontColor};
  text-align: center;
`;

export const CommandGroup = styled.div`
  padding: 0.5rem 1rem 0.25rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(props) => props.theme.secondaryFontColor};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.5;
`;

export const CommandSeparator = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.borderColor};
  margin: 0.5rem 0.75rem;
`;
