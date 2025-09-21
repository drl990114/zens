import styled from "styled-components";

interface ImageEmptyProps {
  emptyTip?: string;
}
export const ImageEmpty = (props: ImageEmptyProps) => {
  return (
    <Container>
      {props.emptyTip || "Empty source"}
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.errorTipColor};
  border: 1px solid ${props => props.theme.borderColor};
  font-size: 14px;
`
