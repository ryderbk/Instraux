import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";
import ThunderEffect from "@/components/ThunderEffect";
import GradientBlinds from "@/components/GradientBlinds";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="fixed inset-0 z-[-1] opacity-60 pointer-events-none">
        <GradientBlinds 
          gradientColors={['#0A0514', '#4C1D95', '#8B5CF6', '#4C1D95', '#0A0514']}
          blindCount={24}
          blindMinWidth={40}
          noise={0.1}
          spotlightRadius={0.5}
          spotlightOpacity={0.9}
          mouseDampening={0.08}
          mixBlendMode="normal"
        />
      </div>
      <ThunderEffect />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
