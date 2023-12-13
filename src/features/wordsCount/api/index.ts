import ApiService from '@/shared/api/ApiService';

const calculateWords = async (text: string): Promise<Record<string, number>> => {
  const response = await ApiService.post<Record<string, number>>('/countWords', { text });
  return response;
};

export { calculateWords };
