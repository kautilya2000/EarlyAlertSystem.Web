const env = import.meta.env;

export const environment = {
  production: env.PROD || false,
  BASE_API: env.VITE_BASE_URL,
};
