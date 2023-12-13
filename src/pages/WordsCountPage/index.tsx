import React from 'react';
import { WordCountForm } from '@/features/wordsCount/ui/WordCountForm';
import { CenteredWrapper } from '@/pages/WordsCountPage/style';

export const WordsCountPage = () => (
  <CenteredWrapper>
    <WordCountForm />
  </CenteredWrapper>
);
