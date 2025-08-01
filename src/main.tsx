import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './i18n'; // Importing i18n configuration  for translations
import './index.css'; // Importing global styles
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/QueryClient';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
