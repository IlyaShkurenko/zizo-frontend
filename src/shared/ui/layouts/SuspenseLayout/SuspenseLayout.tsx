import React, { FunctionComponent, PropsWithChildren, Suspense } from 'react';
import { StyledContainer, StyledRow } from './SuspenseLayout.style';

export const SuspenseLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <StyledContainer>
          <StyledRow>Loading...</StyledRow>
        </StyledContainer>
      }
    >
      {children}
    </Suspense>
  );
};
