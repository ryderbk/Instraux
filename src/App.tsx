import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import GradientBlinds from "@/components/GradientBlinds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="fixed inset-0 pointer-events-none -z-[5] opacity-60">
        <GradientBlinds
          gradientColors={['#0f0524', '#2d0f5a', '#6d28d9', '#8b5cf6']}
          angle={30}
          noise={0.08}
          blindCount={20}
          blindMinWidth={40}
          spotlightRadius={0.9}
          spotlightSoftness={1.1}
          spotlightOpacity={0.7}
          mouseDampening={0.1}
          distortAmount={1}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
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

