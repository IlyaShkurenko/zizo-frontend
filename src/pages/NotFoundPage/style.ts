import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled.div`
  background-color: cornsilk;
  margin-top: 50px;
  padding: 20px;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  color: white;
  font-size: 15px;
  margin: 0;
`;

export { StyledContainer, StyledRow, StyledText, StyledCard };
