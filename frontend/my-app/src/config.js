/**
 * App configuration. API base URL should be set in .env as REACT_APP_API_URL.
 */
const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export const config = {
  apiBaseUrl: API_BASE_URL,
  /** Build full URL for game/category images served by the backend. */
  imageUrl: (path) => path ? `${API_BASE_URL}/${path}` : ''};

export default config;
