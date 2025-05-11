// @ts-nocheck
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CMSProvider } from './context/CMSContext';
import { DealsProvider } from './context/DealsContext';
import { DealsCMSProvider } from './context/DealsCMSContext';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <HelmetProvider>
    <BrowserRouter>
      <AuthProvider>
        <DealsProvider>
          <CMSProvider>
            <DealsCMSProvider>
              <Layout>
                <App />
              </Layout>
            </DealsCMSProvider>
          </CMSProvider>
        </DealsProvider>
      </AuthProvider>
    </BrowserRouter>
  </HelmetProvider>
);
