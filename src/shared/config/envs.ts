const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || '';
};

const API_BASE_URL = getEnvVar('VITE_API_BASE_URL');

export { API_BASE_URL };
