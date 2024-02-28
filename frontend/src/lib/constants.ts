export const BACKEND_API = import.meta.env.VITE_BACKEND_API || "";

export const DEFAULT_API_PAGE =
  Number(import.meta.env.VITE_DEFAULT_API_PAGE) || 1;
export const DEFAULT_API_LIMIT =
  Number(import.meta.env.VITE_DEFAULT_API_LIMIT) || 0;

export const GITHUB_REPO_URL = import.meta.env.VITE_GITHUB_REPO_URL || "";
