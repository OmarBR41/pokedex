export const LIMIT_OPTIONS = [
  { label: "5", value: 5 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "100", value: 100 },
  { label: "200", value: 200 },
  { label: "500", value: 500 },
];

// environment variables
export const BACKEND_API = import.meta.env.VITE_BACKEND_API || "";

export const DEFAULT_API_PAGE =
  Number(import.meta.env.VITE_DEFAULT_API_PAGE) || 1;
export const DEFAULT_API_LIMIT =
  Number(import.meta.env.VITE_DEFAULT_API_LIMIT) || 0;

export const GITHUB_REPO_URL = import.meta.env.VITE_GITHUB_REPO_URL || "";
