import React, { FunctionComponent } from 'react';
import { ResultsContainer } from '@/features/wordsCount/ui/WordCountResult/style';

type WordCountResultProps = {
  result: { [wordType: string]: number } | null;
};

export const WordCountResult: FunctionComponent<WordCountResultProps> = ({ result }) => {
  return (
    <ResultsContainer>
      {!result
        ? 'No results to display.'
        : Object.entries(result).map(([wordType, count]) => (
            <p key={wordType}>
              {wordType}: {count}
            </p>
          ))}
    </ResultsContainer>
  );
};
