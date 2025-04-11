import { useState, useEffect, useCallback } from "react";

// Special hook to handle hash-based routing for GitHub Pages
export const useHashLocation = (): [string, (to: string) => void] => {
  const [loc, setLoc] = useState(() => window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    // Handle hash changes and update location
    const handleHashChange = () => {
      const newPath = window.location.hash.replace("#", "") || "/";
      setLoc(newPath);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigate by updating the hash
  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate];
};
