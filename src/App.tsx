import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import PortfolioPage from "./pages/PortfolioPage";
import NotFound from "./pages/NotFound";
import CursorEffect from "@/components/CursorEffect";
import ScrollEffect from "@/components/ScrollEffect";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = "none";
    return () => {
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CursorEffect />
        <ScrollEffect />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
