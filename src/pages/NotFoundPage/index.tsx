import React, { FunctionComponent } from 'react';
import { StyledCard, StyledContainer, StyledRow, StyledText } from '@/pages/NotFoundPage/style';

export const NotFoundPage: FunctionComponent = () => {
  return (
    <StyledContainer>
      <StyledCard>
        <StyledRow>
          <StyledText>Page not found</StyledText>
        </StyledRow>
      </StyledCard>
    </StyledContainer>
  );
};
