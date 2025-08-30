import { Input } from 'zens';
import styled from 'styled-components';

const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
`;

const SizeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.primaryFontColor};
  margin-bottom: 4px;
`;

export default () => {
  const handlePressEnter = () => {
    alert('You pressed enter!');
  };

  return (
    <DemoContainer>
      <SizeGroup>
        <Label>Small Size:</Label>
        <Input 
          size="small" 
          placeholder="Small input" 
          onPressEnter={handlePressEnter}
        />
      </SizeGroup>

      <SizeGroup>
        <Label>Medium Size (default):</Label>
        <Input 
          placeholder="Medium input" 
          onPressEnter={handlePressEnter}
        />
      </SizeGroup>

      <SizeGroup>
        <Label>Large Size:</Label>
        <Input 
          size="large" 
          placeholder="Large input" 
          onPressEnter={handlePressEnter}
        />
      </SizeGroup>

      <SizeGroup>
        <Label>Disabled Input:</Label>
        <Input 
          placeholder="Disabled input" 
          disabled
        />
      </SizeGroup>

      <SizeGroup>
        <Label>Read-only Input:</Label>
        <Input 
          placeholder="Read-only input" 
          readOnly
          defaultValue="Read-only value"
        />
      </SizeGroup>

      <SizeGroup>
        <Label>Error Input:</Label>
        <Input 
          placeholder="Error input" 
          data-error="true"
        />
      </SizeGroup>
    </DemoContainer>
  );
};
