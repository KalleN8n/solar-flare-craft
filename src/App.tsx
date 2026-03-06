import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DataIntelligence from "./pages/DataIntelligence";
import Biostatistics from "./pages/Biostatistics";
import DataManagement from "./pages/DataManagement";
import HEOR from "./pages/HEOR";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import WhyChooseUs from "./pages/WhyChooseUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/data-intelligence" element={<DataIntelligence />} />
          <Route path="/services/biostatistics" element={<Biostatistics />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/heor" element={<HEOR />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
