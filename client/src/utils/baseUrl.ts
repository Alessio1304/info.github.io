// Utility per gestire il base URL per GitHub Pages
export const BASE_URL = import.meta.env.VITE_BASE_PATH || '/';

export function getAssetPath(assetPath: string): string {
  // Rimuovi eventuali slash iniziali da assetPath
  const cleanPath = assetPath.startsWith('/') ? assetPath.substring(1) : assetPath;
  
  // Rimuovi eventuali slash finali dal BASE_URL
  const cleanBaseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  
  // Combina i percorsi correttamente
  return `${cleanBaseUrl}/${cleanPath}`;
}