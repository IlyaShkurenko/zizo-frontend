import React, { useState } from 'react';
import { useWordCount } from '../../model/useWordCount';
import { WordCountResult } from '../WordCountResult';
import { Container, Input, Label } from './style';
import { sharedUIComponents } from '@/shared/ui/index';
import { ButtonContainer } from '@/shared/ui/components';

const { Button } = sharedUIComponents;

export const WordCountForm = () => {
  const [text, setText] = useState('');
  const { countWords, result, isLoading, error } = useWordCount();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await countWords(text);
  };

  return (
    <Container>
      <Label htmlFor="input-text">Input Text</Label>
      <Input id="input-text" onChange={e => setText(e.target.value)} value={text} />
      <Label htmlFor="results">Results</Label>
      {error ? <p>Error: {error}</p> : null}
      {isLoading ? <p>Loading</p> : null}
      <WordCountResult result={result} />
      <ButtonContainer align="right">
        <Button onClick={handleSubmit}>Submit</Button>
      </ButtonContainer>
    </Container>
  );
};
