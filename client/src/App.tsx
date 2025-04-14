import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import { BASE_URL } from "./utils/baseUrl";

// Importazioni differite dei componenti delle pagine
const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/not-found"));

export default function App() {
  // Imposta il base path per il router
  const basePath = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Caricamento...</div>}>
      <div className="min-h-screen flex flex-col">
        <Switch base={basePath}>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Suspense>
  );
}