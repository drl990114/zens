import { KeyboardEventHandler } from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`
  line-height: 22px;
  padding: 4px;
  border: 1px solid;
  color: ${(props) => props.theme.primaryFontColor};
  border-color: ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  border-radius: ${(props) => props.theme.smallBorderRadius};
  box-sizing: border-box;

  &:focus {
    outline: 2px solid ${(props) => props.theme.accentColor};
  }

  &[data-disabled='true'] {
    background-color: ${(props) => props.theme.tipsBgColor};
    cursor: not-allowed;
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  onPressEnter?: (e: KeyboardEvent) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { inputRef, onPressEnter, ...rest } = props;

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e.nativeEvent);
    }
    rest.onKeyDown?.(e);
  };

  return <InputComponent ref={inputRef} {...rest} onKeyDown={handleKeyDown} />;
};

export default Input;
