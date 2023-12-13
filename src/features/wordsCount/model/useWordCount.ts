import { useState } from 'react';
import { calculateWords } from '@/features/wordsCount/api';

export const useWordCount = () => {
  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const countWords = async (text: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await calculateWords(text);
      console.log('response', response);
      setResult(response);
    } catch (e) {
      console.log('error', e);
      setError('Failed to count words');
    } finally {
      setIsLoading(false);
    }
  };

  return { countWords, result, isLoading, error };
};
